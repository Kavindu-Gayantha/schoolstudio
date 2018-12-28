import '../node_modules/react-app-polyfill/ie9';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
import './index.css';

// class HelloMessage extends React.Component {
//     render() {
//       return <div>Hello {this.props.name}</div>;
//     }
// }

const handleClick = () => {
    console.log("Bad Person.");
  };

ReactDOM.render(
    <Button onClick={handleClick}>Welcome Back</Button>
    ,
    document.getElementById("root")
);