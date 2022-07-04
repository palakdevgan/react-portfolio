import React from 'react';
import coverImage from "../../assets/cover/cover-image.png";

function Header() {
  return (
    <div className="container-fluid page-header mb-5">
    <div className="d-flex flex-fill flex-row justify-content-evenly pt-0" style={{ height : "300px" }} >
      <div className="d-inline-flex">
      <img src={coverImage}  alt="cover" />
      </div>
    </div>
  </div>
  );
}

export default Header;