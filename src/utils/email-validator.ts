import { EmailValidator } from '../presentation/protocols/email-validator'
import validator from 'validator'

export class EmailValidatorAdapter implements EmailValidator {
    isvalid (email: string): boolean {
        return validator.isEmail(email)
    }
}