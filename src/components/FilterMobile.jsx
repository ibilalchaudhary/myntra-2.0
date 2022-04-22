import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Radio from "./Radio";

function MobileFilterEntry({ title, setSelect, select }) {
  return (
    <button
      onClick={() => {
        setSelect(title);
      }}
      className={
        select === title
          ? "filters__mobile__content__left__entry filters__mobile__content__left__entry__selected"
          : "filters__mobile__content__left__entry"
      }
    >
      {title}
    </button>
  );
}

export default function FilterMobile({ setIsMobileFilter }) {
  const [select, setSelect] = useState("Gender");

  return (
    <>
      <div>
        <div className="filters__mobile__container__header">
          FILTERS <button>CLEAR ALL</button>
        </div>

        <div className="filters__mobile__content">
          <div className="filters__mobile__content__left">
            <MobileFilterEntry
              title="Gender"
              select={select}
              setSelect={setSelect}
            />
            <MobileFilterEntry
              title="Categories"
              select={select}
              setSelect={setSelect}
            />
            <MobileFilterEntry
              title="Size"
              select={select}
              setSelect={setSelect}
            />
            <MobileFilterEntry
              title="Price"
              select={select}
              setSelect={setSelect}
            />
            <MobileFilterEntry
              title="Brand"
              select={select}
              setSelect={setSelect}
            />
            <MobileFilterEntry
              title="Color"
              select={select}
              setSelect={setSelect}
            />
            <MobileFilterEntry
              title="Discounted Range"
              select={select}
              setSelect={setSelect}
            />
            <MobileFilterEntry
              title="Bundles"
              select={select}
              setSelect={setSelect}
            />
            <MobileFilterEntry
              title="Country of Rigion"
              select={select}
              setSelect={setSelect}
            />
            <MobileFilterEntry
              title="More Filters"
              select={select}
              setSelect={setSelect}
            />
          </div>
          <div className="filters__mobile__content__right">
            {select === "Gender" ? (
              <>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Men" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Women" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Girls" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Boys" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Men" />
                </div>
              </>
            ) : null}
            {select === "Categories" ? (
              <>
                <input
                  type="text"
                  placeholder="Search"
                  className="filters__mobile__content__input"
                />
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="T Shirts" span="2315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Kurtas" span="2325" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Dresses" span="4315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Tops" span="14315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Swears" span="2315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Shirts" span="6315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Swears" span="2315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Shirts" span="6315" />
                </div>
              </>
            ) : null}
            {select === "Size" ? (
              <>
                <input
                  type="text"
                  placeholder="Search"
                  className="filters__mobile__content__input"
                />
                <div className="filters__mobile__content__right__entry">
                  <Radio label="20% and above " />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Radio label="20% and above " />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Radio label="20% and above " />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Radio label="20% and above " />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Radio label="20% and above " />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Radio label="20% and above " />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Radio label="20% and above " />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Radio label="20% and above " />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Radio label="20% and above " />
                </div>
              </>
            ) : null}
            {select === "Price" ? (
              <>
                <input
                  type="text"
                  placeholder="Search"
                  className="filters__mobile__content__input"
                />
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="T Shirts" span="2315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
              </>
            ) : null}
            {select === "Brand" ? (
              <>
                <input
                  type="text"
                  placeholder="Search"
                  className="filters__mobile__content__input"
                />
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="T Shirts" span="2315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="T Shirts" span="2315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="T Shirts" span="2315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
              </>
            ) : null}
            {select === "Color" ? (
              <>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="T Shirts" span="2315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="T Shirts" span="2315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
              </>
            ) : null}
            {select === "Discounted Range" ? (
              <>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="T Shirts" span="2315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="T Shirts" span="2315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
              </>
            ) : null}
            {select === "Bundles" ? (
              <>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="T Shirts" span="2315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="T Shirts" span="2315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="T Shirts" span="2315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
              </>
            ) : null}
            {select === "Country of Rigion" ? (
              <>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="T Shirts" span="2315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
              </>
            ) : null}
            {select === "More Filters" ? (
              <>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="T Shirts" span="2315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="T Shirts" span="2315" />
                </div>
                <div className="filters__mobile__content__right__entry">
                  <Checkbox label="Sarees" span="3315" />
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div className="filters__mobile__content__btn__wrapper">
        <button
          onClick={() => {
            setIsMobileFilter(false);
          }}
          className="filters__mobile__content__btn"
        >
          CLOSE
        </button>
        <button
          onClick={() => {
            setIsMobileFilter(false);
          }}
          style={{ color: "#ff3f6c" }}
          className="filters__mobile__content__btn"
        >
          Apply
        </button>
      </div>
    </>
  );
}
