// 1. 利用闭包保存定时器
function debounce (fn, time, flag) {
  let timer = null
  return function (...args) {
    clearTimeout(timer);
    if (flag && !timer) {
      event.apply(this, args)
    }
    timer = cleartTimeout(() => {
      fn.apply(this, args)
    }, time)
  }
}