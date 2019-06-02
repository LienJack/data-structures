

function getMatrix(arg_1, _arg_1, arg_2, _arg_2, arg_3, _arg_3) {
  // 解一元三次方程， X = ax + cy + e 求ace
  let arr1 = [arg_1.x, arg_1.y, 1, _arg_1.x]
  let arr2 = [arg_2.x, arg_2.y, 1, _arg_2.x]
  let arr3 = [arg_3.x, arg_3.y, 1, _arg_3.x]
  let result = equation(arr1, arr2, arr3)
  // Y = bx + dy + f
  arr1[3] = _arg_1.y
  arr2[3] = _arg_2.y
  arr3[3] = _arg_3.y

  let result2 = equation(arr1, arr2, arr3)

  let a = result.x
  let c = result.y
  let e = result.z

  let b = result2.x
  let d = result2.y
  let f = result2.z
  return {
    a,
    b,
    c,
    d,
    e,
    f
  }
}

function equation(arr1, arr2, arr3) {
  let a1 = +arr1[0]
  let b1 = +arr1[1]
  let c1 = +arr1[2]
  let d1 = +arr1[3]

  let a2 = +arr2[0]
  let b2 = +arr2[1]
  let c2 = +arr2[2]
  let d2 = +arr2[3]

  let a3 = +arr3[0]
  let b3 = +arr3[1]
  let c3 = +arr3[2]
  let d3 = +arr3[3]

  let m1 = c1 - (b1 * c2 / b2);
  let m2 = c2 - (b2 * c3 / b3);
  let m3 = d2 - (b2 * d3 / b3);
  let m4 = a2 - (b2 * a3 / b3);
  let m5 = d1 - (b1 * d2 / b2);
  let m6 = a1 - (b1 * a2 / b2);
  //计算xyz
  let x = ((m1 / m2) * m3 - m5) / ((m1 / m2) * m4 - m6);
  let z = (m3 - m4 * x) / m2
  let y = (d1 - a1 * x - c1 * z) / b1;
  
  return {
    x: x,
    y: y,
    z: z
  }
}

export default getMatrix