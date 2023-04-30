import { HttpPostClient } from 'data/protocols/http/http-post-client'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string
      async post(url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }
    const url = 'any_url'
    const HttpPostClient = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, HttpPostClient)
    await sut.auth()
    expect(HttpPostClient.url).toBe(url)
  })
})
