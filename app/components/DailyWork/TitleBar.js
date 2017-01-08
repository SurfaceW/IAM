import React, { Component } from 'react';
import { Icon } from 'antd';
import styles from '../Home.css';

export default class TitleBar extends Component {
  render() {
    return (
      <div className={styles.titleBar}>
        <Icon
          type="clock-circle-o" style={{ fontSize: '16px' }}
        />
        <span>Hello, SurfaceW :)</span>
      </div>
    );
  }
}
