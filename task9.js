function logger(namespace) {
  return function() {
    var args = Array.prototype.map.call(arguments, function(arg) { return arg; });
    console.log.apply(console, [namespace].concat(args));
  }
}

module.exports = logger;
