function debounce (fn, time) {
  let timer = null
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, time)
  }
}
const handleResize = debounce((e) => {
  console.log(e)
},500)
window.addEventListener('resize',handleResize)

