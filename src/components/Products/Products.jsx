import { useEffect, useState } from "react";
import DisplaySection from "./components/DisplaySection/DisplaySection";
import FilterSection from "./components/FilterSection/Filtersection";
import style from "./Styles/Style.module.css";
import { useParams, redirect } from "react-router-dom";

export default function Products({ data }) {
  const { id } = useParams();
  const [selected, setSelected] = useState("");

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
  useEffect(() => {
    if (id != undefined) {
      filter(id);
      setSelected(id)
      console.log(id);
    }
  }, []);
  return (
    <main>
      <div className={style.products}>
        <FilterSection
          filter={filter}
          data={data.filter}
          selected={selected}
          setSelected={setSelected}
        />
        <DisplaySection data={selectedItems} />
      </div>
    </main>
  );
}
