import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import user from "../assets/user.svg";
import heart from "../assets/heart.svg";
import cart from "../assets/cart.svg";

function NavLink({ title, to, list }) {
  return (
    <Link to={to} className="header__link">
      <div className="header__link__heading">{title}</div>
      {list ? (
        <>
          <div className="header__link__dropdown">
            <div className="header__link__dropdown__content">
              {list.map((item, i) => (
                <Link to={item.to} className="header__link__dropdown__entry">
                  <div className="header__link__dropdown__entry__heading">
                    {item.title}
                  </div>
                  <div className="header__link__dropdown__entry__info">
                    {item.info}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </Link>
  );
}
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 1200) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1200) {
        setIsNavOpen(false);
      } else {
        setIsNavOpen(true);
      }
    });
  }, []);

  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__wrapper__left">
          <Link to="/" className="header__logo">
            <img src={logo} alt="logo" className="header__logo__img" />
          </Link>
          <button
            className="header__menu"
            onClick={() => {
              isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
            }}
          >
            {isNavOpen ? (
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
                class="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
          {isNavOpen ? (
            <div className="header__nav">
              <NavLink
                title="Men"
                to="/"
                list={[
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },

                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                ]}
              />

              <NavLink
                title="Women"
                to="/"
                list={[
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },

                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                ]}
              />
              <NavLink
                title="Kids"
                to="/"
                list={[
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                ]}
              />
              <NavLink
                title="Home & Living"
                to="/"
                list={[
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                ]}
              />
              <NavLink
                title="Beauty"
                to="/"
                list={[
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                ]}
              />
              <NavLink
                title="Studio "
                to="/"
                list={[
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                  {
                    title: "LOREM IPSUM",
                    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.",
                    to: "/",
                  },
                ]}
              />
            </div>
          ) : null}
        </div>
        <div className="header__wrapper__right">
          <div className="header__wrapper__right__input__wrapper">
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
            <input
              type="text"
              placeholder="Search for product, Brand and more"
              className="header__wrapper__right__input"
            />
          </div>
          <div className="header__wrapper__right__entry">
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
              class="feather feather-user"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span> User</span>
          </div>
          <div className="header__wrapper__right__entry">
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
            </svg>
            <span> Wishlist</span>
          </div>
          <div className="header__wrapper__right__entry">
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
              class="feather feather-shopping-cart"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span> Bag</span>
          </div>
        </div>
      </div>
    </div>
  );
}
