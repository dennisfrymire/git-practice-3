//dependencies
const express = require('express');


//environmental variables
const app = express();
const PORT = process.env.PORT || 3000 //set either to port that heroku wants to set it on or to 3000, which is local, which heroku cannot access

app.get('/', (req, res)=>{
    res.send("potato")
})

//listening on port
app.listen(PORT, ()=>(console.log('listening on port: ', PORT)));
