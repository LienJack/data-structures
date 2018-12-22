
function resovle1Seconds() {
  return new Promise (resolve => {
    setTimeout(()=>{
      console.log('resolved1')
      resolve('resolved1')
    }, 1000)
  })
}

 async function asyncCall() {
   console.log('calling')
   var result1 = await (resovle1Seconds())
   console.log('calling2')
 }

 asyncCall()
