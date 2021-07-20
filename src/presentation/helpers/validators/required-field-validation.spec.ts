import { MissingParamError } from "../../erros"
import { RequiredFieldValidation } from "./required-field-validation"

const makeSut = (): RequiredFieldValidation => {
    return new RequiredFieldValidation('field')
}

describe('RequiredField Validation', () => {
    test('Should return a MissingParamError if validation fails', () => {
        const sut = makeSut()
        const erro = sut.validate({ name: 'any_name'})
        expect(erro).toEqual(new MissingParamError('field'))
    })

    test('Should not return if validation succeds', () => {
        const sut = makeSut()
        const erro = sut.validate({ field: 'any_name'})
        expect(erro).toBeFalsy()
    })
})