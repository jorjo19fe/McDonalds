import React from "react";
import { Link } from "react-router-dom";
import style from "./Styles/style.module.css";

export default function Footer() {
  let [borderStyle, setBorderStyle] = React.useState("");
  function borderChange() {
    setBorderStyle("none");
    console.log(borderStyle);
  }
  return (
    <footer>
      {/* <div className={style.footer}> */}
      <div className={style.top}>
        <div className={style.left}>
          <img src="https://mcdonalds.ge/assets/images/mcd-logo.svg" />
        </div>
        <div className={style.center}>
          <h3 className={style.navigation}>ნავიაცია</h3>
          <ul>
            <Link to="/menu">
              <li>ჩვენი პროდუქტები</li>
            </Link>
            <li>მაკმენიუ</li>
            <li>მაკკაფე</li>
            <li>კარიერა</li>
            <li>აპლიკაცია</li>
            <li>სიახლეები</li>
            <Link to="/about">
              <li>რესტორნები</li>
            </Link>
            <li>მომავლის გამოცდილება</li>
            <li>მაკდელივერი</li>
          </ul>
        </div>
        <div className={style.right}>
          <div className={style.bday}>
            <button
              onMouseOver={() => {
                setBorderStyle("none");
              }}
              onMouseLeave={() => {
                setBorderStyle("");
              }}
            >
              <div
                className={style.before}
                style={{ display: borderStyle }}
              ></div>

              <img
                src="https://mcdonalds.ge/assets/images/tada.png"
                alt="tada.png"
              />
              <p>დაჯავშნე დაბადების დღე</p>
              <div
                className={style.after}
                style={{ display: borderStyle }}
              ></div>
            </button>
          </div>
          <ul>
            <li>
              <img
                src="https://mcdonalds.ge/assets/images/facebook.png"
                alt="facebook.png"
              />
            </li>
            <li>
              <img
                src="https://mcdonalds.ge/assets/images/instagram.png"
                alt="instagram.png"
              />
            </li>
            <li>
              <img
                src="https://mcdonalds.ge/assets/images/linkedin.png"
                alt="linkedin.png"
              />
            </li>
            <li>
              <img
                src="https://mcdonalds.ge/assets/images/youtube.png"
                alt="youtube.png"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.bottomFlex}>
          <p>©2020 McDonald's. ყველა უფლება დაცულია</p>
          <div>
            <img
              src="https://mcdonalds.ge/assets/images/mouth.png"
              alt="mouth.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
