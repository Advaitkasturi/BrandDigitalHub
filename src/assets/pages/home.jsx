import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      {/* HERO */}
      <div className="hero">
        {/* Center Logo */}
        <div className="heroLogoWrap">
          <img className="heroLogo" src="/logo.png" alt="BrandDigitalHub Logo" />
        </div>

        {/* Main Title */}
        <h1 className="heroTitle">
          We scale brands with <span>smart digital strategies</span>, viral content{" "}
          & high-ROI ads
        </h1>

        {/* Subtext */}
        <p className="heroSub">
          Unlock digital growth with innovative strategies and campaigns that connect,
          engage, and convert your audience for maximum ROI.
        </p>

        {/* Buttons */}
        <div className="heroBtns">
          <button className="btnPrimary">Get a Free Consultation</button>
          <button className="btnSecondary">
            Our Services <span className="arrow">›</span>
          </button>
        </div>

        {/* Mini points */}
        <div className="heroTicks">
          <span>✔ Smart Strategies</span>
          <span>✔ Viral Content</span>
          <span>✔ High-ROI Advertising</span>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="featureRow">
        <div className="featureCard">
          <div className="featureIcon">💡</div>
          <div>
            <h3>Smart Strategies</h3>
            <p>Custom plans designed to grow your brand faster.</p>
          </div>
        </div>

        <div className="featureCard">
          <div className="featureIcon">📣</div>
          <div>
            <h3>Viral Content</h3>
            <p>High-quality reels & posts that grab attention.</p>
          </div>
        </div>

        <div className="featureCard">
          <div className="featureIcon">📈</div>
          <div>
            <h3>High-ROI Advertising</h3>
            <p>Performance ads optimized for maximum results.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
