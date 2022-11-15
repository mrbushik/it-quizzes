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
    <div className="quiz-item">
      <Link to={`/${index}`}>
        <img src={quizImg} className="quiz-img" />
        <h5>{quizName}</h5>
        <p>{quizDescription}</p>
      </Link>
    </div>
  );
};

export default Quiz;
