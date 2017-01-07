function getDependencies(tree, name, deps) {
  if (!deps) deps = {};
  if (name) deps[name + '@' + tree.version] = 1;
  if (tree && tree.dependencies) {
    Object.keys(tree.dependencies).forEach(function(depName) {
      getDependencies(tree.dependencies[depName], depName, deps);
    });
  }
  return Object.keys(deps).sort();
}

module.exports = getDependencies;
