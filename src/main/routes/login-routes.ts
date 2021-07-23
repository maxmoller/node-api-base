import { Router } from 'express'
import { adpterRoute } from '../adapters/express/express-route-adapters'
import { makeSignupController } from '../factories/signup/signup-factory'
import { makeLoginController } from '../factories/login/login-factory'

export default (router: Router): void => {
  router.post('/signup', adpterRoute(makeSignupController()))
  router.post('/login', adpterRoute(makeLoginController()))
}
