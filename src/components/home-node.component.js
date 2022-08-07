import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router';

import Layout from 'antd/lib/layout';

const {
    Header,
    Sider,
    Content
} = Layout;

export default class HomeNodeComponent extends Component {
    constructor(props){
        super(props);
    }

    renderNodeGroup(group, i){

        return (
            <Layout className="home-node-group" key={i}>
                <Sider width="110" className="home-node-left">
                    {group.section_name}
                </Sider>
                <Content className="home-node-right">
                    {
                        group.node_list.map((node, j)=>{
                            return (
                                <span className="home-node-link" key={j}>
                                    <Link to={`/topics/node/${node.id}`} className="link-underline">{node.name}</Link>
                                </span>
                            )
                        })
                    }
                </Content>
            </Layout>
        )
    }

    render() {
        // console.log('render1111', this.props.nodeList);
        return(
            <div>
                {
                    this.props.nodeList.map((group, i)=>{
                        return this.renderNodeGroup(group, i)
                    })
                }
            </div>
        );
    }
}
