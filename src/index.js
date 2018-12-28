import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HelloMessage extends React.Component {
    render() {
      return <div>Hello {this.props.name}</div>;
    }
}

ReactDOM.render(
    <div>
    <h1>schoolstudio</h1>
    <HelloMessage name="Arunkumar"></HelloMessage>
    </div>,
    document.getElementById("root")
);