
function revertByWorld (s) {
 return s.split(' ').map(item => {
   return item.split('').reverse().join('')
 }).join(' ')
} 

revertByWorld('')

var restoreIpAddresses = function (s) {
  if (s.length < 4 || s.length > 12) return [];
  const res = [];
  backtrack(res, s);
  return res;
};

function backtrack(res, s, curr = [], i = 0) {
  if (curr.length === 4) {
    res.push(curr.join('.'));
    return;
  }
  debugger
  const charsLeft = s.length - i;
  const groupsLeft = 4 - curr.length;
  const minLen = groupsLeft === 1 ? charsLeft - groupsLeft + 1 : 1;
  const maxLen = s[i] === '0' ? 1 : Math.min(3, charsLeft - groupsLeft + 1);
  for (let len = minLen; len <= maxLen; len++) {
    let num = s.substr(i, len);
    if (num > 255) continue;
    curr.push(num);
    backtrack(res, s, curr, i + len);
    curr.pop();
  }
}

// restoreIpAddresses('25525511135')

class Node {
  constructor (value) {
    this.val = value
    this.next = null
  }
}
class NodeList {
  constructor(arr) {
    let head = new Node(arr.shift())
    let next = head
    arr.forEach(item => {
      next.next = new Node(item)
      next = next.next
    })
    return head
  }
}
// 交互两个阶段的值
let swap = (p,q) => {
  let val = p.val
  p.val = q.val
  q.val = val
}

let partion = (begin, end) => {
  let val = begin.val
  let p = begin
  let q = begin.next
  while (q !== end) {
    if (q.val < val) {
      p = p.next
      swap(p, q)
    }
    q = q.next
  }
  swap(p, begin)
  return p
}

function fastSort (begin, end) {
  if (begin !== end) {
    let part = partion(begin,end)
    sort(begin, part)
    sort(part.next,end)
  }
}

var rotate = function (matrix) {
  let vecor = matrix.length
  for (let i=0, len = vecor /2; i < len; i++) {
    for (let j = 0, tmp; j < vecor; j++) {
      tmp = matrix[i][j]
      matrix[i][j] = matrix[vecor-i-1][j]
      matrix[vecor-i-1][j] = tmp
    }
  }
  for(let i = 0; i < vecor; i++) {
    for (let j=0,tmp; j<i;j++) {
      tmp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = tmp
    }
  }
  return matrix
};