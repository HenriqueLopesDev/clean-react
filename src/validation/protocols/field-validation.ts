export interface FieldValidation {
  field: string
  validate(fieldvalue: string): Error
}
