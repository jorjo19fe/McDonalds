import React, { useState } from "react";
import style from "./Style.module.css";

// data.js has to be changed

export default function FilterSection({ filter, data }) {
  const [selected, setSelected] = useState("");
  // let [activeClass, setActiveClass] = ;
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
// Sandwiches
// RollsSalads
// Starters
// Sauces
// CafeDrinks
// drinks
// Desserts
// Menu
