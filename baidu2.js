const line = '0010111'

function foo(line) {
  let one = 0,
    zero = 0
  for (let s of line) {
    if (s === '0') zero++
    else one++
  }
  if (one % 2 !== 0 && zero % 2 !== 0) {
    return 'No'
  } else {
    return 'Yes'
  }
}

let result = foo(line)
console.log(result)
