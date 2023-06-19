import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class EmailValidation implements FieldValidation {
  // eslint-disable-next-line no-useless-constructor
  constructor(readonly field: string) {}
  validate(value: string): Error {
    return new InvalidFieldError()
  }
}
