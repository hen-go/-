const v = [100,100,1,100]
const k = [100,100,1,1]


function main(v,k){
  let vi = {
    hp:v[0],
    att:v[1],
    def:v[2],
    sped:v[3],
    bskillnum:0
  }
  let ki = {
    hp:k[0],
    att:k[1],
    def:k[2],
    sped:k[3],
    random:0,
    xiuxi:0
  }

  let round = 1 //回合数

  //攻击环节
  function attck(){
    if(round % 3 === 0){
      if(vi.sped > ki.sped){
        vskill()
        bskill()
        kskill()
        bskill()
      }else{
        kskill()
        bskill()
        vskill()
        bskill()
      } 
    }else{
      if(vi.sped > ki.sped){
        nomalattck(vi,ki)
        bskill()
        if(ki.hp && ki.xiuxi !== 1){
          if(ki.random === 1){
            nomalattck(ki,ki)
            ki.random = 0
            bskill()
          }else{
            nomalattck(ki,vi)
            bskill()
          }
        }
      }else{
        nomalattck(ki,vi)
        bskill()
        if(vi.hp){
          bskill()
          nomalattck(ki,vi)
        }
      }
    }
    
  }

  //普通攻击
  function nomalattck(ac,dc){
    let pain = ac.att - dc.def
    dc.hp -= (pain || 0)
  }

  //主动技能
  function vskill(){
    nomalattck(vi,ki)
    ki.random = 1
  }

  function kskill(){
    if(ki.hp > 10){
      ki.hp -= 10
      vi.hp -= (45 - vi.def || 0)
      vi.hp -= 20 //元素伤害
      ki.xiuxi=  1
    }
  }

  //被动技能
  function bskill(){
    if(vi.hp && ki.hp){
      if(vi.hp < 31 && vi.bskillnum !== 1){
        vi.hp += 20
        vi.att += 15
        ki.hp += 20
        vi.bskillnum = 1
      }
      ki.att = k[1] + Math.floor((100 - ki.hp)/5)
    }
  }

  while(vi.hp && ki.hp){
    bskill()
    attck()
    round++
  }

  return vi.hp ? 'I love V2V forever!' : 'Kalpas yame te!'
}





let result = main(v,k)
console.log('first')