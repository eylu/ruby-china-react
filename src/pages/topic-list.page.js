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

import { rubyResourceList, friendList } from '../config/const';
import { getTopicList, setTopicLoadingStatus, setTopicType } from '../actions/index';
import TopicComponent from '../components/topic.component';
import EmptyComponent from '../components/empty.component';


class TopicListPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: 1,
        };

        this.onPaginationChange = this.onPaginationChange.bind(this);
        this.subNavClick = this.subNavClick.bind(this);
    }

    componentDidMount(){
        let { dispatch } = this.props;
        dispatch(getTopicList({type: this.props.topicType}));

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

        return (
            <div>
                <div className="subnav-wrapper">
                    <div className="container clearfix">
                        <div className="btn-all-nodes l hidden-xs">
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
                        <div className="sidebar">
                            <div className="panel">
                                <div className="p15">
                                    <Link to="" className="button-primary button-block">发布新话题</Link>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="panel-head">
                                    小帖士
                                </div>
                                <div className="p15">
                                    Turbolinks 其实是非常好用的工具，放下成见，尝试用一下！
                                </div>
                            </div>
                            <div className="panel">
                                <div className="panel-head">
                                    推荐 Ruby 资源
                                </div>
                                <div>
                                     <ul>
                                        {
                                            rubyResourceList.map((res,i)=>{
                                                return (
                                                    <li key={i}>
                                                        <Icon type={res.icon} />
                                                        <a href={res.url} className="link-underline">{res.title}</a>
                                                    </li>
                                                );
                                            })
                                        }
                                     </ul>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="panel-head">
                                    友情社区
                                </div>
                                <div className="text-center">
                                    <ul>
                                        {
                                            friendList.map((friend, i)=>{
                                                return (
                                                    <li key={i}>
                                                        <a title={friend.title} href={friend.url} target="_blank">
                                                            <img width="130" src={friend.image} />
                                                        </a>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="panel-head">
                                    信息统计
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            社区会员: 30241 人
                                        </li>
                                        <li>
                                            帖子数: 32165 个
                                        </li>
                                        <li>
                                            回帖数: 314024 条
                                        </li>
                                     </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

// 基于全局 state ，哪些 state 是我们想注入的 props
function mapStateToProps(state){
    return {
        topicLoading: state.topicLoading,
        topicList: state.topics,
        topicType: state.topicType
    }
}

export default connect(mapStateToProps)(TopicListPage);