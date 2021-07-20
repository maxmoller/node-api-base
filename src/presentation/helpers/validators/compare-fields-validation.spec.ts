import { InvalidParamError } from "../../erros"
import { CompareFiledValidation } from "./compare-fields-validation"

const makeSut = (): CompareFiledValidation => {
    return new CompareFiledValidation('field', 'fieldToCompare')
}

describe('CompareField Validation', () => {
    test('Should return a InvalidParamError if validation fails', () => {
        const sut = makeSut()
        const erro = sut.validate({ 
            field: 'any_value',
            fieldToCompare: 'wrong_value'
        })
        expect(erro).toEqual(new InvalidParamError('fieldToCompare'))
    })

    test('Should not return if validation succeds', () => {
        const sut = makeSut()
        const erro = sut.validate({ 
            field: 'any_value',
            fieldToCompare: 'any_value'
        })
        expect(erro).toBeFalsy()
    })
})