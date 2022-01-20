import logoz from '../assets/img/avatar.png'
function Main() {
    return (
      <div className="Main">
<div className="primary-content-area bottom-padding-70 ">
    {/* fullwidth banner */}
    <div className="section-padding fullwidth-banner">
      <div className="banner-overlay" style={{backgroundImage: 'url(img/content/home-banner.png)'}} />
      <div className="search-form-with-text section-small">
        <div className="text-content">
          <div className="subtitle">WELCOME TO CRIPTOKI</div>
          <div className="title">Browse the Best<br />
            Digital Products!</div>
        </div>
        <div className="search-block">
          <form method="get" className="main-search">
            <input className="main-search-params" type="hidden" name="params" defaultValue="all" />
            <button className="search-params">
              <span className="button-text search-param-title">All Categories</span>
              <svg className="crumina-icon">
                <use xlinkHref="#arrow-down-icon" />
              </svg>
            </button>
            <ul className="search-dropdown">
              <li data-param="all">All Categories</li>
              <li data-param="ui-templates">UI templates</li>
              <li data-param="coded-templates">Coded templates</li>
              <li data-param="social-graphics">Social Graphics</li>
            </ul>
            <input type="text" className="search-input" placeholder="Enter your search here..." />
            <button className="search-button">
              <svg className="crumina-icon">
                <use xlinkHref="#search-icon" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
    {/* fullwidth banner */}
    {/* featured items carousel */}
    <div className="container section-padding overflow-hidden ">
      <div className="section-title-wrapper">
        <div className="section-title"><span className="gradient-text">Featured</span> Items</div>
        <div className="title-navigation">
          <div className="featured-carousel-icon swiper-button-prev"><svg className="crumina-icon">
              <use xlinkHref="#arrow-left2-icon" />
            </svg></div>
          <div className="featured-carousel-icon swiper-button-next"><svg className="crumina-icon">
              <use xlinkHref="#arrow-right2-icon" />
            </svg></div>
        </div>
      </div>
      <div className="featured-carousel">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="featured-item v5">
              <div className="featured-item-wrapper">
                <div className="featured-item-content">
                  <div className="fav-counter"><svg className="crumina-icon">
                      <use xlinkHref="#heart-icon" />
                    </svg><span className="count">22</span></div>
                  <div className="featured-item-image">
                    <a href="06-profile-page.html">
                      <img src="img/content/items/featured-item-25.png" alt="" /></a>
                  </div>
                  <div className="featured-item-info">
                    <div className="item-category ui-templates">
                      UI templates
                    </div>
                    <div className="title"><a href="05-product.html">Cryptoki - NFT and Digital
                        Market...</a>
                    </div>
                    <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg></span></span>@DexterStark</div>
                  </div>
                </div>
                <div className="featured-item-post-content">
                  <div className="item-rating">
                    <span className="filled"><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                    <span className="filled"><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                    <span className="filled"><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                    <span className="filled"><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                    <span><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                  </div>
                  <div className="item-price">$12.00</div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="featured-item v5">
              <div className="featured-item-wrapper">
                <div className="featured-item-content">
                  <div className="fav-counter"><svg className="crumina-icon">
                      <use xlinkHref="#heart-icon" />
                    </svg><span className="count">22</span></div>
                  <div className="featured-item-image">
                    <a href="06-profile-page.html">
                      <img src="img/content/items/featured-item-26.png" alt="" /></a>
                  </div>
                  <div className="featured-item-info">
                    <div className="item-category coded-templates">
                      Coded templates
                    </div>
                    <div className="title"><a href="05-product.html">Olympus HTML - Social
                        Networking...</a></div>
                    <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar-2.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg></span></span>@JackieJ</div>
                  </div>
                </div>
                <div className="featured-item-post-content">
                  <div className="item-rating">
                    <span className="filled"><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                    <span className="filled"><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                    <span className="filled"><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                    <span className="filled"><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                    <span className="filled"><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                  </div>
                  <div className="item-price">$24.00</div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="featured-item v5">
              <div className="featured-item-wrapper">
                <div className="featured-item-content">
                  <div className="fav-counter"><svg className="crumina-icon">
                      <use xlinkHref="#heart-icon" />
                    </svg><span className="count">68</span></div>
                  <div className="featured-item-image">
                    <a href="06-profile-page.html">
                      <img src="img/content/items/featured-item-27.png" alt="" /></a>
                  </div>
                  <div className="featured-item-info">
                    <div className="item-category social-graphics">
                      Social graphics
                    </div>
                    <div className="title"><a href="05-product.html">Twitter Gaming Headers Pack
                        04</a></div>
                    <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg></span></span>@DexterStark</div>
                  </div>
                </div>
                <div className="featured-item-post-content">
                  <div className="item-rating">
                    <span className="filled"><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                    <span className="filled"><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                    <span className="filled"><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                    <span className="filled"><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                    <span><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                  </div>
                  <div className="item-price">$8.00</div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="featured-item v5">
              <div className="featured-item-wrapper">
                <div className="featured-item-content">
                  <div className="fav-counter"><svg className="crumina-icon">
                      <use xlinkHref="#heart-icon" />
                    </svg><span className="count">22</span></div>
                  <div className="featured-item-image">
                    <a href="06-profile-page.html">
                      <img src="img/content/items/featured-item-28.png" alt="" /></a>
                  </div>
                  <div className="featured-item-info">
                    <div className="item-category video-tutorials">
                      Video tutorials
                    </div>
                    <div className="title"><a href="05-product.html">Add Video Reviews to your
                        Theme!</a></div>
                    <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar-8.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg></span></span>@beardedwndr</div>
                  </div>
                </div>
                <div className="featured-item-post-content">
                  <div className="item-rating">
                    <span className="filled"><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                    <span className="filled"><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                    <span className="filled"><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                    <span><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                    <span><svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg></span>
                  </div>
                  <div className="item-price">$17.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* featured items carousel */}
    {/*  items categories carousel */}
    <div className="container section-padding">
      <div className="section-title-wrapper">
        <div className="section-title">Browse <span className="gradient-text">Categories</span></div>
        <div className="title-navigation">
          <div className="items-categories-icon swiper-button-prev"><svg className="crumina-icon">
              <use xlinkHref="#arrow-left2-icon" />
            </svg></div>
          <div className="items-categories-icon swiper-button-next"><svg className="crumina-icon">
              <use xlinkHref="#arrow-right2-icon" />
            </svg></div>
        </div>
      </div>
      <div className="items-categories-carousel overflow-hidden">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <a href="03-shop-category.html">
              <div className="category-card turquoise-gradient-diagonal">
                <div className="category-wrapper" style={{backgroundImage: 'url(img/content/categories/screens-1.png)'}}>
                  <div className="category-content">
                    <div className="category-title">UI Templates</div>
                    <div className="category-meta">537 Items</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="swiper-slide">
            <a href="03-shop-category.html">
              <div className="category-card purple-gradient-diagonal">
                <div className="category-wrapper" style={{backgroundImage: 'url(img/content/categories/screens-2.png)'}}>
                  <div className="category-content">
                    <div className="category-title">Coded<br />Templates
                    </div>
                    <div className="category-meta">109 Items</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="swiper-slide">
            <a href="03-shop-category.html">
              <div className="category-card orange-gradient-diagonal">
                <div className="category-wrapper" style={{backgroundImage: 'url(img/content/categories/screens-2.png)'}}>
                  <div className="category-content">
                    <div className="category-title">Social<br />
                      Graphics
                    </div>
                    <div className="category-meta">1066 Items</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/*  items categories carousel */}
    {/* featured items grid */}
    <div className="container section-padding">
      <div className="section-title-wrapper">
        <div className="section-title"><span className="gradient-text">Newest</span> Items</div>
        <div className="all-items-link"><a href="02-explore.html">Explore all Artworks</a></div>
      </div>
      <div className="featured-box">
        <div className="featured-box-wrapper grid-4-columns">
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image"><a href="05-product.html">
                    <img src="img/content/items/featured-item-29.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category social-graphics">
                    Social graphics
                  </div>
                  <div className="title"><a href="05-product.html">Youtube Gaming Thumbnails Pack
                      30</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src={logoz} alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@DexterStark</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$8.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image"><a href="05-product.html">
                    <img src="img/content/items/featured-item-30.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category coded-templates">
                    Coded templates
                  </div>
                  <div className="title"><a href="05-product.html">Olympus WP - Social
                      Networking...</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar-2.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@JackieJ</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$68.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image"><a href="05-product.html">
                    <img src="img/content/items/featured-item-31.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category social-graphics">
                    Social graphics
                  </div>
                  <div className="title"><a href="05-product.html">Phantom Cloud - Digital Artist
                      PSD...</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@DexterStark</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$10.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image"><a href="05-product.html">
                    <img src="img/content/items/featured-item-32.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category social-graphics">
                    Social graphics
                  </div>
                  <div className="title"><a href="05-product.html">Twitter Gaming Headers Pack 07</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@DexterStark</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$8.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image"><a href="05-product.html">
                    <img src="img/content/items/featured-item-33.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category video-tutorials">
                    Video tutorials
                  </div>
                  <div className="title"><a href="05-product.html">How to Create Gamification
                      Badges</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar-8.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@beardedwndr</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$17.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image"><a href="05-product.html">
                    <img src="img/content/items/featured-item-34.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category social-graphics">
                    Social graphics
                  </div>
                  <div className="title"><a href="05-product.html">Youtube Gaming Thumbnails Pack
                      05</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@DexterStark</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$8.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image"><a href="05-product.html">
                    <img src="img/content/items/featured-item-35.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category social-graphics">
                    Social graphics
                  </div>
                  <div className="title"><a href="05-product.html">Twitter Gaming Headers Pack 01</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@DexterStark</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$8.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image"><a href="05-product.html">
                    <img src="img/content/items/featured-item-36.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category ui-templates">
                    UI templates
                  </div>
                  <div className="title"><a href="05-product.html">Phantom Cloud - Digital Artist
                      PSD...</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar-2.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@JackieJ</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$24.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image"><a href="05-product.html">
                    <img src="img/content/items/featured-item-37.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category social-graphics">
                    Social graphics
                  </div>
                  <div className="title"><a href="05-product.html">Youtube Gaming Thumbnails Pack
                      28</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@DexterStark</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$8.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image"><a href="05-product.html">
                    <img src="img/content/items/featured-item-38.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category ui-templates">
                    UI templates
                  </div>
                  <div className="title"><a href="05-product.html">Valkivid PSD - Content
                      Creators...</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar-2.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@JackieJ</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$12.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image"><a href="05-product.html">
                    <img src="img/content/items/featured-item-39.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category video-tutorials">
                    Video tutorials
                  </div>
                  <div className="title"><a href="05-product.html">How to Create Gamification
                      Quests</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar-8.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@beardedwndr</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$17.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image"><a href="05-product.html">
                    <img src="img/content/items/featured-item-40.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category social-graphics">
                    Social graphics
                  </div>
                  <div className="title"><a href="05-product.html">Youtube Gaming Thumbnails Pack
                      11</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@DexterStark</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$8.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image"><a href="05-product.html">
                    <img src="img/content/items/featured-item-41.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category social-graphics">
                    Social graphics
                  </div>
                  <div className="title"><a href="05-product.html">Youtube Gaming Thumbnails Pack
                      11</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@DexterStark</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$8.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image"><a href="05-product.html">
                    <img src="img/content/items/featured-item-42.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category social-graphics">
                    Social graphics
                  </div>
                  <div className="title"><a href="05-product.html">Twitter Gaming Headers Pack 09</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@DexterStark</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$8.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image"><a href="05-product.html">
                    <img src="img/content/items/featured-item-43.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category social-graphics">
                    Social graphics
                  </div>
                  <div className="title"><a href="05-product.html">Youtube Gaming Thumbnails Pack
                      08</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@DexterStark</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$8.00</div>
              </div>
            </div>
          </div>
          <div className="featured-item v5">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg><span className="count">22</span></div>
                <div className="featured-item-image"><a href="05-product.html">
                    <img src="img/content/items/featured-item-44.png" alt="" /></a>
                </div>
                <div className="featured-item-info">
                  <div className="item-category ui-templates">
                    UI templates
                  </div>
                  <div className="title"><a href="05-product.html">Necromancers - eSports Team
                      PSD...</a>
                  </div>
                  <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src="img/avatar-2.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg></span></span>@JackieJ</div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="item-rating">
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span className="filled"><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                  <span><svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg></span>
                </div>
                <div className="item-price">$12.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* featured items grid */}
    {/* featured sellers carousel */}
    <div className="container section-padding">
      <div className="section-title-wrapper">
        <div className="section-title">Featured <span className="gradient-text">Sellers</span></div>
        <div className="title-navigation">
          <div className="featured-sellers-icon swiper-button-prev"><svg className="crumina-icon">
              <use xlinkHref="#arrow-left2-icon" />
            </svg></div>
          <div className="featured-sellers-icon swiper-button-next"><svg className="crumina-icon">
              <use xlinkHref="#arrow-right2-icon" />
            </svg></div>
        </div>
      </div>
      <div className="featured-sellers-carousel overflow-hidden">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="seller-card">
              <div className="about-seller">
                <div className="seller-info">
                  <div className="avatar box-64">
                    <a href="06-profile-page.html">
                      <img src="img/avatar.png" alt="avatar" /></a><span className="verified"><svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg></span>
                  </div>
                  <div className="seller-meta">
                    <div className="title">Dexter Stark</div>
                    <div className="meta">@DexterStark</div>
                  </div>
                </div>
                <div className="seller-stats">
                  <div className="seller-score">
                    <div className="number title">179</div>
                    <div className="label">Total Items</div>
                  </div>
                  <div className="seller-score">
                    <div className="number title">13.5K</div>
                    <div className="label">Total Sales</div>
                  </div>
                  <div className="seller-score">
                    <div className="number title">4.8 / 5</div>
                    <div className="label">Avg.Rating</div>
                  </div>
                </div>
              </div>
              <div className="seller-products">
                <div className="products-previews">
                  <div className="preview-box"><a href="06-profile-page.html"><img src="img/content/previews/project-thumb-37.png" alt="" /></a></div>
                  <div className="preview-box"><a href="06-profile-page.html"><img src="img/content/previews/project-thumb-38.png" alt="" /></a></div>
                  <div className="preview-box"><a href="06-profile-page.html"><img src="img/content/previews/project-thumb-39.png" alt="" /></a></div>
                  <div className="preview-box"><a href="06-profile-page.html"><img src="img/content/previews/project-thumb-40.png" alt="" /></a></div>
                </div>
                <div className="more-link"><a href="06-profile-page.html">
                    <svg className="crumina-icon">
                      <use xlinkHref="#dots-icon" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="seller-card">
              <div className="about-seller">
                <div className="seller-info">
                  <div className="avatar box-64">
                    <a href="06-profile-page.html">
                      <img src="img/avatar-2.png" alt="avatar" /></a><span className="verified"><svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg></span>
                  </div>
                  <div className="seller-meta">
                    <div className="title">Jackie Jones</div>
                    <div className="meta">@JackieJ</div>
                  </div>
                </div>
                <div className="seller-stats">
                  <div className="seller-score">
                    <div className="number title">53</div>
                    <div className="label">Total Items</div>
                  </div>
                  <div className="seller-score">
                    <div className="number title">10.7K</div>
                    <div className="label">Total Sales</div>
                  </div>
                  <div className="seller-score">
                    <div className="number title">4.9 / 5</div>
                    <div className="label">Avg.Rating</div>
                  </div>
                </div>
              </div>
              <div className="seller-products">
                <div className="products-previews">
                  <div className="preview-box"><a href="06-profile-page.html"><img src="img/content/previews/project-thumb-41.png" alt="" /></a></div>
                  <div className="preview-box"><a href="06-profile-page.html"><img src="img/content/previews/project-thumb-42.png" alt="" /></a></div>
                  <div className="preview-box"><a href="06-profile-page.html"><img src="img/content/previews/project-thumb-43.png" alt="" /></a></div>
                  <div className="preview-box"><a href="06-profile-page.html"><img src="img/content/previews/project-thumb-44.png" alt="" /></a></div>
                </div>
                <div className="more-link"><a href="06-profile-page.html">
                    <svg className="crumina-icon">
                      <use xlinkHref="#dots-icon" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* featured sellers carousel */}
    {/* become seller block */}
    <div className="section-small section-padding">
      <div className="become-seller-block">
        <img src="img/content/become-seller.png" alt="" />
        <div className="text-content">
          <div className="subtitle">JOIN OUR COMMUNITY!</div>
          <div className="title">Click <span className="gradient-text"><a href="20-become-a-creator.html">Here</a></span> to <br />
            Become a Seller!</div>
        </div>
      </div>
    </div>
    {/* become seller block */}
    {/* latest news */}
    <div className="container section-padding">
      <div className="section-title-wrapper">
        <div className="section-title">Latest <span className="gradient-text">News</span></div>
        <div className="all-items-link"><a href="16-blog-grid.html">View all Blog Posts</a></div>
      </div>
      <div className="latest-news-box grid-3-columns">
        <div className="news-item">
          <div className="news-thumb">
            <a href="15-blog-post-sidebar.html">
              <img src="img/content/latest-news/news-thumb1.png" alt="" /></a>
          </div>
          <div className="news-content">
            <div className="news-meta">
              <div className="news-tags">
                <span className="tag-item"><a>Guides</a></span>
              </div>
              by <a href="06-profile-page.html">Cryptoki</a>, March 26th, 2021
            </div>
            <div className="news-title h5"><a href="15-blog-post-sidebar.html">We explain with details
                everything
                you need to know about crypto art and
                cryptocurrencies!</a></div>
            <div className="news-excerpt">A cryptocurrency is a digital asset designed to work as a medium
              of exchange
              wherein individual coin ownership records...</div>
            <div className="read-more-link">
              <a href="#">Read More<svg className="crumina-icon">
                  <use xlinkHref="#arrow-right2-icon" />
                </svg></a>
            </div>
          </div>
        </div>
        <div className="news-item">
          <div className="news-thumb">
            <a href="15-blog-post-sidebar.html">
              <img src="img/content/latest-news/news-thumb2.png" alt="" /></a>
          </div>
          <div className="news-content">
            <div className="news-meta">
              <div className="news-tags">
                <span className="tag-item"><a>Guides</a></span>
                <span className="tag-item"><a>News</a></span>
              </div>
              by <a href="06-profile-page.html">Marina Valentine</a>, March 13th, 2021
            </div>
            <div className="news-title h5"><a href="15-blog-post-sidebar.html">Here’s a quick guide about
                how to
                make money selling your artworks with
                Criptoki!</a></div>
            <div className="news-excerpt">A cryptocurrency is a digital asset designed to work as a medium
              of exchange
              wherein individual coin ownership records...</div>
            <div className="read-more-link">
              <a href="15-blog-post-sidebar.html">Read More<svg className="crumina-icon">
                  <use xlinkHref="#arrow-right2-icon" />
                </svg></a>
            </div>
          </div>
        </div>
        <div className="news-item">
          <div className="news-thumb">
            <a href="15-blog-post-sidebar.html">
              <img src="img/content/latest-news/news-thumb3.png" alt="" /></a>
          </div>
          <div className="news-content">
            <div className="news-meta">
              <div className="news-tags">
                <span className="tag-item"><a>Currencies</a></span>
              </div>
              by <a href="06-profile-page.html">Cryptoki</a>, March 4th, 2021
            </div>
            <div className="news-title h5"><a href="15-blog-post-sidebar.html">What’s ETH? An in-depth view
                of the
                currency used in the market</a></div>
            <div className="news-excerpt">A cryptocurrency is a digital asset designed to work as a medium
              of exchange
              wherein individual coin ownership records...</div>
            <div className="read-more-link">
              <a href="15-blog-post-sidebar.html">Read More<svg className="crumina-icon">
                  <use xlinkHref="#arrow-right2-icon" />
                </svg></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* latest news */}
  </div>
      </div>
    );
}
export default Main;
