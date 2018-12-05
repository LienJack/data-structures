/**
 * -------------------------
 *  # 21
 * -------------------------
 */

/**
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，
 * 序列4,5,3,2,1是该压栈序列对应的一个弹出序列，
 * 但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）
 */
/**
 * ----------------------------
 *  难定在于判断不是时候的结束条件
 * -----------------------------
 */
// offer
function IsPopOrder(pushV, popV)
{
    // write code here
    let helpStack=[],flag=false;
    while(pushV.length||helpStack.length){
        while((helpStack[helpStack.length-1]==popV[0])&&helpStack.length){
            helpStack.pop();
            popV.shift();
        }
        if(!popV.length){
            flag=true;
        }
        if(!pushV.length){
            break;
        }
        helpStack.push(pushV.shift());
    }
    return flag;
}
// lien
function IsPopOrder(pushV, popV)
{
    let helpStack = []
    let flag = false
    while(pushV.length || helpStack.length) {
        // debugger
        if(helpStack[helpStack.length-1] === popV[0]) {
            helpStack.pop()
            popV.shift()
        } else if (pushV.length) {
            helpStack.push(pushV.shift())
        } 
        if(!popV.length){
            flag = true
            break;
        } 
        if (!pushV.length && helpStack[helpStack.length-1] !== popV[0]) {
            break;
        }
    }
    return flag;

}

/**
 * -------------------------
 *  # 22
 * -------------------------
 */

// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function PrintFromTopToBottom(root)
{
    // write code here
    let queue=[],res=[];
    if(root==null){
        return res;
    }
    queue.push(root);
    while(queue.length){
        let pRoot=queue.shift()
        if(pRoot.left!=null){
            queue.push(pRoot.left)
        }
        if(pRoot.right!=null){
            queue.push(pRoot.right)
        }
        res.push(pRoot.val);
    }
    return res; 
}

/**
 * -------------------------
 *  # 23
 * -------------------------
 */
/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
 * 如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 */
// lien
function VerifySquenceOfBST(sequence) {
    if(!sequence.length) return false
    if(sequence.length === 1) return true
    let root = sequence[sequence.length-1]
    let rightTreeIndex
    for(let i=0; i<sequence.length; i++) {
        if(sequence[i]>root) {
            rightTreeIndex = i
            break;
        }
    }
    let leftTree = sequence.slice(0,rightTreeIndex)
    let rightTree = sequence.slice(rightTreeIndex,sequence.length-1)
    let isLeft = leftTree.every(item => root > item)
    let isRight = rightTree.every(item => root < item)
    if(isLeft && isRight) {
        console.log(root)
        return VerifySquenceOfBST(leftTree) && VerifySquenceOfBST(rightTree)
    } else {
        return false
    }
}
// offer
// 这个牛逼
function VerifySquenceOfBST(sequence)
{
    let n=sequence.length,i=0;
    if(!n) return false;
    while(n--){
        while(sequence[i]<sequence[n])i++;
        while(sequence[i]>sequence[n])i++;
        if(i<n)return false;
        i=0;
    }
    return true;
}
/**
 * -------------------------
 *  # 24
 * -------------------------
 */
/**
 * 输入一颗二叉树的跟节点和一个整数，
 * 打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 * (注意: 在返回值的list中，数组长度大的数组靠前)
 */

//  import Tree from '../lesson/BinarySearchTree'

// const tree = new Tree()
// tree.insert(10)
// tree.insert(5)
// tree.insert(4)
// tree.insert(7)
// tree.insert(12)
// // console.log(tree)

function FindPath(root, expectNumber) {
    let list = []
    let listAll = []
    return findPath(root,list,listAll,expectNumber)
}
function findPath(root, list, listAll,expectNumber) {
    if(root === null) {
        return listAll
    }
    list.push(root.val)
    let x = expectNumber - root.val
    if(root.left == null && root.right == null && x===0) {
        listAll.push(Array.of(...list))
    }
    // console.log(root.val,str, list)
    findPath(root.left,list,listAll, x)
    findPath(root.right,list,listAll, x)
    list.pop() // 这个是重点 很奇妙
    return listAll
}
/**
 * -------------------------
 *  # 25
 * -------------------------
 */
/**
 * 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，
 * 另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。
 * （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 */
/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead)
{
    // write code here
    cloneNodes(pHead)
    conectRandom(pHead)
    return reconnectNodes(pHead)
}
function cloneNodes(pHead) {
    let pNode = pHead
    while(pNode != null) {
        let newNode = new RandomListNode(pNode.label)
        newNode.next = pNode.next
        pNode.next = newNode
        pNode = newNode.next
    }
} 
function conectRandom(pHead) {
    let pNode = pHead
    while(pNode != null) {
        if(pNode.random != null) {
            pNode.next.random = pNode.random.next
        }
        pNode = pNode.next.next
    }
}
function reconnectNodes(pHead) {
    let pNode = pHead
    let newNodeHead = null
    let newNode = null
    if(pNode != null) {
        newNodeHead = newNode = pHead.next
        pNode.next = newNode.next
        pNode = newNode.next
    }
    while (pNode != null) {
        newNode.next = pNode.next
        newNode = newNode.next
        pNode.next = newNode.next
        pNode = pNode.next
    }
    return newNodeHead
}
