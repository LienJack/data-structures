var addTwoNumbers = function(l1, l2) {
  function DF (l1, l2, temp) {
      if (!l1 && !l2) {
          if (temp) {
              return new ListNode(temp)
          } else {
              return null
          }
      }
      let head
      if (l1 && l2) {
          let res = l1.val + l2.val + temp
          temp = res / 10 >= 1 ? 1 : 0
          head = new ListNode(res % 10)
          head.next = DF(l1.next, l2.next, temp)
      }
      if (!l1) {
          let res = l2.val + temp
          temp = res / 10 >= 1 ? 1 : 0
          head = new ListNode(res % 10)
          head.next = DF(null, l2.next, temp)
      }
      if (!l2) {
          let res = l1.val + temp
          temp = res / 10 >= 1 ? 1 : 0
          head = new ListNode(res % 10)
          head.next = DF(l1.next, null, temp)
      }
      return head
  }
  return DF(l1, l2, 0)
}