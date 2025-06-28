"use client";

import React, { useState } from "react";
import style from "./page.module.scss";
import backImg from "../../../public/motivationImgs/background.png";

interface MotivationCardProps {
  title: string;
  imgPath: string;
}

const MotivationCard: React.FC<MotivationCardProps> = ({ title, imgPath }) => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return (
    <div
      className={style.motivationContainer}
      style={{
        backgroundImage: `url(${imgPath.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={style.motivationContent}
        style={{
          backgroundImage: `url(${backImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p>
          <span>Wow!</span>
          {title}
        </p>
        <button
          onClick={() => (
            localStorage.setItem("regTime", JSON.stringify({ isOpen: "1", time: "0" })),
            setIsVisible(false)
          )}
        >
          <svg
            className={style.closeSvg}
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="1"
              x2="9"
              y2="9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="1"
              y1="9"
              x2="9"
              y2="1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MotivationCard;
