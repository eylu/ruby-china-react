import { nodeList, topicList, topicDetails, topicReplies, nodeDetails } from '../config/api';
import fetchData from '../utils/fetch-data';

export const INIT_NODE_LIST = 'INIT_NODE_LIST';

export const GET_TOPIC_LIST = 'GET_TOPIC_LIST';

export const TOPIC_LOADING_STATUS = 'TOPIC_LOADING_STATUS';

export const SET_TOPIC_TYPE = 'SET_TOPIC_TYPE';

export const GET_TOPIC_DETAILS = 'GET_TOPIC_DETAILS';

export const GET_TOPIC_REPLIES = 'GET_TOPIC_REPLIES';

export const GET_NODE_DETAILS = 'GET_NODE_DETAILS';

/************** action 创建函数 ****************/

export function initNodeList(){
    return function(dispatch){
        fetchData(nodeList()).then((data)=>{
            dispatch({
                type: INIT_NODE_LIST,
                data: data.nodes,
            })
        });
    }
}

export function setTopicLoadingStatus(status){
    return {
        type: TOPIC_LOADING_STATUS,
        data: status,
    }
}

export function setTopicType(type){
    return {
        type: SET_TOPIC_TYPE,
        data: type,
    }
}


export function getTopicList(opt){
    return function(dispatch){
        dispatch(setTopicLoadingStatus(true))
        fetchData(topicList(opt)).then((data)=>{
            dispatch({
                type: GET_TOPIC_LIST,
                data: data.topics
            });
            dispatch(setTopicLoadingStatus(false))
        })
    }
}

export function getTopicReplies(id) {
    return function(dispatch){
        fetchData(topicReplies(id)).then((data)=>{
            dispatch({
                type: GET_TOPIC_REPLIES,
                data: data
            });
        })
    }
}

export function getTopicDetails(id) {
    return function(dispatch){
        fetchData(topicDetails(id)).then((data)=>{
            dispatch({
                type: GET_TOPIC_DETAILS,
                data: data
            });
        })
    }
}

export function getNodeDetails(id) {
    return function(dispatch){
        fetchData(nodeDetails(id)).then((data)=>{
            dispatch({
                type: GET_NODE_DETAILS,
                data: data
            });
        })
    }
}
