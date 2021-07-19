import { makeSignupValidation } from './signup-validation'
import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'
import { RequiredFiledValidation } from '../../presentation/helpers/validators/required-field-validation'
import { Validation } from '../../presentation/helpers/validators/validation'
import { CompareFiledValidation } from '../../presentation/helpers/validators/compare-field-validation'
jest.mock('../../presentation/helpers/validators/validation-composite')

describe('SignUpValidationFactory', () => {
    test('Should call ValidationCompositi with all validations', () => {
        makeSignupValidation()
        const validations: Validation[] = []
        for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
            validations.push(new RequiredFiledValidation(field))
        }
        validations.push(new CompareFiledValidation('password', 'passwordConfirmation'))
        expect(ValidationComposite).toHaveBeenCalledWith(validations)
    })
})