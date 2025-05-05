import titleSlice from "./titleSlice"
import currencyCode from "./currencyCode"
import classNameQuantity from "./classNameQuantity"

export default function createdProductCard(item) {
  return (
    <div className="item" key={item.listing_id} >
      <div class="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{titleSlice(item.title)}</p>
        <p className="item-price">{currencyCode(item.currency_code)} {item.price}</p>
        <p className={classNameQuantity(item.quantity)}>{item.quantity} left</p>
      </div>
    </div>
  )
};