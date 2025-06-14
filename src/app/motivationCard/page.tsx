"use client";

import React, { useState } from "react";
import style from "./page.module.scss"
import img1 from "../../../public/motivationImgs/motivationImg1.jpg"


interface MotivationCardProps {
    title: string;
    imgPath: string;
}

const MotivationCard: React.FC<MotivationCardProps> = ({ }) => {
     const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;  
    return (
       <div className={style.motivationContainer} style={{ backgroundImage: `url(${img1.src})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className={style.motivationContent}>
                <p><span>Wow!</span> You have created your first shopping list!</p>
                <button onClick={() => setIsVisible(false)}>X</button>
            </div>
        </div>
    )
}

export default MotivationCard