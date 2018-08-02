import { combineReducers } from 'redux';
import { reducer as forms } from 'redux-form';


const allReducers = combineReducers({
  users: allReducers,
  form: forms,
});
export default allReducers;
