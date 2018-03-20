"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
class MyClass extends React.Component {
    render() {
        return React.createElement("h1", null, "\u6D4B\u8BD5ing");
    }
}
ReactDOM.render(React.createElement(MyClass, null), document.getElementById('content'));
