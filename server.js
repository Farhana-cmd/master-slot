 require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const portfolioRouter = require("./routers/portfolio router")
const env = process.env;
const app = express();
app.use(express.json());
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
});
app.get('/',(req,res) => {
    res.send("good morning")
})

app.use('/api',portfolioRouter)
mongoose.connect(env.MONG_URL)
.then(() => {
    console.log('connected to MongoDB')
})
.catch((err) => console.log(err));

app.listen(env.PORT,() =>{console.log(`listening on port 3000`)})

