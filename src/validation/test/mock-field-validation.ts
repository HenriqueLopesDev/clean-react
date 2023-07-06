import { FieldValidation } from '@/validation/protocols/field-validation'

export class FieldValidationSpy implements FieldValidation {
  error: Error = null
  // eslint-disable-next-line no-useless-constructor
  constructor(readonly field: string) {}
  validate(value: string): Error {
    return this.error
  }
}
