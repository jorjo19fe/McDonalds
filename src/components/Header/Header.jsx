import { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Styles/Style.module.css";

export default function Header() {
  let [searching, setSearching] = useState(false);
  let [language, setLanguage] = useState("Geo");
  let [languageLogic, setLanguageLogic] = useState(false);
  function languageChange() {
    if (languageLogic) {
      setLanguage("Geo");
    } else {
      setLanguage("Eng (coming soon) ");
    }
    setLanguageLogic((prevState) => !prevState);
  }
  return (
    <header>
      <div className={Style.headerContent}>
        <section className={Style.top}>
          <div className={Style.left} onClick={languageChange}>
            <img
              src="https://mcdonalds.ge/assets/images/globe.svg"
              fill="black"
            />
            <span>{language}</span>
          </div>
          <Link to="/">
            <div className={Style.center}>
              <div className={Style.logoContainer}>
                <img src="https://mcdonalds.ge/assets/images/mcd-logo.svg" />
              </div>
            </div>
          </Link>
          <div className={Style.right}>
            <div className={Style.search}>
              <h4>ძებნა</h4>
              <img src="https://mcdonalds.ge/assets/images/search.svg" />
            </div>
            <div className={Style.careers}>
              <button>კარიერა</button>
            </div>
          </div>
        </section>
        <section className={Style.bottom}>
          <nav>
            <div className={Style.left}>
              <ul>
                <Link to="/menu">
                  <li>ჩვენი პროდუქტები</li>
                </Link>
                <Link to="/about">
                  <li>ჩვენ შესახებ</li>
                </Link>
                <li>ჩვენი სერვისები</li>
                <li>მთელი ოჯახისთვის</li>
                {/* <li>მაკკაფე</li> */}
              </ul>
            </div>
            <div className={Style.right}>
              <div className={Style.restaurants}>
                <Link to="/about">
                  <div>
                    <img src="https://mcdonalds.ge/assets/icons/pin.png" />
                    <h4>რესტორნები</h4>
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </header>
  );
}
