import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import skillsReducer from "./skills/reducer";

const store = createStore(
  combineReducers({
    skills: skillsReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
