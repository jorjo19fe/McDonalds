import React from "react";
import style from "./Style.module.css";

export default function LinkedSection(props) {
  return (
    <div
      className={style.container}
      style={{ background: `url("${props.image}")` }}
    >
      <button className={style.button}>
        <p className={style.title}>{props.title}</p>
      </button>
    </div>
  );
}
