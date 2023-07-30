import { useState } from "react";
import style from "./style.module.css";
import VideoContent from "../VideoContent/VideoContent";

export default function AppPage({ data }) {
  console.log(data);
  let newData = data.usage.map((item) => {
    return (
      <VideoContent
        backgroundLink={item.backgroundLink}
        videoLink={item.videoLink}
        height="100px"
        width="100px"
      />
    );
  });
  console.log(newData);
  return (
    <div className={style.container}>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
      <section></section>
      <section></section>
      {newData}
    </div>
  );
}
