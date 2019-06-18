function repeatedSubstringPattern (s) {
  var reg = /^(\w+)\1+$/
  return reg.test(s)
}