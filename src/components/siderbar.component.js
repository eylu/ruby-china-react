import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router';
import Icon from 'antd/lib/icon';

import { rubyResourceList, friendList } from '../config/const';

export default class SiderBarComponent extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
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
        );
    }
}

