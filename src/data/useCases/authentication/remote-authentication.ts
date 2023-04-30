import { AuthenticationParams } from 'domain/useCases/Authentication'
import { HttpPostClient } from '../../protocols/http/http-post-client'

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly HttpPostClient: HttpPostClient,
  ) {
    this.url = url
    this.HttpPostClient = HttpPostClient
  }

  async auth(params: AuthenticationParams): Promise<void> {
    await this.HttpPostClient.post({ url: this.url, body: params })
  }
}
