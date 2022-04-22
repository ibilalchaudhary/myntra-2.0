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
  const [isScroll, setISScrol] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setISScrol(true);
    } else if (window.scrollY === 0) {
      setISScrol(false);
    }
  });

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }

    if (window.scrollY > 0) {
      setISScrol(true);
    } else if (window.screenTop > 0) {
      setISScrol(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1200) {
        setIsNavOpen(false);
      } else {
        setIsNavOpen(true);
      }
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setISScrol(true);
      } else if (window.screenTop > 0) {
        setISScrol(false);
      }
    });
  }, []);

  return (
    <div className={isScroll ? "header__sticky" : "header"}>
      <div className="header__wrapper">
        <div className="header__wrapper__left">
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
          <Link to="/" className="header__logo">
            <img src={logo} alt="logo" className="header__logo__img" />
          </Link>

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
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
            </svg>
            <span> User</span>
          </div>
          <div className="header__wrapper__right__entry">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
            </svg>
            <span> Wishlist</span>
          </div>
          <div className="header__wrapper__right__entry">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z" />
            </svg>
            <span> Bag</span>
          </div>
        </div>
      </div>
    </div>
  );
}
