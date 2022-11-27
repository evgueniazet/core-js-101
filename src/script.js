const toCsvText = (arr) => {
  const newArr = arr.map((item) => item.map((element) => element.toString()).join(',')).join('\n');
  return newArr;
};
toCsvText([[0, 1, 2, 3, 4],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34]]);
