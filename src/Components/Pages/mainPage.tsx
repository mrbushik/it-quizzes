import React, { useEffect } from "react";
import Quiz from "../quiz";
import { useDispatch, useSelector } from "react-redux";
import { quizzesRequest } from "../redux/actions/requestedData";
import { quizItem } from "../interfaces";

const MainPage: React.FC = () => {
  const dispatch: any = useDispatch();
  const quizzesList: quizItem[] = useSelector(
    (state: any) => state.requestData.quizzesData
  );

  const ALL_QUIZES_URL: string =
    "https://quiz-61792-default-rtdb.firebaseio.com/quizesItems/.json";

  useEffect(() => {
    dispatch(quizzesRequest(ALL_QUIZES_URL));
  }, []);

  return (
    <div className="mt-3 d-flex flex-wrap justify-content-center">
      {!!quizzesList.length &&
        quizzesList.map((item, index) => (
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
