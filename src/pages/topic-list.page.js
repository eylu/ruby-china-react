import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router';

import { connect } from 'react-redux';

import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Pagination from 'antd/lib/pagination';
import Modal from 'antd/lib/modal';
import BackTop from 'antd/lib/back-top';

import { getTopicList, setTopicLoadingStatus, setTopicType, initNodeList } from '../actions/index';
import TopicComponent from '../components/topic.component';
import HomeNodeComponent from '../components/home-node.component';
import EmptyComponent from '../components/empty.component';
import SiderBarComponent from '../components/siderbar.component';


class TopicListPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: 1,
            visible: false,
        };

        this.onPaginationChange = this.onPaginationChange.bind(this);
        this.subNavClick = this.subNavClick.bind(this);
        this.nodeClick = this.nodeClick.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount(){
        let { dispatch, location, nodeList } = this.props;
        let type = this.props.topicType;
        if(location && location.pathname=='/topics/popular'){
            type = 'popular'
        }
        dispatch(getTopicList({type: type}));
        if(!nodeList.length){
            dispatch(initNodeList());
        }
    }

    nodeClick(){
        this.setState({
            visible: true,
        });
    }

    handleCancel() {
        this.setState({ visible: false });
    }

    subNavClick(subnav){
        let { dispatch } = this.props;
        dispatch(setTopicType(subnav.key));
        dispatch(getTopicList({type: subnav.key}));
        this.setState({
            currentPage: 1
        });
    }

    onPaginationChange(page){
        let { dispatch } = this.props;
        dispatch(getTopicList({type: this.props.topicType, offset: (page-1)*20}));
        this.setState({
            currentPage: page
        });
    }

    render() {
        let content = <EmptyComponent title="正在加载数据..." />;
        if(!this.props.topicLoading){
            if(this.props.topicList.length){
                content = <TopicComponent topicList={this.props.topicList} />;
            }else{
                content = <EmptyComponent title="数据为空!!!" />;
            }
        }
        let modalWidth = Math.min(window.innerWidth, 660);
        console.log(modalWidth);
        return (
            <div>
                <div className="subnav-wrapper">
                    <div className="container clearfix">
                        <div className="btn-all-nodes l hidden-xs" onClick={this.nodeClick}>
                            <span>所有节点</span>
                            <Icon type="caret-right" className="btn-icon" />
                        </div>
                        <Menu className="l" mode="horizontal" onClick={this.subNavClick}>
                            <Menu.Item key="last_actived">默认</Menu.Item>
                            <Menu.Item key="popular"><Icon type="like" />优质帖子</Menu.Item>
                            <Menu.Item key="no_reply">无人问津</Menu.Item>
                            <Menu.Item key="recent">最新发布</Menu.Item>
                        </Menu>
                    </div>
                </div>
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
                <Modal title="选择话题节点"
                       visible={this.state.visible}
                       onCancel={this.handleCancel}
                       width={modalWidth}
                       footer={false}>
                    <div>
                        <HomeNodeComponent nodeList={this.props.nodeList} />
                    </div>
                </Modal>
                <BackTop />
            </div>
        );

    }
}

// 基于全局 state ，哪些 state 是我们想注入的 props
function mapStateToProps(state){
    console.log('topicList ===>',state);
    return {
        topicLoading: state.topicLoading,
        topicList: state.topics,
        topicType: state.topicType,
        nodeList: state.nodes,
    }
}

export default connect(mapStateToProps)(TopicListPage);