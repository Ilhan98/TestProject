import { Link } from "react-router-dom";
import "../Items/Item.css";
const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>

      <p>{props.name}</p>
      <div className="itemPrices">
        <div className="itemPriceNew">${props.newPrice}</div>
        <div className="itemPriceOld"> ${props.oldPrice}</div>
      </div>
    </div>
  );
};

export default Item;
