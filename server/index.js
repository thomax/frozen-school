import { fileURLToPath } from 'url'
import path from 'path'
import express from 'express'
import cors from 'cors'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001


app.use(cors())

// Serve static files from the "dist" directory
app.use(express.static(path.resolve(__dirname, '../dist')))
app.use('/assets', express.static(path.resolve(__dirname, '../src/assets')))

app.get('/ping', (req, res) => {
    res.json({ result: 'pong' })
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
