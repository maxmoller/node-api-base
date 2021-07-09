import { Express } from 'express'
import { bodyParse } from '../middlewars/body-parse'
import {cors } from '../middlewars/cors'
import { contentType } from '../middlewars/content-type'

export default (app: Express): void => {
    app.use(bodyParse)
    app.use(cors)
    app.use(contentType)
}