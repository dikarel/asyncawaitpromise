# asyncawaitpromise

One liner to add async/await and promises to your project

Check out [global-asyncawaitpromise](to http://npmjs.com/package/global-asyncawaitpromise)
for a shorter one-liner that uses globals

### Quickstart

    const {Promise, async, await} = require('asyncawaitpromise')

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

### Docs

The following objects are provided

- [async](https://github.com/yortus/asyncawait)
- [await](https://github.com/yortus/asyncawait)
- [Promise](https://github.com/petkaantonov/bluebird)

### Why do I need this?

Because [callback hell](http://callbackhell.com) sucks, and it's
tedious to have to keep writing this boilerplate

    const Promise = require('bluebird')
    const async = require('asyncawait/async')
    const await = require('asyncawait/await')
