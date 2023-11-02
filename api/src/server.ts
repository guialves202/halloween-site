import app from './app'
import { env } from './env'

app.listen(env.PORT, () => {
  console.log(`Server running att: http://localhost:${env.PORT}`)
})
