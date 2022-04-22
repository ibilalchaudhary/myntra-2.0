import React, { useState } from "react";
import Checkbox from "../components/Checkbox";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import Radio from "../components/Radio";

function FilterBtn({ title, select, setSelect }) {
  return (
    <button
      onClick={() => {
        setSelect(title);
      }}
      className={
        select === title
          ? "home__container__content__right__btn home__container__content__right__btn__selected"
          : "home__container__content__right__btn"
      }
    >
      {title}
      {select === title ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-up"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-down"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      )}
    </button>
  );
}

export default function Home() {
  const [select, setSelect] = useState("");
  return (
    <div className="home__container">
      <div className="home__container__heading">
        <span>Myntra</span> - 1256188 items
      </div>
      <div className="home__container__content">
        <Filters />
        <div className="home__container__content__right">
          <div className="home__container__content__right__header">
            <div className="home__container__content__right__header__left">
              <FilterBtn
                select={select}
                setSelect={setSelect}
                title="Bundles"
              />
              <FilterBtn
                select={select}
                setSelect={setSelect}
                title="Country of Origin"
              />
              <FilterBtn select={select} setSelect={setSelect} title="Size" />
            </div>
            <div className="home__container__content__right__header__right">
              <div className="home__container__products__content__entry">
                Sort by : High to low
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-chevron-down"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                <div className="home__container__products__content__entry__dropdown">
                  <div className="home__container__products__content__entry__dropdown__entry">
                    Whats new
                  </div>
                  <div className="home__container__products__content__entry__dropdown__entry">
                    Products in trending
                  </div>
                  <div className="home__container__products__content__entry__dropdown__entry">
                    High to low
                  </div>
                  <div className="home__container__products__content__entry__dropdown__entry">
                    Low to high
                  </div>
                </div>
              </div>
            </div>
          </div>
          {select === "Bundles" ? (
            <div className="filters__btn__wrapper">
              <Checkbox label="Bundles" />
              <Checkbox label="Single Style" />
            </div>
          ) : null}
          {select === "Country of Origin" ? (
            <div className="filters__btn__wrapper">
              <Checkbox label="All Countries" />
              <Checkbox label="India" />
            </div>
          ) : null}
          {select === "Size" ? (
            <div className="filters__btn__wrapper">
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
              <Checkbox label="0-3M" />
              <Checkbox label="16x16" />
            </div>
          ) : null}

          <div className="home__container__products__content">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}
