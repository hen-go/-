/* 
2
5 1
6 2
5 7
*/
var t = 2
var l = [5,1]
var r = [12,2]
var p = [5,7]

function maxnum(){
  for(let i = 0; i < t; i++){
    const len = r[i] - l[i]
    let maxans = 0
    for(let j = 0; j <= len; j++){
      let res = (l[i] + j) % p[i]
      maxans = Math.max(res, maxans)
    }
    console.log(maxans)



    // let yu = 0
    // yu = r[i] % p[i]
    // if(r[i] === l[i]){
    //   console.log(yu)
    //   continue
    // }
    // if(yu === 0){
    //   console.log(p[i] - 1)
    //   continue
    // }
    // else if(yu !== 0 && r[i] - yu - 1 >= l[i]){
    //   console.log(p[i] - 1)
    // }
    // else{
    //   console.log(yu)
    // }
    
    
  }
  
}

maxnum()