import React, { Component, PropTypes } from 'react';
import { pick } from 'lodash';

const G2 = window.G2;

function processData(data) {
  const ds = data.map(item => {
    const obj = Object.assign({}, item);
    Object.keys(item.points).forEach(i => { obj[i] = item.points[i]; });
    return pick(obj, ['sum', 'displayName', 'ETIWTT', 'METAORDER', 'SELFORDER', 'ORDERIFY']);
  });
  let frame = new G2.Frame(ds);
  frame = G2.Frame.combinColumns(frame, ['sum', 'ETIWTT', 'METAORDER', 'SELFORDER', 'ORDERIFY'], 'Points', 'Types', 'displayName');
  return frame;
}

export default class Graph extends Component {
  static defaultProps = {
    data: [],
  };

  static propTypes = {
    data: PropTypes.array,
  };

  componentDidMount() {
    this.renderChart();
  }

  componentWillReceiveProps(nextProps) {
    const data = processData(nextProps.data);
    this.chart.changeData(data);
  }

  renderChart() {
    const frame = processData(this.props.data);
    this.chart = new G2.Chart({
      id: 'pointsChart',
      width: 1080,
      height: 300
    });
    this.chart.source(frame, {
      displayName: {
        alias: 'Date'
      },
      Points: {
        alias: 'Marks',
      }
    });
    this.chart.areaStack().position('displayName*Points').color('Types');
    this.chart.render();
  }

  render() {
    return (
      <div id="pointsChart" />
    );
  }
}

