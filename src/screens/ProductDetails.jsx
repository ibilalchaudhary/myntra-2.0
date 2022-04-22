import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";

export default function ProductDetails({ setIsDetails }) {
  useEffect(() => {
    setIsDetails(true);

    return () => {
      setIsDetails(false);
    };
  }, []);

  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="product__detail__img__wrapper">
            <img
              src={product1}
              alt="productPic"
              className="product__detail__img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__detail__img__wrapper">
            <img
              src={product2}
              alt="productPic"
              className="product__detail__img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__detail__img__wrapper">
            <img
              src={product3}
              alt="productPic"
              className="product__detail__img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__detail__img__wrapper">
            <img
              src={product4}
              alt="productPic"
              className="product__detail__img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__detail__img__wrapper">
            <img
              src={product5}
              alt="productPic"
              className="product__detail__img"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="product__details__content">
        <div className="product__details__para">
          Women Blue Printed Kurta with Palazzos
        </div>
        <div className="product__details__price">
          Rs. 989 <span>RS. 1251</span>{" "}
          <div className="product__details__price__sub">(55% OFF)</div>
        </div>
        <div className="product__details__taxes">Inclusive of all taxes</div>
        <div className="product__details__divider"></div>
        <div className="product__details__sub__heading">
          DELIVERY OPTIONS & SERVICES
        </div>
        <div className="product__details__input__wrapper">
          <input
            type="text"
            placeholder="Enter a PIN code"
            className="product__details__input"
          />
          CHECK
        </div>
        <div className="product__details__sub__para">
          100% Original Products
        </div>
        <div className="product__details__sub__para">
          Pay on delivery might be available
        </div>
        <div className="product__details__sub__para">
          Easy 30 days returns and exchanges
        </div>
        <div className="product__details__sub__para">
          Blue printed kurta with palazzos
        </div>
        <div className="product__details__divider"></div>
        <div className="product__details__shipping__wrapper">
          <div className="product__details__shipping__wrapper__left">
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
              class="feather feather-truck"
            >
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
          </div>
          <div className="product__details__shipping__wrapper__right">
            <div className="product__details__sub__heading">
              DELIVERY OPTIONS
            </div>

            <div className="product__details__sub__para">
              100% Original Products
            </div>
            <div className="product__details__sub__para">
              Pay on delivery might be available
            </div>
          </div>
        </div>
        <div className="product__details__divider"></div>
        <div className="product__details__cupoon__header">
          <div style={{ margin: 0 }} className="product__details__sub__heading">
            Best Price
          </div>
          <a href="">View Products</a>
        </div>
        <div className="product__details__sub__para">
          Applicable on: Orders above Rs. 799 (only on first purchase)
        </div>
        <div className="product__details__sub__para">Coupon code: HELLO200</div>
        <div className="product__details__sub__para">
          Coupon Discount: Rs. 200 off (check cart for final savings)
        </div>
        <div className="product__details__divider"></div>
        <div className="product__details__cupoon__header">
          <div style={{ margin: 0 }} className="product__details__sub__heading">
            Best Price{" "}
            <span className="product__details__sub__para">
              EMI starting from 999
            </span>
          </div>
          <a href="">View</a>
        </div>
      </div>
    </>
  );
}
