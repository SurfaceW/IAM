import { defer } from 'lodash';
import { setData } from '../store/pointsHandler';
import { getTimeStamp } from '../utils/dateUtils';

export const POINTS_CHANGE = 'POINTS_CHANGE';

export function changePoints(event) {
  return (dispatch, getState) => {
    dispatch({
      type: POINTS_CHANGE,
      event,
    });
    defer(() => {
      const points = getState().points;
      points.data[getTimeStamp(new Date())] = {
        points: points.today
      };
      // add today's data
      setData('ls', 'points', points);
    });
  };
}

