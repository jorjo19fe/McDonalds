import { useState } from "react";
// import { Link } from "react-router-dom";
import style from "./styles/style.module.css";

export default function Locations() {
  document.title = "მაკდონალდს საქართველო";
  let x = document.getElementsByClassName("iframe").contentWindow;
  // x.document.getElementByClassName("i4ewOd-pzNkMb-haAclf");
  console.log(x);
  return (
    <main>
      <div className={style.container}>
        <div className={style.main}>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=14jfhyq35IKYOfwA-wkaw7uKGo-OXdGI&hl=en&ehbc=2E312F"
            style={{ width: "99%", height: "80vh" }}
          ></iframe>
        </div>
      </div>
    </main>
  );
}
