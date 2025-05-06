import Item from "./Item";

export default function currencyCode({ currency_code }: Item) {
  
  type CurrenciesType = {
    [key: string]: string,
    USD: string,
    EUR: string,
  }
  const currencies: CurrenciesType = {
    USD: '$',
    EUR: '€',
  }
  
  return currencies[currency_code] || currency_code;
};
