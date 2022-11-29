import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import QuizBody from "../quizBody";
import { useDispatch, useSelector } from "react-redux";
import {
  answersUser,
  questionIndex,
  testIndex,
} from "../redux/actions/quizInfo";

const QuizPage: React.FC = () => {
  const testCurrentIndex: null | string = useSelector(
    (state: any) => state.quizInfo.testIndex
  );
  const QUIZ_URL: string =
    "https://quiz-61792-default-rtdb.firebaseio.com/quizzes/.json";

  const params: any = useParams();
  const dispatch = useDispatch();

  const [quiz, setQuiz] = useState([]);
  const [answerNumber, setAnswerNumber] = useState<number | undefined>();

  useEffect(() => {
    axios.get(QUIZ_URL).then((response: any) => {
      setQuiz(Object.values(response.data));
    });
    handleChangeCurrentTest();
  }, []);

  const handleChangeCurrentTest = () => {
    if (testCurrentIndex === params.Id) return;
    dispatch(testIndex(params.Id));
    dispatch(questionIndex(0));
    dispatch(answersUser([]));
  };

  const handleChange = (value: number) => {
    setAnswerNumber(value);
  };

  return (
    <div>
      {!!quiz.length && (
        <QuizBody
          data={quiz[params.Id]}
          answerNumber={answerNumber}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default QuizPage;
