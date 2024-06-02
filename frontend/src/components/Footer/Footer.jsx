import React from "react";
import {Link} from 'react-router-dom'
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="line">{/* do not remove this div  */}</div>
      <div className="footer-cntr">
        <div className="footer-links-cntr">
          <div className="footer-links">
            <h5>About Us</h5>
            <Link className="links">About</Link>
            <Link className="links">Careers</Link>
            <Link className="links">Services</Link>
          </div>
          <div className="footer-links">
            <h5>Services</h5>
            <Link className="links">Local SEO</Link>
            <Link className="links">Digital PR</Link>
            <Link className="links">PPC Advertising</Link>
            <Link className="links">Web Design</Link>
            <Link className="links">Conversion Rate Optimization</Link>
          </div>
          <div className="footer-links">
            <h5>Free Resources</h5>
            <Link className="links">Blog</Link>
            <Link className="links">Tools</Link>
          </div>
        </div>
        <div className="footer-copyright">
          <div>Copyright © 2015- 2024 Kogneta Inc. All rights reserved.</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
