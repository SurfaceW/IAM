// @flow
import { connect } from 'react-redux';
import { flow } from 'lodash';
import Home from '../components/Home';
import { changePoints } from '../actions/points';

const add = (a, b) => a + b;
const formatDate = (item, key) => {
  item.displayName = new Date(key).getDate() + 1;
  return item;
};

const calculateSum = (item) => {
  item.sum = item.sum || Object.keys(item.points).map(key => item.points[key]).reduce(add);
  return item;
};

const mapDispatchToProps = (dispatch) => ({
  onMarkRingChange: (event) => dispatch(changePoints(event))
});

const mapStateToProps = ({ points }) => ({
  today: points.today,
  data: Object.keys(points.data)
    .map(key => flow(formatDate, calculateSum)(points.data[key], key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

