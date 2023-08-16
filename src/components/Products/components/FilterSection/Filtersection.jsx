import React, { useState } from "react";
import style from "./Style.module.css";
import { Link, useParams } from "react-router-dom";

export default function FilterSection({ filter, data, selected, setSelected }) {
  let { id } = useParams();
  function filterSelect(event) {
    filter(event.target.attributes.name.value);
    setSelected(event.target.attributes.name.value);
  }

  let filterList = data.map((item, key) => (
    <li
      key={key}
      name={item.name}
      onClick={filterSelect}
      className={`${style.item} ${selected == item.name ? style.active : ""}`}
    >
      <img src={item.img} alt="" />
      {item.title}
    </li>
  ));
  return (
    <div className={style.container}>
      <button
        className={`${style.button} ${selected == "" ? style.allActive : ""}`}
        name=""
        onClick={filterSelect}
      >
        ყველა
      </button>
      <ul>{filterList}</ul>
    </div>
  );
}
// sandwiches
// rollssalads
// starters
// sauces
// cafedrinks
// drinks
// desserts
// menu
