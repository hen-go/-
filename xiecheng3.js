// let tokens = [1, 6, 4, 5]
// let tokens = [1, 4, 2, 2]
let tokens = [1010, 1500, 200, 71]
let a = parseInt(tokens[0]),
  b = parseInt(tokens[1]),
  l = parseInt(tokens[2]),
  r = parseInt(tokens[3])

if (b - a < l) {
  console.log('-1')
} else {
  let res1 = addMin(a, b, l, r)

  let res2 = addMax(a, b, l, r)
  if (res1 === -1 || res2 === -1) {
    console.log('-1')
  } else {
    let result = res1 + ' ' + res2
    console.log(result)
  }
}

function addMin(a, b, l, r) {
  let less = b - a
  let count = 0
  if (less >= l && less <= r) return 1
  let n = Math.floor(less / r)
  let last = less % r
  count += n

  if (last < l) {
    if (last + n * (r - l) >= l) {
      count++
    } else {
      return -1
    }
  } else {
    count++
  }
  return count
}
function addMax(a, b, l, r) {
  let less = b - a
  let count = 0
  let n = Math.floor(less / l)
  let last = less % l

  count += n
  if (last === 0) {
    return count
  } else {
    if (l + last / n <= r) {
    } else {
      return -1
    }
  }

  return count
}
