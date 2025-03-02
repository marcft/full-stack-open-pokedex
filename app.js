const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  // change this string to ensure a new version deployed
  res.send('9')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

throw new Error('This is a test error')

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
