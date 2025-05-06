import Item from "./Item";

export default function classNameQuantity({ quantity }: Item) {

  if (quantity <= 10) return 'item-quantity level-low';
  if (quantity <= 20) return 'item-quantity level-medium';
  
  return 'item-quantity level-high';
};

