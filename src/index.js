var getIntersectionNode = function(headA, headB) {
    let lengthA = 0
    let lengthB = 0
    let curA = headA
    let curB = headB
    let long
    let short
    let lang
  
    while (curA) {
      lengthA++
      curA = curA.next
    }
    while (curB) {
      lengthB++
      curB = curB.next
    }
    
    if (lengthA > lengthB) {
      long = headA
      short = headB
      lang = lengthA - lengthB
    } else {
      long = headB
      short = headA
      lang = lengthB - lengthA
    }

    while (lang) {
      long = long.next
      lang --
    }
    while(short) {
      if (short === long) return short
      short = short.next
      long = long.next
    }
    return null
};