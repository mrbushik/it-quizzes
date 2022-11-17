import React from "react";

interface correctAnswerProps {
  question: string;
  answer1: string;
  answer2: string;
  answer3?: string;
  answer4?: string;
  correctAnswer: any;
  userAnswer: number;
  questionIndex: number;
}

const CorrectAnswers: React.FC<correctAnswerProps> = ({
  question,
  answer1,
  answer2,
  answer3,
  answer4,
  correctAnswer,
  userAnswer,
  questionIndex,
}) => {
  const handleColor = (answerIndex: number) => {
    if (correctAnswer === answerIndex) return "text-success";
    if (userAnswer && userAnswer === answerIndex) return "text-danger";
  };

  return (
    <div className="my-50 p-4 me-3 bg-light">
      <h4 className="my-3 fw-semibold">
        №{questionIndex + 1} {question}
      </h4>
      <div className={handleColor(1)}>
        <p>{answer1}</p>
      </div>
      <div className={handleColor(2)}>
        <p>{answer2}</p>
      </div>
      {answer3 && (
        <div className={handleColor(3)}>
          <p>{answer3}</p>
        </div>
      )}
      {answer4 && (
        <div className={handleColor(4)}>
          <p>{answer4}</p>
        </div>
      )}
    </div>
  );
};

export default CorrectAnswers;
