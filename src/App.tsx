// import * as React from "react";
// import { render } from "react-dom";
// import { BrowserRouter, Route, Link } from "react-router-dom";

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
import * as React from 'react'
import ReactDOM = require('react-dom')
//React-Router
import { Link, Route, HashRouter, Redirect, Switch } from 'react-router-dom'

var Home = require('./components/Home').default
var About = require('./components/About').default
var Topics = require('./components/Topics').default
var Error404 = require('./components/Error404').default

var style = require("./css/App.css")

class App extends React.Component {
    render() {
        return (
            <HashRouter >
                <div className={style.fit_width_column_center_page}>

                    <header className={style.wrap_height_row_center_div} >
                        <p>Hello</p>
                        <p>,</p>
                        <p> World </p>
                        <p> I'm </p>
                        <p>coming</p>

                    </header>

                    <div>
                        <ul>
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/about">关于</Link></li>
                            <li><Link to="/about/topics">主题列表</Link></li>
                        </ul>
                    </div>

                    <div className={style.fit_width_column_center_page} >

                        <Route exact path="/404" component={Error404} />

                        <Switch>
                            <Route path="/about/topics" component={Topics} />
                            <Route path="/about" component={About} />
                            <Route exact path="/" component={Home} />
                            <Redirect to="/404" />
                        </Switch>

                    </div>

                    <footer className={style.wrap_height_row_center_div}>
                        <p>Good Bye </p>
                        <p> Beautiful </p>
                        <p>  World .</p>
                    </footer>

                </div>
            </HashRouter>
        )

    }
}

ReactDOM.render(<App />, document.getElementById('content'))