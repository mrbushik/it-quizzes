import React from "react";
import CorrectAnswers from "./correctAnswers";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {questionIndex,  answersUser} from "./redux/actions/quizInfo";

interface quizResultProps {
  answers: Array<number>;
  correctAnswer: any;
  // data: Array<object>
  data: any;
}

const QuizResult: React.FC<quizResultProps> = ({
  answers,
  correctAnswer,
  data,
}) => {
  const dispatch = useDispatch();

  const userCorrectAnswers: number = correctAnswer[0].answers.reduce(
    (acc: number, item: number, index: number) =>
      item === answers[index] ? acc + 1 : acc,
    0
  );

  let percentageRatio: number = Math.trunc(
    (userCorrectAnswers / data.length) * 100
  );

  const handleResetTestData = () => {
      dispatch(questionIndex(0))
      dispatch(answersUser([]))
  };

  return (
    <div>
      <h1 className="text-center mt-4">Ваш результат {percentageRatio}%</h1>
      <h4 className="mt-5">
        Количество правильных ответов: {userCorrectAnswers}
      </h4>
      {data.map((item: any, index: number) => (
        <CorrectAnswers
          key={index}
          question={item.question}
          answer1={item.answer1}
          answer2={item.answer2}
          answer3={item.answer3}
          answer4={item.answer4}
          questionIndex={index}
          userAnswer={answers[index]}
          correctAnswer={correctAnswer[0].answers[index]}
        />
      ))}
      <div className="d-flex flex-wrap">
        <button className="btn btn-primary mb-4 ms-3 ">
          <Link to="/" className="text-white text-decoration-none">
            На главную
          </Link>
        </button>
        <button className="btn btn-primary mb-4 ms-3 " onClick={handleResetTestData}>Пройти еще раз</button>
      </div>
    </div>
  );
};

export default QuizResult;
