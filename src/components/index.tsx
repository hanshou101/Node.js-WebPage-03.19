import * as React from 'react'

import ReactDOM = require('react-dom')


class MyClass extends React.Component {
    render() {
        return <h1>测试ing</h1>
    }
}

ReactDOM.render(<MyClass />, document.getElementById('content'))