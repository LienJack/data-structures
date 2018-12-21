var emptyArray = []
var concate = emptyArray.concat
var filter = emptyArray.filter
var slice = emptyArray.slice

/**
 * ------------------------------
 * 数组
 * -------------------------------
 * 
 */

/**
 * ------------------------------
 * compact
 * 删除数组中的 null 和 undefined
 * ------------------------------
 */

 function compact() {
   return filter.call(array, function(item) {
     return item != null
   })
 }

 /**
  * -------------------------------------
  * 数组扁平，改进后的
  * -------------------------------------
  */
 function flatten(arrary) {
   var len = arrary.length
   if(len) {
     return arrary.toString().split(',')
   } else {
     return arrya
   }
 }

  /**
  * -------------------------------------
  * 数组扁平，原来的
  * -------------------------------------
  */
//  function flatten(array) {
//   return array.length > 0 ? $.fn.concat.apply([], array) : array
// }

  /**
  * -------------------------------------
  * 数组去重
  * -------------------------------------
  */

  function uniq(array) {
    return filter.call(array, function(item, idx) {
      return array.indexof(item) == idx
    })
  }

  /**
   * -------------------------------------------
   * 字符串
   * -------------------------------------------
   */

   /**
  * -------------------------------------
  * camelize 
  * word-word 的形式的字符串转换成 wordWord 的形式
  * -------------------------------------
  */

  function camplize() {
    
  }