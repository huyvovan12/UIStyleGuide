export const formatDescription = (value) => {
  if (value.length > 150) return `${value.slice(0, 150)}...`;
  return value;
};
