const CURRENCY_FORMATTER = new Intl.NumberFormat('ru-Ru', {
  style: 'currency',
  currency: 'RUB',
  currencyDisplay: 'symbol',
});

export function formatCurrency(number: number | any) {
  return CURRENCY_FORMATTER.format(number);
}
