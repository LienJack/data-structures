var reverseList = function(head) {
  let pre = null
  let cur = head
  while(cur) {
      let next = cur.next
      cur.next = pre
      pre = cur
      cur = next
  }
  return pre
};

var reverseList = function (head) {
  if(!head || !head.next) return head
  let next = head.next
  let reverseHead  = reverseList(next)
  head.next = null
  next.next = head
  return reverseHead
}


