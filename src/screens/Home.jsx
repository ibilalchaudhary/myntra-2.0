import React, { useState } from "react";
import Checkbox from "../components/Checkbox";
import FilterMobile from "../components/FilterMobile";
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

export default function Home({ setIsSort }) {
  const [select, setSelect] = useState("");
  const [isMobileFilter, setIsMobileFilter] = useState(false);
  return (
    <>
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
            <div className="home__container__products__sale">
              <div className="home__container__products__sale__left">
                FLAT 300 OFF <span>MYNTRA300 </span>
              </div>
              <div className="home__container__products__sale__right">
                Free Shipping <span>On First Order </span>
              </div>
            </div>
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
      <div className="filters__stick">
        <button
          onClick={() => {
            setIsSort(true);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="filters__stick__btn"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
          </svg>
          SORT
        </button>
        <button
          onClick={() => {
            setIsMobileFilter(true);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="filters__stick__btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.479 2l-7.479 12.543v5.924l-1-.6v-5.324l-7.479-12.543h15.958zm3.521-2h-23l9 15.094v5.906l5 3v-8.906l9-15.094z" />
          </svg>{" "}
          Filter
        </button>
      </div>
      {isMobileFilter ? (
        <div className="filters__mobile__container">
          <FilterMobile setIsMobileFilter={setIsMobileFilter} />
        </div>
      ) : null}
    </>
  );
}
