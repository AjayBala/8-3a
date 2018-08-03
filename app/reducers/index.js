import { combineReducers } from 'redux';
import { reducer as forms } from 'redux-form';
import userReducer from './user';

const allReducers = combineReducers({
  users: userReducer,
  form: forms,
});
export default allReducers;
