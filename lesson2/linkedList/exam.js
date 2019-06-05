/***
 * 206. Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
import { LinkedList } from './linkedlist'
const LList = new LinkedList()
LList.append('1')
LList.append('2')
LList.append('3')
LList.append('4')
LList.remove('5')
LList.display()
console.log('--------------------------------')
console.log(reverseList(LList))
function reverseList (head) {
  var pre = null
  var cur = head
  while(cur !== null) {
    console.log('1',cur)
      var next = cur.next
      cur.next = pre
      pre = cur
      cur = next
  }
   return pre
};
/**
 * 
 *  两两交互节点
 *  https://leetcode.com/problems/swap-nodes-in-pairs/submissions/
 */