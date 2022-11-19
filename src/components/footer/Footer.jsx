import React from "react"
import Icon from "@mdi/react"
import "./footer.css"
import baldImg from "../../images/bald.jpg"
import { mdiPhone, mdiEmail } from "@mdi/js"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__grid-left">
        <span className="footer__contact-me">Contact me</span>
        <span className="footer__blurb">
          Please get in touch if you think our work could be mutually
          beneficial!
        </span>
        <span className="footer__address">
          1234 Random Road
          <br />
          Random Town, Oklahoma 12345
        </span>
        <div className="footer__phone-container">
          <Icon path={mdiPhone} title="Phone Number" size={1} color="black" />
          <span className="footer__phone-number">555-555-5555</span>
        </div>
        <div className="footer__email-container">
          <Icon path={mdiEmail} title="Email Address" size={1} color="black" />
          <span className="footer__email">jadenfakedev@gmail.com</span>
        </div>
        <div className="footer__socials-container">
          <i class="devicon-github-original colored"></i>
          <i class="devicon-linkedin-plain black"></i>
          <i class="devicon-twitter-original black"></i>
        </div>
      </div>
      <img src={baldImg} alt="Jaden Enzbrenner" className="footer__image" />
    </div>
  )
}
