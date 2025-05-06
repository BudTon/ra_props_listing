import React from "react";
import createdProductCard from "./createdProductCard";
import ItemsProps from "./ItemsProps";

export default function Listing({ items = [] }: ItemsProps) {
  const productsList = items
    .filter(item => item.state === 'active')
    .map(item => createdProductCard({ item }));

  return (
    <div className="item-list">
      {productsList}
    </div>
  );
};
