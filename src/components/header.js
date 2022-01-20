

function Header() {
    return (
      <div className="Header">
      <header>
    {/* topbar section */}
    <div className="topbar border-bottom">
      <div className="topbar-wrapper topbar-47 container">
        {/*  social icons list */}
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
        {/* currency and language switchers */}
        <div className="topbar-switchers">
          <div className="currency-switcher">
            <select className="select-nice">
              <option value="eth" selected>ETHEREUM (ETH)</option>
              <option value="euro">Euro</option>
              <option value="usd">USD</option>
            </select>
          </div>
          <div className="language-switcher">
            <select className="select-nice">
              <option value="english" selected>English</option>
              <option value="french">French</option>
              <option value="german">German</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    {/* topbar section */}
  </header>
  {/* header */}
  {/* header navigation */}
  <nav className="border-bottom nav-ds">
    <div className="navigation-wrapper container flex-space-between align-items-center">
      <div className="nav-left-hand-part">
        <div className="logo">
          <a className="logo-link" href="01-home-ds.html">
            <div className="logo-img"><img src={require('../assets/svg/logo-ds.svg').default} alt="logo" /></div>
            <div className="logo-text">Cryptoki</div>
          </a>
        </div>
        <ul className="navigation-menu">
          <li className="menu-item"><a className="menu-link" href="01-home-ds.html">Home</a></li>
          <li className="menu-item menu-item-has-children"><a className="menu-link" href="#">Explore
              <span className="indicator"><svg className="crumina-icon">
                  <use xlinkHref="#arrow-down-icon" />
                </svg></span>
            </a>
            <ul className="submenu">
              <li className="menu-item"><a className="menu-link" href="02-explore.html">Explore
                </a>
              </li>
              <li className="menu-item"><a className="menu-link" href="04-item-versions.html">Item versions
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item"><a className="menu-link" href="07-sellers.html">Sellers</a></li>
          <li className="menu-item menu-item-has-megamenu menu-item-has-children"><a className="menu-link" href="#">All pages<span className="indicator"><svg className="crumina-icon">
                  <use xlinkHref="#arrow-down-icon" />
                </svg></span></a><span className="highlighted-item gradient-background">NEW</span>
            <div className="megamenu">
              <div className="megamenu-wrapper">
                <div className="megamenu-column">
                  <div className="megamenu-title">Main Pages</div>
                  <div className="flex-space-between">
                    <ul className="submenu-column">
                      <li className="menu-item"><a href="01-home-ds.html" className="menu-link">Home</a></li>
                      <li className="menu-item"><a href="02-explore.html" className="menu-link">Explore</a></li>
                      <li className="menu-item"><a href="03-shop-category.html" className="menu-link">Shop Category</a>
                      </li>
                      <li className="menu-item"><a href="04-item-versions.html" className="menu-link">Item Versions</a>
                      </li>
                      <li className="menu-item"><a href="05-product.html" className="menu-link">Product Page</a>
                      </li>
                      <li className="menu-item"><a href="06-profile-page.html" className="menu-link">Profile Page</a>
                      </li>
                    </ul>
                    <ul className="submenu-column">
                      <li className="menu-item"><a href="07-sellers.html" className="menu-link">Sellers</a></li>
                      <li className="menu-item"><a href="08-shopping-cart.html" className="menu-link">Shopping Cart</a>
                      </li>
                      <li className="menu-item"><a href="09-checkout.html" className="menu-link">Checkout</a></li>
                      <li className="menu-item"><a href="25-notifications.html" className="menu-link">Notifications</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="megamenu-column">
                  <div className="megamenu-title">Dashboard</div>
                  <div className="flex-space-between">
                    <ul className="submenu-column">
                      <li className="menu-item"><a href="26-profile-info.html" className="menu-link">Profile Info</a>
                      </li>
                      <li className="menu-item"><a href="%21.html#" className="menu-link">Account
                          Settings</a>
                      </li>
                      <li className="menu-item"><a href="%21.html#" className="menu-link">Notification
                          Settings</a></li>
                      <li className="menu-item"><a href="10-profile-dashboard.html" className="menu-link">Dashboard</a></li>
                      <li className="menu-item"><a href="11-profile-sales-statement.html" className="menu-link">Sales Statement</a>
                      </li>
                      <li className="menu-item"><a href="12-profile-upload-item.html" className="menu-link">Upload Item</a></li>
                    </ul>
                    <ul className="submenu-column">
                      <li className="menu-item"><a href="13-profile-manage-items.html" className="menu-link">Manage Items</a>
                      </li>
                      <li className="menu-item"><a href="14-profile-payment-history.html" className="menu-link">Payouts</a></li>
                      <li className="menu-item"><a href="15-profile-purchases.html" className="menu-link">Purchases</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="menu-item menu-item-has-children"><a className="menu-link" href="#">Blog
              <span className="indicator"><svg className="crumina-icon">
                  <use xlinkHref="#arrow-down-icon" />
                </svg></span></a>
            <ul className="submenu">
              <li className="menu-item"><a className="menu-link" href="16-blog-grid.html">Blog grid
                </a>
              </li>
              <li className="menu-item"><a className="menu-link" href="17-blog-classic.html">Blog classic
                </a>
              </li>
              <li className="menu-item"><a className="menu-link" href="18-blog-post-centered.html">Blog post
                  centered
                </a>
              </li>
              <li className="menu-item"><a className="menu-link" href="19-blog-post-sidebar.html">Blog post
                  sidebar
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item hidden-menu"><a className="menu-link" href="#"><svg className="crumina-icon">
                <use xlinkHref="#dots-icon" />
              </svg></a>
            <ul className="hidden-menu-dropdown submenu">
              <li className="menu-item"><a href="22-faq.html" className="menu-link">Frequently Asked
                  Questions</a></li>
              <li className="menu-item"><a href="20-become-a-creator.html" className="menu-link">Become a
                  Creator</a></li>
              <li className="menu-item"><a href="21-contact.html" className="menu-link">Contact Us</a></li>
              <li className="menu-item"><a href="23-login.html" className="menu-link">Login</a></li>
              <li className="menu-item"><a href="24-register.html" className="menu-link">Register</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="nav-right-hand-part">
        {/* user activity buttons */}
        <div className="user-activity-buttons">
          {/* cart button */}
          <div className="cart-button-cont">
            <button className="cart-button cryptoki-notif-bttn" data-target="cart-dropdown">
              <span className="counter">3</span>
              <svg className="crumina-icon">
                <use xlinkHref="#bag-icon" />
              </svg>
            </button>
            <div id="cart-dropdown" className="cryptoki-notif-target">
              <div className="title">
                Your Cart <span className="colored">3</span>
              </div>
              <div className="cart-wrapper">
                <div className="cart-product">
                  <div className="thumb-box"><a href="05-product.html"><img src="img/content/notifications/notif-thumb-1.png" alt="" /></a></div>
                  <div className="purchase-info">
                    <div className="product-info">
                      <div className="product-title"><a href="05-product.html">Cryptoki NFT and Digital Market PSD Template</a>
                      </div>
                      <div className="product-price">$12.00</div>
                    </div>
                    <div className="product-type ui-templates">UI templates</div>
                  </div>
                </div>
                <div className="cart-product">
                  <div className="thumb-box"><a href="05-product.html"><img src="img/content/notifications/notif-thumb-2.png" alt="" /></a></div>
                  <div className="purchase-info">
                    <div className="product-info">
                      <div className="product-title"><a href="05-product.html">Twitter Gaming Headers Pack 04</a></div>
                      <div className="product-price">$40.00</div>
                    </div>
                    <div className="product-type social-graphics">Social graphics</div>
                  </div>
                </div>
                <div className="cart-product">
                  <div className="thumb-box"><a href="05-product.html"><img src="img/content/notifications/notif-thumb-3.png" alt="" /></a></div>
                  <div className="purchase-info">
                    <div className="product-info">
                      <div className="product-title"><a href="05-product.html">Olympus WP - Social Networking Theme</a></div>
                      <div className="product-price">$68.00</div>
                    </div>
                    <div className="product-type coded-templates">Coded templates</div>
                  </div>
                </div>
              </div>
              <div className="total-price">
                <div className="heading">Cart Total</div>
                <div className="price">$120.00</div>
              </div>
              <div className="cart-buttons">
                <a href="08-shopping-cart.html" className="btn-small gradient-background btn-square">Go to
                  Cart</a>
                <a href="09-checkout.html" className="btn-small btn-dark btn-square">Checkout</a>
              </div>
            </div>
          </div>
          {/* cart button */}
          {/* favourites buttons */}
          <div className="favourites-button-cont">
            <button className="favourites-button cryptoki-notif-bttn" data-target>
              <span className="counter">7</span>
              <svg className="crumina-icon">
                <use xlinkHref="#heart-icon" />
              </svg>
            </button>
          </div>
          {/* favourites buttons */}
          {/*  notifications dropdown */}
          <div className="notifications-button-cont">
            <button className="notifications-button cryptoki-notif-bttn" data-target="notifications-dropdown">
              <span className="counter">10</span>
              <svg className="crumina-icon">
                <use xlinkHref="#bell-icon" />
              </svg>
            </button>
            <div id="notifications-dropdown" className="cryptoki-notif-target">
              <div className="title">
                Notifications <span className="colored">10</span>
              </div>
              <div className="notifications-wrapper cryptoki-scrollbar">
                <div className="notification">
                  <div className="thumb-box"><img src="img/content/notifications/notif-thumb-1.png" alt="" /><span className="bid-type"><svg className="crumina-icon">
                        <use xlinkHref="#annotation-icon" />
                      </svg></span></div>
                  <div className="notification-info">
                    <div className="message"><a href="06-profile-page.html" className="bold">@JackieJ</a> just commented on
                      <a href="05-product.html" className="bold">Cryptoki NFT and Digital Market PSD
                        Template</a>
                    </div>
                    <div className="publish-date">2 minutes ago</div>
                  </div>
                </div>
                <div className="notification">
                  <div className="thumb-box"><img src="img/content/notifications/notif-thumb-1.png" alt="" /><span className="purchase-type"><svg className="crumina-icon">
                        <use xlinkHref="#wallet-icon" />
                      </svg></span></div>
                  <div className="notification-info">
                    <div className="message"><a href="06-profile-page.html" className="bold">@CrimsonRay</a> just
                      purchased<a href="05-product.html" className="bold"> Cryptoki NFT and Digital Market PSD
                        Template</a></div>
                    <div className="publish-date">10 minutes ago</div>
                  </div>
                </div>
                <div className="notification">
                  <div className="thumb-box"><img src={require('../assets/img/content/notifications/notif-thumb-2.png').default} alt="" /><span className="like-type"><svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                      </svg></span></div>
                  <div className="notification-info">
                    <div className="message"><a href="06-profile-page.html" className="bold">@NoirArtks</a> just liked<a href="#" className="bold">
                        Twitter Gaming Headers Pack 04</a></div>
                    <div className="publish-date">37 minutes ago</div>
                  </div>
                </div>
                <div className="notification">
                  <div className="thumb-box"><img src="img/content/notifications/notif-thumb-1.png" alt="" /><span className="review-type"><svg className="crumina-icon">
                        <use xlinkHref="#star-icon" />
                      </svg></span></div>
                  <div className="notification-info">
                    <div className="message"><a href="06-profile-page.html" className="bold">@CrimsonRay</a> just
                      reviewed<a href="05-product.html" className="bold">
                        Cryptoki NFT and Digital Market PSD Template</a></div>
                    <div className="publish-date">49 minutes ago</div>
                  </div>
                </div>
              </div>
              <a href="25-notifications.html" className="btn-small-fullwidth btn-dark btn-square">View all
                Notifications</a>
            </div>
          </div>
          {/*  notifications dropdown */}
        </div>
        {/* user activity buttons */}
        {/* header user profile */}
        <div className="header-user-profile cryptoki-notif-bttn" data-target="profile-dropdown">
          <div className="user-meta">
            <div className="user_name">Dexter Stark</div>
            <div className="user_score">$291.36</div>
          </div>
          <div className="avatar box-42">
            <img src={require('../assets/img/avatar.png').default} alt="avatar" /><span className="verified"><svg className="crumina-icon">
                <use xlinkHref="#check-icon" />
              </svg></span>
          </div>
          <div className="closing-icon">
            <svg className="crumina-icon close-icon">
              <use xlinkHref="#cross-icon" />
            </svg>
          </div>
          <div id="profile-dropdown" className="cryptoki-notif-target">
            <div className="profile-dropdown-header profile-cover-image" />
            <div className="profile-dropdown-body">
              <div className="profile-heading">
                <div className="profile-avatar avatar box-26">
                  <img src="img/avatar.png" alt="avatar" /><span className="verified"><svg className="crumina-icon">
                      <use xlinkHref="#check-icon" />
                    </svg></span>
                </div>
                <div className="profile-link">
                  <a className="btn  btn-small gradient-background" href="06-profile-page.html">My
                    Profile</a>
                </div>
              </div>
              <ul className="profile-menu">
                <li><a href="26-profile-info.html"><svg className="crumina-icon">
                      <use xlinkHref="#user-icon" />
                    </svg>Profile Info</a></li>
                <li><a href="%21.html#"><svg className="crumina-icon">
                      <use xlinkHref="#settings-icon" />
                    </svg>Account Settings</a></li>
                <li><a href="%21.html#"><svg className="crumina-icon">
                      <use xlinkHref="#slide-filter-icon" />
                    </svg>Notification Settings</a></li>
                <li><a href="10-profile-dashboard.html"><svg className="crumina-icon">
                      <use xlinkHref="#dashboard-icon" />
                    </svg>Dashboard</a></li>
                <li><a href="11-profile-sales-statement.html"><svg className="crumina-icon">
                      <use xlinkHref="#file-text-icon" />
                    </svg>Sales Statement</a></li>
                <li><a href="12-profile-upload-item.html"><svg className="crumina-icon">
                      <use xlinkHref="#picture-icon" />
                    </svg>Upload Item</a></li>
                <li><a href="13-profile-manage-items.html"><svg className="crumina-icon">
                      <use xlinkHref="#picture-icon" />
                    </svg>Manage Items</a></li>
                <li><a href="14-profile-payment-history.html"><svg className="crumina-icon">
                      <use xlinkHref="#dollar-icon" />
                    </svg>Payouts</a></li>
                <li><a href="15-profile-purchases.html"><svg className="crumina-icon">
                      <use xlinkHref="#wallet-icon" />
                    </svg>Purchases</a></li>
                <li><a href="%21.html#"><svg className="crumina-icon">
                      <use xlinkHref="#circle-checked-icon" />
                    </svg>Get Verified</a></li>
                <li className="logout"><a href="%21.html#"><svg className="crumina-icon">
                      <use xlinkHref="#logout-icon" />
                    </svg>Log Out</a></li>
              </ul>
            </div>
            <div className="profile-dropdown-footer">
              <div className="mode-toggle">
                <div className="mode-title"><span><svg className="crumina-icon">
                      <use xlinkHref="#moon-icon" />
                    </svg></span>Night-mode</div>
                <label className="toggle-control">
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="control" />
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* header user profile */}
      </div>
    </div>
    {/* header search block */}
    {/* header search block */}
  </nav>

      </div>
      );
    }
    
    export default Header;
    