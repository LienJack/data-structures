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

