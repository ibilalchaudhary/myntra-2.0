import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cartGif from "../assets/cartGif.gif";

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

export default function WishlistPopup({ setIsWish }) {
  useImperativeDisableScroll({
    element: document.scrollingElement,
    disabled: true,
  });

  return (
    <>
      <div className="popup__container">
        <div className="popup__container__card">
          <img
            src={cartGif}
            alt="cartGif"
            className="popup__container__card__cart__gif"
          />
          <button
            style={{ width: "80%", margin: "0px auto" }}
            onClick={() => {
              setIsWish(false);
            }}
            className="add__to__bag__btn"
          >
            Go to Cart
          </button>
        </div>
      </div>
    </>
  );
}
