import { InvalidParamError } from '../../erros';
import { Validation } from './validation'

export class CompareFiledValidation implements Validation {
    private readonly fildName: string;
    private readonly fieldToCompareName: string;
    
    constructor (fildName: string, fieldToCompareName: string) {
        this.fildName = fildName
        this.fieldToCompareName = fieldToCompareName
    }

    validate (input: any): Error {
        if (input[this.fildName] != input[this.fieldToCompareName]) {
            return new InvalidParamError(this.fieldToCompareName)
        }
    }
}