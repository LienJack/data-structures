var isPalindrome = function(s) {
    let strArr = s.replace(/[^0-9a-zA-Z]/g,"").toLowerCase().split('');
    console.log(strArr)
    return strArr.join('') == strArr.reverse().join('');
};


console.log(isPalindrome("A man, a plan, a canal: Panama"))