import React from 'react';

class View extends React.Component {
  render() {
    return (
      <div className="Main">
        <div>
          <div className="product-page product-version-1">
            <div className="product-media">
              <a className="expand-icon" data-fslightbox="lightbox" href="img/content/product-img/product-1-large.png">
                <svg className="crumina-icon">
                  <use xlinkHref="#maximize-icon" />
                </svg> 
              </a>
              <div className="product-img">
                <img src="img/content/product-img/product-1.png" alt="" />
              </div>
            </div>
            <div className="product-info cryptoki-scrollbar">
              <div className="product-info-wrapper">
                <div className="page-title-section">
                  <h1>Breathing Nature</h1>
                </div>
                <div className="product-description">
                  <p>I am a self-taught digital artist who specializes in 3d art and motion graphics. Most of
                    my works are inspired by nature and biomechanic themes.</p>
                  <p>What does it mean? Biomechanics is the study of the structure, function and motion of the
                    mechanical aspects of biological systems, at any level from whole organisms to organs,
                    cells and cell organelles, using the methods of mechanics. Biomechanics is a branch of
                    biophysics.</p>
                </div>
                <div className="avatar-block">
                  <div className="avatar box-42">
                    <a href="08-profile-page.html"><img src={require('../assets/img/avatar.png')} alt="avatar" /></a><span className="verified"><svg className="crumina-icon">
                      <use xlinkHref="#check-icon" />
                    </svg></span>
                  </div>
                  <div className="avatar-meta">
                    <div className="avatar-title"><span className="gradient-text"><a href="08-profile-page.html">Dexter
                      Stark</a></span></div>
                    <div className="avatar-meta">@DexterStark</div>
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
export default View;