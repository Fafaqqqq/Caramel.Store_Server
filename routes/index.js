const Router = require('express')
const router = new Router()
const clothesRouter = require('./clothesRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/device', clothesRouter)

module.exports = router
