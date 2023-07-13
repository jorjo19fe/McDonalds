import React from "react";
import img1 from "./Careers.png";
import img2 from "./McCheese-bg.png";
import img3 from "./McFlurry.png";
import img4 from "./McCafe.jpg";
import img5 from "./McDelivery.jpg";
import img6 from "./Kids.jpg";
import img7 from "./Batumi.jpg";
import compass from "./compass.svg";
import img8 from "./app-store.png";
import img9 from "./play-store.png";
import img10 from "./Phone.png";

export default {
  carousel: [img1, img2, img3],
  scrolable: [
    { image: img4, title: "მაკკაფე" },
    { image: img5, title: "McDelivery" },
    { image: img6, title: "გაიგე მეტი" },
  ],
  lastImage: {
    image: img7,
    title: (
      // <>
      //   <img src={compass} />
        "მოძებნე რუკაზე"
      // </>
    ),
  },
  DownloadSection: {
    image: {
      apple: img8,
      android: img9,
      hand: img10,
      path: "https://mcdonalds.ge/assets/images/path.svg",
    },
  },
};
