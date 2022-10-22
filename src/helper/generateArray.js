const generateArray = (
    length,
    startsWith = 0
  ) => Array.from({ length }).map((el, index) => index + startsWith);

export default generateArray;