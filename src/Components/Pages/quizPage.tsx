import React, { useEffect, useState } from "react";
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";
import QuizBody from "../quizBody";
import { useDispatch } from "react-redux";
import { answersUser, questionIndex } from "../redux/actions/quizInfo";

const QuizPage: React.FC = () => {
  const QUIZE_URL: string =
    "https://quiz-61792-default-rtdb.firebaseio.com/quizzes/.json";
  const params: any = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const [quize, setQuize] = useState([]);
  const [answerNumber, setAnswerNumber] = useState<number | undefined>();

  useEffect(() => {
    axios.get(QUIZE_URL).then((response: any) => {
      setQuize(Object.values(response.data));
    });
  }, []);

  useEffect(() => {
    dispatch(questionIndex(0));
    dispatch(answersUser([]));
  }, [location.pathname]);

  const handleChange = (value: number) => {
    setAnswerNumber(value);
  };

  return (
    <div>
      {!!quize.length && (
        <QuizBody
          data={quize[params.Id]}
          answerNumber={answerNumber}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default QuizPage;
