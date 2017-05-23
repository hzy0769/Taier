package com.dtstack.rdos.engine.entrance.service;

import java.util.Map;
import com.dtstack.rdos.common.util.PublicUtil;
import com.dtstack.rdos.engine.db.dao.RdosStreamActionLogDAO;
import com.dtstack.rdos.engine.db.dao.RdosStreamTaskDAO;
import com.dtstack.rdos.engine.db.dataobject.RdosStreamActionLog;
import com.dtstack.rdos.engine.entrance.enumeration.RdosActionLogStatus;
import com.dtstack.rdos.engine.entrance.enumeration.RequestStart;
import com.dtstack.rdos.engine.entrance.service.paramObject.ParamAction;
import com.dtstack.rdos.engine.entrance.zk.ZkDistributed;
import com.dtstack.rdos.engine.entrance.zk.data.BrokerDataNode;
import com.dtstack.rdos.engine.execution.base.JobClient;
import com.dtstack.rdos.engine.execution.base.enumeration.*;
import com.dtstack.rdos.engine.send.HttpSendClient;
import com.dtstack.rdos.engine.util.TaskIdUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 
 * Reason: TODO ADD REASON(可选)
 * Date: 2017年03月03日 下午1:25:18
 * Company: www.dtstack.com
 * @author sishu.yss
 *
 */
public class ActionServiceImpl{

    private static final Logger logger = LoggerFactory.getLogger(ActionServiceImpl.class);
	
	private ZkDistributed zkDistributed = ZkDistributed.getZkDistributed();

	private RdosStreamActionLogDAO rdosActionLogDAO = new RdosStreamActionLogDAO();

	private RdosStreamTaskDAO rdosStreamTaskDAO = new RdosStreamTaskDAO();
	
	public void start(Map<String,Object> params) throws Exception{

        String jobId = null;
        try {
			ParamAction paramAction = PublicUtil.mapToObject(params, ParamAction.class);
			jobId = paramAction.getTaskId();
            RdosStreamActionLog dbActionLog = rdosActionLogDAO.findActionLogById(paramAction.getActionLogId());
            if(dbActionLog.getStatus() == RdosActionLogStatus.SUCCESS.getStatus()){//已经提交过
                return;
            }

            String address = zkDistributed.getExcutionNode();
            if(paramAction.getRequestStart()==RequestStart.NODE.getStart()||zkDistributed.getLocalAddress().equals(address)){
                BrokerDataNode brokerDataNode = BrokerDataNode.initBrokerDataNode();
                String taskId = TaskIdUtil.getZkTaskId(paramAction.getComputeType(),paramAction.getEngineType(),paramAction.getTaskId());
                brokerDataNode.getMetas().put(taskId,RdosTaskStatus.UNSUBMIT.getStatus().byteValue());
                zkDistributed.updateSynchronizedBrokerData(zkDistributed.getLocalAddress(),brokerDataNode, false);
                zkDistributed.updateLocalMemTaskStatus(brokerDataNode);
                rdosActionLogDAO.updateActionStatus(paramAction.getActionLogId(), RdosActionLogStatus.SUCCESS.getStatus());
                new JobClient(paramAction.getSqlText(),paramAction.getTaskParams(),paramAction.getName(),
                        paramAction.getTaskId(), paramAction.getEngineTaskId(),
                        EJobType.getEJobType(paramAction.getTaskType()),
                        ComputeType.getComputeType(paramAction.getComputeType()),
                        EngineType.getEngineType(paramAction.getEngineType()),
                        Restoration.getRestoration(paramAction.getIsRestoration()),
                        paramAction.getActionLogId()
                ).submit();
            }else{
                paramAction.setRequestStart(RequestStart.NODE.getStart());
                HttpSendClient.actionStart(address, paramAction);
            }
        }catch (Throwable e){
            //提交失败,修改对应的提交jobid为提交失败
            logger.error("", e);
            if(jobId != null){
                rdosStreamTaskDAO.updateTaskStatus(jobId, RdosTaskStatus.SUBMITFAILD.getStatus());
            }
        }

	}
	
	public void stop(Map<String,Object> params) throws Exception{
		ParamAction paramAction = PublicUtil.mapToObject(params, ParamAction.class);
		int engineTypeVal = paramAction.getEngineType();
		EngineType engineType = EngineType.getEngineType(engineTypeVal);
		JobClient.stop(engineType, paramAction.getEngineTaskId());
		rdosActionLogDAO.updateActionStatus(paramAction.getActionLogId(), RdosActionLogStatus.UNSTART.getStatus());
	}

}
