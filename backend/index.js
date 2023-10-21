require('dotenv').config()
const express = require('express'),
    cors = require('cors'),
    ATServices = require('./services/africasTalking')
    RadysisServices = require('./services/radysis')

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Index Route
app.get('/', (req, res) => {
    res.send('Welcome to kad emergency api')
})

// sending sms
// ATServices.sendSms("+2349079390551", "Alert Alert Alert There is high volume of water within your residence we advice you stay 5km away")


// make a ussd call
// post request
app.post('/', ATServices.accessUssd)


// Making a call alert with radysis
// RadysisServices.makeCall("+2349167338474")



// listening on port
app.listen(process.env.PORT, () => {
    console.log('Backend server is hosted on: Port ' + process.env.PORT)
})

