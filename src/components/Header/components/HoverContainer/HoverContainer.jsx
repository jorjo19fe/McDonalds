import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

export default function HoverContainer(data) {
  const newData = data === undefined ? [] : data.data;
  // console.log(newData);
  const tmpArr = newData.map((item) => (
    <div
      key={item.link}
      onMouseEnter={data.hover}
      onMouseLeave={data.unHover}
      className={style.eachLink}
    >
      <Link to={item.link}>
        <div className={style.imgContainer}>
          <img src={item.img} alt="" />
        </div>
        <p>{item.title}</p>
      </Link>
    </div>
  ));
  return <div className={style.hoverConatiner}>{tmpArr}</div>;
}
