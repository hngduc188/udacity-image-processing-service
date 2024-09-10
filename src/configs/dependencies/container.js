//remove dotenv config.config()
const { createContainer, asClass, asValue, InjectionMode } = require('awilix');


//controllers
const ControllerRepository = require('../../controllers')

//routers
const RouterRepository = require('../../routes')


const container = createContainer({
    injectionMode: InjectionMode.PROXY
})

container.register({
    router: asClass(RouterRepository),
    ctrl: asClass(ControllerRepository),
})

module.exports = container