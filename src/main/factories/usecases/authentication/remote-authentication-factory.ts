import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { makeAxiosHttpClient } from '../../http/axios-http-client-factory'
import { RemoteAuthentication } from '@/data/useCases/authentication/remote-authentication'
import { Authentication } from '@/domain/useCases'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl(), makeAxiosHttpClient())
}
