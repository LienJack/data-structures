
async function test() {
  Promise.resolve(console.log('1')).then(()=>console.log('2'))
  console.log('3')
}

test()
