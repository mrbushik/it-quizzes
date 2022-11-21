import { combineReducers } from "redux";
import quizInfo from "./quizInfo";
import themeSwitch from "./theme";
import requestData from "./requestedData";

const rootReducer = combineReducers({
  quizInfo,
  themeSwitch,
  requestData,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
