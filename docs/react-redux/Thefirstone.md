# 第一章
## 初始化react项目
## create react app ( 脚手架 基本使用 )

- &nbsp;
    1. npm i -g create-react-app   
        `全局安装`
    2. create-react-app myReact    
        `初始化react项目`
    3. cd myReact    
        `进入项目`
    4. npm initall       
        `装包`
    5. npm run start    
        `开启dev环境`
    <!-- ::: -->
## npm run start报错
::: danger npm run start 报错 `SKIP_PREFLIGHT_CHECK=true`
If prefer to ignore this check, add `SKIP_PREFLIGHT_CHECK=true`to an .env file in your project.
That will permanently disable this message but you might encounter other issues.

To fix the dependency tree, try following the steps below in the exact order:

  1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
  2. Delete node_modules in your project folder.
  3. Remove "webpack" from dependencies and/or devDependencies in the package.json file in your project folder.
  4. Run npm install or yarn, depending on the package manager you use.

In most cases, this should be enough to fix the problem.
If this has not helped, there are a few other things you can try:

  5. If you used npm, install yarn (http://yarnpkg.com/) and repeat the above steps with it instead.
     This may help because npm has known issues with package hoisting which may get resolved in future versions.

  6. Check if /Users/v_zhonghuidong/node_modules/webpack is outside your project directory.
     For example, you might have accidentally installed something in your home folder.

  7. Try running npm ls webpack in your project folder.
     This will tell you which other package (apart from the expected react-scripts) installed webpack.

If nothing else helps, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
That would permanently disable this preflight check in case you want to proceed anyway.

P.S. We know this message is long but please read the steps above :-) We hope you find them helpful!

::: 

## 解决方法
- 文件目录下全局搜索`SKIP_PREFLIGHT_CHECK` 改为 `true`
- node_modules 文件中找，注意 IDE 会忽略node_moduless文件夹

## create-react-app 目录结构
```
├── README.md
├── node_modules
├── package.json
├── public
├── src             || 开发目录 `重点` 
└── yarn.lock
```
## clickCount计数器组件
```
```
### React 的constructor（props, context）
:::danger todo 第二个参数是？

::: 

### 事件 todo

### jsx todo


#### React `事件委托`，无论多少个onClick的出现，最会都会添加最顶层的dom元素上添加一个事件处理函数，通过这个事件处理函数捕获，分配给具体组件的函数执行。

### 理念 UI = render（data）

### VirtualDOM 虚拟dom  `todo AST静态语法分析树`
### React的优点
- UI = render（data）
- 渲染效率很高? 
    - 渲染的效率是很高，但还要加上diff算法的效率。