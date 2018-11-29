# 第二章 
## 设计高质量的React组件
``
## 易于维护的组件设计要素
- `分而治之`拆分为单个功能的组件
    - 确定组件的边界
        - 根据功能划分模块
    - 高内聚、低耦合 todo (深层次的理解)
        - 高内聚 把逻辑紧密相关的内容放在一个组件中。
        - 不同组件的关系尽量要弱化。
## React组件的数据
- `props` 对外接口 
- `state` 内部状态
### 区别
- props用于定义外部接口，state用于记录内部状态
- props的赋值在外部使用，state在内部使用
- 组件内部不能改变state，只能通过state让组件来改变的

升级版的 `2.2.1`
::: danger react的类型检查PropTypes自React v15.5起已弃用，请使用prop-types
import PropTypes from 'prop-types';

            p小写
MyComponent.propTypes = {
  // 你可以将属性声明为以下 JS 原生类型
  optionalArray: PropTypes.array,
                P大写
:::
### 共同原则
- 都会引起组件的重新渲染

## 组件的生命周期
- 阶段划分
    - 装载阶段
    - 更新阶段
    - 卸载阶段
## 装载阶段
1. **`constructor` 唯一会在服务端调用的函数**
    - 形参
        - props 
        - context ？ 不知道是啥
2. **`componentWillMount`** `即将废弃`
3. **`render` 最重要的函数 -> 返回dom结构。必须纯函数**
4. **`componentDidMount`**
- render执行后不会立即执行。在render后执行
##### 问题？ 
为什么推荐在`componentDidMount中请求参数`？
- componentWillMount方法的调用在constructor之后，在render之前，在这方法里的代码调用setState方法不会触发重渲染，所以它一般不会用来作加载数据之用，它也很少被使用到。

- 一般的从后台(服务器)获取的数据，都会与组件上要用的数据加载有关，所以都在componentDidMount方法里面作。虽然与组件上的数据无关的加载，也可以在constructor里作，但constructor是作组件state初绐化工作，并不是设计来作加载数据这工作的，所以所有有副作用的代码都会集中在componentDidMount方法里。

- constructor()中获取数据的话，如果时间太长，或者出错，组件就渲染不出来，你整个页面都没法渲染了。

- componentDidMount()中能保证你的组件已经正确渲染。

#### 总结下：
:::tip 
[原文地址](https://blog.csdn.net/ky1in93/article/details/81362442)
- 作者：嘴强王者菜月昴 
- 来源：CSDN 
--------------------- 

    
- constructor()

    - constructor()中获取数据的话，如果时间太长，或者出错，组件就渲染不出来，整个页面都没法渲染了。

    - constructor是作组件state初绐化工作，并不是设计来作加载数据的。

- componentWillMount()

    - 如果使用SSR（服务端渲染）,componentWillMount会执行2次，一次在服务端，一次在客户端。而componentDidMount不会。

    - constructor可以完成state初始化，componentWillMount使用的很少，目前16版本加入了UNSAFE来标识componentWillMount，新的生命周期static getDerivedStateFromProps()   也会替代这个。

    - React16之后采用了Fiber架构，只有componentDidMount声明周期函数是确定被执行一次的，类似ComponentWillMount的生命周期钩子都有可能执行多次，所以不加以在这些生命周期中做有副作用的操作，比如请求数据之类。

- render()

    - 无限render

- componentDidMount()

    -  确保已经render过一次。提醒我们正确地设置初始状态，这样就不会得到导致错误的"undefined"状态。

    -  componentDidMount方法中的代码，是在组件已经完全挂载到网页上才会调用被执行，所以可以保证数据的加载。此外，在这方法中调用setState方法，会触发重渲染。所以，官方设计这个方法就是用来加载外部数据用的，或处理其他的副作用代码。

::::

1. 跟服务器端渲染（同构）有关系，如果在componentWillMount里面获取数据，fetch data会执行两次，一次在服务器端一次在客户端。在componentDidMount中可以解决这个问题。

2. 在componentWillMount中fetch数据一定在render后才能到达，如果你忘记了设置初始状态，用户体验不好。

3. react16.0以后，componentWillMount可能会被执行多次。`服务端`、`客户端`

#### 多个组件嵌套的生命周期函数装在执行顺序
:::tip
-   {count: 1} {} "第一个生命周期函数"
-   componentWillMount app
-   render
-   constructorcount count
-   componentWillMount count
-   render CountApp
-   constructorcount countApp
-   componentWillMount CountApp
-   render CountApp
-   componentDidMount count
-   componentDidMount CountApp
-   componentDidMount app
:::
:::warning 总结 `componentDidMount`只在客户端执行
- componentWillMount与render紧密相连
- render本身不会渲染页面，只会返回
- 当组件内部的所有render都调用完，才会依次执行所有的componenttDidMount
:::
## 更新过程
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate
<!-- ![Image text](./logo.png) -->

<img :src="$withBase('/react/reactcycle.png')">
### `componentWillReceiveProps` 
::: warning 没改比props也会触发
- 只要是在父组件render函数调用，render里的子组件就会经历更新的过程，不管父组件传递给子组建的props有没有改变，都会触发子组件的componentWillReaciveProps
- this.setState 不会调用componentWillReaciveProps
:::
- 参数
    - nextProps
    - nextState

### 废除的属性 只在 createClass 中调用
- getInitialState 
    - getInitialState was defined on App, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?
- getDefaultProps
    - getDefaultProps was defined on App, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.
## 组件向外传递数据
## 问题
```js
/**
 * @author z
 * @file
 */
import React, { Component, h } from 'react';

import Count from './count';
import CountApp from './countApp';




export default class App extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      defaultVal: 2
    }
    this.eventClickSetVal = this.eventClickSetVal.bind(this)
  }


  componentWillReceiveProps() {
    console.log('父组件=》componentWillReceiveProps')
  }
  shouldComponentUpdate() {
    console.log('父组件=》shouldComponentUpdate')
  return true

  }

  eventClickSetVal() {
    console.log(this)
    this.setState({
      defaultVal: 10
    })
  }

  render() {
    console.log('父组件的render')
    return h.div({},
      h.h1({}, 'count'),

      // h(Count, {}, ''),
      h('h1', {}, this.state.defaultVal),
      h(CountApp, { count: this.state.defaultVal }, ''),
      
      h('button', {
        onClick: this.eventClickSetVal
      }, '改变初始值')
    )
  }
}


```
```js
export default class Count extends Component {
  constructor(props, context) {
    super(props)
   
    this.state = {
      count: this.props.count 
    }
    this.onClickButton = this.onClickButton.bind(this);
  }

//   static defaultProps.count = 0/
static defaultProps = {
    count: 1000
}
componentWillReceiveProps() {
  console.log('count组件=》componentWillReceiveProps')
}
shouldComponentUpdate() {
  console.log('count组件=》shouldComponentUpdate')
  return felse

}

// methods
  onClickButton (e) {
    this.setState({count: ++this.state.count})
  }
  render() {
    console.log('子组件的render')
    return (
    h.div('', {},
    h.p({}, 'state的值count: ' + this.state.count, ''),
    h.p({}, 'props的值count: ' + this.props.count, ''),

        h.button({onClick: (e) => this.onClickButton(e)}, 'clickMe'),
    ));
  }
}
```
<img :src="$withBase('/react/reactWenti1.gif')">
![](/react/reactWenti1.gif)

### 分析 
- 父组件将`defaultVal`传递给子组建，子组件进入装载阶段,

- 当父组件点击 `改变初始值的时候`
    - 父组件进入shouldComponentUpdate阶段
    - 父组件进入render
    - 子组件进入componentReaciveProps
    - 子组件进入shouldComponentUpdate阶段
    - 子组件的render 初始化页面
    - `props的值count` 依赖传递的props 更新了
    - `state的值count` 依赖于自己的state 
        - 自己的state 只是在constructor 时接收了props 当作自己的初始值。只会执行一次

- `h.p({}, 'state的值count: ' + this.state.count, ''),` 依赖自己的state 
- `h.p({}, 'props的值count: ' + this.props.count, ''),` 依赖父组件props
::: tip 证明组件的comonentReactiveProps在props不改时也会触发
**将子组件的 ` h.p({}, 'props的值count: ' + this.props.count, ''),`注释**
- 这时子组件只接收props只在`constructor`时用到了
- 点击父组件的`改变初始值`
:::

### shouldComponentUpdate(nextProps, nextState) 返回值决定是否渲染页面
### componentWillUpdate(nextProps, nextState, a) a ? `react 17. 废弃`
### componentDidUpdate(nextProps, nextState) 会在服务端调用 说明代码有问题
## React组件state和props的局限性



## 问题
- constructor的第二个参数 ？ ``
- componentWillUpdate 的第三个参数 ？ `客户端服务点都调用`
- 

## 总结

- react 强制刷新页面`his.forceUpdate();`
- https://segmentfault.com/q/1010000011289209
- https://segmentfault.com/q/1010000011289209
eventClick
- 父组件专递事件给子组件，父组建也会进入render - 》子组件
- 最上层的根组件需要重新render，必定导致其所有子组件都要重新render，
- 1、执行了render方法不代表会更新dom树，在react当中你使用了setstate更新了state或者改变了传入的props，都会执行render方法，执行了render方法以后，才会生成dom树进行对比，如果dom有差异才会进行构建新的渲染树，更新对应的dom，否则，不会更新。因此，生成虚拟dom树进行对比是在render函数执行了之后进行，而不是执行之前。

- 2、拆分组件有助于性能优化。组件拆分了，各组件之间的耦合性小了，某个子组件需要更新的时候，牵涉到其他的组件就少，就能减少牵一发而动全身这种情况。