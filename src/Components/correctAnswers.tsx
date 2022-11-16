import React from "react";

interface correctAnswerProps {
  question: string;
  answer1: string;
  answer2: string;
  answer3?: string;
  answer4?: string;
  correctAnswer: any;
}

const CorrectAnswers: React.FC<correctAnswerProps> = ({
  question,
  answer1,
  answer2,
  answer3,
  answer4,
  correctAnswer,
}) => {
  return (
    <div className="my-50 p-4 me-3 bg-light">
      <h4 className="my-3 fw-semibold">{question}</h4>
      <div className={correctAnswer === 1 ? "text-success" : ""}>
        <p>{answer1}</p>
      </div>
      <div className={correctAnswer === 2 ? "text-success" : ""}>
        <p>{answer2}</p>
      </div>
      {answer3 && (
        <div className={correctAnswer === 3 ? "text-success" : ""}>
          <p>{answer3}</p>
        </div>
      )}
      {answer4 && (
        <div className={correctAnswer === 4 ? "text-success" : ""}>
          <p>{answer4}</p>
        </div>
      )}
    </div>
  );
};

export default CorrectAnswers;
