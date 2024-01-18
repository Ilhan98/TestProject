import "../DescriptionBox/DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="desxriptionBoxNavigator">
        <div className="descriptionBoxNavBox">Description</div>
        <div className="descriptionBoxNavBox fade">Reviews(123)</div>
      </div>
      <div className="descriptionboxDescription">
        <p>
          Discover the real-life experiences shared by our customers as they
          explore the comfort and style of our meticulously crafted pullover
          shirts. Read about how these garments have become a staple in their
          wardrobes, providing unparalleled quality and a touch of
          sophistication to their everyday attire. Join our community of
          satisfied customers and contribute your own thoughts, your feedback is
          our inspiration
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
