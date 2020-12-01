function removeZeros(array) {
  let numOfZeros = 0;
  const newArray = array.filter(function(item) {
    if (item === 0 || item === "0") {
      numOfZeros += 1;
    }
    if (item !== 0 && item !== "0") {
      return item;
    }
  });
  while (numOfZeros > 0) {
    newArray.push(0)
    numOfZeros -= 1;
  }
  return newArray;
}

// const input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14],
//     solution = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];
