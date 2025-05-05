export default function currencyCode(currency) {
  
  const currencies = {
    USD: '$',
    EUR: '€',
  }

  return currencies[currency] ? currencies[currency] : currency
};
