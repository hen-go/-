//计算直角三角形的个数

const lines = [1, 2, 4, 5]

function trianglenum() {
  let count = 0
  let b3 = new Map(),
    b4 = new Map(),
    b5 = new Map()
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] % 3 === 0) {
      b3.set(lines[i], lines[i] / 3)
    }
    if (lines[i] % 4 === 0) {
      b4.set(lines[i], lines[i] / 4)
    }
    if (lines[i] % 5 === 0) {
      b5.set(lines[i], lines[i] / 5)
    }
  }
  for (let [jishu, beilv] of b3.entries()) {
    if (b4.has(4 * beilv) && b5.has(5 * beilv)) {
      count++
    }
  }
  return count
}

let result = trianglenum()
console.log(result)
