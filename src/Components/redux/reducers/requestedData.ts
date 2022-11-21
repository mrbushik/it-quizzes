const initialState = {
  quizzesData: [],
  educationData: [],
};

const requestData = (state = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_QUIZZES_DATA":
      return {
        ...state,
        quizzesData: action.payload,
      };
    case "CHANGE_EDUCATION_DATA":
      return {
        ...state,
        educationData: action.payload,
      };

    default:
      return state;
  }
};

export default requestData;
