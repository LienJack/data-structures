function throttle (fn,time) {
    let pre = 0
    return function (...args) {
        let now = new Date()
        if (now - pre > time) {
            pre = now
            fn.apply(null,args)
        }
    }
}

const handleResize = throttle((e) => {
    console.log(e)
  },1000)
  window.addEventListener('mousemove',handleResize)
  
