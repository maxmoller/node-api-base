import { InvalidParamError } from '../../erros';
import { Validation } from '../../protocols/validation'

export class CompareFiledValidation implements Validation {
    constructor (private readonly fildName: string, private readonly fieldToCompareName: string) {}

    validate (input: any): Error {
        if (input[this.fildName] != input[this.fieldToCompareName]) {
            return new InvalidParamError(this.fieldToCompareName)
        }
    }
}