import { EmailValidatorAdapter } from "./email-validator"

describe('EmailValidator Adapter', () => { 
    test ('Should return false is validator returns false', () => {
        const sut = new EmailValidatorAdapter()
        const isValid = sut.isvalid('invalid_email@mail.com')
        expect(isValid).toBe(false)
    })
})
