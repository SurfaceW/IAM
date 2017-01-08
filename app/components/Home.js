import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import TitleBar from './DailyWork/TitleBar';
import Editor from './DailyWork/Editor';
import Graph from './DailyWork/Graph';
import styles from './Home.css';

export default class Home extends Component {

  static propTypes = {
    onMarkRingChange: PropTypes.func,
    today: PropTypes.object,
    data: PropTypes.array
  };

  render() {
    const { onMarkRingChange, today, data } = this.props;
    return (
      <div className={styles.globalContainer}>
        <div className={styles.container} />
        <div className={styles.contentContainer}>
          <TitleBar />
          <div className={styles.editorContainer}>
            <Editor title="ETIWTT" percent={today.ETIWTT} onChange={onMarkRingChange} />
            <Editor title="ORDERIFY" percent={today.ORDERIFY} onChange={onMarkRingChange} />
          </div>
          <div className={styles.editorContainer}>
            <Editor title="SELFORDER" percent={today.SELFORDER} onChange={onMarkRingChange} />
            <Editor title="METAORDER" percent={today.METAORDER} onChange={onMarkRingChange} />
          </div>
          <div className={styles.graphContainer}>
            <Graph data={data} />
          </div>
        </div>
      </div>
    );
  }
}
