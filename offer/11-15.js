/**
 * -------------------------
 *  # 11
 * -------------------------
 */
/**
 * 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
 */
function NumberOf1(n)
{
    let count=0,flag=1;
    while(flag){//循环的次数等于整数二进制的位数，32位的整数需要循环32位
        if(flag&n)
            count++;
        flag=flag<<1;
    }
    return count;
}

/**
 * -------------------------
 *  # 12
 * -------------------------
 */

 // 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

 function Power(base, exponent)
{
    // write code here
    let res=1,n;
    if(exponent>0){//指数大于0的情况下
        n=exponent;
    }else if(exponent<0){//指数小于0的情况下
        if(!base) throw new Error('分母不能为0');
        n=-exponent;
    }else{//指数等于0的情况下
        return 1;
    }
    while(n){//也可以用递归做，这里采用了循环
        if(n&1)//当指数为奇数时，包括了1
            res*=base;
        base*=base;
        n>>=1;
    }
    return exponent>0?res:1/res;
}
/**
 * -------------------------
 *  # 13
 * -------------------------
 */
/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
 * 所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 */
function reOrderArray(array)
{
    // write code here
    // const oddArr = []
    // const evenArr = []
    let oddArr = array.filter(item =>{
      return item % 2 !== 0
    })
    let  evenArr = array.filter(item => {
      return item % 2 === 0
    })
    return oddArr.concat(evenArr)
}

/**
 * -------------------------
 *  # 14
 * -------------------------
 */
/**
 * 输入一个链表，输出该链表中倒数第k个结点。
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
  if(head==null||k<=0) return null;
  let pNode1=head,pNode2=head;
  while(--k){
      if(pNode2.next!=null){
          pNode2=pNode2.next;
      }else{
          return null;
      }
  }
  while(pNode2.next!=null){
      pNode1=pNode1.next;
      pNode2=pNode2.next;
  }
  return pNode1;
}

/**
 * -------------------------
 *  # 15
 * -------------------------
 */
// 输入一个链表，反转链表后，输出新链表的表头。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    let preHead = null
    let nextHead = null
    while(pHead !== null) {
      nextHead = pHead.next
      pHead.next = preHead
      preHead = pHead
      pHead = nextHead
    }
    return preHead // 特别注意 此时phead已经是null
}
