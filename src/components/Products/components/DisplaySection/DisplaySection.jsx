import React from "react";
import style from "./Style.module.css";
import { Link } from "react-router-dom";
import DisplayItem from "../DisplayItem/DisplayItem";

export default function DisplaySection(props) {
  const itemsArray = props.data.map((item, index) => (
    <Link to={{ pathname: "/product/" + item.id }} key={index}>
      <DisplayItem img={item.img} name={item.name} />
    </Link>
  ));
  return <section className={style.container}>{itemsArray} </section>;
}
