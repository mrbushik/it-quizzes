import React, { useEffect, useState } from "react";
import axios from "axios";

const EducationPage: React.FC = () => {
  const EDUCATION_INFO_URL =
    "https://quiz-61792-default-rtdb.firebaseio.com/education/.json";
  const [educationInfo, setEducationInfo] = useState();

  useEffect(() => {
    axios
      .get(EDUCATION_INFO_URL)
      .then((response) => setEducationInfo(response.data));
  }, []);

  return <div></div>;
};

export default EducationPage;
