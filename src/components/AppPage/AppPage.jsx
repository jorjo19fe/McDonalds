import { useState } from "react";
import style from "./style.module.css";
import VideoContent from "../VideoContent/VideoContent";

export default function AppPage({ data }) {
  // console.log(data);
  let Videos = data.usage.map((item, index) => (
    <div className={style.eachVideo} key={index}>
      <VideoContent
        backgroundLink={item.backgroundLink}
        videoLink={item.videoLink}
        height="100%"
        width={index == 4 ? "280px" : "430px"}
      />
      <h2>{item.title}</h2>
    </div>
  ));
  let Faq = data.faq.map((item) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
      <div className={style.faq}>
        <div
          className={style.faqInside}
          onClick={() => setShowAnswer((prevBool) => !prevBool)}
        >
          <h1
            style={{
              color: `${showAnswer ? "#ffbc0d" : "#292929"}`,
              transition: "200ms",
            }}
          >
            {item.question}
          </h1>
          <img
            src="https://mcdonalds.ge/assets/images/arrow.png"
            alt=""
            style={{
              transform: `rotate(${showAnswer ? "180deg" : "0deg"})`,
              transition: "500ms",
            }}
          />
        </div>
        <p
          style={{
            visibility: `${showAnswer ? "visible" : "hidden"}`,
            transition: "all 200ms",
            height: `${showAnswer ? "auto" : "0"}`,
            opacity: `${showAnswer ? "1" : "0"}`,
            transformOrigin: "top",
            padding: `${showAnswer ? "1px 0 0" : "0"}`,
          }}
        >
          {item.answer}
        </p>
        {/* <hr /> */}
      </div>
    );
  });
  return (
    <main>
      <div className={style.container}>
        <section className={style.header}>
          <h1>
            გადმოწერეთ <span className={style.gradient}>ჩემი</span> {""}
            მაკდონალდსის აპლიკაცია
          </h1>
          <p>აპლიკაცია ხელმისაწვდომია Android და IOS მოწყობილობებზე</p>
          <img
            src="https://mcdonalds.ge/a5302bf3f10d-resized.png"
            alt="App photo"
            className={style.centerImage}
          />
          <div className={style.bottom}>
            <img
              src="https://mcdonalds.ge/assets/images/app-store.png"
              alt=""
            />
            <img
              src="https://mcdonalds.ge/assets/images/play-store.png"
              alt=""
            />
          </div>
        </section>
        <section>
          <div className={style.howTo}>
            <h1>როგორ დავაგროვოთ ქულები?</h1>
            <div className={style.images}>
              <div>
                <img
                  src="https://mcdonalds.ge/fd523d852f0b-resized.png"
                  alt=""
                />
                <h3>გადმოწერე მაკდონალდსის აპლიკაცია</h3>
              </div>
              <div>
                <img
                  src="https://mcdonalds.ge/024dc0d43b1f-resized.png"
                  alt=""
                />
                <h3>დაასკანერე QR კოდი კიოსკთან, სალაროსთან ან მაკდრაივზე</h3>
              </div>
              <div>
                <img
                  src="https://mcdonalds.ge/877d5ecbbecd-resized.png"
                  alt=""
                />
                <h3>მიიღე 1სი ქულა ყოველ გადახდილ 1 ლარზე</h3>
              </div>
              <div>
                <img
                  src="https://mcdonalds.ge/321b95f99b10-resized.png"
                  alt=""
                />
                <h3>გადაცვალე დაგროვილი ქულები სასურველ ბონუსებში</h3>
              </div>
            </div>
          </div>
          <div className={style.howTo}>
            <h1>როგორ გავანაღდოთ შეთავაზება?</h1>
            <div className={style.images}>
              <div>
                <img
                  src="https://mcdonalds.ge/29c6de3d1707-resized.png"
                  alt=""
                />
                <h3>აირჩიე შეთავაზება</h3>
                <p>
                  გაადავლე თვალი შეთავაზებებს აპლიკაციაში და აირჩიე სასურველი
                </p>
              </div>
              <div>
                <img
                  src="https://mcdonalds.ge/5012ded0994f-resized.png"
                  alt=""
                />
                <h3>მიიღე შეთავაზება</h3>
                <p>დააჭირე არჩეულ შეთავაზებას და დაელოდე სალაროსთან შეკვეთას</p>
              </div>
              <div>
                <img
                  src="https://mcdonalds.ge/12a44af5e23d-resized.png"
                  alt=""
                />
                <h3>დააჭირე განაღდებას</h3>
                <p>
                  შეკვეთის გაკეთებისას დააჭირე განაღდების ღილაკს და QR კოდი
                  აჩვენე ჩვენს თანამშრომელს
                </p>
              </div>
              <div>
                <img
                  src="https://mcdonalds.ge/0878db2b11be-resized.png"
                  alt=""
                />
                <h3>დააგროვე ქულები</h3>
                <p>
                  ტრანზაქციის დასრულებამდე, შეკვეთისას გახსენი აპლიკაცია
                  დაასკანერე QR კოდი და დააგროვე ქულები
                </p>
              </div>
            </div>
          </div>
          <div className={style.scores}>
            <div className={style.score}>
              <div className={style.scoreNum}>
                <p>2000</p>
              </div>
              <ul>
                <li>კეტჩუპი</li>
              </ul>
            </div>
            <div className={style.score}>
              <div className={style.scoreNum}>
                <p>4000</p>
              </div>
              <ul>
                <li>კონუსი</li>
              </ul>
            </div>
            <div className={style.score}>
              <div className={style.scoreNum}>
                <p>4500</p>
              </div>
              <ul>
                <li>პატარა ფრი</li>
                <li>ჰაშბრაუნი</li>
                <li>ამერიკანო 0,200</li>
              </ul>
            </div>
            <div className={style.score}>
              <div className={style.scoreNum}>
                <p>6500</p>
              </div>
              <ul>
                <li>მაკ ტოსტი</li>
                <li>საშუალო ფრი ან სასმელი</li>
                <li>ალუბლის ღვეზელი</li>
              </ul>
            </div>
            <div className={style.score}>
              <div className={style.scoreNum}>
                <p>8500</p>
              </div>
              <ul>
                <li>ჰამბურგერი</li>
                <li>სტანდარტული ფრი</li>
                <li>ნაყინი</li>
              </ul>
            </div>
            <div className={style.score}>
              <div className={style.scoreNum}>
                <p>11500</p>
              </div>
              <ul>
                <li>ჰამბურგერის პატარა მაკმენიუ</li>
                <li>ორმაგი ჩიზბურგერი</li>
                <li>ქათმის ფრთები 4ც</li>
              </ul>
            </div>
            <div className={style.score}>
              <div className={style.scoreNum}>
                <p>18000</p>
              </div>
              <ul>
                <li>ბიგ მაკი</li>
              </ul>
            </div>
            <div className={style.score}>
              <div className={style.scoreNum}>
                <p>20000</p>
              </div>
              <ul>
                <li>როიალ ჩიზბურგერის პატარა მაკმენიუ</li>
              </ul>
            </div>
            <div className={style.score}>
              <div className={style.scoreNum}>
                <p>25000</p>
              </div>
              <ul>
                <li>კერამიკის ჭიქა ბრენდირებით</li>
              </ul>
            </div>
          </div>
        </section>
        <section className={style.videos}>
          <h1>სასარგებლო ფუნქციონალი</h1>
          {Videos}
        </section>
        <section className={style.faqs}>
          <h1 className={style.headline}>ხშირად დასმული კითხვები</h1>
          {Faq}
        </section>
        <section className={style.footer}>
          <h1>
            დააგროვე ქულები ნებისმიერ შენაძენზე და მიიღე შეთავაზებები აპლიკაციის
            მეშვეობით
          </h1>
          <div className={style.bottom}>
            <img
              src="https://mcdonalds.ge/assets/images/app-store.png"
              alt=""
            />
            <img
              src="https://mcdonalds.ge/assets/images/play-store.png"
              alt=""
            />
          </div>
        </section>
      </div>
    </main>
  );
}
/*

*/
