import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner header-text">
      <div className="owl-banner owl-carousel owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div className="owl-stage">
            <div className="owl-item active">
              <div className="banner-item-01">
                <div className="text-content">
                  <h4>Best Offer</h4>
                  <h2>New Arrivals On Sale</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-nav disabled">
          <button type="button" role="presentation" className="owl-prev">
            <span aria-label="Previous">‹</span>
          </button>
          <button type="button" role="presentation" className="owl-next">
            <span aria-label="Next">›</span>
          </button>
        </div>
        <div className="owl-dots">
          <button role="button" className="owl-dot active">
            <span></span>
          </button>
          <button role="button" className="owl-dot">
            <span></span>
          </button>
          <button role="button" className="owl-dot">
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
