import { makeSignupValidation } from './signup-validation'
import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'
import { RequiredFiledValidation } from '../../presentation/helpers/validators/required-field-validation'
import { Validation } from '../../presentation/helpers/validators/validation'
jest.mock('../../presentation/helpers/validators/validation-composite')

describe('SignUpValidationFactory', () => {
    test('Should call ValidationCompositi with all validations', () => {
        makeSignupValidation()
        const validations: Validation[] = []
        for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
            validations.push(new RequiredFiledValidation(field))
        }
        expect(ValidationComposite).toHaveBeenCalledWith(validations)
    })
})