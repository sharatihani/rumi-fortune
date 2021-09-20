var rumiButton = document.getElementById('rumi-button');
var sign;
var horoscopeChoice;
var textColor;
var rumiStyle = document.getElementById('rumi');

var colors = ["#ff0000", "#0089FF", "#EBEB00", "#00000", "#FFAB00"];

// quotes from https://www.goalcast.com/rumi-quotes/

var happy = ["Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
"Stop acting so small. You are the universe in ecstatic motion."];

var amazing = ["What you seek is seeking you.",
"Don’t grieve. Anything you lose comes round in another form."];

var excited = ["Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
"You were born with wings, why prefer to crawl through life?"];

var unhappy = ["Don’t be satisfied with stories, how things have gone with others. Unfold your own myth.", "Everything that is made beautiful and fair and lovely is made for the eye of one who sees."];

var sad = ["Why should I be unhappy? Every parcel of my being is in full bloom.",
"Raise your words, not voice. It is rain that grows flowers, not thunder."];

var anxious = ["Ignore those that make you fearful and sad, that degrade you back towards disease and death.",
"There is a candle in your heart, ready to be kindled. There is a void in your soul, ready to be filled. You feel it, don’t you?"];

var afraid = ["Words are a pretext. It is the inner bond that draws one person to another, not words.","Goodbyes are only for those who love with their eyes. Because for those who love with heart and soul there is no such thing as separation."];

var tired = ["Set your life on fire. Seek those who fan your flames.", "I know you’re tired but come, this is the way."];

var awake = ["This is love: to fly toward a secret sky, to cause a hundred veils to fall each moment. First to let go of life. Finally, to take a step without feet.",
"The wound is the place where the light enters you."];

var other = ["And so it is, that both the devil and the angelic spirits present us with objects of desire to awaken our power of choice.",
"Wherever you are, and whatever you do, be in love.","These pains you feel are messengers. Listen to them.",
"Your heart is the size of an ocean. Go find yourself in its hidden depths."];

// var aquarius = ["These pains you feel are messengers. Listen to them.",
// "Your heart is the size of an ocean. Go find yourself in its hidden depths."];
//
// var pisces = ["Live life as if everything is rigged in your favor.",
// "I am not this hair, I am not this skin, I am the soul that lives within."];

rumiButton.addEventListener("click", rumi);

function rumi(){

var randomRumi = Math.floor(Math.random() * rumi.length);

sign = document.getElementById('rumi-input').value;
if (sign == "happy"){
horoscopeChoice = happy[randomRumi];
}
else if (sign == "amazing"){
horoscopeChoice = amazing[randomRumi];
}
else if (sign == "excited"){
horoscopeChoice = excited[randomRumi];
}
else if (sign == "unhappy"){
horoscopeChoice = unhappy[randomRumi];
}
else if (sign == "sad"){
horoscopeChoice = sad[randomRumi];
}
else if (sign == "anxious"){
horoscopeChoice = anxious[randomRumi];
}
else if (sign == "afraid"){
horoscopeChoice = afraid[randomRumi];
}
else if (sign == "tired"){
horoscopeChoice = tired[randomRumi];
}
else if (sign == "awake"){
horoscopeChoice = awake[randomRumi];
}
else{
horoscopeChoice= other[randomRumi];
}

// restyles the output color

// function restyle(){
// var randomColor = Math.floor(Math.random() * colors.length);
// textColor = colors[randomColor];
// rumiStyle.style.color = textColor;
// }

document.getElementById("rumi").innerHTML = horoscopeChoice;
restyle();
}
