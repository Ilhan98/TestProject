import "../NewCollections/NewCollections.css";
import newCollection from "../Assets/new_collections";
import Item from "../Items/Item";
const NewColections = () => {
  return (
    <div className="newCollection">
      <h1>New collections</h1>
      <hr />
      <div className="collections">
        {newCollection.map((item, i) => {
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

export default NewColections;
