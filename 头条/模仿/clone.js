
function clone(target = {}, ...args) {
  let options, copy
  for(let i=0; i<args.length; i++) {
     options = args[i]
     if(options != null) {
         for(name in options) {
             copy = options[name]
             src = target[name]
             if(copy && typeof copy == 'object') {
                 target[name] = clone(src, copy)
             } else if(copy != undefined) {
                 target[name] = copy
             }
         }
     }
  }
  return target
}