import React from "react";
import Carousel from "./components/Carousel/Carousel";
import LinkedSection from "./components/LinkedSection/LinkedSection";
import DownloadSection from "./components/DownloadSection/DownloadSection";
import Style from "./Styles/Style.css";

export default function Main({ images }) {
  document.title = "მაკდონალდს საქართველო";
  let linkedSectionArray = images.scrolable.map((item, index) => {
    return <LinkedSection image={item.image} title={item.title} key={index} />;
  });
  return (
    <main>
      <Carousel carouselItems={images.carousel} />
      <div className="scrolable-content">
        <div className="cards">{linkedSectionArray}</div>
        <DownloadSection image={images.DownloadSection} />
      </div>
    </main>
  );
}
