import { AuthenticationParams } from '@/domain/useCases/Authentication'
import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly HttpPostClient: HttpPostClient,
  ) {
    this.url = url
    this.HttpPostClient = HttpPostClient
  }

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.HttpPostClient.post({
      url: this.url,
      body: params,
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError()
      default:
        return Promise.resolve()
    }
  }
}
