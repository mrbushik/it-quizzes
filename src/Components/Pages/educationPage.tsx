import React, { useEffect, useState } from "react";
import axios from "axios";
import { educationItem } from "../interfaces";
import EducationItem from "../educationItem";

const EducationPage: React.FC = () => {
  const EDUCATION_INFO_URL: string =
    "https://quiz-61792-default-rtdb.firebaseio.com/education/.json";
  const technologies: string[] = [
    "Все технологии",
    "Javascript",
    "TypeScript",
    "React",
  ];

  const [educationInfo, setEducationInfo] = useState<educationItem[]>([]);
  const [filteredTechnologyList, setFilteredTechnologyList] =
    useState<educationItem[]>(educationInfo);
  const [technologiesType, setTechnologiesType] = useState<string>(
    technologies[0]
  );

  const getDefaultValue = () => setFilteredTechnologyList(educationInfo);

  useEffect(() => {
    axios.get(EDUCATION_INFO_URL).then((response: any) => {
      setEducationInfo(Object.values(response.data));
    });
  }, []);

  useEffect(() => {
    getDefaultValue();
  }, [educationInfo]);

  const handleFilter = (type: string) => {
    setTechnologiesType(type);
    if (type === technologies[0]) return getDefaultValue();
    const targetList: educationItem[] = educationInfo.filter(
      (item: educationItem) => item.language === type
    );
    setFilteredTechnologyList(targetList);
  };

  return (
    <div className=" mt-5 mb-5">
      <h2 className="text-center fw-semibold mb-3">Учебник</h2>
      <p className="text-center px-3 pb-5 fs-5">
        Здесь собран материал для изучения или повторения основых концепций
        технологий, которые используются для web разработки
      </p>
      <div>
        <ul className="pointer education-list text-center p-0 pb-4">
          {technologies.map((item: string) => (
            <li
              key={item}
              className={`btn mx-2 mt-2 border border-0 text-white ${
                item === technologiesType ? "bg-primary" : "bg-secondary"
              } `}
              onClick={() => handleFilter(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {filteredTechnologyList?.map((item: educationItem, index: number) => (
        <EducationItem
          key={index}
          img={item.img}
          language={item.language}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default EducationPage;
