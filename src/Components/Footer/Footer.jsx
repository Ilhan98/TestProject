import "../Footer/Footer.css";
import footerLogo from "../Assets/logo_big.png";

import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
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
          <InstagramIcon fontSize="large" />
        </div>
        <div className="footerIconContainer">
          <XIcon fontSize="large" />
        </div>
        <div className="footerIconContainer">
          <WhatsAppIcon fontSize="large" />
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
