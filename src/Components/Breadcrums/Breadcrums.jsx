import "../Breadcrums/Breadcrum.css";
import arrowIcon from "../Assets/breadcrum_arrow.png";
const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home <img src={arrowIcon} alt="" />
      Shop <img src={arrowIcon} alt="" />
      {product.category} <img src={arrowIcon} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrums;
