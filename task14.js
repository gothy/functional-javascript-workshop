function repeat(operation, num) {
  if (num <= 0) return;
  operation();
  return repeat(operation, --num);
}

function trampoline(fn, num) {
  return repeat(fn, num);
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  var full = parseInt(num/1000);
  var rest = num % 1000;
  for (var i = 0; i < full; i++) {
    trampoline(operation, 1000);
  };

  trampoline(operation, rest);
}
