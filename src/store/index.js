import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import skillsReducer from "./skills/reducer";
import educationsReducer from "./educations/reducer";
import workExperiencesReducer from "./workexperiences/reducer";

const store = createStore(
  combineReducers({
    skills: skillsReducer,
    educations: educationsReducer,
    workExperiences: workExperiencesReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
