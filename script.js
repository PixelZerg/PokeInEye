(function () {
    var w_verb = ["bash", "clap", "hit", "jab", "nudge", "pat", "poke", "prick", "prod", "shove", "slap", "stab", "stroke", "tickle", "twist"];
    var w_bodypart = ["face", "eye", "nose", "mouth", "ear", "cheek", "chin", "nostril", "eyebrow", "eyelid", "eyelash", "lips", "arm", "finger", "palm", "wrist", "forearm", "elbow", "shoulder", "thumb", "knuckle", "leg", "foot", "knee", "shin", "ankle", "heel", "toe", "heart", "brain", "throat", "liver", "stomach", "ribs", "hair", "tongue", "teeth", "waist", "bicep", "neck"];
    var w_marine = ["carp", "eel", "catfish", "blobfish", "shark", "cowfish", "stingray", "haddock", "jellyfish", "goldfish", "mackerel", "ray", "mullet", "needlefish", "anchovy", "cod", "piranha", "pufferfish", "herring", "sardine", "trout", "whale", "dolphin", "octopus", "lobster", "pike", "salmon", "shrimp", "seahorse", "penguin", "squid", "turtle", "crab", "seal", "walrus", "otter"];

    var anim_done = true;

    function get_random (list) {
        return list[Math.floor((Math.random()*list.length))];
    }

    function get_sentence(){
        return get_random(w_verb) + " in the " + get_random(w_bodypart) + " with a wet " + get_random(w_marine);
    }

    function title(s) 
    {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    function anim(id, word, on_done=null){
        // init the ul
        var word_ul = $('.word#'+id+' ul');
        word_ul.append("<li><span>"+word+"</span></li>");
        anim_done = false;

        $(word_ul).ready(function(){
            children_spans = word_ul.find('li span');
            w0 = $(children_spans[0]).innerWidth();
            h0 = $(children_spans[0]).innerHeight();

            // set heights
            var norm_style = $('.norm-style');
            norm_style.empty();
            norm_style.append('span{height: '+ h0 +'px}');
        
            word_ul.css("width", w0+"px");
        
            if(children_spans.length > 1){
                w1 = $(children_spans[1]).width();
                $({t: 0}).animate({t: 100}, {
                    duration: 200,
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
                        anim_done = true;

                        if (on_done !== null){
                            on_done();
                        }
                    }
                });
            } else{
                anim_done = true;
            }
        })
    }

    $(document).ready(function() {
        // sentence setup
        var sentence_div = $('.sentence');
        
        sentence_div.append('<span class="word" id="verb"> <ul></ul> </span> <span> in the </span> <span class="word" id="bodypart"> <ul></ul> </span> <span> with a wet </span> <span class="word" id="marine"> <ul></ul> </span>');
        anim('verb', 'Poke');
        anim('bodypart', 'eye');
        anim('marine', 'cod');

        $('.gen').click(function(){
            if(!anim_done) return;
            
            anim('verb', title(get_random(w_verb)), function(){
                anim('bodypart', get_random(w_bodypart), function(){
                    anim('marine', get_random(w_marine));
                });
            });
        })
    });
})();
