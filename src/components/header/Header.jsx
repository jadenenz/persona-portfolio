import "./header.css"
import React from "react"
import jadenImg from "../../images/headshot.jpg"

export default function Header() {
  return (
    <div className="header">
      <div className="header__title">Jaden Enzbrenner</div>
      <div className="header__wrapper">
        <img src={jadenImg} alt="Jaden Enzbrenner" className="header__image" />
        <div className="header__about-me">
          <div className="header__about-me__title">About Me</div>
          <div className="header__about-me-main">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            imperdiet magna eget hendrerit auctor. Nulla condimentum elementum
            magna sed tincidunt. Quisque imperdiet eros et augue placerat, eu
            bibendum nunc iaculis. Donec elit nisi, ornare sit amet elit et,
            porta vulputate metus. Ut lobortis mi ut nibh eleifend consequat.
            Praesent luctus felis nibh. Praesent sapien tellus, accumsan sit
            amet orci sed, volutpat euismod arcu.
          </div>
        </div>
      </div>
    </div>
  )
}
