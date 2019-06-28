w_verb = ["bash", "clap", "hit", "jab", "nudge", "pat", "poke", "prick", "prod", "shove", "slap", "stab", "stroke", "tickle", "twist"];
w_bodypart = ["face", "eye", "nose", "mouth", "ear", "cheek", "chin", "nostril", "eyebrow", "eyelid", "eyelash", "lips", "arm", "finger", "palm", "wrist", "forearm", "elbow", "shoulder", "thumb", "knuckle", "leg", "foot", "knee", "shin", "ankle", "heel", "toe", "heart", "brain", "throat", "liver", "stomach", "ribs", "hair", "tongue", "teeth", "waist", "bicep", "neck"];
w_marine = ["carp", "eel", "catfish", "blobfish", "shark", "cowfish", "stingray", "haddock", "jellyfish", "goldfish", "mackerel", "manta", "ray", "mullet", "needlefish", "anchovy", "cod", "piranha", "pufferfish", "herring", "sardine", "trout", "whale", "dolphin", "octopus", "lobster", "pike", "salmon", "shrimp", "seahorse", "penguin", "squid", "turtle", "crab", "seal", "walrus", "otter"];

function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
}

function get_sentence(){
    return get_random(w_verb) + " in the " + get_random(w_bodypart) + " with a wet " + get_random(w_marine);
}

function anim(id, before, after){
    // init the ul
    word_span = $('.word#'+id);
    word_span.empty();
    word_span.append("<ul> <li>"+before+"</li><li>"+after+"</li></ul>");
}

$(document).ready(function() {
    // set heights
    var loading = $('.loading');
    var h = loading.height();

    var sentence_div = $('.sentence');
    $('head').append('<style>span{height: '+ h +'px}</style>');
    loading.remove();

    sentence_div.append('<span class="word" id="verb"> <ul> <li>Poke</li><li>Tickle</li></ul> </span> <span> in the </span> <span class="word" id="bodypart"> <ul> <li>eye</li><li>nose</li></ul> </span> <span> with a wet </span> <span class="word" id="marine"> <ul> <li>cod</li><li>starfish</li></ul> </span>');
    anim('verb', "before", "after");
});


// (function () {
// })();
