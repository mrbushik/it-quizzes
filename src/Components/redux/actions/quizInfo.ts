export const questionIndex = (theme: number) => ({
  type: "QUESTION_INDEX",
  payload: theme,
});

export const answersUser = (theme: number[]) => ({
  type: "CHANGE_ANSWERS",
  payload: theme,
});

export const testIndex = (theme: string) => ({
  type: "CHANGE_TEST_INDEX",
  payload: theme,
});
