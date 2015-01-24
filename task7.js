function reduce(arr, fn, initial, index) {
  index = index || 0;
  
  if (arr.length <= 0) {
    return initial;
  } else {
    initial = fn(initial, arr[index], index, arr);
  }

  return reduce(arr.slice(1), fn, initial, index);
}

module.exports = reduce;
