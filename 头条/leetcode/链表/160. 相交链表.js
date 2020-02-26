var getIntersectionNode = function(headA, headB) {
  if (!headA||!headB) return null
   let startA = headA
   let startB = headB
   while(startA !== startB) {
       startA = startA ? startA.next : headB
       startB = startB ? startB.next : headA
   }
   return startA
};