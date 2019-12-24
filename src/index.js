function ListNode(val) {
    this.val = val;
    this.next = null;
}
let l1head = new ListNode(5)
// let l1 = l1head.next = new ListNode(4)
// l1 = l1.next = new ListNode(3)
let l2head = new ListNode(5)
// let l2 = l2head.next = new ListNode(6)
// l2 = l2.next = new ListNode(8)
var addTwoNumbers = function(l1, l2) {
    let extend = 0
    let res = new ListNode(null)
    let head = res
    // debugger
    while (l1!=null||l2!=null) {
        let l1Val
        let l2Val
        l1 ? l1Val = l1.val : l1Val = 0
        l2 ? l2Val = l2.val : l2Val = 0
        let sum =l1Val + l2Val + extend
        extend = Math.floor(sum / 10)
        let val = sum % 10
        res.next = new ListNode(val)
        res = res.next
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }
    if (extend) {
        res.next = new ListNode(extend)
    }
    return head.next
}

console.log(addTwoNumbers(l1head, l2head))