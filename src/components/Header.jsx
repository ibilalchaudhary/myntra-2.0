import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

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
                class="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
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
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
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
        <div className="header__wrapper__right">sadasd</div>
      </div>
    </div>
  );
}
