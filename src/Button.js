import React, { Component } from 'react';
import styles from './Button.module.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <button className={styles.error}>{this.props.name}</button>;
  }
}

export default Button;