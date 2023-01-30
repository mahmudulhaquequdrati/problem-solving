const rotateLeft = (arr, int) => {
  let cutFromArray = [];
  for (let i = int; i < arr.length; i++) {
    cutFromArray.push(arr[i]);
  }
  let shiftOne = [];
  for (let i = 0; i < int; i++) {
    shiftOne.push(arr[i]);
  }

  const newArray = cutFromArray.concat(shiftOne);
  return newArray;
};

rotateLeft([1, 2, 3, 4, 5], 4);
