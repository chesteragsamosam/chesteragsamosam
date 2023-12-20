export const compare = (func1, func2, times) => {
    let start = 0
    let end = 0
    const res = []

    start = performance.now()
    for (let i = -times; i < times; i++) {
      func1(i)
    }
    end = performance.now()
    res.push({
      funcName: func1.name,
      time: end - start,
    })
    start = performance.now()
    for (let i = -times; i < times; i++) {
      func2(i)
    }
    end = performance.now()
    res.push({
      funcName: func2.name,
      time: end - start,
    })
    let isSame = true
    let i = -times
    while(isSame && i <= times) {
      i++
      const [v1, v2] = [func1(i), func2(i)]
      isSame = v1 === v2
    }
    console.table(res)
    console.log('isSame', isSame)
  }
