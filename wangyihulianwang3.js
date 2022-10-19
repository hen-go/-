const arr = [3, 1, 3, 4, 3, 4]
const n = 6
//三元组，[i,j,k] i===k i>j

let a = new Map()
a.set(1, [12])
console.log('first')

function changcheng(arr) {
  let nummap = new Map()
  for (let i = 0; i < n; i++) {
    if (nummap.has(arr[i])) {
      let a = nummap.get(arr[i])
      nummap.set(arr[i], [...a, i])
    } else {
      nummap.set(arr[i], [i])
    }
  }
  let total = 0
  for (let [num, index] of nummap.entries()) {
    let sum = 0
    if (index.length === 1) continue
    for (let i = 0; i <= index.length - 2; i++) {
      let l = index[i],
        r = index[i + 1],
        count = 0
      for (let j = l + 1; j < r; j++) {
        if (arr[j] < num) count++
      }
      sum += count * (index.length - 1 - i)
    }
    total += sum
  }

  return total
}

let result = changcheng(arr)

console.log('first')
