import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

export default function HoverContainer({ data, hover, unHover }) {
  const tmpArr = data.map((item) => {
    return (
      <div key={item.link} className={style.eachLink}>
        <Link to={item.link}>
          {item.img == "all" ? (
            <button className={style.button}>{item.title}</button>
          ) : (
            <>
              <div className={style.imgContainer}>
                <img src={item.img} alt="" />
              </div>
              <p>{item.title}</p>
            </>
          )}
        </Link>
      </div>
    );
  });
  return (
    <div
      onMouseEnter={hover}
      onMouseLeave={unHover}
      className={style.hoverConatiner}
    >
      {tmpArr}
    </div>
  );
}
