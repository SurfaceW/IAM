import { POINTS_CHANGE } from '../actions/points';
import { fetchData } from '../store/pointsHandler';

const INCREMENT = 5;
const initState = fetchData('ls', 'points') || {
  today: {
    ETIWTT: 50,
    ORDERIFY: 50,
    METAORDER: 50,
    SELFORDER: 50
  },
  data: {
    '2017-1-8': {
      sum: 0,
      points: {
        ETIWTT: 50,
        ORDERIFY: 50,
        METAORDER: 50,
        SELFORDER: 50
      }
    }
  }
};

export default function points(state = initState, action) {
  switch (action.type) {
    case POINTS_CHANGE:
      const { today } = state;
      const { title, type, percent } = action.event;
      today[title] = percent + (type === 'decline' ? (-INCREMENT) : INCREMENT);
      today[title] = today[title] >= 100 ? 100 : today[title];
      today[title] = today[title] <= 0 ? 0 : today[title];
      return Object.assign({}, state, { today });
    default:
      return state;
  }
}
