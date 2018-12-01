/**
 * -------------------------
 *  #6
 * -------------------------
 */
/**
 * 
 *  把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 *  输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。
 *  例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 
 *  NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 */

function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length==0) return 0;
    for(let i=0; i<rotateArray.length; i++){
        if(rotateArray[i]>rotateArray[i+1]) return rotateArray[i+1];
    }
    return rotateArray[0];
}

/**
 * -------------------------
 *  #7
 * -------------------------
 */
/**
 * @ lien
 * @create lien
 */
function Fibonacci_lien(n)
{
    // write code here
    if(n === 0) return 0
    else if(n === 1) return 1
    else return Fibonacci_lien(n-1) + Fibonacci_lien(n-2)
     
}

function Fibonacci(n) {
  let f = 0
  let a = 0
  let b = 1
  while(n--) {
    f = a + b
    b = a
    a = f
  }
  return f  
}


/**
 * -------------------------
 *  #8
 * -------------------------
 */
/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
 * 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
 */

function jumpFloor(number)
{
    // write code here
  let f = 1
  let a = 1
  let b = 2
  while(number--) {
    f = a + b
    b = a
    a = f
  }
  return f  
}
/**
 * -------------------------
 *  # 9
 * -------------------------
 */
/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 */
function jumpFloorII(number)
{
    // write code here
     let i=1;
    while(--number){
        i*=2;
    }
    return i;
}

/**
 * -------------------------
 *  # 10
 * -------------------------
 */
/***
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
 * 请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 */
function rectCover(number)
{
    // write code here
     if(number==0) return 0;
    let f=1,g=2;
    while(--number){
        g+=f;
        f=g-f;
    }
    return f;
}

