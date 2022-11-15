import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import QuizBody from "../quizBody";

const QuizPage: React.FC = () => {
  const QUIZE_URL: string =
    "https://quiz-61792-default-rtdb.firebaseio.com/quizzes/.json";
  const params: any = useParams();

  const [quize, setQuize] = useState([]);
  const [answerNumber, setAnswerNumber] = useState<number | undefined>();

  useEffect(() => {
    axios.get(QUIZE_URL).then((response: any) => {
      setQuize(Object.values(response.data));
    });
  }, []);

  const handleChange = (value: number) => {
    setAnswerNumber(value);
  };

  return (
    <div>
      {!!quize.length && (
        <QuizBody
          data={quize[0]}
          answerNumber={answerNumber}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default QuizPage;
