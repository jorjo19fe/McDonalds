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
            <Link to="/application">
              <li>აპლიკაცია</li>
            </Link>{" "}
            <Link to="/locations">
              <li>რესტორნები</li>
            </Link>
            <Link to="/mc-drive">
              <li>მაკდრაივი</li>
            </Link>
          </ul>
        </div>
        <div className={style.right}>
          <div className={style.bday}>
            <a href="https://mcdparty.ge">
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
            </a>
          </div>
          <ul>
            <a href="https://fb.com">
              <li>
                <img
                  src="https://mcdonalds.ge/assets/images/facebook.png"
                  alt="facebook.png"
                />
              </li>
            </a>
            <a href="https://instagram.com">
              <li>
                <img
                  src="https://mcdonalds.ge/assets/images/instagram.png"
                  alt="instagram.png"
                />
              </li>
            </a>
            <a href="https://linkedin.com">
              <li>
                <img
                  src="https://mcdonalds.ge/assets/images/linkedin.png"
                  alt="linkedin.png"
                />
              </li>
            </a>
            <a href="https://youtube.com">
              <li>
                <img
                  src="https://mcdonalds.ge/assets/images/youtube.png"
                  alt="youtube.png"
                />
              </li>
            </a>
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
