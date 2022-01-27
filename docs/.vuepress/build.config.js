const baseConfig = require('./config.js')
const { createApp } = require('vuepress')

process.env.NODE_ENV = 'production'

const options = Object.assign({}, baseConfig)

run(options)

async function run(options) {
    const app = createApp(options)
    await app.process()
    return app.build()
}
