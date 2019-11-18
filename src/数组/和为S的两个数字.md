# 题目
输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。

# 思路
- 这是个递增数组和两个数，暗示可以用双指针
- 两个数乘积最小，那就是一个大数乘以小数

- 设定一个小索引left，从0开始
- 设定一个大索引right，从array.length开始
- 判断array[left] + array[right]的值s是否符合条件
- 符合条件 - 返回
- 大于sum，right向左移动
- 小于sum，left向右移动
- 若left=right，没有符合条件的结果
```javascript
function FindNumbersWithSum (arr, target) {
  // console.log(arr)
  let start = 0
  let end = arr.length - 1
  while (start < end) {
    
    while (arr[start] + arr[end] < target) {
      start ++
    }
    while (arr[start] + arr[end] > target) {
      end --
    }
    if (arr[start] + arr[end] === target) return [arr[start], arr[end]]
    else return []
  }
}
```