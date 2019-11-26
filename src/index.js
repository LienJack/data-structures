import stop from './util'
import { LinkedNode, LinkedList } from '../collection'

function reverseList (head) {
  let cur = null
  let pre = head
  let next = null
  while (pre.next) {
    cur = pre.next
    next = cur.next
    pre.next = 
  }
}
// stop()
const linked = new LinkedList([1,2,1,4,5,5,3,3,6,3])
console.log(reverseList (linked))