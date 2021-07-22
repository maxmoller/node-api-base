import jwt from 'jsonwebtoken'
import { JwtAdapter } from './jwt-adapter'

jest.mock('jsonwebtoken', () => ({
  async sign (): Promise<string> {
    return new Promise<string>(resolve => resolve('any_token'))
  }
}))

const maheSut = (): JwtAdapter => {
  return new JwtAdapter('secret')
}

describe('Jwt Adapter', () => {
  test('Should call sign with correct values', async () => {
    const sut = maheSut()
    const sigSpy = jest.spyOn(jwt, 'sign')
    await sut.encrypt('any_id')
    expect(sigSpy).toHaveBeenCalledWith({ id: 'any_id'}, 'secret')
  })

  test('Should return a token on sign success', async () => {
    const sut = maheSut()
    const accesToken = await sut.encrypt('any_id')
    expect(accesToken).toBe('any_token')
  })

  test('Should throw is sign throws', async () => {
    const sut = maheSut()
    jest.spyOn(jwt, 'sign').mockImplementationOnce( () => {
      throw new Error()
    })
    const promisse = sut.encrypt('any_id')
    await expect(promisse).rejects.toThrow()
  })
})