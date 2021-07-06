import { EmailValidatorAdapter } from "./email-validator"
import validator from 'validator'


jest.mock('validator', ()  => ({
    isEmail (): boolean {
        return true
    }
}))

const makeSut = (): EmailValidatorAdapter => {
    return new EmailValidatorAdapter()
}

describe('EmailValidator Adapter', () => { 
    test ('Should return false is validator returns false', () => {
        const sut = makeSut()
        jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
        const isValid = sut.isvalid('invalid_email@mail.com')
        expect(isValid).toBe(false)
    })

    test ('Should return false is validator returns true', () => {
        const sut = makeSut()
        const isValid = sut.isvalid('valid_email@mail.com')
        expect(isValid).toBe(true)
    })

    test ('Should call validator if correct email', () => {
        const sut = makeSut()
        const isEmailSpy = jest.spyOn(validator, 'isEmail')
        sut.isvalid('any_email@mail.com')
        expect(isEmailSpy).toHaveBeenCalledWith('any_email@mail.com')
    })
})
