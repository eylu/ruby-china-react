import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router';

import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import Icon from 'antd/lib/icon';
import Pagination from 'antd/lib/pagination';
import BackTop from 'antd/lib/back-top';

import TopicComponent from '../components/topic.component';
import EmptyComponent from '../components/empty.component';
import SiderBarComponent from '../components/siderbar.component';
import { translateHtml } from '../utils/object.tool';
import { getNodeDetails, getTopicList } from '../actions/index';

class NodePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentPage: 1,
        };

        this.onPaginationChange = this.onPaginationChange.bind(this);
    }

    componentWillReceiveProps(newProps){
        let { dispatch, params } = newProps;

        console.log('====>', newProps.params, this.props.params);
        if(newProps.params.id != this.props.params.id){
            dispatch(getNodeDetails(params.id));
            dispatch(getTopicList({node_id: params.id}));
            this.setState({
                currentPage: 1
            });
        }
    }

    componentDidMount(){
        let { dispatch, params } = this.props;
        dispatch(getNodeDetails(params.id));
        dispatch(getTopicList({node_id: params.id}));
    }

    onPaginationChange(page){
        let { dispatch, params } = this.props;
        dispatch(getTopicList({node_id: params.id, offset: (page-1)*20}));
        this.setState({
            currentPage: page
        });
    }

    render() {

        let { nodeDetails, topicList } = this.props;
        let { node } = nodeDetails;
        let head = '';
        if(node){
            head = (
                <div className="subnav-wrapper">
                    <div className="container clearfix">
                        <div className="title">
                            <span className="txt">{node.name}</span>
                            <span className="color-gray">共有 {node.topics_count} 个讨论主题</span>
                        </div>
                        <div className="summary markdown">
                            <ReactMarkdown source={node.summary} />
                        </div>
                    </div>
                </div>
            );
        }
        let content = <EmptyComponent title="正在加载数据..." />;
        if(topicList.length){
            content = <TopicComponent topicList={topicList} />;
        }else{
            content = <EmptyComponent title="数据为空!!!" />;
        }
        return (
            <div className="node-page">
                {head}
                <div className="container">
                    <div className="auto-layout clearfix">
                        <div className="mainment">
                            <div className="topic-list-page panel">
                                {content}
                                <div className="panel-foot">
                                    <Pagination current={this.state.currentPage} onChange={this.onPaginationChange} total={5000} />
                                </div>
                            </div>
                        </div>
                        <SiderBarComponent />
                    </div>
                </div>
                <BackTop />
            </div>
        );

    }
}

// 基于全局 state ，哪些 state 是我们想注入的 props
function mapStateToProps(state){
    return {
        nodeDetails: state.nodeDetails,
        topicList: state.topics,
    }
}

export default connect(mapStateToProps)(NodePage);