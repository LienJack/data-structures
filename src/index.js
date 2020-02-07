var fn = () => {
    let flag = true
    return () => {
        if (flag) {
            console.log('1')
        } else {
            console.log('2')
        }
        flag = !flag
    }
}

const test = fn()

test()
test()