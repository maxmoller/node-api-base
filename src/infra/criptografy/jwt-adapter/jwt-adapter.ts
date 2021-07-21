import { Encrypter } from "../../../data/protocols/cryptografy/Encrypter";
import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter {
    private readonly secret: string

    constructor(secret: string) {
        this.secret = secret
    }

    async encrypt(value: string): Promise<string> {
        await jwt.sign({ id: value}, this.secret)
        return null
    }
}