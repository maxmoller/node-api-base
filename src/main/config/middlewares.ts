import { Express } from 'express'
import { bodyParse, cors, contentType } from '../middlewars'

export default (app: Express): void => {
    app.use(bodyParse)
    app.use(cors)
    app.use(contentType)
}