import { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Styles/style.module.css";
import HoverContainer from "./components/HoverContainer/HoverContainer";

export default function Header({ data }) {
  const [searching, setSearching] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hoveredCont, setHoveredCont] = useState(false);
  const [linkHover, setLinkHover] = useState("");
  const [language, setLanguage] = useState("Geo");
  const [languageLogic, setLanguageLogic] = useState(false);
  function languageChange() {
    if (languageLogic) {
      setLanguage("Geo");
    } else {
      setLanguage("Eng (coming soon) ");
    }
    setLanguageLogic((prevState) => !prevState);
  }

  function hover() {
    setHovered(true);
  }

  function unHover() {
    setHovered(false);
  }

  return (
    <header>
      <div className={Style.headerContent}>
        <section className={Style.top}>
          <div className={Style.left} onClick={languageChange}>
            <img src="https://mcdonalds.ge/assets/images/globe.svg" />
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
              {/* <button>კარიერა</button> */}
            </div>
          </div>
        </section>
        <section className={Style.bottom}>
          <nav>
            <div className={Style.left}>
              <ul>
                  <li
                    name="products"
                    onMouseEnter={({ target }) => {
                      setLinkHover(target.attributes.name.value);
                      hover();
                    }}
                    onMouseLeave={unHover}
                  >
                    ჩვენი პროდუქტები
                  </li>
                <li
                  name="about"
                  onMouseEnter={({ target }) => {
                    setLinkHover(target.attributes.name.value);
                    hover();
                  }}
                  onMouseLeave={unHover}
                >
                  ჩვენ შესახებ
                </li>
                <li
                  name="services"
                  onMouseEnter={({ target }) => {
                    setLinkHover(target.attributes.name.value);
                    hover();
                  }}
                  onMouseLeave={unHover}
                >
                  ჩვენი სერვისები
                </li>
                <li>მთელი ოჯახისთვის</li>
              </ul>
            </div>
            <div className={Style.right}>
              <div className={Style.restaurants}>
                <Link to="/locations">
                  <div>
                    <img src="https://mcdonalds.ge/assets/icons/pin.png" />
                    <h4>რესტორნები</h4>
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </section>
        {(hovered || hoveredCont) && (
          <section
            className={Style.headerHover}
            style={{
              position: "absolute",
              zIndex: 1,
              top: "78%",
            }}
            onMouseEnter={() => setHoveredCont(true)}
            onMouseLeave={() => setHoveredCont(false)}
          >
            <HoverContainer
              hover={hover}
              unHover={unHover}
              data={data[linkHover]}
            />
          </section>
        )}
      </div>
    </header>
  );
}
