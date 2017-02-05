import {
    combineReducers
} from 'redux';
import {
    INIT_NODE_LIST,
    GET_TOPIC_LIST,
    TOPIC_LOADING_STATUS,
    SET_TOPIC_TYPE,
    GET_TOPIC_DETAILS,
    GET_TOPIC_REPLIES,
    GET_NODE_DETAILS,
} from '../actions/index';

import {
    nodeGroup,
} from '../utils/array.tool';

function nodeList(state = [], action) {
    switch (action.type) {
        case INIT_NODE_LIST:
            return [
                ...nodeGroup(action.data)
            ];
        default:
            return state;
    }
}

function topicList(state = [], action) {
    switch (action.type) {
        case GET_TOPIC_LIST:
            return action.data;
        default:
            return state;
    }
}

function topicDetails(state = {}, action){
    switch (action.type) {
        case GET_TOPIC_DETAILS:
            return action.data;
        default:
            return state;
    }
}

function topicReplyList(state = {}, action){
    switch (action.type){
        case GET_TOPIC_REPLIES:
            return action.data;
        default:
            return state;
    }
}

function topicLoading(state = true, action){
    switch (action.type) {
        case TOPIC_LOADING_STATUS:
            return action.data;
        default:
            return state;
    }
}

function setTopicType(state = 'last_actived', action){
    switch (action.type) {
        case SET_TOPIC_TYPE:
            return action.data;
        default:
            return state;
    }
}

function nodeDetails(state = {}, action){
    switch (action.type) {
        case GET_NODE_DETAILS:
            return action.data;
        default:
            return state;
    }
}

const reducers = combineReducers({
    nodes: nodeList,
    topics: topicList,
    topicLoading: topicLoading,
    topicType: setTopicType,
    topicDetails: topicDetails,
    topicReplies: topicReplyList,
    nodeDetails: nodeDetails,
});

export default reducers;
