## 215. 数组中的第K个最大元素
在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:
```
输入: [3,2,1,5,6,4] 和 k = 2
输出:5
``` 

### 思路
```javascript
var findKthLargest = function(nums, k) {
    function fastSort(nums) {
        if (nums.length < 2) return nums
        let temp = nums.shift()
        let left = []
        let right = []
        nums.forEach(item => {
            if (item > temp) {
                left.push(item)
            } else {
                right.push(item)
            }
        })
        let leftRes = fastSort([...left])
        let rightRes = fastSort([...right])
        return leftRes.concat(temp, rightRes)
    }
    let res = fastSort(nums)
    return res[k -1]
};
```