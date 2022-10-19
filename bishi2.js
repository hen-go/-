const data = { a:{count: 1} }
function fn(a, obj) {
  const newObj = { ...obj }
  newObj.a.count++
  return a + newObj.a.count
}

let result = fn(1, data)
console.log('first')