import { useState } from "react";
import style from "./styles/style.css";
import { useParams, redirect } from "react-router-dom";

export default function Test({ data }) {
  const { id } = useParams();
  const renderingData = data.products.find((item) => item.id === id);
  if (renderingData) {
    // return <h1>{JSON.stringify(renderingData)}</h1>;
    return (
      <div className={style.elment}>
        <img src={renderingData.img} alt="" />
        <h1>{renderingData.name}</h1>
        <a href="">{renderingData.categ}</a>
      </div>
    );
  }
  // return redirect("/not-found");
}
