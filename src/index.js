var reverseWords = function (s) {
  return s.split(" ").filter(item => item).reverse().join(" ")
};
console.log(reverseWords("the sky is blue"))