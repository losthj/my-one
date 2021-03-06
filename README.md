### React 教学代码

create-react-app <br />
组件化思维  <br />
jsx  <br />
开发调试工具  <br />
虚拟DOM  <br />
生命周期  <br />
React-transition-group  <br />
Redux  <br />
Antd
UI,容器组件  <br />
无状态组件  <br />
redux-thunk  <br />
redux-saga  <br />
Styled_components  <br />
lmmutable.js  <br />
redux-immutable  <br />
axios  <br />
 

 ###  课程收获
彻底入门React的使用  <br />
完整了解React的工具全家桶  <br />
上手大型项目的前端开发  <br />
规范的代码编写  <br />
20k以上的工作薪资  <br />

react js  可以编写网页的交互效果  <br />
react Native 用于编写原生的app应用  <br />
react VR  用于编写VR或者全景应用  


### Facebox推出
2013年开源  <br />
函数式编程  <br />
使用人数最多的前端框架  <br />
健全的文档与完善的社区  <br />
React Fiber  16版本


### React.js和vue.js

引用js文件来使用react  这个方式比较古老，不适合  <br />
通过脚手架工具来编码  （Grunt/gulp.js/webpack）自动化构建工具  <br />
官方的脚手架工具  Create-react-app   

### 先安装node.js  npm
package.json  是一个node的包文件，他会让你的项目你变成node的包    <br />
node_modules  第三方的模块  

pwa progressive web application   <br />
https协议的服务器上  <br />
import registerServiceWorke from './registerServiceWorke ';  <br />
import * as serviceWorker from './serviceWorker';  <br />
当断网的时候，确保app还是有效  <br />

app.test.js  自动化测试的文件  <br />
manifest.json   PWA serviceWorker  快捷方式 图片 地址


### todolist的案例

### react的介绍

声明式开发方式（减少大量操作dom的开发量）、可以与其他框架并存、组件化、单向数据流（父组件可以往子组件传数据，但子组件不能改变父组件数据）、视图层框架、函数式编程（更容易实现自动化测试）

### PropTypes与DefaultProps

PropTypes属性接受的强校验  <br />
DefaultProps定义默认值  

### state,props和render的关系

当组件的state或者props发生改变的时候，render函数就会重新执行  <br />
当父组件的render函数被运行时，它的子组件的render都将被重新运行

### 什么是虚拟DOM?
1、state 数据    <br />
2、jsx模板 render函数中的jsx代码    <br />
3、数据+模板想结合，生成真实的DOM，来显示    <br />
4、state 发生改变    <br />
5、数据 + 模板 结合，生成真实的DOM,替换原始的DOM    <br />

缺陷： <br />
第一次生成了一个完整的DOM片段   <br />
第二次生成了一个完整的DOM片段   <br />
第二次的DOM替换第一次的DOM,非常耗性能  <br />

1、state 数据   <br />
2、JSX模板   <br />
3、数据 + 模板 结合，生成真实的DOM,来显示  <br />
4、state 发生改变  <br />
5、数据 + 模板 结合，生成真实的DOM,并不直接替换原始的DOM  <br /> 
6、新的DOM（DocumentFragement）和原始的DOM做比对，找差异  <br />
7、找出input框发生了变化  <br />
8、只用新的DOM中的input元素，替换掉老的DOM中的input元素  

缺陷： <br />
性能的提升并不明显

1、state 数据  <br />
2、JSX模板  <br />
3、数据 + 模板 结合，生成真实的DOM,来显示  <br />
 \<div id='abc'>\<span>Hello world</span></div>  <br />
4、生成虚拟DOM(虚拟DOM就是一个JS对象，用它来描述真实的DOM)  （损耗了性能）  <br />
['div',{id:'abc'},['span',{},'hello world']]   <br />
5、state 发生变化  <br />
6、数据+ 模板 生成新的虚拟DOM（极大的提升了性能）  <br />
['div',{id:'abc'},['span',{},'bye bye']]  <br />
7、比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span的内容（极大的提升了性能）  <br />
8、直接操作DOM,改变span中的内容

### react 真正实现DOM
1、state 数据  <br />
2、JSX模板    <br />
3、数据+模板 生成虚拟DOM(虚拟DOM就是一个JS对象，用它来描述真实的DOM)  （损耗了性能）  <br />
['div',{id:'abc'},['span',{},'hello world']]  <br />
4、用虚拟DOM的结构生成真实的DOM,来显示  <br />
\<div id="abc">\<span>Hello world</span></div>  <br />
5、state 发生变化  <br />
6、数据+ 模板 生成新的虚拟DOM（极大的提升了性能） <br />
['div',{id:'abc'},['span',{},'bye bye']]  <br />
7、比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span的内容（极大的提升了性能）  <br />
Diff，diffrence  <br />
8、直接操作DOM，改变span中的内容  

优点：  <br />
1、性能提升了  <br />
2、它使得跨端应用得以实现，React Native

### 深入了解虚拟DOM
jsx -> createElement ->虚拟DOM(js对象) -> 真实的DOM  <br />
return React.createElement('div',{},'item');  <br />
return \<div>item</div>  <br />
 
### 虚拟DOM中的Diff算法  
比较原始虚拟DOM和新的虚拟DOM的区别，用到了diff算法  <br />
setState异步的，为了提升性能  <br />
react的虚拟DOM是同层比对的

### React中ref的使用
setState第二个函数  <br />
this.setState({    <br />
}),() => {         <br />
}                  <br />
ref帮助我们直接获取DOM元素的时候来使用的

### React的生命周期函数
生命周期函数是指在某一个时刻组件会自动调用执行的函数 <br />
lnitialization 初始化  <br />

Mountuing 挂载  （组件第一次挂载的流程） <br />
* componentWillMount(){} 在组件即将被挂载到页面的时刻自动执行  <br />
* render(){}    页面的挂载  <br />
* componentDidMount(){} 组件被挂载到页面之后自动执行  <br />

Updation  组件更新  <br />
props <br />
*  componentWillReceiveProps(){}  当一个组件从父组件接受了参数  <br />
只要父组件的render函数被重新执行了，子组件的这个生命周期函数被执行 <br />
如果这个组件第一次存在于父组件中，不会被执行 <br />
如果这个组件之前已经存在于父组件中，才会被执行 <br />
* shouldComponentUpdate(){return true}  组件被更新之前，他会自动被执行 true更新false不更新 <br />
* componentWillUpdate(){}   组件被更新之前，它会自动执行，但是他在shouldComponentUpdate之后被执行，<br />
//如果shouldComponentUpdate返回true它才执行，如果返回false，这个函数就不会被执行<br />
* render(){} <br />
* componentDidUpdate(){}   组件更新完成之后，他会被执行 <br />
states  <br />
* shouldComponentUpdate(){return true}  组件被更新之前，他会自动被执行 true更新false不更新  <br />
* componentWillUpdate(){}   组件被更新之前，它会自动执行，但是他在shouldComponentUpdate之后被执行，  <br />
//如果shouldComponentUpdate返回true它才执行，如果返回false，这个函数就不会被执行  <br />
* render(){}  <br />
* componentDidUpdate(){}   组件更新完成之后，他会被执行  <br />

Unmounting  组件去除  <br />
* componentWillUnmount(){}   当这个组件即将被从页面中剔除的时候，会被执行  <br />

 **每一个组件都有这么多生命周期函数，不是就一个父组件有**

 ### 生命周期函数的使用场景
父组件数据变化，父组件render函数被执行，子组件render函数也被执行。 <br />
子组件shouldComponentUpdate(){return false} 提升了性能 （不是最优的写法）<br />
正确的写法在TodoItem.js页面<br />
一般来说，请求ajax数据，会放在componentDidMount函数里，做ajax请求的发送<br />
ajax请求也可以放在constructor <br />
安装yarn add axios 重新启动服务器yarn start

### 使用Charles进行接口数据模拟
Charles的使用和下载链接 <br />
https://www.axihe.com/charles/charles/free-use.html   <br />



