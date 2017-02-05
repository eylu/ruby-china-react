# ruby-china-react
A frontend project for RubyChina use Reactjs

1、初始化

    npm init

2、安装

    npm install webpack webpack-dev-server -g
    npm install webpack css-loader style-loader --save-dev
    npm install babel-core babel-loader --save-dev
    npm install babel-preset-es2015 babel-preset-react --save-dev
    npm install react react-dom react-router --save
    npm install antd --save
    npm install babel-plugin-import --save-dev   // 配个antd或其他，使用方法 https://github.com/ant-design/babel-plugin-import
    npm install html-webpack-plugin --save-dev   // 使用模版
    npm install extract-text-webpack-plugin --save-dev  // css单独打包
    npm install react-blocks --save // Flex块显示
    npm install url-loader --save-dev
    npm install react-markdown --save // Markdown
    npm install json-loader --save-dev


3、运行开发模式

    npm start

    // 浏览器打开
    http://localhost:8080/

4、打包产品模式

    npm run build  // 在当前目录下创建 build 目录，将里面的文件部署到服务器（Apache/nginx/tomcat/...）





========================= Less 使用 ============================

    npm install --save-dev less-loader less

    module: {
        loaders: [{
            test: /\.less$/,
            loader: 'style!css!less'
        }]
    }

