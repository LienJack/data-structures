class iSlider {
  constructor(opts) {
    // 参数合并
    this.opts = {
      wrap: '.wrap',
      item: '.item',
      playClass: 'play',
      index: 0,
      noslideBack: false,  //当noslide生效的时候 是否允许往回滑动  默认不允许, 如果有需要可以开启
      speed: 400,
      triggerDist: 30, //触发滑动的手指移动最小位移 单位:像素
      isVertical: true, // 垂直滑还是水平滑动
      fullScreen: true, // 全屏
      preventMove: false, // 阻止系统默认的touchmove
      lastLocate: true, // 后退到上次浏览位置
      loadingImgs: [], // loading预加载图片列表
      onslide: function (index) {}, // 滑动回调
      onloading: function (loaded,total) {},
      loadingOverTimes: 15
    }
    for(let i in opts) {
      this.opts[i] = opts[i]
    }
    this.wrap = null
    this.index = 0
    this.length = 0
    this.SS = false
    this.$ = (o, p = document) => {
      return p.querySelector(o)
    }
    this.init()
  }
  
  // 初始化
  init() {
    // this.wrap = typeof this.opts.wrap === 'string' ? this.$(this.opts.wrap) : this.opts.wrap
    this.wrap = typeof this.opts.wrap === 'string' ? this.$(this.opts.wrap) : this.opts.wrap
    if(this.SS) {

    } else {
      this.index = this.opts.index || 0
    }
    
    if(!this.wrap) {
      throw Error('"wrap" param can not be empty')
      return
    }
    this._tpl = this.wrap.cloneNode(true)
    this._tpl = this._tpl.querySelectorAll(this.opts.item)
    Array.prototype.forEach.call(this._tpl, item => {
      item.style.cssText += 'display:block;position:absolute;left:0;top:0;width:100%;height:100%'
    })
    
    this.length = this._tpl.length // 总页数
    this.touchInitPos = 0 // 手指初始位置
    this.startPos = 0 // 移动开始位置
    this.totalDist = 0 // 移动的总距离
    this.deltaX1 = 0 // 每次移动的正负
    this.deltaX2 = 0 // 每次移动的正负

    if(this.opts.fullScreen) {
      let s = document.createElement('style')
      s.innerHTML = 'html,body{width:100%;height:100%;overflow:hidden}'
      document.head.appendChild(s)
    }
    this.wrap.style.cssText += `display:block;position:relative;${this.opts.fullScreen?'width:100%;height:100%': ''}`

    this.displayWidth = this.wrap.clientWidth 
    this.displayHeight = this.wrap.clientHeight
  }

  addClass() {}

  removeClass() {}

  prev() {}

  next() {}

  slideTo() {}

}
var scoll = new iSlider()
console.log(scoll)