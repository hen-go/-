const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let hue = 0
const mouse = {}
// 点击或鼠标移动时往数组添加新的粒子对象
function addNewParticles(e) {
  mouse.x = e.x
  mouse.y = e.y
  Array.apply(null, {length: 10}).forEach(() => {
    particlesArray.push(new Particle())
  })
}
canvas.addEventListener('mousemove', addNewParticles)
canvas.addEventListener('click', addNewParticles)
const particlesArray = []
class Particle {
  constructor() {
    this.x = mouse.x
    this.y = mouse.y
    this.size = Math.random() * 5 + 1
    this.speedX = Math.random() * 3 - 1.5 // -1.5 ~ 1.5,如果是负数往左边移动，正数往右边移动，speedY同理
    this.speedY = Math.random() * 3 - 1.5
  }
  update() {
    this.size -= 0.1 // 圆半径逐渐变小
    this.x += this.speedX // 更新圆坐标
    this.y += this.speedY
  }
  draw() {
    ctx.beginPath()
    // ctx.fillStyle = '#000';
    ctx.fillStyle = `hsl(${hue}, 100%, 50%)`
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()
  }
}
function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update()
    particlesArray[i].draw()
    if (particlesArray[i].size <= 0.3) {
      // 删除半径太小的粒子
      particlesArray.splice(i, 1)
      i--
    }
  }
}
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  hue++
  handleParticles()
  requestAnimationFrame(animate)
}
animate()
