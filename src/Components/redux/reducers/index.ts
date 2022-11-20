import { combineReducers } from "redux";
import quizInfo from "./quizInfo";
import themeSwitch from "./theme";

const rootReducer = combineReducers({
  quizInfo,
  themeSwitch,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
