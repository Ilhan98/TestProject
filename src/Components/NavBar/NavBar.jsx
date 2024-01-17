import React, { useContext, useState } from "react";
import "./NavBar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navBar">
      <div className="navLogo">
        <img src={logo} alt="" />
      </div>
      <p>RandomShop</p>

      <ul className="navMenu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens">Men</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link to="/womens">Women</Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="navLogiCart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="" />
        </Link>

        <div className="navCartCount">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
// import React, { useContext, useState } from "react";
// import "./NavBar.css";
// import logo from "../Assets/logo.png";
// import cartIcon from "../Assets/cart_icon.png";
// import { Link } from "react-router-dom";
// import { ShopContext } from "../../Context/ShopContext";

// const Navbar = () => {
//   const [menu, setMenu] = useState("shop");
//   const { getTotalCartAmount } = useContext(ShopContext);

//   return (
//     <div className="navBar">
//       <div className="navLogo">
//         <img src={logo} alt="" />
//       </div>
//       <p>RandomShop</p>

//       <ul className="navMenu">
//         <li
//           onClick={() => {
//             setMenu("shop");
//           }}
//         >
//           <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
//         </li>
//         <li
//           onClick={() => {
//             setMenu("mens");
//           }}
//         >
//           <Link to="/mens">Men</Link>
//           {menu === "mens" ? <hr /> : <></>}
//         </li>
//         <li
//           onClick={() => {
//             setMenu("womens");
//           }}
//         >
//           <Link to="/womens">Women</Link>
//           {menu === "womens" ? <hr /> : <></>}
//         </li>
//         <li
//           onClick={() => {
//             setMenu("kids");
//           }}
//         >
//           <Link to="/kids">Kids</Link>
//           {menu === "kids" ? <hr /> : <></>}
//         </li>
//       </ul>
//       <div className="navLogiCart">
//         <Link to="/login">
//           <button>Login</button>
//         </Link>
//         <Link to="/cart">
//           <img src={cartIcon} alt="" />
//         </Link>

//         <div className="navCartCount">{getTotalCartAmount()}</div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
