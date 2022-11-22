import React from "react";
import { educationItem } from "./interfaces";

const EducationItem: React.FC<educationItem> = ({
  language,
  link,
  description,
  img,
}) => {
  return (
    <div className="d-flex mt-3 justify-content-center align-items-center">
      <div>
        <a href={link} className="text-decoration-none text-dark">
          {description}
        </a>
      </div>
      <div className="ms-3">
        <img alt={language} src={img} className="education-img" />
      </div>
    </div>
  );
};

export default EducationItem;
