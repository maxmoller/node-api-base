import jwt from 'jsonwebtoken'
import { JwtAdapter } from './jwt-adapter'

jest.mock('jsonwebtoken', () => ({
  async sign (): Promise<string> {
    return new Promise<string>(resolve => resolve('any_token'))
  }
}))

describe('Jwt Adapter', () => {
  test('Should call sign with correct values', async () => {
    const sut = new JwtAdapter('secret')
    const sigSpy = jest.spyOn(jwt, 'sign')
    await sut.encrypt('any_id')
    expect(sigSpy).toHaveBeenCalledWith({ id: 'any_id'}, 'secret')
  })

  test('Should return a token on sign success', async () => {
    const sut = new JwtAdapter('secret')
    const accesToken = await sut.encrypt('any_id')
    expect(accesToken).toBe('any_token')
  })

})