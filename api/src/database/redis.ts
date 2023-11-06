import { RedisClientType, createClient } from "redis"

class RedisClient {
  public client: RedisClientType
  constructor() {
    this.client = createClient({
      password: 'gui123456'
    })
  }

  async connect() {
    this.client.on('error', err => console.log('Redis Client Error', err))
    await this.client.connect()
  }
}

export default new RedisClient()
