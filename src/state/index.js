import { combineReducers } from 'redux';
import user, { authMiddleware } from './user';
import experiment, { middleware as expMiddleware } from './experiment';
import router, { middleware as routerMiddleware } from './routes';

export const middlewares = [authMiddleware, expMiddleware, routerMiddleware];

export default combineReducers({
  router,
  user,
  experiment,
});
