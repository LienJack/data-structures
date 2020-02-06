var trap = function(height) {
    let res = 0
    let len = height.length
    let leftMaxArr = Array(len).fill(0)
    let rightMaxArr = Array(len).fill(0)
    leftMaxArr[0] = height[0]
    rightMaxArr[len-1] = height[len-1]
    for (let i = 1; i < len; i++) {
        leftMaxArr[i] = Math.max(leftMaxArr[i-1], height[i])
    }
    for (let i = len - 2; i > 0; i--) {
        rightMaxArr[i] = Math.max(rightMaxArr[i+1], height[i])
    }

    for (let i = 1; i < len - 2; i ++) {
        let minHeight = Math.min(leftMaxArr[i], rightMaxArr[i])
        let def = minHeight - height[i]
        if (def > 0 ) res += def 
    }

    return res
    
};

const arr = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(arr))