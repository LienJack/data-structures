
function revertByWorld (s) {
 return s.split(' ').map(item => {
   return item.split('').reverse().join('')
 }).join(' ')
} 

revertByWorld('')

