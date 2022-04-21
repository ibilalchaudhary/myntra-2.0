import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Radio from "./Radio";

function FilterCard({ isSearch, setIsSearch, title }) {
  return (
    <div className="container__filters__card">
      <div className="container__filters__card__header">
        {isSearch === title ? (
          <div
            style={{ margin: 0 }}
            className="header__wrapper__right__input__wrapper"
          >
            <input
              style={{ padding: 0 }}
              type="text"
              placeholder="Search here"
              className="header__wrapper__right__input"
            />
            <button
              onClick={() => {
                setIsSearch(null);
              }}
              className="container__filter__btn__close"
            >
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
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        ) : (
          <>
            <span>{title}</span>
            <button
              onClick={() => {
                setIsSearch(title);
              }}
              className="container__filter__btn"
            >
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
                class="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </>
        )}
      </div>
      <Checkbox label="T Shirts" span="2315" />
      <Checkbox label="Sarees" span="3315" />
      <Checkbox label="Kurtas" span="2325" />
      <Checkbox label="Dresses" span="4315" />
      <Checkbox label="Tops" span="14315" />
      <Checkbox label="Swears" span="2315" />
      <Checkbox label="Shirts" span="6315" />
    </div>
  );
}

export default function Filters() {
  const [isSearch, setIsSearch] = useState("");
  return (
    <div className="home__container__content__filter__wrapper">
      <div className="container__filter__heading">FILTERS</div>
      <div className="container__filters__card">
        <Radio label="Men" />
        <Radio label="Women" />
        <Radio label="Boys" />
        <Radio label="Girls" />
      </div>
      <FilterCard
        title="CATEGORIES"
        isSearch={isSearch}
        setIsSearch={setIsSearch}
      />
      <FilterCard title="BRAND" isSearch={isSearch} setIsSearch={setIsSearch} />
      <FilterCard title="PRICE" isSearch={isSearch} setIsSearch={setIsSearch} />
      <FilterCard
        title="COLORS"
        isSearch={isSearch}
        setIsSearch={setIsSearch}
      />
      <div className="container__filters__card">
        <div className="container__filters__card__header">
          <span>DISCOUNT RANGE</span>
        </div>
        <Radio label="20% and above " />
        <Radio label="30% and above " />
        <Radio label="40% and above " />
        <Radio label="50% and above " />
        <Radio label="60% and above " />
        <Radio label="70% and above " />
        <Radio label="80% and above " />
        <Radio label="90% and above " />
        <Radio label="20% and above " />
      </div>
    </div>
  );
}
