import React from "react";

interface quizItemProps {
  data: any;
  currentQuestion: number;
  newQuestion?: () => void;
  onChange: (value: number) => void;
  answerNumber: number | undefined;
}

const QuizItem: React.FC<quizItemProps> = ({
  data,
  currentQuestion,
  newQuestion,
  onChange,
  answerNumber,
}) => {
  const q = 1;
  return (
    <div>
      <div>
        <h5 className="mt-3 text-primary">
          Вопрос {currentQuestion + 1} | {data.length}
        </h5>
      </div>
      <h4 className="mt-3 text-center mb-4 fw-semibold">
        {data[currentQuestion].question}
      </h4>
      <div className="form-check">
        {q && (
          <input
            className="form-check-input"
            type="radio"
            checked={answerNumber === 1 ? true : false}
            onChange={onChange.bind(null, 1)}
          />
        )}
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          {data[currentQuestion].answer1}
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          checked={answerNumber === 2 ? true : false}
          onChange={onChange.bind(null, 2)}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          {data[currentQuestion].answer2}
        </label>
      </div>
      {data[currentQuestion].answer3 && (
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            checked={answerNumber === 3 ? true : false}
            onChange={onChange.bind(null, 3)}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            {data[currentQuestion].answer3}
          </label>
        </div>
      )}
      {data[currentQuestion].answer4 && (
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            checked={answerNumber === 4 ? true : false}
            onChange={onChange.bind(null, 4)}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            {data[currentQuestion].answer4}
          </label>
        </div>
      )}
      <div
        className="btn btn-primary mt-4 float-end me-3"
        onClick={newQuestion}
      >
        Ответить
      </div>
    </div>
  );
};

export default QuizItem;
