const arr = 'reddeer'
// 'redededed'
// 'rededede'

function changcheng(arr){
  let maxe = Math.floor((arr.length - 1) / 2)
  let count = 0
  if(arr.length % 2 === 1){
    for(let i = 0; i < arr.length-1; i++){
      if(i % 2 === 1){
        if(arr[i] !== 'e'){
          count++
        }
      }else{
        if(arr[i] === 'e'){
          count++
        }
      }
    }
  }else{
    return 4
  }

  return count
}

let result = changcheng(arr)

console.log('first')