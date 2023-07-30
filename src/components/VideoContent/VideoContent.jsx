import { useState } from "react";
import style from "./style.module.css";

export default function VideoContent({
  backgroundLink,
  videoLink,
  width,
  height,
  curved,
}) {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className={style.video}
      style={{
        background: ` url(${backgroundLink})`,
        width: width,
        height: height,
        borderRadius: curved ? "20px" : "0px",
      }}
    >
      <div
        className={style.playButton}
        onClick={() => {
          setClicked(true);
        }}
      >
        <img src="https://mcdonalds.ge/assets/images/play.svg" alt="" />
      </div>
      {clicked ? (
        <section className={style.videoContent}>
          <div
            onClick={() => {
              setClicked(false);
            }}
          >
            <img src="https://mcdonalds.ge/assets/images/close.png" alt="" />
          </div>
          <iframe
            src={videoLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
}
