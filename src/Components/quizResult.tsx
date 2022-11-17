import React from "react";
import CorrectAnswers from "./correctAnswers";

// type answers = {
//
// }

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
  const userCorrectAnswers: number = correctAnswer[0].answers.reduce(
    (acc: number, item: number, index: number) =>
      item === answers[index] ? acc + 1 : acc,
    0
  );

  let percentageRatio: number = Math.trunc(
    (userCorrectAnswers / data.length) * 100
  );

  return (
    <div>
      <h1>Ваш результат {percentageRatio}%</h1>
      <h3>Количество правильных ответов: {userCorrectAnswers}</h3>
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
    </div>
  );
};

export default QuizResult;
