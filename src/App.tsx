import React, { useState } from "react";
import "./App.css";

interface Item {
  img1: string;
  img2: string;
  img3: string;
  title: string;
  isOpen: boolean;
}

const App: React.FC = () => {
  const [isOpenedTop, setIsOpenedTop] = useState(true);
  const [items, setItems] = useState<Item[]>([
    {
      img1: "img/1.png",
      img2: "img/2.png",
      img3: "img/3.png",
      title: "2020",
      isOpen: false,
    },
    {
      img1: "img/4.png",
      img2: "img/5.png",
      img3: "img/6.png",
      title: "2021",
      isOpen: false,
    },
    {
      img1: "img/7.png",
      img2: "img/8.png",
      img3: "img/9.png",
      title: "2022",
      isOpen: false,
    },
    {
      img1: "img/10.png",
      img2: "img/11.png",
      img3: "img/12.png",
      title: "2023",
      isOpen: false,
    },
    {
      img1: "img/13.png",
      img2: "img/14.png",
      img3: "img/15.png",
      title: "2024",
      isOpen: false,
    },
  ]);

  const topOpen = () => {
    setIsOpenedTop(!isOpenedTop);
  };

  const open = (idx: number, isOpen: boolean) => {
    if (isOpenedTop) {
      setItems((prevItems) =>
        prevItems.map((item, index) =>
          index === idx ? { ...item, isOpen: !isOpen } : item
        )
      );
    }
  };

  const reset = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, isOpen: false }))
    );
    setIsOpenedTop(false);
  };

  return (
    <div id="app">
      <div className="container">
        <div className={`album ${isOpenedTop ? "album--open" : ""}`}>
          {/* Top album */}
          <div
            className={`album__paper ${isOpenedTop ? "open" : ""}`}
            style={{ zIndex: isOpenedTop ? 0 : items.length + 1 }}
            onClick={() => topOpen()}
          >
            <div
              className="album__page front"
              style={{
                transform: `translateZ(0.${items.length + 1}px)`,
              }}
            >
              <div>
                <div className="album__top-title">Github</div>
                <p className="txt-daniel"> Project</p>
                <img src="img/logo-dan.png" alt="" />
                {/* <div className="cat-mark"></div> */}
              </div>
            </div>
            <div className="album__page back" style={{ zIndex: 0 }}></div>
          </div>

          {/* Album pages */}
          {items.map((page, idx) => (
            <div
              key={idx + 1}
              className={`album__paper ${page.isOpen ? "open" : ""}`}
              style={{
                zIndex: page.isOpen
                  ? idx + 1
                  : items.length + 1 - (idx + 1),
              }}
              onClick={() =>
                idx + 1 === items.length ? reset() : open(idx, page.isOpen)
              }
            >
              <div
                className="album__page front"
                style={{
                  transform: `translateZ(0.${items.length + 1 - (idx + 1)}px)`,
                }}
              >
                <div className="content overflow-hidden">
                  <div className="content__title">{page.title}</div>
                  <div className="content__img1">
                    <img src={page.img1} alt={`${page.title} 1`} />
                    <div className="content__text">{idx + 1}</div>
                  </div>
                  <div className="content__img2">
                    <img src={page.img2} alt={`${page.title} 2`} />
                  </div>
                  <div className="content__img3">
                    <img src={page.img3} alt={`${page.title} 3`} />
                  </div>
                </div>
              </div>
              <div
                className="album__page back"
                style={{ zIndex: idx + 1 }}
              ></div>
            </div>
          ))}

          {/* Album bottom elements */}
          <div className="album__back"></div>
          <div className="album__bottom"></div>
          <div className="album__shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
