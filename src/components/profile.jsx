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
                        </div>
                        <div className="author-description">
                            <p>I am a self-taught digital artist who specializes in 3d art and motion graphics. Most of my
                                works are inspired by nature and biomechanic themes. What does it mean? Biomechanics is the
                                study...<span className="bold">Read More</span>
                            </p>
                        </div>
                    </div>
                </div>
                {/*  PROFILE HEADER SECTION */}
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
                            <li className="swiper-slide active"><a href="#tab1">Created <span className="count">135</span></a></li>
                            <li className="swiper-slide"><a href="#tab2">Liked <span className="count">7.2K</span></a></li>
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
                                                            <a href=""><svg className="crumina-icon">
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
                            <div className="tab-content"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Profile