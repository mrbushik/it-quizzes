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
  console.log(correctAnswer[0].answers[1]);
  return (
    <div>
      {data.map((item: any, index: number) => (
        <CorrectAnswers
          key={index}
          question={item.question}
          answer1={item.answer1}
          answer2={item.answer2}
          answer3={item.answer3}
          answer4={item.answer4}
          correctAnswer={correctAnswer[0].answers[index]}
        />
      ))}
    </div>
  );
};

export default QuizResult;
