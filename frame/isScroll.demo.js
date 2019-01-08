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
      useACC: true,
      loadingImgs: [], // loading预加载图片列表
      onslide: function (index) {}, // 滑动回调
      onloading: function (loaded,total) {},
      loadingOverTimes: 15
    }
    Object.assign(this.opts, opts)
    this.wrap = null
    this.index = 0
    this.length = 0
    this.SS = false

    this._tpl = []
    this._delayTime = 150
    this._sessionKey = location.host + location.pathname
    this._prev = null
    this._current = null
    this._next = null

    this.$ = (o, p = document) => {
      return p.querySelector(o);
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
      return;
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

    // 滚动尺寸
    this.scrollDist = this.opts.isVertical ? this.displayHeight : this.displayWidth

    this._setHTML() // 填充初始化DOM

    if(this.opts.loadingImgs && this.opts.loadingImgs.length) {
      this._loading()
    } else {
      this._pageInit()
    }

    this._bindEvt()
  }

  addClass(o, cls) {
    if(o.classList) {
      o.classList.add(cls)
    } else {
      o.className += ` ${cls}`
    }
  }

  removeClass(o, cls) {
    if(o.classList) {
      o.classList.remove(cls)
    } else {
      o.className=o.className.replace(new RegExp('\\s*\\b'+cls+'\\b','g'),'')
    }
  }

  prev () {
    if (!this._current || !this._prev) {
      this._itemRest()
      return;
    }
    if (this.index > 0) {
      this.index--
    } else {
      this._itemRest()
      return false;
    }

    if (this._next) {
      this.wrap.removeChild(this._next)
    }
    this._next=this._current;
    this._current=this._prev;
    this._prev=null;

    this._next.style.cssText+='-webkit-transition-duration:'+this.opts.speed+'ms;'+this._getTransform(this.scrollDist+'px');
    this._current.style.cssText+='-webkit-transition-duration:'+this.opts.speed+'ms;'+this._getTransform(0);

    setTimeout( () => {

      if (this.$('.'+this.opts.playClass,this.wrap)) {
          this.removeClass(this.$('.'+this.opts.playClass,this.wrap),this.opts.playClass)
      }
      this.addClass(this._current,this.opts.playClass)

      try {
          this.opts.onslide.call(this,this.index);
      } catch (e) {
          console.info(e)
      }

      var prevIndex = this.index-1;
      if (prevIndex < 0) {
          prevIndex =  this.length-1;
          return false;
      }

      this._prev = this._tpl[prevIndex].cloneNode(true);
      this._prev.style.cssText+='-webkit-transition-duration:0ms;'+this._getTransform('-'+this.scrollDist+'px');
      this.wrap.insertBefore(this._prev,this._current);

    }, this._delayTime)
  }

  next () {
    if(!this._current || !this._next) {
      this._itemRest()
      return;
    }
    if(this.index < this.length-1) {
      this.index++
    } else {
      this._itemRest();
      return false;
    }

    if (this._prev) {
      this.wrap.removeChild(this._prev)
    }
    this._prev = this._current
    this._current = this._next
    this._next = null

    this._prev.style.cssText+='-webkit-transition-duration:'+this.opts.speed+'ms;'+this._getTransform('-'+this.scrollDist+'px');
    this._current.style.cssText+='-webkit-transition-duration:'+this.opts.speed+'ms;'+this._getTransform(0);

    setTimeout(() => {
      if (this.$(`.${this.opts.playClass}`, this.wrap)) {
        this.removeClass(this.$(`.${this.opts.playClass}`, this.wrap), this.opts.playClass)
      }
      this.addClass(this._current, this.opts.playClass)

      try {
        this.opts.onslide.call(this, this.index)
      } catch(e) {
        console.warn(e)
      }
      
      var nextIndex = this.index + 1 
      if(nextIndex >= this.length) return false;
      this._next = this._tpl[nextIndex].cloneNode(true)
      this._next.style.cssText += '-webkit-transition-duration:0ms;'+this._getTransform(this.scrollDist+'px')
      this.wrap.appendChild(this._next)
    }, this._delayTime)
  }

  slideTo() {
    this._setHTML(index)
    this._pageInit()
  }

  // 设置dom
  _setHTML(index) {
    if( index >= 0) {
      this.index = parseInt(index)
    }
    this.wrap.innerHTML = ''

    var initDom = document.createDocumentFragment()

    // 上一页处理
    if (this.index > 0) {
      this._prev = this._tpl[this.index-1].cloneNode(true)
      this._prev.style.cssText += this._getTransform(`-${this.scrollDist}px`)
      initDom.appendChild(this._prev)
    } else {
      this._prev = null
    }

    // 当前页处理
    this._current = this._tpl[this.index].cloneNode(true)
    this._current.style.cssText += this._getTransform(0)
    initDom.appendChild(this._current)

    // 下一页处理
    if(this.index < this.length - 1) {
      this._next = this._tpl[this.index + 1].cloneNode(true)
      this._next.style.cssText += this._getTransform(`${this.scrollDist}px`)
      initDom.appendChild(this._next)
    } else {
      this._next = null;
    }

    this.wrap.appendChild(initDom)
  }

  // 页面初始化
  _pageInit () {
    setTimeout(()=>{
      this.addClass(this._current, this.opts.playClass)
      try {
        this.opts.onslide.call(this, this.index)
      } catch (e) {
        console.warn(e)
      }
    }, this._delayTime)
  }

  _bindEvt () {
    let self = this
    let handrELm = this.opts.fullScreen ? this.$('body') : this.wrap
    
    handrELm.addEventListener('touchstart', e=> {
      this._touchstart(e)
    }, false)

    handrELm.addEventListener('touchmove', e => {
      this._touchmove(e)
    }, false)

    handrELm.addEventListener('touchend', e => {
      this._touchend(e)
    }, false)

    handrELm.addEventListener('touchcancel', e => {
      this._touchend(e)
    }, false)
  }

  // 手势
  _touchstart (e) {
    let self = this
    if (e.target.getAttribute('data-stop') === 'true') return;
    if (e.touches.length !== 1) return;
    
    this.lockSlide = false
    this._touchstartX = e.touches[0].pageX
    this._touchstartY = e.touches[0].pageY

    // touch的初始位置
    this.touchInitPos = this.opts.isVertical ? e.touches[0].pageY : e.touches[0].pageX
    this.deltaX1 = this.touchInitPos

    this.startPos = 0 //当前页面位置
    this.startPosPrev = -this.scrollDist
    this.startPosNext = this.scrollDist

    //手指滑动的时候禁用掉动画
    if (this._next) {
      self._next.style.cssText+='-webkit-transition-duration:0;'
    }

    self._current.style.cssText+='-webkit-transition-duration:0;'
    if (this._prev) {
      self._prev.style.cssText+='-webkit-transition-duration:0;'
    }
  }

  _touchmove(e) {
    let target = e.target
    let parent
    let self = this
    if(target.getAttribute('stop') === 'true') return;
     
    do {
      parent = target.parentNode
    } while (parent && parent != this.wrap)
    if(!parent && e.target != this.wrap) return;

    if(e.touches.length !== 1 || this.lockSlide) return;

    let gx = Math.abs(e.touches[0].pageX - this._touchstartX)
    let gy = Math.abs(e.touches[0].pageY - this._touchstartY)

    // // 如果手机滑动水平设置不一致不会触发滑动
    if (gx>gy && this.opts.isVertical) {
      this.lockSlide = true
      return
    } else if (gx < gy && !this.opts.isVertical) {
      this.lockSlide = true
      return
    }

    let currentX = this.opts.isVertical ? e.touches[0].pageY : e.touches[0].pageX
    this.deltaX2 = currentX - this.deltaX1 // 记录移动偏移量
    this.totalDist = this.startPos + currentX - this.touchInitPos

    this._current.style.cssText += this._getTransform(`${this.totalDist}px`)
    this.startPos = this.totalDist

    // // 处理上一张和下一张
    if (this.totalDist < 0) {
      if (this._next) {
        this.totalDist2 = this.startPosNext + currentX - this.touchInitPos
        this._next.style.cssText += this._getTransform(`${this.totalDist2}px`)
        this.startPosNext = this.totalDist2
      }
    } else {
      if (this._prev) {
        this.totalDist2 = this.startPosPrev + currentX - this.touchInitPos
        this._prev.style.cssText += this._getTransform(`${this.totalDist2}px`)
        this.startPosPrev = this.totalDist2
      }
    }
    this.touchInitPos = currentX

  }

  _touchend (e) {
    if (e.target.getAttribute('stop') === 'true') return;
    if (this.deltaX2 < - this.opts.triggerDist) {
      this.next()
    } else if (this.deltaX2 > this.opts.triggerDist) {
      this.prev()
    } else {
      this._itemRest()
    }
    this.deltaX2 = 0
  }

  _itemRest() {
    // this._current.style += `-webkit-transition-duration:${this.opts.speed}ms;${this._getTransform(0)};`
    this._current.style.cssText+='-webkit-transition-duration:'+this.opts.speed+'ms;'+this._getTransform(0);
    if(this._prev) {
      // this._prev.style.cssText += `-webkit-transition-duration:${this.opts.speed}ms;${this._getTransform('-'+this.scrollDist+'px')};`
      this._prev.style.cssText+='-webkit-transition-duration:'+this.opts.speed+'ms;'+this._getTransform('-'+this.scrollDist+'px');
    }
    if(this._next) {
      // this._next.style.cssText += `-webkit-transition-duration:${this.opts.speed}ms;${this._getTransform(this.scrollDist+'px')};`
      this._next.style.cssText+='-webkit-transition-duration:'+this.opts.speed+'ms;'+this._getTransform(this.scrollDist+'px');

    }
    this.deltaX2 = 0
  }

  _getTransform (dist) {
    let pos = this.opts.isVertical ? `0,${dist}` : `${dist},0`
    return `;-webkit-transform:${this.opts.useACC ? 'translate3d('+pos+',0)' : 'translate('+pos+')'}`
  }

}
var scoll = new iSlider()
console.log(scoll)