import { FieldValidation } from '@/validation/protocols/field-validation'
import { RequiredFieldError } from '@/validation/errors'

export class RequiredFieldValidation implements FieldValidation {
  // eslint-disable-next-line no-useless-constructor
  constructor(readonly field: string) {}
  validate(fieldvalue: string): Error {
    return new RequiredFieldError()
  }
}
