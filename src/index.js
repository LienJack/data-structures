var mergeTwoLists = function(l1, l2) {
  let head
  if (!l1) return l2
  if (!l2) return l1
  if (l1.val < l2.val) {
    head = l1
    head.next = mergeTwoLists(l1.next, l2)
  } else {
    head = l2
    head.next = mergeTwoLists(l1, l2.next)
  }
  return head
};