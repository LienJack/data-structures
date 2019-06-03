import getMatrix from './matrix'
// let arg_1 = { x: 10, y: 10 }
// let arg_2 = { x: 40, y: 10 }
// let arg_3 = { x: 40, y: 40 }
// let arg_4 = { x: 10, y: 40 }

// let _arg_1 = { x: 20, y: 20 }
// let _arg_2 = { x: 50, y: 20 }
// let _arg_3 = { x: 50, y: 50 }
// let _arg_4 = { x: 20, y: 50 }

// let result = getMatrix(arg_1, _arg_1, arg_2, _arg_2, arg_3, _arg_3, arg_4, _arg_4)

let canvas = document.getElementById('cas')
let ctx = canvas.getContext('2d')
// 初始化
let imgRatio = 1
let count = 1
let dots = []
let dotscopy, idots

let img = new Image()
let maxHeigt = 460
img.src = "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=1c95ea13ddca7bcb6976cf7ddf600006/b7003af33a87e9505bb120bc1a385343faf2b4b8.jpg"
img.onload = function() {
  let img_w = img.width
  let img_h = img.height

  if (img_h > maxHeigt) {
    imgRatio = maxHeigt / img_h
    img_h = maxHeigt
    img_w *= imgRatio
  }

  let left = ( canvas.width - img_w ) /2
  let top = ( canvas.height - img_h ) /2

  img.width = img_w
  img.heith = img_h
  dots = [
    { x: left, y: top },
    { x: left + img_w, y: top },
    { x: left + img_w, y: top + img_h },
    { x: left, y: top + img_h }
  ]
  
  dotscopy = [
    { x: left, y: top },
    { x: left + img_w, y: top },
    { x: left + img_w, y: top + img_h },
    { x: left, y: top + img_h }
  ]

  idots = [dotscopy[0], dotscopy[1], dotscopy[2], dotscopy[3]]
  render()
}

window.onmousedown = function(e) {
  let area = getArea(e)
  let dot, i
  let qy = 40
  for(i = 0; i< dots.length; i++) {
    dot = dots[i]
    if(area.t >= dot.y -qy && area.t <= dot.y + qy && area.l <= dot.x + qy) {
      break;
    } else {
      dot = null
    }
  }
  if (!dot) return;
  window.onmousemove = function(e) {
    let narea = getArea(e)
    let nx = narea.l - area.l
    let ny = narea.t - area.t

    dot.x +=  nx
    dot.y += ny
    area = narea
    render()
  }

  window.onmouseup = function() {
    window.onmousemove = null
    window.onmouseup = null
  }
}

function  render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  let dot1 = dots[0]
  let dot2 = dots[1]
  let dot3 = dots[2]
  let dot4 = dots[3]

  let idot1 = idots[0]
  let idot2 = idots[1]
  let idot3 = idots[2]
  let idot4 = idots[3]
  // 三角形下半段
  renderImage(idot3, dot3, idot2, dot2, idot4, dot4, idot1)
  // 三角形上半段
  renderImage(idot1, dot1, idot2, dot2, idot4, dot4, idot1)
}

function  renderImage(arg_1, _arg_1, arg_2, _arg_2, arg_3, _arg_3, vertex) {
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(_arg_1.x, _arg_1.y)
  ctx.lineTo(_arg_2.x, _arg_2.y)
  ctx.lineTo(_arg_3.x, _arg_3.y)

  ctx.closePath()
  ctx.clip()

  let result = getMatrix(...arguments)
  let { a, b, c, d, e, f } = result
  ctx.transform(a,b,c,d,e,f)

  let w = img.width
  let h = img.height

  ctx.drawImage(
    img,
    (vertex.x - idots[0].x) / imgRatio - 1,
    (vertex.y - idots[0].y) / imgRatio - 1,
    w / imgRatio + 2,
    h / imgRatio + 2,
    vertex.x - 1,
    vertex.y - 1,
    w + 2,
    h +2
  )
  // ctx.drawImage(img,10,10)
  ctx.restore()
}

function getArea(e) {
  e = e || window.event
  return {
    t: e.clientY - canvas.offsetTop + document.body.scrollTop + document.documentElement.scrollTop,
    l: e.clientX - canvas.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft,
  }
}