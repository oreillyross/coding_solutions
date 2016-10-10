function runAnimation(step) {
  console.log(step)
}

function delay(interval) {
  return new Promise((resolve) => {
    setTimeout(resolve, interval)
  })
}

runAnimation(0)
delay(1000).then(() => {
  runAnimation(1)
  return delay(1000)
}).then(() => {
  runAnimation(2)
})