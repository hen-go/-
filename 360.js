const n = 2,
  p = 20,
  q = 80

const arr = [50, 51]

function jige(arr) {
  let count = 0
  arr.sort((a, b) => b - a)
  let index = 0
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] !== arr[i - 1]) {
      index++
    }
    let sum = p * (100 - index) + q * arr[i]
    if (sum >= 6000) {
      count++
    }
    console.log(`总分：${p}*${100 - index}+${q}*${arr[i]}=${sum}`)
  }
  return count
}

let restul = jige(arr)
console.log('first')
