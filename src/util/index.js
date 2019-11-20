function stop () {
  let time = 0
  return function _stop () {
    time ++
    if (time > 120) {
      debugger
    } else {
      window.requestAnimationFrame(_stop) 
    }
  }
}

export default stop()