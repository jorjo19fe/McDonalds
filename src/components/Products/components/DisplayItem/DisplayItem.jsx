import React from "react";
import style from "./style.module.css"

export default function DisplayItem(props) {
  return (
    <div className={style.item}>
      <img src={props.img} alt="" />
      <p>{props.name}</p>
    </div>
  );
}
