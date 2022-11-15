import React, { useState } from "react";

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
  console.log(data.quizes.length);

  return (
    <div className="ms-3">
      {data.quizes.length > currentQuestion &&
        currentQuestion !== data.quizes.length - 1 && (
          <div>
            <h4 className="mt-3 text-center mb-4">
              {data.quizes[currentQuestion].question}
            </h4>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                checked={answerNumber === 1 ? true : false}
                onChange={onChange.bind(null, 1)}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                {data.quizes[currentQuestion].answer1}
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
                {data.quizes[currentQuestion].answer2}
              </label>
            </div>
            {data.quizes[currentQuestion].answer3 && (
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={answerNumber === 3 ? true : false}
                  onChange={onChange.bind(null, 3)}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  {data.quizes[currentQuestion].answer3}
                </label>
              </div>
            )}
            {data.quizes[currentQuestion].answer4 && (
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={answerNumber === 4 ? true : false}
                  onChange={onChange.bind(null, 4)}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  {data.quizes[currentQuestion].answer4}
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
        )}
    </div>
  );
};

export default QuizBody;
