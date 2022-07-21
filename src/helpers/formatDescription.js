export const formatDescription = (value) => {
  if (value.length > 230) return `${value.slice(0, 230)}...`;
  return value;
};
