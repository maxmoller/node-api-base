export interface UpdateAccessTokenRepository {
  updateAccesToken(value: string, token: string): Promise<void>
}