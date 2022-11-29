const storageAnswerNumber: number | null = Number(
  localStorage.getItem("answerNumber")
);
const storageUserAnswers: any = localStorage
  .getItem("userAnswers")
  ?.split(",")
  .map((item) => +item);
const testIndex: string | null = localStorage.getItem("testIndex");

const initialState = {
  answerNumber: storageAnswerNumber || 0,
  userAnswers: storageUserAnswers || [],
  testIndex: testIndex,
};
const quizInfo = (state = initialState, action: any) => {
  switch (action.type) {
    case "QUESTION_INDEX":
      localStorage.setItem("userAnswers", action.payload);
      return {
        ...state,
        answerNumber: action.payload,
      };
    case "CHANGE_ANSWERS":
      localStorage.setItem("answerNumber", action.payload);
      return {
        ...state,
        userAnswers: action.payload,
      };
    case "CHANGE_TEST_INDEX":
      localStorage.setItem("testIndex", action.payload);
      return {
        ...state,
        testIndex: action.payload,
      };

    default:
      return state;
  }
};

export default quizInfo;
