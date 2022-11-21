import { quizItem } from "../../interfaces";

export const quizzesData = (theme: quizItem[]) => ({
  type: "CHANGE_QUIZZES_DATA",
  payload: theme,
});
export const educationData = (theme: quizItem[]) => ({
  type: "CHANGE_EDUCATION_DATA",
  payload: theme,
});
