import { MissingParamError } from "../../erros"
import { Validation } from "./validation"
import { ValidationComposite } from "./validation-composite"

const makeValidation = (): Validation => {
    class ValidationStub implements Validation {
        validate (input: any): Error {
            return null
        }
    }
    return new ValidationStub()
}

const makeSut = () => {
    const validationStubs = [makeValidation(), makeValidation()]
    const sut = new ValidationComposite(validationStubs)
    return {
        sut,
        validationStubs,
    }
}

interface SutTypes {
    sut: ValidationComposite
    validationStubs: Validation[]
}

describe('Validation Composit', () => {
    test('If return an error if any validation fails', () => {
        const { sut, validationStubs } = makeSut()
        jest.spyOn(validationStubs[0], 'validate').mockReturnValueOnce(new MissingParamError('field'))
        const error = sut.validate({ field: 'any_value' })
        expect(error).toEqual(new MissingParamError('field'))
    })

    test('If return the first error if  more then one validation fails', () => {
        const { sut, validationStubs } = makeSut()
        jest.spyOn(validationStubs[0], 'validate').mockReturnValueOnce(new Error())
        jest.spyOn(validationStubs[1], 'validate').mockReturnValueOnce(new MissingParamError('field'))
        const error = sut.validate({ field: 'any_value' })
        expect(error).toEqual(new Error())
    })
})