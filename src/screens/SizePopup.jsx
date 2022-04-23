import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function useImperativeDisableScroll({ element, disabled }) {
  useEffect(() => {
    if (!element) {
      return;
    }

    element.style.overflowY = disabled ? "hidden" : "scroll";

    return () => {
      element.style.overflowY = "scroll";
    };
  }, [disabled]);
}

export default function SizePopup({ setIsSize }) {
  useImperativeDisableScroll({
    element: document.scrollingElement,
    disabled: true,
  });

  return (
    <>
      <div className="popup__container">
        <div className="popup__container__card">
          <div className="popup__container__card__heading">
            Sort By{" "}
            <Link
              to="/size-chart"
              onClick={() => {
                setIsSize(false);
              }}
              className="popup__container__card__popup__btn"
            >
              Size Chart
            </Link>
          </div>
          <div
            onClick={() => {
              setIsSize(false);
            }}
            className="popup__container__card__content"
          >
            <div className="popup__container__size__entry">XS</div>
            <div className="popup__container__size__entry">S</div>
            <div className="popup__container__size__entry">M</div>
            <div className="popup__container__size__entry">L</div>
            <div className="popup__container__size__entry">XL</div>
            <div className="popup__container__size__entry">XXL</div>
          </div>

          <button
            style={{ width: "80%", margin: "0px auto" }}
            onClick={() => {
              setIsSize(false);
            }}
            className="add__to__bag__btn"
          >
            Done
          </button>
          <button
            style={{ width: "80%", margin: "0px auto", marginTop: 10 }}
            onClick={() => {
              setIsSize(false);
            }}
            className="wishlist__btn"
          >
            Cencel
          </button>
        </div>
      </div>
    </>
  );
}
