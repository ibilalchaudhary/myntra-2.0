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
export default function Header({ isDetails }) {
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
          {isDetails ? (
            <>
              <Link to="/" className="header__details__svg">
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
                  class="feather feather-arrow-left"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </Link>
            </>
          ) : (
            <>
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
            </>
          )}
          {isDetails ? (
            <div className="header__details__heading">DressBerry</div>
          ) : (
            <Link to="/" className="header__logo">
              <img src={logo} alt="logo" className="header__logo__img" />
            </Link>
          )}

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
              xmlns="http://www.w3.org/2000/svg"
              width="19.288"
              height="19.288"
              viewBox="0 0 19.288 19.288"
            >
              <path
                id="Path_3"
                data-name="Path 3"
                d="M17.015,19.288l-5.937-5.937a7.25,7.25,0,1,1,2.273-2.273l5.937,5.937-2.273,2.273ZM7.233,12.858A5.626,5.626,0,1,0,1.607,7.233a5.632,5.632,0,0,0,5.626,5.626Z"
              />
            </svg>

            <span> User</span>
          </div>
          <div className="header__wrapper__right__entry">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.381"
              height="17.765"
              viewBox="0 0 19.381 17.765"
            >
              <path
                id="Path_2"
                data-name="Path 2"
                d="M9.69,7.645c.189-.9,1.249-5.03,4.346-5.03a3.715,3.715,0,0,1,3.729,4.04c0,3.155-2.929,6.84-8.075,10.2C4.544,13.495,1.615,9.81,1.615,6.655a3.683,3.683,0,0,1,3.7-4.042C8.479,2.613,9.466,6.753,9.69,7.645ZM0,6.655c0,3.285,2.471,7.656,9.69,12.11,7.219-4.454,9.69-8.825,9.69-12.11,0-6.43-7.791-7.29-9.69-3.018C7.8-.612,0,.189,0,6.655Z"
                transform="translate(0 -1)"
              />
            </svg>

            <span> Wishlist</span>
            <div className="header__wrapper__right__entry__badge">3</div>
          </div>
          <div className="header__wrapper__right__entry">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.706"
              height="21.247"
              viewBox="0 0 17.706 21.247"
            >
              <path
                id="Path_4"
                data-name="Path 4"
                d="M17.935,6.2H14.394V3.541a3.541,3.541,0,1,0-7.082,0V6.2H3.771L2,21.247H19.706ZM8.2,3.541a2.656,2.656,0,0,1,5.312,0V6.2H8.2ZM3.991,19.476,5.345,7.968H7.312V9.3a.443.443,0,0,0,.885,0V7.968h5.312V9.3a.443.443,0,0,0,.885,0V7.968h1.967l1.354,11.509H3.991Z"
                transform="translate(-2)"
              />
            </svg>

            <span> Bag</span>
            <div className="header__wrapper__right__entry__badge">5</div>
          </div>
        </div>
      </div>
    </div>
  );
}
