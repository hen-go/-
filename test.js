var foo = function (arr) {
  let res = []
  let flag = 0
  let len = arr.length
  for (let n = 0; n < 5; n++) {
    let row = []
    for (let i = 2 ** n; i < 2 ** (n + 1) - 1; i++) {
      if (flag == 0) {
        row.unshift(arr[i + 1])
      } else {
        row.push(arr[i + 1])
      }
    }
    res.concat(row)
    if (flag == 0) flag += 1
    else flag -= 1
  }

  return res
}

let tes = [
  1,
  2,
  3,
  4,
  null,
  5,
  6,
  null,
  7,
  null,
  null,
  null,
  null,
  8,
  null,
  null,
  null,
  9,
  10,
  null,
  null,
  null,
  null,
  null,
  null,
  11,
  12,
  null,
  null,
]
console.log(tes)
console.log(foo(tes))

// 1
// /   \
// 2     3
// /       /   \
// 4      5     6
// \          /
// 7       8
// /   \     /  \
// 9   10 11  12
// // in
// [
// 1,
// 2, 3,
// 4, null, 5, 6,
// null, 7, null, null, null, null, 8, null,
// null, null, 9, 10, null, null, null, null, null, null, 11, 12, null, null
// ]
// // out
// [1, 3, 2, 4, 5, 6, 8, 7, 9, 10, 11, 12]
