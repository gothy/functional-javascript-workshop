function curryN(fn, n) {

  if (typeof n === 'undefined') { n = fn.length; }

  function curry(a) {
    return function(b) {
      var args = a.concat(b);

      if (args.length < n) {
        return curry(args);
      } else {
        return fn.apply(this, args);
      }
      
    };
  }

  return curry([]);
}

module.exports = curryN;
