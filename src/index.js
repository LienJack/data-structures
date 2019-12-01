import stop from './util'
import { LinkedNode, LinkedList } from '../collection'

var copyRandomList = function(head) {
  if (!head) return null
  let cur = head
  let cloneHead = new Node
  let tmp = cloneHead
  let map = new Map()

  while(cur) {
    tmp.val = cur.val
    tmp.next = cur.next ? new Node : null
    map.set(cur, tmp)
    tmp = tmp.next
    cur = cur.next
  }
  tmp = cloneHead
  while (head) {
    tmp.random = head.random ? map.get(head.random): null
    head = head.next
    tmp = tmp.next
  }
  return cloneHead
};



