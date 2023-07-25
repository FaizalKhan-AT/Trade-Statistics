export const formatNumber = (num) => {
  return Intl.NumberFormat("en", { notation: "standard" }).format(num);
};
