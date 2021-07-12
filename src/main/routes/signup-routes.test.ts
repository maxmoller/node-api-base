import request from "supertest"
import app from "../config/app"
import { MongoHelper } from "../../infra/db/mongodb/helpers/mongo-helper"

describe('Signup Routs', () => {
    beforeAll(async () => {
        await MongoHelper.connect(process.env.MONGO_URL)
    })

    afterAll( async () => {
        await MongoHelper.disconnect()
    })

    beforeEach(async () => {
        const accountCOllection = MongoHelper.getCollection('accounts')
        await accountCOllection.deleteMany({})
    })

    test('Should return as account on success', async () => {
        await request(app)
            .post('/api/signup')
            .send({
                name: 'any_name',
                email: 'any_email@mail.com',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            })
            .expect(200)
    })
})