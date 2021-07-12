import { Router } from 'express'
import { makeSignupCOntroller } from '../factories/signup'
import { adpterRoute } from '../adapters/express-route-adapters'

export default (router: Router): void => {
    router.post('/signup', adpterRoute(makeSignupCOntroller()))
}