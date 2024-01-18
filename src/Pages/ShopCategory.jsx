import { useContext } from "react";
import "../Pages/CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropDownIcon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Items/Item";
const ShopCategory = (props) => {
  const { allProducts } = useContext(ShopContext);
  return (
    <div className="shopCategory">
      <img className="shopcategoryBanners" src={props.banner} alt="" />
      <div className="shopCategoryIndexSort">
        <p>
          <span>Showing 1-12</span>
          out of 36 products
        </p>
        <div className="shopCategorySort">
          sort by <img src={dropDownIcon} alt="" />
        </div>
      </div>
      <div className="shopCategoryProducts">
        {allProducts.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                newPrice={item.new_price}
                oldPrice={item.old_price}
              />
            );
          } else return null;
        })}
      </div>
      <div className="shopCategoryLoadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
