const express = require('express')
const { WebhookClient } = require('dialogflow-fulfillment')
const app = express()

app.get('/', (req, res) => res.send('online'))
app.post('/dialogflow', express.json(), (req, res) => {
  const agent = new WebhookClient({ request: req, response: res })

  function welcome () {
    agent.add('Welcome to my agent!')
  }

  let intentMap = new Map()
  intentMap.set('Default Welcome Intent', welcome)
  agent.handleRequest(intentMap)
})

var server = app.listen(process.env.PORT || 8080, "localhost" , function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("app listening at http://%s:%s", host, port)
   
})
