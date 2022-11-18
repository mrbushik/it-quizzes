import { quizItemPayload } from "../types";

const initialState = {
  answerNumber: 0,
  userAnswers: [],
};
const quizInfo = (state = initialState, action: any) => {
  switch (action.type) {
    case "QUESTION_INDEX":
      return {
        ...state,
        answerNumber: action.payload,
      };
    case "CHANGE_ANSWERS":
      return {
        ...state,
        userAnswers: action.payload,
      };

    default:
      return state;
  }
};

export default quizInfo;
