'use client';
import MotivationCard from "../motivationCard/page";

export default () => {
    const regTime: {
        time: Date,
        isOpen: string,
    } = JSON.parse(localStorage.getItem('regTime') ?? '{}');
    return (regTime.isOpen === '0' && new Date().getTime() - Number(regTime.time) >= 8640000000) ? <MotivationCard title=" You have been using the application for 100 days!" imgPath="./motivationImgs/motivationImg2.jpg" /> : null;
}