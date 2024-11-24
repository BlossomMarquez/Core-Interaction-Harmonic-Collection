console.log("string generator loaded correctly");

document.getElementById("string-one").textContent = generateStringOne();

setInterval(function() {
document.getElementById("string-one").textContent = generateStringOne();
}, 5000);

function generateStringOne() {
    var action_states = [
        "I was",
        "I am",
        "I wasn't",
        "I'm not",
        "We are",
        "We aren't",
        "There is",
        "There was",
        "There isn't",
        "There wasn't",
        "Who is",
        "Who was",
        "Who isn't",
        "Who wasn't",
    ]
    var natural_disasters = [
        "hurricane",
        "whirlpool",
        "tornado",
        "tsunami",
        "tidal wave",
        "lightning strike",
        "forest fire",
        "typhoon",
        "earthquake",
        "avalanch",
        "drought",
        "plague",
        "heat wave",
        "landslide",
        "flood",
        "volcanic eruption",
    ]
    var adjectives = [
        "overflowing",
        "teeming",
        "swarming",
        "brimming",
        "filled",
        "packed",
        "bristling",
        "bursting",
        "replete",
        "thronged",
    ]
    var nouns = [
        "sincerity",
        "honesty",
        "integrity",
        "artlessness",
        "truthfulness",
        "veracity",
        "good faith",
        "plainness",
        "reception",
        "insincerity",
        "hypocrisy",
        "deception",
        "duplicity",
        "falsity",
        "dissimulation",
        "fakery",
        "artifice",
        "cunning",
        "perfidy",
        "slyness",
    ]

    var action_state = sample(action_states);
    var natural_disaster = sample(natural_disasters);
    var adjective = sample(adjectives);
    var noun = sample(nouns);

    var stringOne = "";
    if (Math.random() < 0.5) {
        stringOne = `${action_state} a ${natural_disaster} ${adjective} with ${noun}.`
    } else {
        stringOne = `${action_state} ${adjective} with ${noun} in the ${natural_disaster}.`
    }

    return stringOne;
}

function sample(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}