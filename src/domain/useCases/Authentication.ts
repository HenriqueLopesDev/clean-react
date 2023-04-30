import { AccountModel } from '../models/Account-model'

export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth(params: AuthenticationParams): Promise<AccountModel>
}
