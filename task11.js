module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(prev, next, idx, array) {
    prev.push(fn(next, idx, array));
    return prev;
  }, []);
};
