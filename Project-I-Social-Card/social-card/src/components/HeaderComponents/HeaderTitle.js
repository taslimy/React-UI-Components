import React from "react";
import HeaderContent from "./HeaderContent";
import moment from "moment";
import "./Header.css";

function HeaderTitle() {
  return (
    <div className="header-title-wrapper">
      <div className="header-title">
        Lambda School
        <span className="tag"> @LambdaSchool</span>
        <span className="date">{moment().format('MMMM Do YYYY')}</span>
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderTitle;
