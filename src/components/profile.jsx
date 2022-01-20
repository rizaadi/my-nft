import React from "react";

class Profile extends React.Component {
    render() {
        return (
            <div className="primary-content-area profile-page">
                <div className="profile-header-section">
                    <div className="cover-image"><img src={require('../assets/img/content/profile/profile-cover-1.png')} alt="" /></div>
                    <div className="about-author-section container">
                        <div className="profile-header-user-profile">
                            <div className="avatar box-124">
                                <a href="08-profile-page.html"><img src={require('../assets/img/avatar.png')} alt="" /></a>
                                <span className="verified"></span>
                            </div>
                        </div>
                        <div className="author-primary-info">
                            <div className="activity-meta">
                                <div className="followers-number">
                                    <div className="number">903</div>
                                    <div className="label">Followers</div>
                                </div>
                                <div className="following-number">
                                    <div className="number">56</div>
                                    <div className="label">Following</div>
                                </div>
                                <div className="likes-number">
                                    <div className="number">12K</div>
                                    <div className="label">Likes Received</div>
                                </div>
                            </div>
                            <div className="profile-author-info">
                                <h3 className="author-name gradient-text"><a href="08-profile-page.html">Dexter Stark</a></h3>
                                <div className="author-meta">@DexterStark</div>
                                <div className="download-file">
                                    Ox465d53...d9c6
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#copy-icon" />
                                    </svg>
                                </div>
                            </div>
                            <div className="projects-meta">
                                <div className="projects-number">
                                    <div className="number">135</div>
                                    <div className="label">Created</div>
                                </div>
                                <div className="onsale-number">
                                    <div className="number">12</div>
                                    <div className="label">On Sale</div>
                                </div>
                                <div className="country">
                                    <div className="flag"><img src="img/content/profile/us-flag.png" alt="" /></div>
                                    <div className="label">United States</div>
                                </div>
                            </div>
                        </div>
                        <div className="author-description">
                            <p>I am a self-taught digital artist who specializes in 3d art and motion graphics. Most of my
                                works are inspired by nature and biomechanic themes. What does it mean? Biomechanics is the
                                study...<span className="bold">Read More</span>
                            </p>
                            <ul className="social-icons-list">
                                <li className="social-icon icon-border"><a href="#">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#link-icon" />
                                    </svg>
                                </a></li>
                                <li className="social-icon icon-border"><a href="#">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#facebook-icon" />
                                    </svg>
                                </a></li>
                                <li className="social-icon icon-border"><a href="#">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#twitter-icon" />
                                    </svg>
                                </a></li>
                                <li className="social-icon icon-border"><a href="#">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#instagram-icon" />
                                    </svg>
                                </a></li>
                                <li className="social-icon icon-border"><a href="#">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#twitch-icon" />
                                    </svg>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*  PROFILE HEADER SECTION */}
                {/*  MOBILE PROFILE HEADER SECTION */}
                <div className="profile-header-mobile">
                    <div className="cover-image"><img src="img/content/profile/profile-cover-1.png" alt="" /></div>
                    <div className="about-author-section container">
                        <div className="profile-header-user-profile">
                            <div className="avatar box-64 bordered">
                                <a href="08-profile-page.html"><img src="img/avatar.png" alt="" /></a>
                                <span className="verified"><svg className="crumina-icon">
                                    <use xlinkHref="#check-icon" />
                                </svg></span>
                            </div>
                            <div className="profile-author-info">
                                <h5 className="author-name gradient-text"><a href="08-profile-page.html">Dexter Stark</a></h5>
                                <div className="author-meta">@DexterStark</div>
                                <div className="download-file">
                                    Ox465d53...d9c6
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#copy-icon" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="follow-container">
                            <div className="more-link-wrapper">
                                <div className="more-link"><a href="#">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#dots-icon" />
                                    </svg>
                                </a>
                                </div>
                            </div>
                            <div className="follow-box">
                                <button className="btn btn-wide btn-dark">Follow!</button>
                            </div>
                        </div>
                    </div>
                    <ul className="social-icons-list">
                        <li className="social-icon icon-border"><a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#link-icon" />
                            </svg>
                        </a></li>
                        <li className="social-icon icon-border"><a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#facebook-icon" />
                            </svg>
                        </a></li>
                        <li className="social-icon icon-border"><a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#twitter-icon" />
                            </svg>
                        </a></li>
                        <li className="social-icon icon-border"><a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#instagram-icon" />
                            </svg>
                        </a></li>
                        <li className="social-icon icon-border"><a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#twitch-icon" />
                            </svg>
                        </a></li>
                    </ul>
                    <div className="author-primary-info">
                        <div className="activity-meta">
                            <div className="followers-number">
                                <div className="number">903</div>
                                <div className="label">Followers</div>
                            </div>
                            <div className="following-number">
                                <div className="number">56</div>
                                <div className="label">Following</div>
                            </div>
                            <div className="projects-number">
                                <div className="number">135</div>
                                <div className="label">Created</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  MOBILE PROFILE HEADER SECTION */}
                <div className="profile-page-container container">
                    {/*  TABS BLOCK */}
                    <div className="tabs-block swiper-container">
                        <div className="swiper-nav">
                            <div className="swiper-button-next">
                                <svg className="crumina-icon next-button">
                                    <use xlinkHref="#arrow-right2-icon" />
                                </svg>
                            </div>
                            <div className="swiper-button-prev">
                                <svg className="crumina-icon prev-button">
                                    <use xlinkHref="#arrow-left2-icon" />
                                </svg>
                            </div>
                        </div>
                        {/* TABS BUTTONS AND TABS SWIPER */}
                        <ul className="tabs-list swiper-wrapper">
                            <li className="swiper-slide active"><a href="#tab1">Created <span className="count">135</span></a>
                            </li>
                            <li className="swiper-slide"><a href="#tab2">Collected <span className="count">48</span></a></li>
                            <li className="swiper-slide"><a href="#tab3">On Sale <span className="count">12</span></a></li>
                            <li className="swiper-slide"><a href="#tab4">Liked <span className="count">7.2K</span></a></li>
                            <li className="swiper-slide"><a href="#tab5">Following <span className="count">56</span></a></li>
                            <li className="swiper-slide"><a href="#tab6">Followers <span className="count">903</span></a></li>
                            <li className="swiper-slide"><a href="#tab7">Activity</a></li>
                            <li className="swiper-slide"><a href="#tab8">About</a></li>
                        </ul>
                        {/* TABS BUTTONS AND TABS SWIPER */}
                        <div className="tabs-content-wrapper">
                            {/*  CREATED */}
                            <div id="tab1" className="tab active">
                                <div className="tab-content">
                                    <div className="featured-box grid-4-columns">
                                        <div className="featured-item">
                                            <div className="featured-item-wrapper">
                                                <div className="featured-item-content">
                                                    <div className="fav-counter">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#heart-icon" />
                                                        </svg>
                                                        <span className="count">22</span>
                                                    </div>
                                                    <div className="featured-item-image"><a href="05-product-page.html">
                                                        <img src="img/content/items/featured-item-1.png" alt="" /></a>
                                                    </div>
                                                    <div className="featured-item-info">
                                                        <div className="featured-countdown"><span className="clock"><svg className="crumina-icon">
                                                            <use xlinkHref="#clock-icon" />
                                                        </svg></span><span className="js-countdown" data-timer={86400} data-labels="d : , h : , m : , s" /></div>
                                                        <div className="title"><a href="05-product-page.html">The Molten
                                                            Heart</a></div>
                                                        <div className="item-meta"><span className="avatar box-26"><a href="08-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                                                            <use xlinkHref="#check-icon" />
                                                        </svg></span></span>@DexterStark
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="featured-item-post-content">
                                                    <div className="featured-item-pricebox">
                                                        <div className="price-caption">Current BID</div>
                                                        <div className="price">4.07 ETH</div>
                                                    </div>
                                                    <div className="social-share-box">
                                                        <div className="social-caption">Share</div>
                                                        <div className="share-icons">
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#facebook-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#twitter-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#instagram-icon" />
                                                            </svg></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-item">
                                            <div className="featured-item-wrapper">
                                                <div className="featured-item-content">
                                                    <div className="fav-counter">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#heart-icon" />
                                                        </svg>
                                                        <span className="count">68</span>
                                                    </div>
                                                    <div className="featured-item-image"><a href="05-product-page.html">
                                                        <img src="img/content/items/featured-item-17.png" alt="" /></a>
                                                    </div>
                                                    <div className="featured-item-info">
                                                        <div className="featured-countdown"><span className="clock"><svg className="crumina-icon">
                                                            <use xlinkHref="#clock-icon" />
                                                        </svg></span><span className="js-countdown" data-timer={73400} data-labels="d : , h : , m : , s" /></div>
                                                        <div className="title"><a href="05-product-page.html">Mystery Cube</a>
                                                        </div>
                                                        <div className="item-meta"><span className="avatar box-26"><a href="08-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                                                            <use xlinkHref="#check-icon" />
                                                        </svg></span></span>@DexterStark
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="featured-item-post-content">
                                                    <div className="featured-item-pricebox">
                                                        <div className="price-caption">Current BID</div>
                                                        <div className="price">1.96 ETH</div>
                                                    </div>
                                                    <div className="social-share-box">
                                                        <div className="social-caption">Share</div>
                                                        <div className="share-icons">
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#facebook-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#twitter-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#instagram-icon" />
                                                            </svg></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-item">
                                            <div className="featured-item-wrapper">
                                                <div className="featured-item-content">
                                                    <div className="fav-counter">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#heart-icon" />
                                                        </svg>
                                                        <span className="count">105</span>
                                                    </div>
                                                    <div className="featured-item-image"><a href="05-product-page.html">
                                                        <img src="img/content/items/featured-item-3.png" alt="" /></a>
                                                    </div>
                                                    <div className="featured-item-info">
                                                        <div className="featured-countdown"><span className="clock"><svg className="crumina-icon">
                                                            <use xlinkHref="#clock-icon" />
                                                        </svg></span><span className="js-countdown" data-timer={19400} data-labels="d : , h : , m : , s" /></div>
                                                        <div className="title"><a href="05-product-page.html">Breathing
                                                            Nature</a></div>
                                                        <div className="item-meta"><span className="avatar box-26"><a href="08-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                                                            <use xlinkHref="#check-icon" />
                                                        </svg></span></span>@DexterStark
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="featured-item-post-content">
                                                    <div className="featured-item-pricebox">
                                                        <div className="price-caption">Current BID</div>
                                                        <div className="price">2.31 ETH</div>
                                                    </div>
                                                    <div className="social-share-box">
                                                        <div className="social-caption">Share</div>
                                                        <div className="share-icons">
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#facebook-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#twitter-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#instagram-icon" />
                                                            </svg></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-item">
                                            <div className="featured-item-wrapper">
                                                <div className="featured-item-content">
                                                    <div className="fav-counter">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#heart-icon" />
                                                        </svg>
                                                        <span className="count">60</span>
                                                    </div>
                                                    <div className="featured-item-image"><a href="05-product-page.html">
                                                        <img src="img/content/items/featured-item-18.png" alt="" /></a>
                                                    </div>
                                                    <div className="featured-item-info">
                                                        <div className="featured-countdown"><span className="clock"><svg className="crumina-icon">
                                                            <use xlinkHref="#clock-icon" />
                                                        </svg></span><span className="js-countdown" data-timer={46400} data-labels="d : , h : , m : , s" /></div>
                                                        <div className="title"><a href="05-product-page.html">Golden Ebony</a>
                                                        </div>
                                                        <div className="item-meta"><span className="avatar box-26"><a href="08-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                                                            <use xlinkHref="#check-icon" />
                                                        </svg></span></span>@DexterStark
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="featured-item-post-content">
                                                    <div className="featured-item-pricebox">
                                                        <div className="price-caption">Current BID</div>
                                                        <div className="price">1.40 ETH</div>
                                                    </div>
                                                    <div className="social-share-box">
                                                        <div className="social-caption">Share</div>
                                                        <div className="share-icons">
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#facebook-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#twitter-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#instagram-icon" />
                                                            </svg></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-item">
                                            <div className="featured-item-wrapper">
                                                <div className="featured-item-content">
                                                    <div className="fav-counter">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#heart-icon" />
                                                        </svg>
                                                        <span className="count">22</span>
                                                    </div>
                                                    <div className="featured-item-image"><a href="05-product-page.html">
                                                        <img src="img/content/items/featured-item-5.png" alt="" /></a>
                                                    </div>
                                                    <div className="featured-item-info">
                                                        <div className="title"><a href="05-product-page.html">MushRoom
                                                            Popcorn</a></div>
                                                        <div className="item-meta"><span className="avatar box-26"><a href="08-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                                                            <use xlinkHref="#check-icon" />
                                                        </svg></span></span>@DexterStark
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="featured-item-post-content">
                                                    <div className="featured-item-pricebox">
                                                        <div className="price-caption">Reserve price</div>
                                                        <div className="price">0.96 ETH</div>
                                                    </div>
                                                    <div className="social-share-box">
                                                        <div className="social-caption">Share</div>
                                                        <div className="share-icons">
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#facebook-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#twitter-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#instagram-icon" />
                                                            </svg></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-item">
                                            <div className="featured-item-wrapper">
                                                <div className="featured-item-content">
                                                    <div className="fav-counter">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#heart-icon" />
                                                        </svg>
                                                        <span className="count">24</span>
                                                    </div>
                                                    <div className="featured-item-image"><a href="05-product-page.html">
                                                        <img src="img/content/items/featured-item-6.png" alt="" /></a>
                                                    </div>
                                                    <div className="featured-item-info">
                                                        <div className="title"><a href="05-product-page.html">Golden
                                                            Expansion</a></div>
                                                        <div className="item-meta"><span className="avatar box-26"><a href="08-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                                                            <use xlinkHref="#check-icon" />
                                                        </svg></span></span>@DexterStark
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="featured-item-post-content">
                                                    <div className="featured-item-pricebox">
                                                        <div className="price-caption">Reserve price</div>
                                                        <div className="price">1.47 ETH</div>
                                                    </div>
                                                    <div className="social-share-box">
                                                        <div className="social-caption">Share</div>
                                                        <div className="share-icons">
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#facebook-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#twitter-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#instagram-icon" />
                                                            </svg></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-item">
                                            <div className="featured-item-wrapper">
                                                <div className="featured-item-content">
                                                    <div className="fav-counter">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#heart-icon" />
                                                        </svg>
                                                        <span className="count">32</span>
                                                    </div>
                                                    <div className="featured-item-image"><a href="05-product-page.html">
                                                        <img src="img/content/items/featured-item-19.png" alt="" /></a>
                                                    </div>
                                                    <div className="featured-item-info">
                                                        <div className="featured-countdown"><span className="clock"><svg className="crumina-icon">
                                                            <use xlinkHref="#clock-icon" />
                                                        </svg></span><span className="js-countdown" data-timer={86900} data-labels="d : , h : , m : , s" /></div>
                                                        <div className="title"><a href="05-product-page.html">Balloons
                                                            Confetti</a></div>
                                                        <div className="item-meta"><span className="avatar box-26"><a href="08-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                                                            <use xlinkHref="#check-icon" />
                                                        </svg></span></span>@DexterStark
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="featured-item-post-content">
                                                    <div className="featured-item-pricebox">
                                                        <div className="price-caption">Current BID</div>
                                                        <div className="price">3.25 ETH</div>
                                                    </div>
                                                    <div className="social-share-box">
                                                        <div className="social-caption">Share</div>
                                                        <div className="share-icons">
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#facebook-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#twitter-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#instagram-icon" />
                                                            </svg></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-item">
                                            <div className="featured-item-wrapper">
                                                <div className="featured-item-content">
                                                    <div className="fav-counter">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#heart-icon" />
                                                        </svg>
                                                        <span className="count">18</span>
                                                    </div>
                                                    <div className="featured-item-image"><a href="05-product-page.html">
                                                        <img src="img/content/items/featured-item-20.png" alt="" /></a>
                                                    </div>
                                                    <div className="featured-item-info">
                                                        <div className="title"><a href="05-product-page.html">Living Stripes</a>
                                                        </div>
                                                        <div className="item-meta"><span className="avatar box-26"><a href="08-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                                                            <use xlinkHref="#check-icon" />
                                                        </svg></span></span>@DexterStark
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="featured-item-post-content">
                                                    <div className="featured-item-pricebox">
                                                        <div className="price-caption">Reserve price</div>
                                                        <div className="price">0.57 ETH</div>
                                                    </div>
                                                    <div className="social-share-box">
                                                        <div className="social-caption">Share</div>
                                                        <div className="share-icons">
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#facebook-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#twitter-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#instagram-icon" />
                                                            </svg></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-item">
                                            <div className="featured-item-wrapper">
                                                <div className="featured-item-content">
                                                    <div className="fav-counter">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#heart-icon" />
                                                        </svg>
                                                        <span className="count">29</span>
                                                    </div>
                                                    <div className="featured-item-image"><a href="05-product-page.html">
                                                        <img src="img/content/items/featured-item-21.png" alt="" /></a>
                                                    </div>
                                                    <div className="featured-item-info">
                                                        <div className="title"><a href="05-product-page.html">Sand Tornado</a>
                                                        </div>
                                                        <div className="item-meta"><span className="avatar box-26"><a href="08-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                                                            <use xlinkHref="#check-icon" />
                                                        </svg></span></span>@DexterStark
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="featured-item-post-content">
                                                    <div className="featured-item-pricebox">
                                                        <div className="price-caption">Reserve price</div>
                                                        <div className="price">1.36 ETH</div>
                                                    </div>
                                                    <div className="social-share-box">
                                                        <div className="social-caption">Share</div>
                                                        <div className="share-icons">
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#facebook-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#twitter-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#instagram-icon" />
                                                            </svg></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-item">
                                            <div className="featured-item-wrapper">
                                                <div className="featured-item-content">
                                                    <div className="fav-counter">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#heart-icon" />
                                                        </svg>
                                                        <span className="count">27</span>
                                                    </div>
                                                    <div className="featured-item-image"><a href="05-product-page.html">
                                                        <img src="img/content/items/featured-item-22.png" alt="" /></a>
                                                    </div>
                                                    <div className="featured-item-info">
                                                        <div className="featured-countdown"><span className="clock"><svg className="crumina-icon">
                                                            <use xlinkHref="#clock-icon" />
                                                        </svg></span><span className="js-countdown" data-timer={51690} data-labels="d : , h : , m : , s" /></div>
                                                        <div className="title"><a href="05-product-page.html">Hell’s
                                                            Spagetthi</a></div>
                                                        <div className="item-meta"><span className="avatar box-26"><a href="08-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                                                            <use xlinkHref="#check-icon" />
                                                        </svg></span></span>@DexterStark
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="featured-item-post-content">
                                                    <div className="featured-item-pricebox">
                                                        <div className="price-caption">Current BID</div>
                                                        <div className="price">4.89 ETH</div>
                                                    </div>
                                                    <div className="social-share-box">
                                                        <div className="social-caption">Share</div>
                                                        <div className="share-icons">
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#facebook-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#twitter-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#instagram-icon" />
                                                            </svg></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-item">
                                            <div className="featured-item-wrapper">
                                                <div className="featured-item-content">
                                                    <div className="fav-counter">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#heart-icon" />
                                                        </svg>
                                                        <span className="count">31</span>
                                                    </div>
                                                    <div className="featured-item-image"><a href="05-product-page.html">
                                                        <img src="img/content/items/featured-item-23.png" alt="" /></a>
                                                    </div>
                                                    <div className="featured-item-info">
                                                        <div className="title"><a href="05-product-page.html">Inside
                                                            Fireworks</a></div>
                                                        <div className="item-meta"><span className="avatar box-26"><a href="08-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                                                            <use xlinkHref="#check-icon" />
                                                        </svg></span></span>@DexterStark
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="featured-item-post-content">
                                                    <div className="featured-item-pricebox">
                                                        <div className="price-caption">Reserve price</div>
                                                        <div className="price">3.47 ETH</div>
                                                    </div>
                                                    <div className="social-share-box">
                                                        <div className="social-caption">Share</div>
                                                        <div className="share-icons">
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#facebook-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#twitter-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#instagram-icon" />
                                                            </svg></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-item">
                                            <div className="featured-item-wrapper">
                                                <div className="featured-item-content">
                                                    <div className="fav-counter">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#heart-icon" />
                                                        </svg>
                                                        <span className="count">19</span>
                                                    </div>
                                                    <div className="featured-item-image"><a href="05-product-page.html">
                                                        <img src="img/content/items/featured-item-24.png" alt="" /></a>
                                                    </div>
                                                    <div className="featured-item-info">
                                                        <div className="title"><a href="05-product-page.html">Melting
                                                            Magbulb</a></div>
                                                        <div className="item-meta"><span className="avatar box-26"><a href="08-profile-page.html"><img src="img/avatar.png" alt="" /></a><span className="verified"><svg className="crumina-icon">
                                                            <use xlinkHref="#check-icon" />
                                                        </svg></span></span>@DexterStark
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="featured-item-post-content">
                                                    <div className="featured-item-pricebox">
                                                        <div className="price-caption">Reserve price</div>
                                                        <div className="price">0.25 ETH</div>
                                                    </div>
                                                    <div className="social-share-box">
                                                        <div className="social-caption">Share</div>
                                                        <div className="share-icons">
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#facebook-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#twitter-icon" />
                                                            </svg></a>
                                                            <a href="#"><svg className="crumina-icon">
                                                                <use xlinkHref="#instagram-icon" />
                                                            </svg></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  CREATED */}
                            <div id="tab2" className="tab" />
                            <div id="tab3" className="tab" />
                            <div id="tab4" className="tab" />
                            <div id="tab5" className="tab" />
                            <div id="tab6" className="tab" />
                            {/*  TAB ACTIVITY */}
                            <div id="tab7" className="tab">
                                <div className="tab-content">
                                    <div className="activity-list">
                                        <div className="activity-item bid">
                                            <div className="bid-placer">
                                                <div className="avatar box-42"><a href="08-profile-page.html">
                                                    <img src="img/avatar-15.png" alt="avatar" /></a>
                                                </div>
                                                <div className="bid-info">
                                                    <div className="bid-title">Bid placed by <span className="gradient-text"><a href="08-profile-page.html">Crimson
                                                        Ray</a></span> of 2.31ETH (125.230 U$D) for <span className="colored"><a href="06-product-page-v2.html">Breathing
                                                            Nature</a></span> by <span className="gradient-text"><a href="08-profile-page.html">Dexter Stark</a></span></div>
                                                    <div className="bid-date">32 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="bid-product"><a href="06-product-page-v2.html">
                                                <img src="img/content/previews/project-thumb-1.png" alt="" /></a>
                                            </div>
                                        </div>
                                        <div className="activity-item bid">
                                            <div className="bid-placer">
                                                <div className="avatar box-42"><a href="08-profile-page.html">
                                                    <img src="img/avatar-13.png" alt="avatar" /></a>
                                                </div>
                                                <div className="bid-info">
                                                    <div className="bid-title">Bid placed by <span className="gradient-text"><a href="08-profile-page.html">JennArt</a></span> of 1.90ETH
                                                        (86.325 U$D) for
                                                        <span className="colored"><a href="06-product-page-v2.html">Social
                                                            Blockz</a></span> by <span className="gradient-text"><a href="08-profile-page.html">Jackie Jones</a></span>
                                                    </div>
                                                    <div className="bid-date">39 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="bid-product"><a href="06-product-page-v2.html">
                                                <img src="img/content/previews/project-thumb-5.png" alt="" /></a>
                                            </div>
                                        </div>
                                        <div className="activity-item like">
                                            <div className="bid-placer">
                                                <div className="avatar box-42"><a href="08-profile-page.html">
                                                    <img src="img/avatar-5.png" alt="avatar" /></a><span className="verified"><svg className="crumina-icon">
                                                        <use xlinkHref="#check-icon" />
                                                    </svg></span>
                                                </div>
                                                <div className="bid-info">
                                                    <div className="bid-title"><span className="gradient-text"><a href="08-profile-page.html">Noir Artworks</a></span>
                                                        liked <span className="colored"><a href="06-product-page-v2.html">Canary’s Kitchen</a></span>
                                                    </div>
                                                    <div className="bid-date">47 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="bid-product"><a href="06-product-page-v2.html">
                                                <img src="img/content/previews/project-thumb-6.png" alt="" /></a>
                                            </div>
                                        </div>
                                        <div className="activity-item follow">
                                            <div className="bid-placer">
                                                <div className="avatar box-42"><a href="08-profile-page.html">
                                                    <img src="img/avatar-10.png" alt="avatar" /></a><span className="verified"><svg className="crumina-icon">
                                                        <use xlinkHref="#check-icon" />
                                                    </svg></span>
                                                </div>
                                                <div className="bid-info">
                                                    <div className="bid-title"><span className="gradient-text"><a href="08-profile-page.html">Nicholas Stevens</a></span>
                                                        is now following <span className="gradient-text"><a href="08-profile-page.html">Jackie Jones</a></span></div>
                                                    <div className="bid-date">52 minutes ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="activity-item sale">
                                            <div className="bid-placer">
                                                <div className="avatar box-42"><a href="08-profile-page.html">
                                                    <img src="img/avatar.png" alt="avatar" /></a><span className="verified"><svg className="crumina-icon">
                                                        <use xlinkHref="#check-icon" />
                                                    </svg></span>
                                                </div>
                                                <div className="bid-info">
                                                    <div className="bid-title"><span className="gradient-text"><a href="08-profile-page.html">Dexter Stark</a></span> sold
                                                        <span className="colored"><a href="06-product-page-v2.html">Golden
                                                            Ebony</a></span> for 1.97ETH (104.368 U$D)
                                                    </div>
                                                    <div className="bid-date">53 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="bid-product"><a href="06-product-page-v2.html">
                                                <img src="img/content/previews/project-thumb-7.png" alt="" /></a>
                                            </div>
                                        </div>
                                        <div className="activity-item purchase">
                                            <div className="bid-placer">
                                                <div className="avatar box-42"><a href="08-profile-page.html">
                                                    <img src="img/avatar-14.png" alt="avatar" /></a>
                                                </div>
                                                <div className="bid-info">
                                                    <div className="bid-title"><span className="gradient-text"><a href="08-profile-page.html">Derek Greyson</a></span>
                                                        purchased <span className="colored"><a href="06-product-page-v2.html">Bubblegum Dream</a></span>
                                                        for 3.01ETH
                                                        (169.478 U$D)
                                                    </div>
                                                    <div className="bid-date">56 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="bid-product"><a href="06-product-page-v2.html">
                                                <img src="img/content/previews/project-thumb-8.png" alt="" /></a>
                                            </div>
                                        </div>
                                        <div className="activity-item listing">
                                            <div className="bid-placer">
                                                <div className="avatar box-42"><a href="08-profile-page.html">
                                                    <img src="img/avatar-2.png" alt="avatar" /></a><span className="verified"><svg className="crumina-icon">
                                                        <use xlinkHref="#check-icon" />
                                                    </svg></span>
                                                </div>
                                                <div className="bid-info">
                                                    <div className="bid-title"><span className="gradient-text"><a href="08-profile-page.html">Jackie Jones</a></span> just
                                                        listed <span className="colored"><a href="06-product-page-v2.html">Soul
                                                            Picz Block</a></span> for 3.25ETH (259.022
                                                        U$D)
                                                    </div>
                                                    <div className="bid-date">58 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="bid-product"><a href="06-product-page-v2.html">
                                                <img src="img/content/previews/project-thumb-9.png" alt="" /></a>
                                            </div>
                                        </div>
                                        <div className="activity-item bid">
                                            <div className="bid-placer">
                                                <div className="avatar box-42"><a href="08-profile-page.html">
                                                    <img src="img/avatar-15.png" alt="avatar" /></a>
                                                </div>
                                                <div className="bid-info">
                                                    <div className="bid-title">Bid placed by <span className="gradient-text"><a href="08-profile-page.html">Crimson
                                                        Ray</a></span> of 0.25ETH (67.007u$d) for <span className="colored"><a href="06-product-page-v2.html">Octo-Oceanic</a></span></div>
                                                    <div className="bid-date">59 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="bid-product"><a href="06-product-page-v2.html">
                                                <img src="img/content/previews/project-thumb-4.png" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="load-more_bars">
                                        <div className="load-more_bar" />
                                        <div className="load-more_bar" />
                                        <div className="load-more_bar" />
                                        <div className="load-more_bar" />
                                        <div className="load-more_bar" />
                                        <div className="load-more_bar" />
                                        <div className="load-more_bar" />
                                        <div className="load-more_bar" />
                                    </div>
                                </div>
                            </div>
                            {/*  TAB ACTIVITY */}
                            {/*  TAB ABOUT */}
                            <div id="tab8" className="tab">
                                <div className="tab-content">
                                    <div className="about-author-wrapper">
                                        <div className="author-bio">
                                            <div className="small-title">Full Bio</div>
                                            <p>I am a self-taught digital artist who specializes in 3d art and motion
                                                graphics.
                                                Most of my works are inspired by nature and biomechanic themes.</p>
                                            <p>What does it mean? Biomechanics is the study of the structure, function and
                                                motion of the mechanical aspects of biological systems, at any level from
                                                whole
                                                organisms to organs, cells and cell organelles, using the methods of
                                                mechanics.
                                                Biomechanics is a branch of biophysics.</p>
                                        </div>
                                        <div className="author-details">
                                            <div className="small-title">Details</div>
                                            <ul className="details-list">
                                                <li><svg className="crumina-icon bullet-icon">
                                                    <use xlinkHref="#circle-icon" />
                                                </svg><span className="detail-label">Joined</span><span className="bold">January
                                                    5th,
                                                    2021</span></li>
                                                <li><svg className="crumina-icon bullet-icon">
                                                    <use xlinkHref="#circle-icon" />
                                                </svg><span className="detail-label">Formats</span><span className="bold">Austin, TX -
                                                    United States</span></li>
                                                <li><svg className="crumina-icon bullet-icon">
                                                    <use xlinkHref="#circle-icon" />
                                                </svg><span className="detail-label">Email</span><span className="bold"><a href="mailto:dexstarkart@fakemail.com">dexstarkart@fakemail.com</a></span>
                                                </li>
                                                <li><svg className="crumina-icon bullet-icon">
                                                    <use xlinkHref="#circle-icon" />
                                                </svg><span className="detail-label">Speciality</span><span className="bold">Motion
                                                    Graphics</span></li>
                                            </ul>
                                        </div>
                                        <div className="author-social-networks">
                                            <div className="small-title">Social Media</div>
                                            <ul className="social-styled-list">
                                                <li><a href="#">
                                                    <span className="marker"><svg className="crumina-icon">
                                                        <use xlinkHref="#link-icon" />
                                                    </svg></span>www.dexstarkart.com<span className="verified">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#check-icon" />
                                                        </svg>
                                                    </span>
                                                </a></li>
                                                <li><a href="#"><span className="marker"><svg className="crumina-icon">
                                                    <use xlinkHref="#facebook-icon" />
                                                </svg></span>@dexstarkart</a></li>
                                                <li><a href="#"><span className="marker"><svg className="crumina-icon">
                                                    <use xlinkHref="#twitter-icon" />
                                                </svg></span>@dexstark_art<span className="verified"><svg className="crumina-icon">
                                                    <use xlinkHref="#check-icon" />
                                                </svg></span></a></li>
                                                <li><a href="#"><span className="marker"><svg className="crumina-icon">
                                                    <use xlinkHref="#instagram-icon" />
                                                </svg></span>@dexstark<span className="verified"><svg className="crumina-icon">
                                                    <use xlinkHref="#check-icon" />
                                                </svg></span></a></li>
                                                <li><a href="#"><span className="marker"><svg className="crumina-icon">
                                                    <use xlinkHref="#twitch-icon" />
                                                </svg></span>@dexstarkstreams</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Profile