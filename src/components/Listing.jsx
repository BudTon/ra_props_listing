import createdProductCard from "./createdProductCard";

export default function Listing(props) {
  const { items = [] } = props;

  const productsList = items
    .filter(item => item.state === 'active')
    .map(item => createdProductCard(item));

  return (
    <div className="item-list">
      {productsList}
    </div>
  );
};