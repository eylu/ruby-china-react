import React, {
    Component
} from 'react';

import TopicComponent from './topic.component';
import EmptyComponent from './empty.component';

export default class HomeTopicComponent extends Component {
    constructor(props) {
        super(props);
    }


    topicGroup(data){
        let result = [];
        let list = Object.assign([],data);
        let count =  list.length;
        return [
            list.splice(0, count/2),
            list
        ]
    }

    render() {
        let content = <EmptyComponent title="正在加载数据..." />;

        if(!this.props.topicLoading){
            // content = <EmptyComponent title="已加载完毕！！！" />;
            // 分组topic
            let group = this.topicGroup(this.props.topicList);
            if(group.length){
                content = group.map((group, i)=>{
                    return (
                        <div className="home-topic-group l" key={i}>
                            <TopicComponent topicList={group}  />
                        </div>
                    );
                })
            }else{
                content = <EmptyComponent title="数据为空!!!" />;
            }

            // 不分组
            // if(this.props.topicList.length){
            //     content = <TopicComponent topicList={this.props.topicList}  />
            // }
        }
        return (
            <div className="clearfix">
                { content }
            </div>
        );
    }
}