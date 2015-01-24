function Spy(target, method) {
  var origFn = target[method];
  me = {};
  me.count = 0;

  target[method] = function() {
    me.count++;
    return origFn.apply(target, arguments);
  }.bind(this);

  return me;
}

module.exports = Spy;
