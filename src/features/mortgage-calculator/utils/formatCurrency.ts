export const formatCurrency = (value: string): string => {
  const parsedValue = parseFloat(value);
  if (isNaN(parsedValue)) {
    return "$0.00";
  }
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(parsedValue);
};
