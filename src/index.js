import stop from './util'
function FirstNotRepeatingChar (str) {
  let arr = str.split("")
  for (let i = 0; i < arr.length; i++) {
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      return i
    }
  }
   return false 
}

const str = "qwertyuiopsdfghjklzxcvbnmwer"
console.log(FirstNotRepeatingChar(str))