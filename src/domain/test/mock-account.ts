import { AuthenticationParams } from '@/domain/useCases/Authentication'
import { faker } from '@faker-js/faker'
import { AccountModel } from '@/domain/models/Account-model'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid(),
})
