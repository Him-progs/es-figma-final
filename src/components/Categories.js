import React from "react";

const Categories = () => {
  const handleScrollCategories = () => {
    const elem = document.getElementById("categories-scroll");
    elem.scrollLeft += 40;
  };
  return (
    <div className="categories-container">
      <div className="categories" >
        <div className="category-items" id="categories-scroll">
          <span className="category-item">All</span>
          <span className="category-item"><span class="iconify" data-icon="icon-park:exclusive-gateway"></span>Exclusives</span>
          <span className="category-item category-active"><span class="iconify" data-icon="simple-icons:ufc"></span>UFC</span>
          <span className="category-item"><span class="iconify" data-icon="fluent-emoji:basketball"></span>NBA</span>
          <span className="category-item"><span class="iconify" data-icon="openmoji:boxing-glove" data-rotate="90deg"></span>Boxing</span>
          <span className="category-item"><span class="iconify" data-icon="openmoji:racing-car" data-flip="horizontal"></span>Formula 1</span>
          <span className="category-item"><span class="iconify" data-icon="icon-park:flag"></span>NASCAR</span>
          <span className="category-item"><span class="iconify" data-icon="twemoji:video-game"></span>E-Sports</span>
          <span className="category-item"><span class="iconify" data-icon="simple-icons:wwe"></span>WWE</span>
          <span className="category-item"><span class="iconify" data-icon="noto:rugby-football"></span>NFL</span>
          <span className="category-item"><span class="iconify" data-icon="noto:tennis"></span>Tennis</span>
          <span className="category-item"><span class="iconify" data-icon="twemoji:person-golfing-medium-light-skin-tone"></span>Golf</span>
          <span className="category-item"><span class="iconify" data-icon="circle-flags:olympics"></span>Olympics</span>
          <span className="category-item"><span class="iconify" data-icon="fluent-emoji:man-swimming-light"></span>Swimming</span>
          <span className="category-item"><span class="iconify" data-icon="noto:baseball"></span>MLB</span>
          <button
            className="scroll-categories-btn"
            onClick={handleScrollCategories}
          >
            <span class="iconify" data-icon="ph:arrow-right"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
