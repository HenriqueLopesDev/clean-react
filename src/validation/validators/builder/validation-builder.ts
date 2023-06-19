import { FieldValidation } from '@/validation/protocols/field-validation'
import { RequiredFieldValidation } from '@/validation/validators/required-field/required-field-validation'

export class ValidationBuilder {
  // eslint-disable-next-line no-useless-constructor
  private constructor(
    private readonly fieldname: string,
    private readonly validations: FieldValidation[],
  ) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldname))
    return this
  }

  build(): FieldValidation[] {
    return this.validations
  }
}
