function deepCopy(origin){
  let obj = Array.isArray(origin) ? [] : {}
  for(let key in origin){
    let value = origin[key]
    obj[key] = (typeof value === 'Object' && value !== null) ? deepCopy(value) : value
  }

  return obj
}

const origin = {
  name : '张三',
  age : '18',
  like(){
    console.log('喜欢唱歌、滑冰');
  },
  a : [[1,1], 2, 3, 4]
}

let result = deepCopy(origin)
console.log('first')