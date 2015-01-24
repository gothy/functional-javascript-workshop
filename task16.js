function getDependencies(tree) {
  var deps = tree.dependencies || {};
  var versions = [];
  
  Object.keys(deps).forEach(function(name) {
    var ver = deps[name].version;
    var verStr = name + '@' + ver;
    versions.push(verStr);

    if(deps[name].dependencies) {
      versions = versions.concat(getDependencies({dependencies: deps[name].dependencies}));
    }
  });
  
  return versions.sort().filter(function(el, idx, arr) {
    return arr.indexOf(el) === idx;
  });
}

module.exports = getDependencies