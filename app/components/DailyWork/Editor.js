import React, { Component, PropTypes } from 'react';
import { Progress, Button } from 'antd';
import styles from '../Home.css';

const { Group } = Button;


export default class MarkEditor extends Component {

  static defaultProps = {
    title: 'Your Goal',
    percent: 50,
    onChange: () => {},
  }

  static propTypes = {
    title: PropTypes.string,
    percent: PropTypes.number,
    onChange: PropTypes.func,
  }

  render() {
    const { title, percent, onChange } = this.props;
    return (
      <div className={styles.markEditor}>
        <Progress
          type="circle"
          percent={percent}
          className={styles.editorRing}
          format={p => p >= 100 ? 'Perfect' : `${p}%`}
        />
        <div>
          <div className={styles.editorRingTitle}>{title.toUpperCase()}</div>
          <Group>
            <Button
              type="ghost" onClick={onChange.bind(this, {
                type: 'decline',
                title,
                percent,
              })} icon="minus"
            />
            <Button
              type="ghost" onClick={onChange.bind(this, {
                type: 'increase',
                title,
                percent,
              })} icon="plus"
            />
          </Group>
        </div>
      </div>
    );
  }
}
