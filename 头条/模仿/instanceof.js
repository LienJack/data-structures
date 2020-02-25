function _instanceof(a, b) {
  let _a = a.__proto__
  let _b = b.prototype
   if(_a === _b) {
     return true
   } else {
     return false
   }
 }
