import { useState } from "react";
// import { Link } from "react-router-dom";
import style from "./styles/style.module.css";

export default function About() {
  document.title = "მაკდონალდს საქართველო";
  let x = document.getElementsByClassName("iframe").contentWindow;
  // x.document.getElementByClassName("i4ewOd-pzNkMb-haAclf");
    console.log(x);
  return (
    <div className={style.container}>
      {/* <div className={style.header}>
        <div className={style.search}>
          <div className={style.searchBar}>
            <input type="text" name="" id="" />
            <button>
              <img
                src="https://mcdonalds.ge/assets/images/search.svg"
                alt="search.svg"
              />
            </button>
          </div>
          <p>ან</p>
          <div className={style.closeToMe}>
            <button>
              <img
                src="https://mcdonalds.ge/assets/images/compass.svg"
                alt="compass.svg"
              />
              ჩემთან ახლოს
            </button>
          </div>
        </div>
      </div>
      <div className={style.filter}>
        ფილტრაცია
        <img
          src="https://mcdonalds.ge/assets/images/filter.svg"
          alt="filter.svg"
        />
      </div> */}
      <div className={style.main}>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=14jfhyq35IKYOfwA-wkaw7uKGo-OXdGI&hl=en&ehbc=2E312F"
          style={{ width: "99%", height: "80vh" }}
        ></iframe>
      </div>
    </div>
  );
}
