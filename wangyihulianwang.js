const n = 7
const arr = [1,1,4,5,1,4,5]
//          [6,5,6,5,6,5,6]

function changcheng(){
  let max = 0, secmax = 0, maxin = 0
  for(let i = 0; i < n; i++){
    if(arr[i] > max){
      secmax = max
      max = arr[i]
      maxin = i
    }
  }
  for(let i = 0; i < n; i++){
    if(arr[i] === max && (i % 2 !== maxin % 2)){
      secmax = max
      max++
    }
  }
  let count1 = 0, count2 = 0
  for(let i = 0; i < n; i++){
    if(i % 2 === maxin % 2){
      count1 = count1 + (max - arr[i])
      count2 = count2 + (secmax - arr[i])
    }else{
      count1 = count1 + (secmax - arr[i])
      count2 = count2 + (max - arr[i])
    }
  }

  return Math.min(count1,count2)
}

let result = changcheng(arr)

console.log('first')