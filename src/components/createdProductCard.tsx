import React from "react";
import titleSlice from "./titleSlice"
import currencyCode from "./currencyCode"
import classNameQuantity from "./classNameQuantity"
import CreatedProductCardProps from './CreatedProductCardProps'


export default function createdProductCard({ item }: CreatedProductCardProps) {
  return (
    <div className="item" key={item.listing_id} >
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{titleSlice(item)}</p>
        <p className="item-price">{currencyCode(item)} {item.price}</p>
        <p className={classNameQuantity(item)}>{item.quantity} left</p>
      </div>
    </div>
  )
};
