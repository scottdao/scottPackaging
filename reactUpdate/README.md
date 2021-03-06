# webpack4.x

- [api](https://webpack.docschina.org/guides/getting-started)

---

- 起步：npm init

- 安装 webpack 和 webpack-cli

- npm install --save-dev **webpack**
- npm install --save-dev **webpack-cli**(本地安装--save-dev 生产环境--save)
- 构建一个 bundle 文件；
- 安装 lodash: npm install --save **lodash** 在./src/index 加载该模块；
- 在 webpack.config.js 配置文件：
- 入口文件：**entry**: './src/index.js',//入口文件；
- 出口文件：**output**: {//出口文件
- **filename**: 'bundle.js',
- **path**: path.resolve(\_\_dirname, 'dist')
- 安装 css:
- npm install --save-dev **style-loader css-loader**
- 加载图片：
- npm install --save-dev **file-loader**
- 加载数据：（json 内置，不需要配置，直接引入。）

---

- 安装 html 模版插件：HtmlWebpackPlugin

- npm install --save-dev html-webpack-plugin

- 安装清除插件：clean-webpack-plugin

- npm install clean-webpack-plugin --save-dev

- watch：监控文件的变化。package.json 中添加,自动编译，无需手动，不会刷新。

- 安装：webpack-dev-server 实时更新，加载浏览器。

- npm install --save-dev webpack-dev-server

- 安装：webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack

- 处理后的文件传递给一个服务器(server)。 webpack-dev-server 在内部使用了它，同时，它也可以作为一个单独的包来使用，以便进行更多自定义设置来实现更多的需求
- npm install --save-dev **express webpack-dev-middleware**,通过 node 服务器来实现

---

- webpack-merge:区分开发环境与生产环境，代码分离；
- npm install --save-dev webpack-merge

---

压缩图片的工具：[压缩图片](https://tinypng.com)
