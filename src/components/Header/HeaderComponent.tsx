import React from 'react';
import promotionImg from '../../styles/images/naver_img/promotion.png';

const HeaderComponent = () => {
  return (
    <header>
      <div className="header_wrapper">
        <div className="header_top">
          <a href="/" className="startFromNaver">
            네이버를 시작페이지로
          </a>
          <i className="smallBar" />
          <a href="/" className="jrNaver">
            <i className="icon_jrNaver"></i>
            <span className="a11y">쥬니어네이버</span>
          </a>
          <a href="/" className="happyBean">
            <i className="icon_happyBean"></i>
            <span className="a11y">해피빈</span>
          </a>
        </div>

        <div className="header_middle">
          <div className="naverLogo">
            <i className="icon_naver"></i>
          </div>
          <div className="search">
            <input type="text" className="search_input" />

            <button className="search_btn">
              <i className="icon_search"></i>
            </button>
          </div>
          <div className="promotion">
            <a href="/">
              <img className="img_promotion" alt="promotion" src={promotionImg}></img>
            </a>
          </div>
        </div>
      </div>
      <div className="header_footMenu_wrapper">
        <div className="header_footMenu">
          <div className="header_menu_list">
            <div className="left">
              <ul className="navi_items">
                <li className="navi_item">
                  <i className="icon_mail"></i>
                  <span>메일</span>
                </li>
                <li className="navi_item">카페</li>
                <li className="navi_item">블로그</li>
                <li className="navi_item">지식iN</li>
                <li className="navi_item">
                  <i className="icon_shopping"></i>
                </li>
                <li className="navi_item">
                  <i className="icon_shopping_live"></i>
                </li>
                <li className="navi_item">Pay</li>
                <li className="navi_item">
                  <i className="icon_tv"></i>
                  <span>TV</span>
                </li>
              </ul>
            </div>
            <div className="right">
              <ul className="navi_items">
                <li className="navi_item">사전</li>
                <li className="navi_item">뉴스</li>
                <li className="navi_item">증권</li>
                <li className="navi_item">부동산</li>
                <li className="navi_item">지도</li>
                <li className="navi_item">VIBE</li>
                <li className="navi_item">도서</li>
                <li className="navi_item">웹툰</li>
              </ul>
            </div>
          </div>
          <div className="header_show_more">
            <span>더보기</span>
            <i className="icon_arrow_down"></i>
          </div>
          <div className="whether">
            <div className="temperature">
              <i></i>
              <span>17.2 &deg; 맑음</span>
              <span>12.0&deg;/26.0&deg;</span>
              <span>방이동</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
