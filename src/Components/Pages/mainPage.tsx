import React, { useEffect, useState } from "react";
import axios from "axios";
import Quiz from "../quiz";

type quiz = {
  quizName?: string;
  quizImg?: string;
  quizDescription?: string;
};

const MainPage: React.FC = () => {
  const ALL_QUIZES_URL: string =
    "https://quiz-61792-default-rtdb.firebaseio.com/quizesItems/.json";
  const [quizes, setQuizes] = useState<quiz[]>([]);

  useEffect(() => {
    axios
      .get(ALL_QUIZES_URL)
      .then((response) => setQuizes(Object.values(response.data)));
  }, []);

  return (
    <div className="mt-3 d-flex flex-wrap justify-content-center">
      {!!quizes.length &&
        quizes.map((item, index) => (
          <Quiz
            key={index}
            quizName={item.quizName}
            quizImg={item.quizImg}
            quizDescription={item.quizDescription}
            index={index}
          />
        ))}
    </div>
  );
};

export default MainPage;
