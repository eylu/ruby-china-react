import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router';

import { connect } from 'react-redux';    // 引入 react-redux

import Layout from 'antd/lib/layout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Icon from 'antd/lib/icon';
import Badge from 'antd/lib/badge';

import { cityList } from '../config/const';
import { initNodeList, getTopicList, setTopicLoadingStatus } from '../actions/index';
import HomeNodeComponent from '../components/home-node.component';
import HomeTopicComponent from '../components/home-topic.component';
import imgGift from '../images/gift.svg';

const {
    Header,
    Sider,
    Content
} = Layout;

class HomePage extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let { dispatch } = this.props;
        dispatch(initNodeList());
        dispatch(getTopicList({type: 'popular'}));
    }

    render() {

        return (
            <div className="container">
                <div className="panel hidden-xs mt15">
                    <div className="panel-body">
                        <div className="media clearfix">
                            <div className="media-left l">
                                <img src={imgGift} width="55" />
                            </div>
                            <div className="media-body l">
                                <p>
                                    Ruby China 官方
                                    <a href="https://gems.ruby-china.org/">RubyGems 镜像</a>、
                                    <a href="https://ruby-china.org/wiki/ruby-mirror">Ruby 镜像</a> 正式上线！
                                </p>
                                <code>
                                    gem source -a https://gems.ruby-china.org
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-icons hidden-xs mt15">
                    <Row gutter={30}>
                        <Col span={6}>
                            <div className="home-icons-box item1">
                                <Link to="/topics">
                                    <div className="icon-wrapper"><Icon type="message" /></div>
                                </Link>
                                <div className="text-wrapper">
                                    <Link to="/topics" className="clearfix">
                                        <span className="l">Ruby 社区</span>
                                        <Icon type="arrow-right" className="r" />
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="home-icons-box item2">
                                <Link to="/wiki">
                                    <div className="icon-wrapper"><Icon type="chrome" /></div>
                                </Link>
                                <div className="text-wrapper">
                                    <Link to="/wiki" className="clearfix">
                                        <span className="l">技术文档</span>
                                        <Icon type="arrow-right" className="r" />
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="home-icons-box item3">
                                <Link to="/topics/node/25">
                                    <div className="icon-wrapper"><Icon type="team" /></div>
                                </Link>
                                <div className="text-wrapper">
                                    <Link to="/topics/node/25" className="clearfix">
                                        <span className="l">招聘与求职</span>
                                        <Icon type="arrow-right" className="r" />
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="home-icons-box item4">
                                <Link to="/topics/popular">
                                    <div className="icon-wrapper"><Icon type="like-o" /></div>
                                </Link>
                                <div className="text-wrapper">
                                    <Link to="/topics/popular" className="clearfix">
                                        <span className="l">精华文章</span>
                                        <Icon type="arrow-right" className="r" />
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="home-topics panel">
                    <div className="panel-head">
                        社区精华帖
                    </div>
                    <div className="panel-body">
                        <HomeTopicComponent topicList={this.props.topicList} topicLoading={this.props.topicLoading} />
                    </div>
                    <div className="panel-foot">
                        <Link to="topics">查看更多社区精华帖...</Link>
                    </div>
                </div>
                <div className="home-nodes panel hidden-xs">
                    <div className="panel-head">讨论节点分类导航</div>
                    <div className="panel-body">
                        <HomeNodeComponent nodeList={this.props.nodeList} />
                    </div>
                </div>
                <div className="home-citys panel hidden-xs">
                    <div className="panel-head">热门城市</div>
                    <div className="panel-body">
                        <div className="home-city-list">
                            {cityList.map((item,i)=>{
                                return <Link to="" className="link-underline" key={i}>{item.title}</Link>
                            })}
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
        nodeList: state.nodes,  // 将全局的 state 的其中一个 key(即todos) 作为 props 注入
        topicLoading: state.topicLoading,
        topicList: state.topics
    }
}

export default connect(mapStateToProps)(HomePage);  // 连接组件并export