import { fetch } from '@/utils'
const baseUrl = '/fish/user'

export default {
  getInfo(token: string) {
    return fetch.get(`${baseUrl}/query`)
  }
}