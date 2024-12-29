export const formatNumber = (input: string, allowDecimals = false): string => {
  // Remove all non-numeric characters except for the decimal point
  const sanitized = input.replace(allowDecimals ? /[^0-9.]/g : /[^0-9]/g, "");

  // Handle decimal numbers
  const [integerPart, decimalPart] = sanitized.split(".");

  // Add commas to the integer part
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Recombine the integer and decimal parts if necessary
  return allowDecimals && decimalPart !== undefined
    ? `${formattedInteger}.${decimalPart}`
    : formattedInteger;
};