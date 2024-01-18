import { useContext } from "react";
import "../CartItems/CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import removeIcon from "../Assets/cart_cross_icon.png";
const CartItems = () => {
  const { getTotalCartAmount, allProducts, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItemFMain">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProducts.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="CartItemsFormat  cartItemFMain">
                <img src={e.image} alt="" className="carticonProductIcon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartItemsQuantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartItemRemoveIcon"
                  src={removeIcon}
                  alt=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItemsDown">
        <div className="carrtItemsTotal">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartItemsTotalItem">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItemsTotalItem">
              <p>Shiping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItemsTotalItem">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proced to chekout</button>
        </div>
        <div className="cartItemsPromo">
          <p>If you have promo code,Enter it here</p>
          <div className="cartItemPromoBox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
