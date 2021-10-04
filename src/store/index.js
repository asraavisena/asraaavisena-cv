import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import skillsReducer from "./skills/reducer";
import educationsReducer from "./educations/reducer";

const store = createStore(
  combineReducers({
    skills: skillsReducer,
    educations: educationsReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
