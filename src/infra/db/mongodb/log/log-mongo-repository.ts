import { MongoHelper } from '../helpers/mongo-helper'

export class LogMongoRepository {
    async logError (stack: string): Promise<void> {
        const errorCollection = await MongoHelper.getCollection('error')
        await errorCollection.insertOne({ 
            stack,
            date: new Date()
        })
    }
}