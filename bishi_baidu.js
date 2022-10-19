var n = 6
var input = ['213','4244','22','100','3304','30302']

ans = input[4].slice(0,2)
console.log(n.toString())

function foo(input,n){
  let ans = []
  for(let i = 0; i < n; i++){
    let nums = input[i].split('')
    const len = nums.length
    if(nums.includes('0')){
      ans = s_zero(nums,len)
    }
    else{
      ans = s(nums,len)
    }
    console.log(ans)
  }

  function s(arr,len){
    let ans = ''
    for(let i = 0; i < len; i++){
      if(arr[0] > 3){
        ans += '3'
      }
      else{
        if(arr[i] >= 3){
          ans += '3'
        }
        else{
          ans += arr[i]
        }
      }
      
    }
    return ans
  }

  function s_zero(arr,len){
    let ans = ''
    const zero = arr.indexOf('0')
    if(arr[0] == 1 && arr[zero - 1] == 1){
      for(let j = 0; j < len - 1; j++){
        ans += '3'
      }
    }
    else{
      if(arr[0] > 3){
        for(let j = 0; j < len; j++){
          ans += '3'
        }
      }
      else if(arr[0] <= 3){
        for(let j = 0; j < zero; j++){
          if(arr[j] > 3){
            ans += '3'
          }
          else if(arr[j] == 3){
            ans += '2'
          }
          else{
            ans += arr[j]
          }
        }
      }
      for(let j = 0; j < len - zero; j++){
        ans += '3'
      }
    }

    return ans
  }

}

foo(input,n)