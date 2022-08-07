import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router';

import Icon from 'antd/lib/icon';
import Layout from 'antd/lib/layout';

import { parseTime, timeDiffCounter } from '../utils/date.tool';

const {
    Header,
    Sider,
    Content
} = Layout;

export default class ReplyComponent extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        let { reply, index } = this.props;
        let timeCreat = timeDiffCounter( Date.now(), parseTime(reply.created_at));
        return (
            <Layout className="reply">
                <Sider width="60" className="avatar-wrapper">
                    <img className="avatar" src={reply.user.avatar_url} />
                </Sider>
                <Content>
                    <div className="reply-title">
                        <Link to="" className="link-underline">{reply.user.login}</Link> ·
                        <Link to="" className="link-green link-underline"> #{index}</Link> ·
                        {` ${timeCreat}前`}
                        <span className="icon r">
                            <Icon type="heart" />
                        </span>
                    </div>
                    <div className="markdown">
                        <article dangerouslySetInnerHTML={{ __html: reply.body_html}}></article>
                    </div>
                </Content>
            </Layout>
        );
    }
}