import React, { useEffect, useState } from "react";
import axios from "axios";
import Quiz from "../quiz";
import { answersUser, questionIndex } from "../redux/actions/quizInfo";
import { useDispatch } from "react-redux";

type quiz = {
  quizName?: string;
  quizImg?: string;
  quizDescription?: string;
};

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const ALL_QUIZES_URL: string =
    "https://quiz-61792-default-rtdb.firebaseio.com/quizesItems/.json";
  const [quizes, setQuizes] = useState<quiz[]>([]);

  useEffect(() => {
    getTests();
    handleResetTestData();
  }, []);

  const getTests = () => {
    axios
      .get(ALL_QUIZES_URL)
      .then((response) => setQuizes(Object.values(response.data)));
  };

  const handleResetTestData = () => {
    dispatch(questionIndex(0));
    dispatch(answersUser([]));
  };

  return (
    <div className="mt-3 d-flex flex-wrap justify-content-center">
      {!!quizes.length &&
        quizes.map((item, index) => (
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
