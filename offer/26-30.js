/**
 * -------------------------
 *  # 26
 * -------------------------
 */
/**
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
 * 要求不能创建任何新的结点，只能调整树中结点指针的指向
 * 树的回溯法有点难度
 */


 /**
 * -------------------------
 *  # 27
 * -------------------------
 */
/**
 * 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
 * 例如输入字符串abc,则打印出由字符a,b,c
 * 所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
 */
/**
 * 这题对回溯的过程不是很懂
 */
function Permutation(str) {
  let res = []
  let arr = []
  if(str.length <= 0) return res
  arr = str.split("")
  res = permutate(arr, 0, res)
  res=[...new Set(res)]
  return res
}
function permutate(arr,index,res){
  if(arr.length==index){
      let s="";
      for(let i=0;i<arr.length;i++){
          s+=arr[i];
      }
      return res.push(s);
  }else{
      for(var i=index;i<arr.length;i++){
          [arr[index],arr[i]]=[arr[i],arr[index]];//交换
          console.log("1",arr)
          permutate(arr,index+1,res);
          [arr[index],arr[i]]=[arr[i],arr[index]];//交换
          console.log("2",arr)
      }
  }
  return res;
}
// console.log(Permutation('abc'))