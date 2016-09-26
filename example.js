const {async, await, Promise} = require('.')

// Now we can use async/await and Promise
const main = async(() => {
  console.log(3)
  await(Promise.delay(1000))
  console.log(2)
  await(Promise.delay(1000))
  console.log(1)
  await(Promise.delay(1000))
  console.log('🚀')
})

main()
