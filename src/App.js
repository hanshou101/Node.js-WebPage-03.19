"use strict";
// import * as React from "react";
// import { render } from "react-dom";
// import { BrowserRouter, Route, Link } from "react-router-dom";
Object.defineProperty(exports, "__esModule", { value: true });
// const PrimaryLayout = () =>
//     <div className="primary-layout">
//         <header>Our React Router 4 App</header>
//         <ul>
//             <li>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//                 <Link to="/User">User</Link>
//             </li>
//         </ul>
//         <main>
//             <Route path="/" exact component={HomePage} />
//             <Route path="/user" component={UsersPage} />
//         </main>
//     </div>;
// const HomePage = () => <h1>Home Page</h1>;
// const UsersPage = () => <h1>User Page</h1>;
// const App = () =>
//     <BrowserRouter>
//         <PrimaryLayout />
//     </BrowserRouter>;
// render(<App />, document.getElementById("content"));
//React基本
const React = require("react");
const ReactDOM = require("react-dom");
//React-Router
const react_router_dom_1 = require("react-router-dom");
var Home = require('./components/Home').default;
var About = require('./components/About').default;
var Topics = require('./components/Topics').default;
var Error404 = require('./components/Error404').default;
var style = require("./css/App.css");
class App extends React.Component {
    render() {
        return (React.createElement(react_router_dom_1.HashRouter, null,
            React.createElement("div", { className: style.fit_width_column_center_page },
                React.createElement("header", { className: style.wrap_height_row_center_div },
                    React.createElement("p", null, "Hello"),
                    React.createElement("p", null, ","),
                    React.createElement("p", null, " World "),
                    React.createElement("p", null, " I'm "),
                    React.createElement("p", null, "coming")),
                React.createElement("div", null,
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/" }, "\u9996\u9875")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/about" }, "\u5173\u4E8E")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/about/topics" }, "\u4E3B\u9898\u5217\u8868")))),
                React.createElement("div", { className: style.fit_width_column_center_page },
                    React.createElement(react_router_dom_1.Route, { exact: true, path: "/404", component: Error404 }),
                    React.createElement(react_router_dom_1.Switch, null,
                        React.createElement(react_router_dom_1.Route, { path: "/about/topics", component: Topics }),
                        React.createElement(react_router_dom_1.Route, { path: "/about", component: About }),
                        React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Home }),
                        React.createElement(react_router_dom_1.Redirect, { to: "/404" }))),
                React.createElement("footer", { className: style.wrap_height_row_center_div },
                    React.createElement("p", null, "Good Bye "),
                    React.createElement("p", null, " Beautiful "),
                    React.createElement("p", null, "  World .")))));
    }
}
ReactDOM.render(React.createElement(App, null), document.getElementById('content'));
