import React from "react";
import ableton from "../../Assets/img/ableton-wordmark.c025e3df71b3.png";
import { SiFacebook } from "react-icons/si";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import logo from "../../Assets/img/logo1.png";

// CSS
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-conteiner">
      <img src={ableton} alt="" className="footer-ableton" />
      <div className="footer-aligne">
        <div className="footer-signup">
          <h3 className="footer-header">Sign up to our newsletter</h3>
          <p className="footer-text">
            Enter your email address to stay up to date with the latest affers,
            tutorials, downloads, surveys and more.
          </p>
          <input
            type="email"
            defaultValue="Email Address"
            className="input-email"
          />
          <button type="submit" className="btn">
            Sign up
          </button>
        </div>

        <div className="footer-register">
          <div className="footer-links">
            <a
              href="https://www.ableton.com/en/login/?next=/en/account/add_license/"
              className="footer-link"
            >
              Register Live or Push
            </a>
            <a href="https://www.ableton.com/en/about/" className="footer-link">
              About Abelton
            </a>
            <a href="https://www.ableton.com/en/jobs/" className="footer-link">
              Jobs
            </a>
          </div>
          <div className="footer-link-logos-align">
            <a
              href="https://www.facebook.com/ableton"
              className="footer-socials facebook"
            >
              <SiFacebook size={25} />
            </a>
            <a
              href="https://twitter.com/ableton"
              className="footer-socials twitter"
            >
              <FaTwitter size={25} />
            </a>
            <a
              href="https://www.youtube.com/ableton"
              className="footer-socials youtube"
            >
              <FaYoutube size={25} />
            </a>
            <a
              href="https://www.instagram.com/ableton/"
              className="footer-socials instagram"
            >
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
        <div className="footer-links footer-education">
          <h3 className="footer-header">Education</h3>
          <a
            href="https://www.ableton.com/en/shop/education/"
            className="footer-link"
          >
            Offers for students and teachers
          </a>
          <a
            href="https://www.ableton.com/en/classroom/"
            className="footer-link"
          >
            Ableton for the Classroom
          </a>
          <a
            href="https://www.ableton.com/en/colleges-universities/"
            className="footer-link"
          >
            Ableton for Colleges and Universities
          </a>
        </div>
        <div className="footer-links footer-community">
          <h3 className="footer-header">Community</h3>
          <a
            href="https://www.ableton.com/en/community/user-groups/"
            className="footer-link"
          >
            Find Ableton User Groups
          </a>
          <a
            href="https://www.ableton.com/en/certified-training/#?item_type=all&country=country_lt"
            className="footer-link"
          >
            Find Certified Training
          </a>
          <a
            href="https://www.ableton.com/en/education/certification-program/"
            className="footer-link"
          >
            Become a Certified Trainer
          </a>
        </div>
        <div className="footer-links footer-distributors">
          <h3 className="footer-header">Distributors</h3>
          <a
            href="https://www.ableton.com/en/distributors/"
            className="footer-link"
          >
            Find Distributors
          </a>
          <a
            href="https://www.ableton.com/en/try-push-in-store/"
            className="footer-link"
          >
            Try Push in-store
          </a>
        </div>
        <div className="footer-lang-loc">
          <h3 className="footer-header">Language and Location</h3>
          <div className="footer-lang-loc-align">
            {/* <label htmlfor="languages"></label> */}
            <select name="language" id="language" className="lang">
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="fr">Fran??ais</option>
              <option value="ja">?????????</option>
              <option value="zh-cn">????????????</option>
            </select>

            {/* <label htmlFor="country"></label> */}
            <select name="language" id="language" className="country">
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="fr">Fran??ais</option>
              <option value="ja">?????????</option>
              <option value="zh-cn">????????????</option>
            </select>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-contacts">
          <a
            href="https://www.ableton.com/en/contact-us/"
            className="footer-contact"
          >
            Contact Us
          </a>
          <a
            href="https://www.ableton.com/en/press/"
            className="footer-contact"
          >
            Press Resources
          </a>
          <a
            href="https://www.ableton.com/en/legal/"
            className="footer-contact"
          >
            Legal Info
          </a>
          <a
            href="https://www.ableton.com/en/privacy/"
            className="footer-contact"
          >
            Privacy Policy
          </a>
          <a
            href="https://www.ableton.com/en/cookie-settings/"
            className="footer-contact"
          >
            Cookie Settings
          </a>
          <a
            href="https://www.ableton.com/en/imprint/"
            className="footer-contact"
          >
            Imprint
          </a>
        </div>
        <div className="footer-footer">
          <img src={logo} alt="" className="footer-logo" />
          <span>Maid in Berlin</span>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
