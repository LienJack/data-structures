var sortList = function(head) {
    if (!head || !head.next) return head 
    let mid = head
    let cur = head.next
    let left
    let right
    let leftHead
    let rightHead
    while(cur) {
        if (mid.val > cur.val) {
            if(leftHead) {
                left.next = cur
            } else {
                leftHead = cur
                left = cur
            }
            cur = cur.next
        } else {
            if (rightHead) {
                right.next = cur
            } else {
                rightHead = cur
                right = cur
            }
            cur = cur.next
        }
    }
    let resLeft = sortList(leftHead)
    let resRight = sortList(rightHead)
    let temp = resLeft
    let pre = null
    while(temp) {
        pre = temp
        temp = resLeft.next
    }
    pre.next = mid
    mid.next = resRight 
    return resLeft
};