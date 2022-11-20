import React from "react";
import { Link } from "react-router-dom";

type QuizProps = {
  quizName?: string;
  quizImg?: string;
  quizDescription?: string;
  index?: number;
};

const Quiz: React.FC<QuizProps> = ({
  quizName,
  quizImg,
  quizDescription,
  index,
}) => {
  return (
    <Link to={`/${index}`} className="text-decoration-none">
      <div className="quiz-item pt-3 text-dark">
        <img src={quizImg} className="quiz-img mb-3" />
        <h5 className="px-2 fw-semibold">{quizName}</h5>
        <p className="white-text">{quizDescription}</p>
      </div>
    </Link>
  );
};

export default Quiz;
