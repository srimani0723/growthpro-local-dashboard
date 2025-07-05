const headlineGenerator = require("../utils/headlineGenerator")

// this catch responce for reuse
const ErrObj = (error) => {
    return {
        error: "Something Went Wrong",
        extraInfo: error,
    }
}

// this returns the type of the business or category of the business
const GetTypeFromName = (name) => {
    const m = name.toLowerCase();

    // identifies by searching the keyword in the strings of their type, just tried for some businesses only
    if ("cake bake bread pastry cookie".includes(m)) return "bakery";
    if ("salon hair beauty style makeover".includes(m)) return "salon";
    if ("gym fitness workout training muscle".includes(m)) return "gym";
    if ("spa relax rejuvenate wellness massage".includes(m)) return "spa";
    if ("hub spot buzz trendy vibes".includes(m)) return "trendy";

    return "default"
}

// this function returns or generates the rating, reviews and suggested headline for the business
const businessData = (req, res) => {
    try {
        const { name, location } = req.body
        if (!name && !location) {
            res.json({
                error:"*Details Required"
            })
        }

        const randomRating = Math.round((Math.random() * (5.0-3.4)+3.4) * 10) / 10
        const randomReviews = Math.round(Math.random() * (200-100)+100) + 10

        const type = GetTypeFromName(name)
        // getting the random headline from the small logic
        const randomHeadline =  headlineGenerator(name,location,type) 

        const response = {
            rating: randomRating,
            reviews: randomReviews,
            headline: randomHeadline,
        }

        res.json(response)
    } catch (error) {
        res.status(500).json(ErrObj(error))
    }
}

// this function generates random headline from the logic when ever it calls
const generateHeadline = (req, res) => {
    try {
        const { name, location } = req.query
        const type = GetTypeFromName(name)
        const headline =  headlineGenerator(name,location,type)
        res.json({
            headline
        })
    } catch (error) {
        res.status(500).res(ErrObj(error))
    }
}

module.exports = {businessData,generateHeadline}