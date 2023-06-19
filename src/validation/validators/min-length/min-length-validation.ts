import { FieldValidation } from '@/validation/protocols/field-validation'
import { InvalidFieldError } from '@/validation/errors'

export class MinLengthValidation implements FieldValidation {
  // eslint-disable-next-line no-useless-constructor
  constructor(readonly field: string, private readonly minLength: number) {}
  validate(value: string): Error {
    return new InvalidFieldError()
  }
}
