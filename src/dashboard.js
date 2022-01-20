import './assets/svg/logo-ds.svg';
import './assets/css/main.css';
import './assets/css/fonts.css';
import './assets/css/normalize.css';
import './assets/css/nice-select2.css';
import './assets/css/swiper-bundle.css';

function Dashboard() {
    return (
      <div className="dashboard">
        <header>
        <div className="main digital-store">
  {/* header */}
  
  {/* main content area */}
  
  {/* main content area */}
  {/*Footer area*/}
  <footer className="footer footer-margin">
    <div className="footer-wrapper container">
      {/* subscribe widget v2 */}
      <div className="subscribe-widget-v2">
        <div className="animated-img" />
        <div className="subscribe-text">
          <div className="h2">Subscribe to our Newsletter!</div>
          <div className="subtitle">DEALS, NEW ITEMS, FREEBIES AND MUCH MORE!</div>
        </div>
        <div className="subscribe-form-v2">
          <form className="cryptoki-subscribe-form" action="https://html.crumina.net/cryptoki/ds/forms/submit.php">
            <input className="subscribe-input" type="email" name="email" placeholder="Subscribe to our newsletter" />
            <button className="subscribe-submit btn btn-dark" type="submit">
              <span className="button-text">Subscribe</span>
              <svg id="send" className="crumina-icon"><use xlinkHref="#send-icon" /></svg>
            </button>
          </form>
        </div>
      </div>
      {/*  footer content */}
      <div className="footer-content">
        <div className="footer-row flex-space-between align-items-center">
          <div className="logo">
            <a className="logo-link" href="01-home-ds.html">
              <div className="logo-img"><img src="svg/logo-ds.svg" alt="logo" /></div>
              <div className="logo-text">Cryptoki</div>
            </a>
          </div>
          <ul className="social-icons-list">
            <li className="social-icon"><a href="#"><svg className="crumina-icon">
                  <use xlinkHref="#facebook-icon" />
                </svg></a></li>
            <li className="social-icon"><a href="#"><svg className="crumina-icon">
                  <use xlinkHref="#twitter-icon" />
                </svg></a></li>
            <li className="social-icon"><a href="#"><svg className="crumina-icon">
                  <use xlinkHref="#instagram-icon" />
                </svg></a></li>
            <li className="social-icon"><a href="#"><svg className="crumina-icon">
                  <use xlinkHref="#twitch-icon" />
                </svg></a></li>
            <li className="social-icon"><a href="#"><svg className="crumina-icon">
                  <use xlinkHref="#discord-icon" />
                </svg></a></li>
          </ul>
        </div>
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
      {/*  copyright section */}
    </div>
  </footer>
  {/*Footer area*/}
</div>

</header>
      </div>
    );
  }
  
  export default Dashboard;
  