require('dotenv').config()
const express = require('express'),
    cors = require('cors'),
    ATServices = require('./services/africasTalking'),
    RadysisServices = require('./services/radysis'),
    axios = require('axios')

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

async function fetchData() {
    try {
      const response = await axios.get(`https://api.thingspeak.com/channels/2313632/feeds.json?api_key=0PMLQ7B0B9BOGV52`);
      console.log(response.data.feeds[response.data.feeds.length -1]);
      if(response.data.feeds[response.data.feeds.length -1].field1 > 1069){
        // Making a call alert with radysis
        RadysisServices.makeCall("+2347015232315")
      }

    } catch (error) {
      console.error(error);
    }
  }

// setInterval(()=>{
//     fetchData()
// }, 10000)


// listening on port
app.listen(process.env.PORT, () => {
    console.log('Backend server is hosted on: Port ' + process.env.PORT)
})

