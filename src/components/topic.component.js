import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router';

import Layout from 'antd/lib/layout';
import Icon from 'antd/lib/icon';
import Tooltip from 'antd/lib/tooltip';

import { parseTime, timeDiffCounter } from '../utils/date.tool';
import EmptyComponent from './empty.component';

const {
    Header,
    Sider,
    Content
} = Layout;

export default class TopicComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let now = Date.now();
        return (
            <div>
                {
                    this.props.topicList.map((topic, j)=>{
                        let time = timeDiffCounter( now, parseTime(topic.replied_at));
                        return (
                            <div className="home-topic-item" key={j}>
                                <Layout>
                                    <Sider width="60">
                                        <Link to="#" className="avator">
                                            <img src={topic.user.avatar_url} width="48" />
                                        </Link>
                                    </Sider>
                                    <Content className="home-topic-content">
                                        <div className="home-topic-item-name">
                                            <Link to="" className="node">{topic.node_name}</Link>
                                            <Link to="" className="txt">{topic.title}</Link>
                                            <span>
                                                {topic.excellent ? <Tooltip title="精华文章"><Icon type="like" className="icon-popular-tip" /></Tooltip> : '' }
                                            </span>
                                        </div>
                                        <div className="home-topic-item-info color-gray">
                                            <Link to="#" className="link-gray link-underline">{topic.user.name}</Link>
                                            <span className="hidden-xs"> •
                                            最后由&nbsp;
                                            <Link to="#" className="link-gray link-underline">{topic.last_reply_user_login}</Link>
                                            &nbsp;回复于 {time} 前
                                            </span>
                                        </div>
                                    </Content>
                                    <Sider width="40" className="count-tip">
                                        <Link to="#">{topic.replies_count}</Link>
                                    </Sider>
                                </Layout>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}