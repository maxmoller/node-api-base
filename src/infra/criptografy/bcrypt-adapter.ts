import { Encrypter } from '../../data/protocols/encrypter'
import bcrypt from "bcrypt"

export class BcrypAdapter implements Encrypter {
    async encrypt (value: string): Promise<string> {
        await bcrypt.hash(value, 12)
        return new Promise<string>(resolve => resolve(''))
    }
}   