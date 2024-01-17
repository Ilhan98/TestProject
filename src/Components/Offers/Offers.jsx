import "../Offers/Offers.css";
import exclusiveIMG from "../Assets/exclusiveIMG.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offersLeft">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>Only on best sellers products</p>
        <button>Chek now</button>
      </div>

      <div className="offersRight">
        <img src={exclusiveIMG} alt="" />
      </div>
    </div>
  );
};

export default Offers;
