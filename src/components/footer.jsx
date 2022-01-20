function Footer() {
  return (
    <div className="Footer">
      <footer className="footer footer-margin">
        <div className="footer-wrapper container">
          <div className="footer-content">
            <div className="footer-row flex-space-between flex-wrap">
              <div className="footer-column">
                <div className="footer-widget">
                  <div className="widget-title">Cryptoki Market</div>
                  <div className="widget-content flex-space-between">
                    <div className="is-two-col-element">
                      <ul className="footer-menu">
                        <li className="menu-item"><a className="menu-link" href="01-home-ds.html">Home</a>
                        </li>
                        <li className="menu-item"><a className="menu-link" href="02-explore.html">Explore</a></li>
                      </ul>
                      <ul className="footer-menu">
                        <li className="menu-item"><a className="menu-link" href="06-profile-page.html">Profile page</a></li>
                        <li className="menu-item"><a className="menu-link" href="03-shop-category.html">Shop</a></li>
                      </ul>
                    </div>
                    <div className="is-two-col-element">
                      <ul className="footer-menu">
                        <li className="menu-item"><a className="menu-link" href="07-sellers.html">Sellers</a></li>
                        <li className="menu-item"><a className="menu-link" href="05-product.html">Product
                          Page</a></li>
                      </ul>
                      <ul className="footer-menu">
                        <li className="menu-item"><a className="menu-link" href="23-login.html">Login &amp;
                          Register</a>
                        </li>
                        <li className="menu-item"><a className="menu-link" href="20-become-a-creator.html">Become a Seller</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-column">
                <div className="footer-widget">
                  <div className="widget-title">Explore</div>
                  <div className="is-two-col-element">
                    <ul className="footer-menu">
                      <li className="menu-item"><a className="menu-link" href="%21.html#">UI Templates</a></li>
                      <li className="menu-item"><a className="menu-link" href="%21.html#">Coded Templates</a></li>
                    </ul>
                    <ul className="footer-menu">
                      <li className="menu-item"><a className="menu-link" href="%21.html#">Social Graphics</a></li>
                      <li className="menu-item"><a className="menu-link" href="%21.html#">Video Tutorials</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-column">
                <div className="footer-widget">
                  <div className="widget-title">Helpful Links</div>
                  <div className="is-two-col-element">
                    <ul className="footer-menu">
                      <li className="menu-item"><a className="menu-link" href="17-blog-classic.html">Our
                        Blog</a></li>
                      <li className="menu-item"><a className="menu-link" href="21-contact.html">Contact</a>
                      </li>
                    </ul>
                    <ul className="footer-menu">
                      <li className="menu-item"><a className="menu-link" href="22-faq.html">FAQs</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  footer content */}
          {/*  copyright section */}
          <div className="footer-copyright flex-space-between">
            <span className="copyright-text">
              Cryptoki 2021 - All Rights Reserved
            </span>
            <ul className="sub-footer-menu">
              <li className="menu-item"><a className="menu-link" href="%21.html#">Terms of Service</a></li>
              <li className="menu-item"><a className="menu-link" href="%21.html#">Privacy</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
