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

/**
 * -------------------------
 *  # 17
 * -------------------------
 */

// 输入两棵二叉树A，B，判断B是不是A的子结构。
// （ps：我们约定空树不是任意一个树的子结构）

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    let res=false;
    if(pRoot1==null||pRoot2==null) return false;
    if(pRoot1.val==pRoot2.val)
        res=doesTree1HasTree2(pRoot1,pRoot2);
    if(!res)
        res=HasSubtree(pRoot1.left,pRoot2)
    if(!res)
        res=HasSubtree(pRoot1.right,pRoot2);
    return res;
}
function doesTree1HasTree2(pRoot1,pRoot2){
  if(pRoot2==null)
      return true;
  if(pRoot1==null)
      return false;
  if(pRoot1.val!=pRoot2.val)
      return false;
  return doesTree1HasTree2(pRoot1.left,pRoot2.left)&&doesTree1HasTree2(pRoot1.right,pRoot2.right);
}

/**
 * -------------------------
 *  # 18
 * -------------------------
 */

 /**
  * 题目描述
  *  操作给定的二叉树，将其变换为源二叉树的镜像。
  */

  /**
   * 
   * 二叉树的镜像定义：源二叉树 
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5
   * 
   */

   /* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    // write code here
    if(root == null) return;
    Mirror(root.left)
    Mirror(root.right)
    [root.left, root.right] = [root.right, root.left]
    return root
}

/**
 * -------------------------
 *  # 19
 * -------------------------
 */
/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
 * 例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
 * 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
 */
let testArr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
// testArr = [[1,2],[3,4]]
let res = []
function printMatrix(matrix)
{
    // write code here
   if(matrix == null) return null
   let row = matrix[0].length
   let col = matrix.length
   let start = 0
   let res = []
   while(row > start * 2, col > start * 2) {
       res = res.concat(printMatrixInCircle(matrix, row, col, start))
       start ++
       
   }
   return res
} 
function printMatrixInCircle (matrix, row, col, start) {
    let endcol = col - 1 - start
    let endrow = row - 1 - start
    let res = []
    for (let i = start; i <= endrow; i++) {
        res.push(matrix[start][i])
    }
    for (let i = start+1; i<= endcol; i++) {
        res.push(matrix[i][endrow])
    }
    for (let i = endrow-1; i >= start; i--) {
        res.push(matrix[endcol][i])
    }
    for (let i = endrow-1; i > start; i--) {
        res.push(matrix[i][start])
    }
    return res
}
console.log(printMatrix(testArr))

/**
 * -------------------------
 *  # 20
 * -------------------------
 */
/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
 */
let minStack = []
let stack = []
let temp = null
function push(node)
{
    // write code here
    if(temp !== null) {
        if(temp > node) {
            temp = node
        }
        minStack.push(temp)
        stack.push(node)
    } else {
        temp = node
        minStack.push(temp)
        stack.push(node)
    }
}
function pop()
{
    // write code here
    minStack.pop()
    return stack.pop()
}
function top()
{
    // write code here
    return stack[stack.length-1]
}
function min()
{
    // write code here

    return minStack[stack.length-1]
}