import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-items">
          <a href="javascript:void(0)">Home</a>
          <div className="nav-logo-container">
            <img src="images/nav-logo.png" className="nav-logo" />
          </div>
          <div className="nav-social-media-items">
            <span class="iconify" data-icon="ic:baseline-facebook"></span>
            <span class="iconify" data-icon="mdi:twitter"></span>
            <span class="iconify" data-icon="mdi:youtube"></span>
            <span class="iconify" data-icon="mdi:linkedin"></span>
          </div>
        </div>
      </nav>
      <h4 className="hiring-txt">We're <span>hiring</span>!</h4>
    </>
  );
};

export default Navbar;
