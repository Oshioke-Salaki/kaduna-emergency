require('dotenv').config()
const Africastalking = require('africastalking'),
    axios = require('axios')

const africastalking = Africastalking({
    apiKey: process.env.API_KEY,
    username: 'sandbox',
})

//   send sms using africastalking
const sendSms = async (phone, content) => {

    try {
        const result = await africastalking.SMS.send({
            to: [phone],
            message: content,
            from: `9751`
        })

        if(result){
            console.log(result)
        }
    } catch (error) {
        console.log(error)
    }
}

// ussd
exports.accessUssd = async (req, res) => {
    const {sesionId, serviceCode, phoneNumber, text} = req.body

    const respons = await axios.get(`https://api.thingspeak.com/channels/2313632/feeds.json?api_key=0PMLQ7B0B9BOGV52`);

    let response;

    if(text == ''){
        response = 'The Air quality in kaduna today is 12.3'
    }

    if(text !== ''){
        let array = text.split('*')

        // if
        if(array.length === 1){

            // create user account
            if(parseInt(array[0]) == 1){
                response = `CON Enter your full name`
            }

            // login user if already registered
            if(parseInt(array[0]) == 2){
                response = `CON Enter your passcode to continue`
            }

        }
    }

    setTimeout(()=>{
        res.send(response)
        res.end()
    }, 2000)
}


module.exports = exports