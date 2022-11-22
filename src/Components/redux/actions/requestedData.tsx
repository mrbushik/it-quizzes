import { quizItem } from "../../interfaces";
import axios from "axios";

export const quizzesData = (theme: quizItem[]) => ({
  type: "CHANGE_QUIZZES_DATA",
  payload: theme,
});

export const educationData = (theme: quizItem[]) => ({
  type: "CHANGE_EDUCATION_DATA",
  payload: theme,
});

export const quizzesRequest = (url: string) => async (dispatch: any) => {
  await axios
    .get(url)
    .then((response) => dispatch(quizzesData(Object.values(response.data))))
    .catch((error) => {});
};

export const educationItemsRequest = (url: string) => async (dispatch: any) => {
  await axios
    .get(url)
    .then((response) => dispatch(educationData(Object.values(response.data))))
    .catch((error) => {});
};
