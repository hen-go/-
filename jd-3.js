const n = 6
const nums = [1, 1, 4, 5, 1, 4]

function greatwall() {
  let result = 0
  let odd = [],
    even = []
  let oddcount = new Map(),
    evencount = new Map()
  let oddmax = 1,
    oddsecmax = 1,
    evenmax = 1,
    evensecmax = 1
  let oddmaxnum = 0,
    evenmaxnum = 0
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 2 === 0) {
      if (oddcount.has(nums[i])) {
        oddcount.set(nums[i], oddcount.get(nums[i]) + 1)
      } else {
        oddcount.set(nums[i], 1)
      }
    } else {
      if (evencount.has(nums[i])) {
        evencount.set(nums[i], evencount.get(nums[i]) + 1)
      } else {
        evencount.set(nums[i], 1)
      }
    }
  }
  for (let [num, count] of oddcount.entries()) {
    oddmaxnum = count > oddmax ? num : oddmaxnum
    if (count > oddmax) {
      oddmax = count
    }
    if (count > oddsecmax && oddmax !== count) {
      oddsecmax = count
    }
  }
  for (let [num, count] of evencount.entries()) {
    evenmaxnum = count > evenmax ? num : evenmaxnum
    if (count > evenmax) {
      evenmax = count
    }
    if (count > evensecmax && evenmax !== count) {
      evensecmax = count
    }
  }

  if (oddmaxnum === evenmaxnum) {
    result = Math.min(n - oddmax - evensecmax, n - oddsecmax - evenmax)
  } else {
    result = n - oddmax - evenmax
  }

  return result
}

let result = greatwall()
console.log(result)
