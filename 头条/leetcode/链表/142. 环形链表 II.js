function  EntryNodeOfLoop (pHead) {
  if(!pHead || !pHead.next) {
    return null
  }
  let p1 = pHead.next
  let p2 = pHead.next.next
  while (p1 != p2) {
    if (p2 === null || p2.next === null) {
      return null
    }
    p1 = p1.next
    p2 = p2.next.next
  }
  let temp = p1
  let length = 1
  p1 = p1.next
  while (temp !=p1) {
    p1 = p1.next
    length++
  }
  p1 = p2 = pHead
  while (length -- > 0) {
    p2 = p2.next
  }
  while (p1 != p2) {
    p1 = p1.next
    p2 = p2.next
  }
  return p1
}