import React, { useState } from "react";
import QuizResult from "./quizResult";
import QuizItem from "./quizItem";

type quizBodyProps = {
  data: any;
  answerNumber: number | undefined;
  onChange(value: number): void;
};

const QuizBody: React.FC<quizBodyProps> = ({
  data,
  answerNumber,
  onChange,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const newQuestion = () => {
    if (!answerNumber) return;
    const newAnswers: Array<number> = [...answers, answerNumber];
    setAnswers(newAnswers);
    setCurrentQuestion((perv) => perv + 1);
    onChange(0);
  };

  return (
    <div className="ms-3">
      {data.quizes.length > currentQuestion + 1 ? (
        <QuizItem
          data={data.quizes.slice(0, -1)}
          currentQuestion={currentQuestion}
          newQuestion={newQuestion}
          onChange={onChange}
          answerNumber={answerNumber}
        />
      ) : (
        <QuizResult
          answers={answers}
          correctAnswer={data.quizes.slice(-1)}
          data={data.quizes.slice(0, -1)}
        />
      )}
    </div>
  );
};

export default QuizBody;
