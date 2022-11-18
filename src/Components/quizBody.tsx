import React from "react";
import QuizResult from "./quizResult";
import QuizItem from "./quizItem";
import { useDispatch, useSelector } from "react-redux";
import { answersUser, questionIndex } from "./redux/actions/quizInfo";

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
  const dispatch = useDispatch();

  const quizAnswerNumber: number = useSelector(
    (state: any) => state.quizInfo.answerNumber
  );

  const userAnswers: Array<number> = useSelector(
    (state: any) => state.quizInfo.userAnswers
  );

  const newQuestion = () => {
    if (!answerNumber) return;
    const newAnswers: Array<number> = [...userAnswers, answerNumber];
    dispatch(answersUser(newAnswers));
    dispatch(questionIndex(quizAnswerNumber + 1));
    onChange(0);
  };

  return (
    <div className="ms-3">
      {data.quizes.length > quizAnswerNumber + 1 ? (
        <QuizItem
          data={data.quizes.slice(0, -1)}
          currentQuestion={quizAnswerNumber}
          newQuestion={newQuestion}
          onChange={onChange}
          answerNumber={answerNumber}
        />
      ) : (
        <QuizResult
          answers={userAnswers}
          correctAnswer={data.quizes.slice(-1)}
          data={data.quizes.slice(0, -1)}
        />
      )}
    </div>
  );
};

export default QuizBody;
