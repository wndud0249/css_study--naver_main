import React from 'react';

const HeaderComponent = () => {
  return (
    <header>
      <div className="header_wrapper">
        <div className="top">
          <a href="/" className="startFromNaver">
            네이버를 시작페이지로
          </a>
          <i className="smallBar" />
          <a href="/" className="jrNaver">
            쥬니어네이버
          </a>
          <a href="/" className="happyBean">
            해피빈
          </a>
        </div>
        <div className="search"></div>
        <div className="headerMenu"></div>
      </div>
    </header>
  );
};

export default HeaderComponent;
