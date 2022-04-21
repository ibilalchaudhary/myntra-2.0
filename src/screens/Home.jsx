import React from "react";
import Checkbox from "../components/Checkbox";
import Filters from "../components/Filters";

export default function Home() {
  return (
    <div className="home__container">
      <div className="home__container__heading">
        <span>Myntra</span> - 1256188 items
      </div>
      <div className="home__container__content">
        <Filters />
        <div className="home__container__content__right">hello</div>
      </div>
    </div>
  );
}
