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
  const handleColor = (index: number) => {
    if (index === answerNumber)
      return "form-check pointer mb-4 bg-white p-2 d-flex align-items-center border border-primary";
    return "form-check pointer mb-4 bg-white p-2 d-flex align-items-center ";
  };

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
      <div className="bg-light p-5 me-3 ">
        <div className={handleColor(1)} onClick={() => onChange(1)}>
          <div>
            <input
              className="form-check-input ms-0 me-3"
              type="radio"
              checked={answerNumber === 1 ? true : false}
              onChange={onChange.bind(null, 1)}
            />
          </div>
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {data[currentQuestion].answer1}
          </label>
        </div>
        <div className={handleColor(2)} onClick={() => onChange(2)}>
          <div>
            <input
              className="form-check-input ms-0 me-3"
              type="radio"
              checked={answerNumber === 2 ? true : false}
              onChange={onChange.bind(null, 2)}
            />
          </div>
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            {data[currentQuestion].answer2}
          </label>
        </div>
        {data[currentQuestion].answer3 && (
          <div className={handleColor(3)} onClick={() => onChange(3)}>
            <div>
              <input
                className="form-check-input ms-0 me-3"
                type="radio"
                checked={answerNumber === 3 ? true : false}
                onChange={onChange.bind(null, 3)}
              />
            </div>
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              {data[currentQuestion].answer3}
            </label>
          </div>
        )}
        {data[currentQuestion].answer4 && (
          <div className={handleColor(4)} onClick={() => onChange(4)}>
            <div>
              <input
                className="form-check-input ms-0 me-3"
                type="radio"
                checked={answerNumber === 4 ? true : false}
                onChange={onChange.bind(null, 4)}
              />
            </div>
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              {data[currentQuestion].answer4}
            </label>
          </div>
        )}
      </div>
      <button
        className="btn btn-primary mt-5 float-end me-5"
        onClick={newQuestion}
      >
        Ответить
      </button>
    </div>
  );
};

export default QuizItem;
