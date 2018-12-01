/*function ListNode(x){
 this.val = x;
 this.next = null;
 }*/
 /**
 * -------------------------
 *  # 16
 * -------------------------
 */
/**
 * 输入两个单调递增的链表，
 * 输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
 */
 function Merge(pHead1, pHead2) {
   let mergeHead = null
   if(pHead1 === null)
   return pHead2

   if(pHead2 === null) 
    return pHead1

    if(pHead1.val < pHead2.val) {
      mergeHead = pHead1
      mergeHead.next = Merge(pHead1.next, pHead2)
    } else {
      mergeHead = pHead2
      mergeHead.next = Merge(pHead1, pHead2.next)
    }
    return mergeHead
 }