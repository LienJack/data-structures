var lowestCommonAncestor = function(root, p, q) {
  if(root == p || root == q || root == null) {
      return root
  }
  let left = lowestCommonAncestor(root.left, p ,q)
  let right = lowestCommonAncestor(root.right, p, q)
  if(left && right) {
      return root
  } else if (left) {
      return left
  } else if (right) {
      return right
  }
  return null
};