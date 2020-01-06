import { LinkedList } from '../collection'
import stop  from './util'
let p = new LinkedList([1,2,3,4,5,6,7,8])
let head = p.head.next
var reverseKGroup = function(head, k) {
    let len = 0
    let temp = head
    while (len < k) {
        if (temp === null) return head
        temp = temp.next
        len += 1
    }
    let pre = reverseKGroup(temp, k)
    let cur = head
    while (len > 0) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
        len -= 1
    }
    return pre
}


reverseKGroup(head,2)

stop()