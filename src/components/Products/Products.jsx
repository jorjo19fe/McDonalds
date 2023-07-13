import { useState } from "react";
import DisplaySection from "./components/DisplaySection/DisplaySection";
import FilterSection from "./components/FilterSection/Filtersection";
import style from "./Styles/Style.module.css";

export default function Products({ data }) {
  document.title = "პროდუქტები";
  const [selectedItems, setSelectedItems] = useState(data.products);
  function filter(prop) {
    let prevArr = [];
    data.products.forEach((element) => {
      if (element.category.includes(prop)) {
        prevArr.push(element);
      }
    });
    setSelectedItems(prevArr);
  }
  return (
    <main>
      <div className={style.products}>
        <FilterSection filter={filter} data={data.filter} />
        <DisplaySection data={selectedItems} />
      </div>
    </main>
  );
}
