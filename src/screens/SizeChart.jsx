import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productPic from "../assets/productPic.png";
import measurePic from "../assets/measurePic.png";

function NavLink({ title, select, setSelect }) {
  return (
    <button
      onClick={() => {
        setSelect(title);
      }}
      className={
        select === title
          ? "size__chart__container__btn size__chart__container__btn__selected"
          : "size__chart__container__btn"
      }
    >
      {title}
    </button>
  );
}

function MeasureRow({ id, select, setSelect }) {
  return (
    <button
      onClick={() => {
        setSelect(id);
      }}
      id={id}
      className="size__chart__container__measure__wrapper__header"
    >
      <div className="size__chart__container__measure__wrapper__entry">
        <button
          className={
            select === id
              ? "size__chart__container__measure__wrapper__header__btn size__chart__container__measure__wrapper__header__btn__select"
              : "size__chart__container__measure__wrapper__header__btn"
          }
        ></button>
      </div>

      <div
        className={
          select === id
            ? "size__chart__container__measure__wrapper__entry size__chart__container__measure__wrapper__entry__select"
            : "size__chart__container__measure__wrapper__entry"
        }
      >
        XS
      </div>
      <div
        className={
          select === id
            ? "size__chart__container__measure__wrapper__entry size__chart__container__measure__wrapper__entry__select"
            : "size__chart__container__measure__wrapper__entry"
        }
      >
        23.1
      </div>
      <div
        className={
          select === id
            ? "size__chart__container__measure__wrapper__entry size__chart__container__measure__wrapper__entry__select"
            : "size__chart__container__measure__wrapper__entry"
        }
      >
        46.0
      </div>
      <div
        className={
          select === id
            ? "size__chart__container__measure__wrapper__entry size__chart__container__measure__wrapper__entry__select"
            : "size__chart__container__measure__wrapper__entry"
        }
      >
        23.8
      </div>
      <div
        className={
          select === id
            ? "size__chart__container__measure__wrapper__entry size__chart__container__measure__wrapper__entry__select"
            : "size__chart__container__measure__wrapper__entry"
        }
      >
        14.51
      </div>
    </button>
  );
}

export default function SizeChart({ setIsSizeChart }) {
  const [select, setSelect] = useState("Size Chart");
  useEffect(() => {
    setIsSizeChart(true);

    return () => {
      setIsSizeChart(false);
    };
  }, []);

  return (
    <div className="size__chart__container">
      <Link to="/prooduct-details" className="size__chart__container__svg">
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
      </Link>
      <div className="size__chart__container__content">
        <img
          src={productPic}
          alt="productPic"
          className="size__chart__container__content__img"
        />
        <div className="size__chart__container__content__right">
          <div className="home__product__card__heading">Dress Berry</div>
          <div className="home__product__card__para">
            High Necked Cropped Top
          </div>
          <div className="home__product__card__content__prices">
            Rs. 624 <span>Rs. 1999</span>
            <div className="home__product__card__content__sub__offer">
              (46% OFF)
            </div>
          </div>
        </div>
      </div>
      <div className="size__chart__container__btn__wrapper">
        <NavLink title="Size Chart" select={select} setSelect={setSelect} />
        <NavLink title="How to measure" select={select} setSelect={setSelect} />
      </div>
      <div className="size__chart__container__measure__wrapper">
        <div className="size__chart__container__measure__wrapper__header">
          <div className="size__chart__container__measure__wrapper__header__entry"></div>
          <div className="size__chart__container__measure__wrapper__header__entry">
            Size
          </div>
          <div className="size__chart__container__measure__wrapper__header__entry">
            To fit Bust
          </div>
          <div className="size__chart__container__measure__wrapper__header__entry">
            to fit Waist
          </div>
          <div className="size__chart__container__measure__wrapper__header__entry">
            Front Length
          </div>
          <div className="size__chart__container__measure__wrapper__header__entry">
            To fit hip
          </div>
        </div>
        <MeasureRow id="1" select={select} setSelect={setSelect} />
        <MeasureRow id="2" select={select} setSelect={setSelect} />
        <MeasureRow id="3" select={select} setSelect={setSelect} />
        <MeasureRow id="4" select={select} setSelect={setSelect} />
        <MeasureRow id="5" select={select} setSelect={setSelect} />
        <MeasureRow id="6" select={select} setSelect={setSelect} />
      </div>
      <img
        src={measurePic}
        alt="measurePic"
        className="size__chart__container__measure__img"
      />
    </div>
  );
}
