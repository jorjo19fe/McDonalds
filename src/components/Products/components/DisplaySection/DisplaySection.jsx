import React from "react";
import style from "./Style.module.css";
import { Link } from "react-router-dom";

export default function DisplaySection(props) {
  function DisplayItem(props) {
    return (
      <div className={style.item}>
        <img src={props.img} alt="" />
        <p>{props.name}</p>
      </div>
    );
  }
  const itemsArray = props.data.map((item, index) => (
    <Link to={{ pathname: "/product/" + item.id }} key={index}>
      <DisplayItem img={item.img} name={item.name} />
    </Link>
  ));
  return <section className={style.container}>{itemsArray} </section>;
}
