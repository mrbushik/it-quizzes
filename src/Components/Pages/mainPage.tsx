import React, { useEffect } from "react";
import axios from "axios";
import Quiz from "../quiz";
import { useDispatch, useSelector } from "react-redux";
import { quizzesData } from "../redux/actions/requestedData";
import { quizItem } from "../interfaces";

type quiz = {
  quizName?: string;
  quizImg?: string;
  quizDescription?: string;
};

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const quizzesList: quizItem[] = useSelector(
    (state: any) => state.requestData.quizzesData
  );

  const ALL_QUIZES_URL: string =
    "https://quiz-61792-default-rtdb.firebaseio.com/quizesItems/.json";

  useEffect(() => {
    getTests();
  }, []);

  const getTests = () => {
    axios
      .get(ALL_QUIZES_URL)
      .then((response) => dispatch(quizzesData(Object.values(response.data))));
  };

  console.log(quizzesList);

  return (
    <div className="mt-3 d-flex flex-wrap justify-content-center">
      {!!quizzesList.length &&
        quizzesList.map((item, index) => (
          <Quiz
            key={index}
            quizName={item.quizName}
            quizImg={item.quizImg}
            quizDescription={item.quizDescription}
            index={index}
          />
        ))}
    </div>
  );
};

export default MainPage;
