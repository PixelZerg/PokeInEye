w_verb = ["bash", "clap", "hit", "jab", "nudge", "pat", "poke", "prick", "prod", "shove", "slap", "stab", "stroke", "tickle", "twist"];
w_bodypart = ["face", "eye", "nose", "mouth", "ear", "cheek", "chin", "nostril", "eyebrow", "eyelid", "eyelash", "lips", "arm", "finger", "palm", "wrist", "forearm", "elbow", "shoulder", "thumb", "knuckle", "leg", "foot", "knee", "shin", "ankle", "heel", "toe", "heart", "brain", "throat", "liver", "stomach", "ribs", "hair", "tongue", "teeth", "waist", "bicep", "neck"];
w_marine = ["carp", "eel", "catfish", "blobfish", "shark", "cowfish", "stingray", "haddock", "jellyfish", "goldfish", "mackerel", "manta", "ray", "mullet", "needlefish", "anchovy", "cod", "piranha", "pufferfish", "herring", "sardine", "trout", "whale", "dolphin", "octopus", "lobster", "pike", "salmon", "shrimp", "seahorse", "penguin", "squid", "turtle", "crab", "seal", "walrus", "otter"];

function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
}

function get_sentence(){
    return get_random(w_verb) + " in the " + get_random(w_bodypart) + " with a wet " + get_random(w_marine);
}

// // $({perc: 0}).animate({perc: 50}, {
// //     duration: 300,
// //     easing: "swing",
// //     step: function(now) {
// //       $('.word ul').css({
// //         transform: 'translateY(-' + now + '%)'
// //       });
// //     }
// //   });

// function anim(id, before, after){
//     // init the ul
//     word_span = $('.word#'+id);
//     word_span.empty();
//     word_span.append("<ul> <li>"+before+"</li><li>"+after+"</li></ul>");

//     w0 = $(word_span.find('li')[0]).width();
//     w1 = $(word_span.find('li')[1]).width();

//     $({t: 0}).animate({t: 100}, {
//         duration: 300,
//         easing: "swing",
//         step: function(t) {
//             word_span.find('ul').css({
//                 transform: 'translateY(-' + t/2 + '%)',
//                 width: t + 'px'
//             });
//         },
//         complete: function(){
//             word_span.empty();
//             word_span.append(after);
//         }
//     });
// }

function init(id, word){
    // init the ul
    word_span = $('.word#'+id);
    word_span.empty();
    word_span.append("<ul> <li><span>"+word+"</span></li></ul>");
    w0 = $(word_span.find('li span')[0]).width();

    word_span.find('ul').css("width", w0+"px");
}

function anim(id, word){
    // init the ul
    word_ul = $('.word#'+id+' ul');
    word_ul.append("<li><span>"+word+"</span></li>");
    anim_done = false;

    $(word_ul).ready(function(){
        children_spans = word_ul.find('li span');
        w0 = $(children_spans[0]).innerWidth();
    
        word_ul.css("width", w0+"px");
    
        if(children_spans.length > 1){
            w1 = $(children_spans[1]).width();
            $({t: 0}).animate({t: 100}, {
                duration: 300,
                easing: "swing",
                step: function(t) {
                    if(anim_done) return;
                    
                    word_ul.css({
                        transform: 'translateY(-' + t/2 + '%)',
                        width: w0 + (w1-w0)*(t/100) + 'px'
                    });
                },
                complete: function(){
                    if(anim_done) return;
                    
                    $(word_ul.find('li')[0]).remove();
                    word_ul.css({transform: 'translateY(0%)'});
                    console.log("wow");
                    anim_done = true;
                }
            });
        }
    })
}

$(document).ready(function() {
    // set heights
    var loading = $('.loading');
    var h = loading.height();

    var sentence_div = $('.sentence');
    $('head').append('<style>span{height: '+ h +'px}</style>');
    loading.remove();

    sentence_div.append('<span class="word" id="verb"> <ul></ul> </span> <span> in the </span> <span class="word" id="bodypart"> <ul></ul> </span> <span> with a wet </span> <span class="word" id="marine"> <ul></ul> </span>');
    // anim('verb', "before", "after");
    anim('verb', 'Poke');
    anim('bodypart', 'eye');
    anim('marine', 'cod');

    anim('verb', 'Eat');



});


// (function () {
// })();
