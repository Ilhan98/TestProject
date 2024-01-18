import handImg from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import heroImage from "../Assets/hero_image.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="heroLeft">
        <h2>New arrivals</h2>
        <div>
          <div className="heroHandIcon">
            <p>New</p>
            <img src={handImg} alt="" />
          </div>
          <p>Collection </p>
          <p>for everyone</p>
        </div>
        <div className="heroLatestBtn">
          <div>Latest colection</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="heroRight">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
