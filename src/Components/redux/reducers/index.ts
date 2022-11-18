import { combineReducers } from "redux";
import quizInfo from "./quizInfo";

const rootReducer = combineReducers({
  quizInfo,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
