import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router';

import { connect } from 'react-redux';
import Layout from 'antd/lib/layout';
import Icon from 'antd/lib/icon';
import BackTop from 'antd/lib/back-top';

import { parseTime, timeDiffCounter } from '../utils/date.tool';
import { getTopicDetails, getTopicReplies } from '../actions/index';
import ReplyComponent from '../components/reply.component';
import EmptyComponent from '../components/empty.component';
import SiderBarComponent from '../components/siderbar.component';

const {
    Sider,
    Content
} = Layout;

class TopicDetailsPage extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let { dispatch, params } = this.props;
        dispatch(getTopicDetails(params.id));
        dispatch(getTopicReplies(params.id));
    }

    render(){

        let content = <EmptyComponent title="正在加载..." />;
        let { topic, meta } = this.props.topicDetails;
        let { replies } = this.props.topicReplies;


        if(topic){
            let timeCreat = timeDiffCounter( Date.now(), parseTime(topic.created_at));
            let timeReply = timeDiffCounter( Date.now(), parseTime(topic.replied_at));
            let tipPopular;
            if(topic.excellent){
                tipPopular = (
                    <div className="topic-details-popular-tip">
                        <Icon type="like" />本帖已被设为精华帖！
                    </div>
                );
            }
            content = (
                <div className="topic-details-page panel">
                    <div className="panel-head">
                        <Layout >
                            <Content>
                                <div className="topic-details-title">
                                    <Link to="" className="color-gray">
                                        {topic.node_name}
                                    </Link>
                                    <span>{topic.title}</span>
                                </div>
                                <Link to="" className="link-underline">{topic.user.name}</Link> ·
                                发布于 {timeCreat} 前 · 最后由
                                <Link to="" className="link-underline"> {topic.last_reply_user_login} </Link>
                                回复于 {timeReply} 前 · {topic.hits} 次阅读
                            </Content>
                            <Sider width="60" className="avatar-wrapper">
                                <img className="avatar" src={topic.user.avatar_url} />
                            </Sider>
                        </Layout>
                    </div>
                    {tipPopular}
                    <div className="markdown">
                        <article dangerouslySetInnerHTML={{ __html: topic.body_html}}></article>
                    </div>
                    <div className="panel-foot">
                        <Icon type="heart" /> {topic.likes_count}个赞
                    </div>
                </div>
            );
        }

        return (
            <div className="container">
                <div className="auto-layout clearfix">
                    <div className="mainment">
                        {content}
                        <div className="panel mt15">
                            <div className="panel-head">
                                共收到 {replies && replies.length} 条回复
                            </div>
                            <div>
                                {
                                    replies && replies.map((reply, i)=>{
                                        return <ReplyComponent reply={reply} key={i} index={i+1} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <SiderBarComponent />
                </div>
                <BackTop />
            </div>
        );
    }
}

// 基于全局 state ，哪些 state 是我们想注入的 props
function mapStateToProps(state){
    return {
        topicDetails: state.topicDetails,
        topicReplies: state.topicReplies
    }
}

export default connect(mapStateToProps)(TopicDetailsPage);
