const cors = require("cors")

const corsOptions = {
    origin: "*", // "*" accepts all the requests from anywhere
    methods:["GET","POST"] // here I have taken only two methods so I gave them to accept only those methods
}

module.exports = cors(corsOptions)