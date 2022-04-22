import React from "react";
import productPic from "../assets/productPic.png";

export default function ProductCard() {
  return (
    <div className="home__product__card">
      <div className="home__product__card__img__wrapper">
        <img
          src={productPic}
          alt="productPic"
          className="home__product__card__img"
        />
        <div className="home__product__card__rating__badge">
          4.4
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-star"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          | 3.1k
        </div>
      </div>
      <div className="product__card__on__hover__content">
        <button className="product__card__on__hover__content__btn">
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
            class="feather feather-heart"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>{" "}
          Wishlist
        </button>
        <div className="home__product__card__para">
          Sizes <span>XS, S, L, XL, XXL</span>
        </div>
      </div>
      <div className="home__product__card__content">
        <div className="home__product__card__heading">Dress Berry</div>
        <div className="home__product__card__para">High Necked Cropped Top</div>
        <div className="home__product__card__content__prices">
          Rs. 624 <span>Rs. 1999</span>
          <div className="home__product__card__content__sub__offer">
            (46% OFF)
          </div>
        </div>
      </div>
    </div>
  );
}
