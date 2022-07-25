import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__half footer__half-left">
        <h1 className="footer__logo"> App Trail Hikes</h1>
        <p className="footer__bottom">@copywrite 2022 Ben Gallagher</p>
      </div>
      <div className="footer__half footer__half-right">
        <div className="footer__resources">
          <ul className="footer__col">
            <li className="footer-light">More</li>
            <li className="footer__col-el">Free Stuff</li>
            <li className="footer__col-el">Maps</li>
          </ul>
          <ul className="footer__col">
            <li className="footer-light">Resources</li>
            <li className="footer__col-el">Privacy Policy</li>
            <li className="footer__col-el">News Letter</li>
            <li className="footer__col-el">Contact</li>
          </ul>
        </div>
        <div className="footer__bottom footer__links">
        <p>Li</p>
        <p>Fb</p>
        <p>Tw</p>
        </div>
      </div>
    </div>
  );
}
