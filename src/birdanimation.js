/**
 * Created by hlh on 14-6-13.
 */

var CreateAnimation = function(prefix) {
    var spriteFrames = [];
    for(var i=0; i<3; i++){
        var frameName = prefix + "_" + i.toString() + ".png";
        var spriteFrame = cc.spriteFrameCache.getSpriteFrame(frameName);
        spriteFrames.push(spriteFrame);
    }
    var animation = cc.Animation.create(spriteFrames, 0.2, 1);
    cc.animationCache.addAnimation(animation, prefix);
}

var InitBirdAnimation = function(){
    CreateAnimation("bird0");
    CreateAnimation("bird1");
    CreateAnimation("bird2");
}

var GetAnimate = function(name){
    var animation = cc.animationCache.getAnimation(name);
    var animate = cc.Animate.create(animation);
    return animate;
}

var GetActionForever = function(name){
    var animate = GetAnimate(name);
    var foreverAnimate = cc.RepeatForever.create(animate);
    return foreverAnimate;
}
