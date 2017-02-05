import React, {
    Component
} from 'react';
import {
    Router,
    Route,
    Link,
    browserHistory,
    hashHistory,
    IndexRoute
} from 'react-router';

import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Breadcrumb from 'antd/lib/breadcrumb';
import Tooltip from 'antd/lib/tooltip';


import { navList } from './const';
import HomePage from '../pages/home.page';
import TopicListPage from '../pages/topic-list.page';
import TopicDetailsPage from '../pages/topic-details.page';
import NodePage from '../pages/node.page';
import EmptyPage from '../pages/empty.page';
import imgLogoFooter from '../images/logo_footer.png';

const {
    Header,
    Footer,
    Sider,
    Content
} = Layout;
const Search = Input.Search;

class App extends Component {
    searchHandle(value){
        console.log('Search Key:',value);
    }
    render() {
        let menuItemList = navList.map((nav, i)=>{
            var navLink;
            if(nav.link){
                navLink = <Link to={nav.link}>{nav.title}</Link>
            }
            if(nav.url){
                navLink = <a href={nav.url} target="_blank">{nav.title}</a>
            }
            return (
                <Menu.Item key={i}>{navLink}</Menu.Item>
            );
        });
        return (
            <Layout>
                <Header className="header header-fixed">
                    <div className="container">
                        <Layout>
                            <Sider width="120" className="header-logo">
                                <Link to="/"> <b>Ruby</b>China </Link>
                            </Sider>
                            <Content className="header-nav-wrapper">
                                <Menu mode="horizontal" className="header-nav">
                                    {menuItemList}
                                </Menu>
                            </Content>
                            <Sider width="160" className="header-right hidden-xs">
                                <Search placeholder="搜索本站内容" onSearch={value => this.searchHandle(value)}
                                  />
                            </Sider>
                            <Sider width="90" className="header-right header-user">
                                <Link to="/singin"> 登录 </Link>
                                <Link to="/singup"> 注册 </Link>
                            </Sider>
                        </Layout>
                    </div>
                </Header>
                <Content>
                    {this.props.children}
                </Content>
                <Footer className="hidden-xs">
                    <div className="container">
                        <Layout>
                            <Sider width="60" className="footer-logo">
                                <img src={imgLogoFooter} width="60" />
                            </Sider>
                            <Content className="footer-content">
                                <Breadcrumb className="footer-links">
                                    <Breadcrumb.Item><Link to="">关于</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item><Link to="">RubyConf</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item><Link to="">RubyGems 镜像</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item><Link to="">Ruby 镜像</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item><Link to="">Status</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item><Link to="">活跃会员</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item><Link to="">组织</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item><Link to="">API</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item><Link to="">贡献者</Link></Breadcrumb.Item>
                                </Breadcrumb>
                                <div className="color-gray">
                                    中国 Ruby 社区，由众多爱好者共同维护，致力于构建完善的 Ruby 中文社区。
                                </div>
                                <div className="footer-supports color-gray">
                                    服务器由
                                    <Tooltip title="本站服务器由 UCloud 提供赞助">
                                        <a href="http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=rubychina&utm_medium=display&utm_content=yejiao&ytag=rubychina_logo" target="_blank">
                                            <img src="https://ruby-china-files.b0.upaiyun.com/photo/2016/e1eb47a05578576bf134da65736cc5b4.png" />
                                        </a>
                                    </Tooltip>
                                    赞助 CDN 由
                                    <Tooltip title="CDN, Ruby Mirror, RubyGems CDN 由又拍云赞助">
                                        <img src="https://ruby-china-files.b0.upaiyun.com/photo/2016/3ad734d65891632fb049ba97044ba5a4.png" />
                                    </Tooltip>
                                    赞助 Gem 服务器由
                                    <img src="https://ruby-china-files.b0.upaiyun.com/photo/2016/1977b4bcf6589a03fb4d21139955aa6a.png" />
                                    赞助
                                </div>
                                <div>
                                    <span className="footer-socials">
                                        <Link to=""><Icon type="github" /></Link>
                                        <Link to=""><Icon type="aliwangwang" /></Link>
                                        <Link to=""><Icon type="dingding" /></Link>
                                    </span>
                                    <Breadcrumb className="footer-breadcrumb">
                                        <Breadcrumb.Item><Link to="">iOS 客户端</Link></Breadcrumb.Item>
                                        <Breadcrumb.Item><Link to="">Android 客户端</Link></Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Breadcrumb className="footer-breadcrumb">
                                        <Breadcrumb.Item><Link to="">简体中文</Link></Breadcrumb.Item>
                                        <Breadcrumb.Item><Link to="">正體中文</Link></Breadcrumb.Item>
                                        <Breadcrumb.Item><Link to="">English</Link></Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </Content>
                        </Layout>
                    </div>
                </Footer>
            </Layout>
        )
    }
}


export default class RouterPage extends Component {

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={HomePage} />
                    <Route path="topics" component={TopicListPage} />
                    <Route path="topics/popular" component={TopicListPage} />
                    <Route path="topics/:id" component={TopicDetailsPage} />
                    <Route path="topics/node/:id" component={NodePage} />
                    <Route path="*" component={EmptyPage} />
                </Route>
            </Router>
        );

    }
}