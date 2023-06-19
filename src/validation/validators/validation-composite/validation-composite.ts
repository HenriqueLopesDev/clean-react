import { Validation } from '@/presentation/protocols/Validation'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class ValidationComposite implements Validation {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly validators: FieldValidation[]) {}
  validate(fieldName: string, fieldValue: string): string {
    const validators = this.validators.filter((v) => v.field === fieldName)
    for (const validator of validators) {
      const error = validator.validate(fieldValue)
      if (error) {
        return error.message
      }
    }
  }
}
