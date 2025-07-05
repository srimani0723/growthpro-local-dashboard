// using the templates for specific kind of businesses in the form of a object
const headlineTemplates = {
    default: [
        "Why {name} Is {location}'s Must-Visit Destination in {year}",
        "Discover What Makes {name} a Local Favorite in {location}",
        "Inside {name}: {location}'s Hidden Gem Everyone Is Talking About",
        "{name} Is Changing the Game in {location} — Here's How",
        "Locals Can’t Stop Raving About {name} in {location}",
        "{location} Loves {name} for a Reason — Find Out Why"
    ],
    bakery: [
        "Taste the Buzz: Why {name} Is the Sweetest Spot in {location}",
        "Sipping Success: {name}'s Rise in {location}'s Café Culture",
        "{name} Serves Up Flavor and Fame in {location}",
        "From Bean to Buzz: How {name} Energizes {location}",
        "Why Dessert Fans Are Flocking to {name} in {location}"
    ],
    salon: [
        "The Style Secret Behind {name}'s Glow-Up in {location}",
        "{name}: {location}'s Go-To Destination for Hair & Glam",
        "Transform Your Look at {name} — Trending in {location}",
        "The Fashion Pulse of {location} Starts at {name}",
        "{name} Is Redefining Beauty Standards in {location}"
    ],
    gym: [
        "Level Up: How {name} Fuels Fitness Goals in {location}",
        "{name} Is Powering a Health Revolution in {location}",
        "Train Like a Pro: {name} Is the Spot for Peak Performance",
        "Strength Meets Style at {name}, {location}'s Favorite Gym",
        "{location} Locals Are Crushed on {name} — Literally"
    ],
    spa: [
        "Relax, Recharge, Repeat: Why {name} Is {location}'s Wellness Oasis",
        "The Self-Care Revolution Begins at {name} in {location}",
        "{name} Delivers Zen-Level Vibes to {location}",
        "Locals Love the Serenity of {name} in {location}",
        "{location} Feels Better Thanks to {name}"
    ],
    trendy: [
        "{name} Is Trending in {location} — Here's Why Everyone’s Obsessed",
        "Can {name} Really Be {location}'s Best Kept Secret? We Investigate",
        "{location}'s Most Talked-About Business: {name}",
        "{name} Is More Than a Name — It’s a Movement in {location}",
        "Why {name} Is the Next Big Thing in {location}"
    ]
};
    
const headlineGenerator = (name, location, type="default") => {
    const year = new Date().getFullYear()
    // combines the type specific business and default
    const templates = [...(headlineTemplates[type] || []), ...headlineTemplates["default"]]
    // gives the random headline template from templates
    const template = templates[Math.floor(Math.random() * templates.length)]
    // replacing the values to get the original headline and return it
    return template.replace("{name}", name).replace("{location}", location).replace("{year}", year)
}

module.exports = headlineGenerator