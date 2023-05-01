import {
  AuthenticationParams,
  Authentication,
} from '@/domain/useCases/Authentication'
import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { AccountModel } from '@/domain/models/Account-model'

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly HttpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >,
  ) {
    this.url = url
    this.HttpPostClient = HttpPostClient
  }

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.HttpPostClient.post({
      url: this.url,
      body: params,
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}
