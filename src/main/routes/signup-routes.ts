import { Router } from 'express'
import { makeSignupController } from '../factories/signup/signup'
import { adpterRoute } from '../adapters/express/express-route-adapters'

export default (router: Router): void => {
    router.post('/signup', adpterRoute(makeSignupController()))
}