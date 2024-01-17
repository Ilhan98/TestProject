import "../RelatedProduct/RelatedProduct.css";
import dataProduct from "../Assets/data";
import Item from "../Items/Item";
const RelatedProduts = () => {
  return (
    <div className="relatedproduct">
      <h1>Related Products </h1>
      <hr />
      <div className="relatedProductItem">
        {dataProduct.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default RelatedProduts;
