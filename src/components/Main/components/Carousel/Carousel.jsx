import React from "react";
import style from "./Style.module.css";

export default function Carousel(props) {
  const CarouselItems = props.carouselItems.map((item, index) => (
    <li className={`carousel-item carousel${index}`} key={index}>
      <img src={item} alt={item} />
    </li>
  ));
  function leftHandle() {
    console.log("left");
  }
  function rightHandle() {
    console.log("right");
    // window.scrollTo(6000, 0);
  }
  return (
    <section className={style.carousel}>
      <button onClick={leftHandle} className={style.leftClick}>
        <div></div>
      </button>

      <div className={style.carouselContainer}>
        <ul>
          <li className={style.carouselItem}>
            <img src={props.carouselItems[1]} alt={props[1]} />
          </li>
        </ul>
      </div>
      <button onClick={rightHandle} className={style.rightClick}>
        <div></div>
      </button>
    </section>
  );
}
