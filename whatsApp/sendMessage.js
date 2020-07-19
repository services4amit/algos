

var accountSid = 'AC0485d0540b78d3a1721e1f623fa873b2'; 
var authToken = 'b6ba40e05fee72683d0c1e58b113b059';

const client=require('twilio')(accountSid, authToken);


let number='8019011067';
let sendText='hfhf.glihi';
client.messages.create({
    from:'whatsapp:+14155238886',
    to:'whatsapp:+91'+number,
    body:sendText
}).then(msg=>console.log("Response ",msg))