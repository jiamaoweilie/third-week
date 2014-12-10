// TweenMax.staggerTo(".poetry-familiar li", 1, {rotation:360},0.5);
var tl = new TimelineLite();
tl.staggerFrom(".poetry-familiar li img", 4, {opacity:0, scale:0, y:80, rotationX:180,ease:Back.easeOut},0.5);
TweenMax.to(".account img",1, {rotation:-45,repeat:-1,yoyo:true});