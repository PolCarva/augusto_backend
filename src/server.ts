import express from 'express'
import payload from 'payload'

require('dotenv').config()
const app = express()


// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  
  const port = parseInt(process.env.PORT || '3000', 10);

  // Listen on `port` and 0.0.0.0
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`)
  });
}

start()
