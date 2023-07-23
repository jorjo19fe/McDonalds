import { useState } from "react";
import style from "./style.module.css";

export default function Drive() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className={style.container}>
      <section className={style.header}>
        <p>მაკდრაივი</p>
      </section>
      <section className={style.section}>
        <div className={style.top}>
          <ul>
            <li className={style.liItem}>
              <img
                src="https://mcdonalds.ge//assets/seed/mcdrive-icon-1.png"
                alt=""
              />
              <h4>უკონტაქტო შეკვეთა</h4>
              <p>შეუკვეთე მიკფროფონში ავტომობილიდან გადაუსვლელად </p>
            </li>
            <li className={style.liItem}>
              <img
                src="https://mcdonalds.ge//assets/seed/mcdrive-icon-2.png"
                alt=""
              />
              <h4>გამარტივებული გადახდა</h4>
              <p>გადაიხადე სალაროსთან ბარათით ან ნაღდი ფულით</p>
            </li>
            <li className={style.liItem}>
              <img src="https://mcdonalds.ge/a6601c5e3919-resized.png" alt="" />
              <h4>დაასკანერე შეთავაზება მარტივად</h4>
              <p>გაიაქტიურე შეთავზება მობილური აპლიკაციიდან</p>
            </li>
            <li className={style.liItem}>
              <img src="https://mcdonalds.ge/1cedc976e3cb-resized.png" alt="" />
              <h4>მიიღე შეკვეთა</h4>
              <p>დაელოდე ადგილზე შეკვეთის მიღებას</p>
            </li>
          </ul>
        </div>
        <div className={style.video}>
          <div
            className={style.playButton}
            onClick={() => {
              setClicked(true);
            }}
          >
            <img src="https://mcdonalds.ge/assets/images/play.svg" alt="" />
          </div>
        </div>
        <div className={style.app}>
          <aside>
            <h2>მობილური აპლიკაცია</h2>
            <div className={style.appLink}>
              <img
                src="https://mcdonalds.ge/assets/images/app-store.png"
                alt=""
              />
              <img
                src="https://mcdonalds.ge/assets/images/play-store.png"
                alt=""
              />
            </div>
          </aside>
          <img
            className={style.hand}
            src="https://mcdonalds.ge/dc8a69dfe363-resized.png"
            alt=""
          />
          <img
            className={style.cheese}
            src="https://mcdonalds.ge/assets/images/path.svg"
            alt=""
          />
        </div>
      </section>
      {clicked ? (
        <section className={style.videoContent}>
          <div
            onClick={() => {
              setClicked(false);
            }}
          >
            <img src="https://mcdonalds.ge/assets/images/close.png" alt="" />
          </div>
          <iframe
            src="https://www.youtube.com/embed/3kRYLq_qsAk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
}
