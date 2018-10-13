# sophon-web

> the sophon web project base on Vue.js

## Build Setup
*You need to install node*

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 项目结构
大部分代码存放于src文件夹下，src文件夹下主要有：

* api

> 作为客户端的service层，负责与后台服务交互。每一个模块的接口存放于对应的api文件里，***新增服务模块后需要在api.js里面引入***。

* assets

> 存放项目的资源文件（图片、音视频等）、样式文件等。***图片资源统一存放于images目录下，不同模块图片资源分文件夹管理***。

* common

> 存放工具类文件

* components

> 存放组件，***每添加一个组件，需要在该文件夹下index.js里面按照示例引入***，每个组件分模块存放。

> 一个标准的vue组件，包含三个部分，一个是模板，一个是script，一个是样式，这里需要了解vue的基础。

* pages

> 存放页面，***每添加一个页面，需要在路由文件夹下的路由文件里进行配置***，每个页面分模块存放。

* router

> 基于vue-router（<https://router.vuejs.org/zh-cn/>）的路由文件夹，负责页面跳转。

* store

> 基于vuex（<https://vuex.vuejs.org/zh-cn/>）的全局的状态管理。

* App.vue

> App组件

* Constant.js

> 全局的常量，建议把所有需要定义的常量全放于该文件中。

* main.js

> 入口文件

