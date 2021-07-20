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
    const validationStub = makeValidation()
    const sut = new ValidationComposite([validationStub])
    return {
        sut,
        validationStub,
    }
}

interface SutTypes {
    sut: ValidationComposite
    validationStub: Validation
}

describe('Validation Composit', () => {
    test('If return an error if any validation fails', () => {
        const { sut, validationStub } = makeSut()
        jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new MissingParamError('field'))
        const error = sut.validate({ field: 'any_value' })
        expect(error).toEqual(new MissingParamError('field'))
    })
})
