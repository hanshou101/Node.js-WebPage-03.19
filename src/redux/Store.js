"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 原生React区域
 */
const React = require("react");
const ReactDOM = require("react-dom");
/**
 * Redux区域
 */
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
/**
 * Router区域
 */
// import { Router, Route  /* , browserHistory */ } from 'react-router'    //react-router-dom更为强大，先进
const react_router_dom_1 = require("react-router-dom"); //如果你要Router，必须添加histroy属性
const react_router_redux_1 = require("react-router-redux");
/**
 * 用Router_4.0+history+Redux，实现“时间旅行”
 */
const react_router_redux_2 = require("react-router-redux"); //引入时间旅行的新组件
const createBrowserHistory_1 = require("history/createBrowserHistory");
/**
 * 自己写的Reducer
 */
var my_reducer_list = require('./Reducer');
/**
 * [在store建立之前]
 * 创建“时间旅行”的history历史。（比如浏览器的历史进程）
 */
const history = createBrowserHistory_1.default();
/**
 * [在store建立之前]
 * 创建中间件，进行“时间旅行”的Navigatioin导航的拦截和分发Actions操作
 */
const middleware = react_router_redux_2.routerMiddleware(history);
/**
 * 用Reducer，初始化Store
 */
const my_store = redux_1.createStore(redux_1.combineReducers(Object.assign({}, my_reducer_list, { routing: react_router_redux_1.routerReducer })), 
//额外功能：这里是和“时间旅行”的history相关的
redux_1.applyMiddleware(middleware));
/**
 * 自己的一些Component
 */
var Home = require('../components/Home').default;
var About = require('../components/About').default;
var Topics = require('../components/Topics').default;
var Error404 = require('../components/Error404').default;
/**
 * 进行渲染：
 * 1.最外层，Provider，参数设置为自己的store
 * 2.
 * 3.
 */
var render_fun = () => ReactDOM.render(React.createElement(react_redux_1.Provider, { store: my_store },
    React.createElement(react_router_redux_2.ConnectedRouter, { history: history },
        React.createElement("div", null,
            React.createElement("ol", null,
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/" }, "to \u9996\u9875")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/about" }, "to \u5173\u4E8E")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/topics" }, "to \u4E3B\u9898")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/404" }, "to \u9519\u8BEF"))),
            React.createElement("button", { onClick: () => my_store.dispatch({
                    type: 'ADD',
                    payload: 2
                }) }, "\u5207\u6362\u56DE\u8C03\uFF1A\u52A0\u6CD5"),
            React.createElement("button", { onClick: () => my_store.dispatch({
                    type: 'DEDUCE',
                    payload: 1
                }) }, "\u5207\u6362\u56DE\u8C03\uFF1A\u51CF\u6CD5"),
            React.createElement("button", { onClick: () => my_store.dispatch({
                    type: 'MULTI',
                    payload: 1.5
                }) }, "\u5207\u6362\u56DE\u8C03\uFF1A\u4E58\u6CD5"),
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Home }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/about", component: About }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/topics", component: Topics }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/404", component: Error404 }),
                React.createElement(react_router_dom_1.Redirect, { to: "/404" }))))), document.getElementById('content'));
render_fun(); //手动调用整体渲染方法。
/**
 * 为Store，添加每次dispatch分发时的触发回调函数
 */
const unsubscribe_fun = my_store.subscribe(() => {
    render_fun();
    log_fun();
});
// unsubscribe_fun()               //手动解除Store的触发回调函数。
var log_fun = () => {
    /**
     * 测试代码………………………………
     */
    const old_state = my_store.getState(); //获得当前state值。
    console.log("old state : " + JSON.stringify(old_state["math"]));
    // my_store.dispatch({                     //发送加法信息。
    //     type: 'ADD',
    //     payload: 2
    // })
    // my_store.dispatch({                     //发送减法信息。
    //     type: 'DEDUCE',
    //     payload: 1
    // })
    // my_store.dispatch({                     //发送乘法信息。
    //     type: 'MULTI',
    //     payload: 1.5
    // })
    const new_state = my_store.getState();
    console.log("new state : " + JSON.stringify(new_state["math"]));
};
// Demo1
// const Counter = ({ value, onIncrement, onDecrement }) => (
//     <div>
//     <h1>{value}</h1>
//     <button onClick={onIncrement}>+</button>
//     <button onClick={onDecrement}>-</button>
//     </div>
//   );
//   const reducer = (state = 0, action) => {
//     switch (action.type) {
//       case 'INCREMENT': return state + 1;
//       case 'DECREMENT': return state - 1;
//       default: return state;
//     }
//   };
//   const store = createStore(reducer);
//   const render = () => {
//     ReactDOM.render(
//       <Counter
//         value={store.getState()}
//         onIncrement={() => store.dispatch({type: 'INCREMENT'})}
//         onDecrement={() => store.dispatch({type: 'DECREMENT'})}
//       />,
//       document.getElementById('content')
//     );
//   };
//   render();
//   store.subscribe(render);
