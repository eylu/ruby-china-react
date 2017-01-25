import React, {
    Component
} from 'react';

import TopicComponent from './topic.component';
import EmptyComponent from './empty.component';

import {
    topicGroup,
} from '../utils/array.tool';

export default class HomeTopicComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let group = topicGroup(this.props.topicList);
        let content = <EmptyComponent title="正在加载数据..." />;
        if(group.length){
            content = group.map((group, i)=>{
                return (
                    <div className="home-topic-group l" key={i}>
                        <TopicComponent topicList={group}  />
                    </div>
                );
            })
        }

        return (
            <div className="clearfix">
                { content }
            </div>
        );
    }
}