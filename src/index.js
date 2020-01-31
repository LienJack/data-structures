var lastStoneWeight = function(stones) {
    if(!stones.length) return 0
    if(stones.length<2) return stones[0]
    var DF = () => {
        stones.sort((a,b)=> a-b)
        console.log(stones)
        let y = stones.pop()
        let x = stones.pop()
        if(x!==y) {
            stones.push(y-x)
        }
    }
    while(stones.length > 1) {
        DF()
    }
    return stones.length ?  stones[0] : 0
};