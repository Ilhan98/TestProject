import "../Footer/Footer.css";
import footerLogo from "../Assets/logo_big.png";
import instagramIcon from "../Assets/instagram_icon.png";
import pintesterIcon from "../Assets/pintester_icon.png";
import whatsappIcon from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLogo">
        <img src={footerLogo} alt="" />
        <p>Shopper</p>
      </div>

      <ul className="footerLinks">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footerSocialIcons">
        <div className="footerIconContainer">
          <img src={instagramIcon} alt="" />
        </div>
        <div className="footerIconContainer">
          <img src={pintesterIcon} alt="" />
        </div>
        <div className="footerIconContainer">
          <img src={whatsappIcon} alt="" />
        </div>
      </div>
      <div className="footerCopyright">
        <hr />
        <p>Copyright @ 2023 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
