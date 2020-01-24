var groupAnagrams = function(strs) {
    let map = new Map()
    strs.forEach(item => {
      let getKey = item.split("").sort().join("")
      if (map.has(getKey)) {
        map.get(getKey).push(item)
      } else {
        map.set(getKey, [item])
      }
    }) 
    return [...map.values()]
};
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))
