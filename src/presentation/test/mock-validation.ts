import { Validation } from '@/presentation/protocols/Validation'

export class ValidationStub implements Validation {
  errorMessage: string

  validate(fieldName: string, fieldValue: string): string {
    return this.errorMessage
  }
}
