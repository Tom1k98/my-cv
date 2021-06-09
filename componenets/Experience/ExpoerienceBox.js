import React from "react";
import expStyles from "./Experience.module.scss";
import { useInView } from "react-intersection-observer";
const ExpoerienceBox = ({ title, date, role, description }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className={inView && expStyles.content}>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{role}</p>
      <p>{description}</p>
    </div>
  );
};

export default ExpoerienceBox;
