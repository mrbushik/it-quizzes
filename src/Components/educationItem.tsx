import React from "react";

interface educationItemProps {
  language: string;
  description: string;
  link: string;
}

const EducationItem: React.FC<educationItemProps> = ({
  language,
  link,
  description,
}) => {
  return (
    <div>
      <a href={link}>{description}</a>
    </div>
  );
};

export default EducationItem;
