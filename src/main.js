
/**
 * 引入库组件
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware} from 'redux';        // 引入 redux 以创建 store
import { Provider } from 'react-redux';     // 引入 react-redux，使用 Provider
import thunk from 'redux-thunk';

/**
 * 引入样式
 */
import 'antd/dist/antd.css';
import './styles/cover.css';
import './styles/markdown.css';
import './styles/core.css';
import './styles/home.css';
import './styles/topic-list.css';
import './styles/topic-details.css';
import './styles/reply.css';
import './styles/node.css';
import './styles/empty.css';

/**
 * 引入配置 路由组件
 */
import RouterPage from './config/router';

import reducers from './reducers/index';    // 引入 reducers

// let initState = {
//     nodes: ['吃饭','睡觉','打篮球'],
// };

const finalCreateStore = applyMiddleware(thunk)(createStore);        // 中间件替换为 thunk
let store = finalCreateStore(reducers);
// let store = finalCreateStore(reducers, initState);
// let store = createStore(reducers);  // 创建 store

ReactDOM.render(
    <Provider store={store}>
        <RouterPage />
    </Provider>
    , document.getElementById('root'));