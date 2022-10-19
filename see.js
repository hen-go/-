const m = async () => {
  throw 'new Error(1)'
}
const a = {
  async z() {
    try {
      await m()
    } catch {
      console.log(2)
    }
  },
  async x() {
    try {
      m()
    } catch {
      console.log(3)
    }
  },
  async c() {
    try {
      return m()
    } catch {
      console.log(4)
    }
  },
}

let p = async () => {
  try {
    await a.z()
    await a.x()
    await a.c()
  } catch {
    console.log(5)
  }
}
p()
