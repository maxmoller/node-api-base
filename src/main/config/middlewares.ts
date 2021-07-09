import { Express } from 'express'
import { bodyParse } from '../middlewars/body-parse'
import {cors} from '../middlewars/cors'

export default (app: Express): void => {
    app.use(bodyParse)
    app.use(cors)
}