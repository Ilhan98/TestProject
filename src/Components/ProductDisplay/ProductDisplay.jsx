import "../ProductDisplay/ProductDisplay.css";
import starIcon from "../Assets/star_icon.png";
import startDullImg from "../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productDisplay">
      <div className="productdisplayLeft">
        <div className="productDisplayImgList">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productDisplayImg">
          <img className="ProductDisplayMainImg" src={product.image} alt="" />
        </div>
      </div>
      <div className="producDisplayRight">
        <h1>{product.name}</h1>
        <div className="productDisplayRightStars">
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={startDullImg} alt="" />
          <p>(122)</p>
        </div>
        <div className="productDisplayRightPrices">
          <div className="productDisplayRightPriceOld">
            ${product.old_price}
          </div>
          <div className="productDisplayRightPriceNew">
            ${product.new_price}
          </div>
        </div>
        <div className="productDisplayRDescription">
          Explore our collection of finely crafted, lightweight pullover shirts.
          Meticulously knitted for a comfortable and close fit, these garments
          feature a classic round neckline and short sleeves. Designed with
          versatility in mind, our shirts serve as ideal undershirts or
          standalone pieces. Elevate your wardrobe with our premium selection of
          professional and casual attire, where quality meets style.
        </div>
        <div className="productDisplayRightSize">
          <h1>Select size</h1>
          <div className="ProductdisplayRightSize">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplayRightCategory">
          <span>Category:</span>
          Women, T-shirt , Crop Top
        </p>
        <p className="productdisplayRightCategory">
          <span>Tags:</span>
          Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
