import React from "react";
import style from "./Style.module.css";

export default function DownloadSection({ image }) {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.fc}>
          <h1>შეუკვეთე. დააგროვე. ისიამოვნე.</h1>
        </div>
        <div className={style.downloads}>
          <div>
            <p>
              ჩამოტვირთე "ჩემი მაკდონალდსი", ისარგებლე შეთავაზებებით ან დააგროვე
              ქულები ნებისმიერ ტრანზაქციაზე
            </p>
          </div>
          <div className={style.downloadButtons}>
            <img src={image.image.apple} />
            <img src={image.image.android} />
          </div>
        </div>
        <div className={style.phoneHand}>
          <img src={image.image.hand} />
        </div>
      </div>
      <div className={style.outer}>
        <img src={image.image.path} />
      </div>
    </div>
  );
}
