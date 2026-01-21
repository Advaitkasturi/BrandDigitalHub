import "./Home.css";
import logo from "../logo.png";

export default function Home() {
  return (
    <section className="home" id="home">
      {/* HERO */}
      <div className="hero">
        <div className="heroLogoWrap">
          <img className="heroLogo" src={logo} alt="BrandDigitalHub Logo" />
        </div>

        <h1 className="heroTitle">
          We scale brands with <span>smart digital strategies</span>, viral content{" "}
          & high-ROI ads
        </h1>

        <p className="heroSub">
          Unlock digital growth with innovative strategies and campaigns that connect,
          engage, and convert your audience for maximum ROI.
        </p>

        <div className="heroBtns">
          <button className="btnPrimary">Get a Free Consultation</button>
          <button className="btnSecondary">
            Our Services <span className="arrow">›</span>
          </button>
        </div>

        <div className="heroTicks">
          <span>✔ Smart Strategies</span>
          <span>✔ Viral Content</span>
          <span>✔ High-ROI Advertising</span>
        </div>
      </div>

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
