/**
 * ------------------------------------
 *   #1
 * ------------------------------------
 */
// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，
// 每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
/**
 * @create 2018-11-29
 * @author lien
 * 使用es6语法
 * 92ms 8020k
 */
var testArr = [[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
function Find1(target, array)
{ 
  let isHas = false
  array.forEach(item => {
    if(item.includes(target)) isHas = true
  })
  return isHas
}

/**
 * 
 * @create 2018-11-29
 * @author offer
 * 80ms 8096k
 */
function Find(target, array) {
  let r=array.length
  let c=array[0].length
  let row=r-1
  let col=0
if(c==0&&r==0){
  return false;
}
while(row>=0&&col<=c-1){
  if(array[row][col]>target){
      row--
  }else if(array[row][col]<target){
      col++;
  }else return true
}
return false
}

/**
 * ------------------------------------
 *   #2
 * ------------------------------------
 */
// 请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

function replaceSpace(str)
{
    // write code here
    return str.replace(/\s/g,"%20");
}

/**
 * ------------------------------------
 *   #3
 * ------------------------------------
 */
// 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/**
 * @create 2018-11-29
 * @author lien
 * 16ms 544k
 */
function printListFromTailToHead(head)
{
    // write code here
    const arr = []
    let node = head
    while(node != null) {
      arr.unshift(node.val)
      node = node.next
    }
    return arr
}

/**
 * ------------------------------------
 *   #4
 * ------------------------------------
 */
/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
 */

 /**
  * @create 2018-11-30
  * @author offer
  * 这题真的6到飞起，考研都没想出
  */

  class TreeNode {
    constructor(x) {
      this.val = x
      this.left = null
      this.right = null
    }
  }
function reConstructBinaryTree(pre, vin) {
  if(pre.length==0||vin.length==0){
    return null;
  };
//前序第一个是根节点，也是中序左右子树的分割点
let index=vin.indexOf(pre[0]),
    left=vin.slice(0,index),
    right=vin.slice(index+1);
return {
    val:pre[0],
    //递归左右子树的前序、中序
    left:reConstructBinaryTree(pre.slice(1,index+1),left),
    right:reConstructBinaryTree(pre.slice(index+1),right)
  }
}

/**
 * ------------------------------------
 *   #5
 * ------------------------------------
 */

/**
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。
 *  队列中的元素为int类型
 */
/**
 * @create 2018-11-30
 * @author lien
 */
var inputArr = []
var outputArr = []

function push(node)
{
    // write code here
    inputArr.push(node)
}
function pop()
{
    // write code here
  if(!outputArr.length) {
      while(inputArr.length != 0) {
        let current = inputArr.pop()
        outputArr.push(current)
      }
    }
    return outputArr.pop()
}

