import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 5000

const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:5183')
  .split(',')
  .map((origin) => origin.trim())

app.use(
  cors({
    origin: allowedOrigins,
  }),
)
app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(port, () => {
  console.log(`mashok21 server listening on port ${port}`)
})
