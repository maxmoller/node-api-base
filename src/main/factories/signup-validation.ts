import { CompareFiledValidation } from '../../presentation/helpers/validators/compare-field-validation'
import { RequiredFiledValidation } from '../../presentation/helpers/validators/required-field-validation'
import { Validation } from '../../presentation/helpers/validators/validation'
import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'

export const makeSignupValidation = (): ValidationComposite => {
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
        validations.push(new RequiredFiledValidation(field))
    }
    validations.push(new CompareFiledValidation('password', 'passwordConfirmation'))
    return  new ValidationComposite (validations)
}
