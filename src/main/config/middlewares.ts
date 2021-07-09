import { Express } from 'express'
import { bodyParse } from '../middlewars/body-parse'

export default (app: Express): void => {
    app.use(bodyParse)
}