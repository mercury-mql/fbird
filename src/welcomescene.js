/**
 * Created by hlh on 14-6-13.
 */

var WelcomeLayer = cc.Layer.extend({
    _groundWidth: null,
    _groundSprite1: null,
    _groundSprite2: null,
    _bird: null,

    ctor: function(){
        this._super();
        var winsize = cc.director.getWinSize();
        var centerPos = cc.p(winsize.width/2, winsize.height/2);

        var bgName = Math.random() > 0.5 ? "#bg_day.png" : "#bg_night.png";
        var bg = cc.Sprite.create(bgName);
        bg.setPosition(centerPos);
        this.addChild(bg);

        this._groundSprite1 = cc.Sprite.create("#land.png");
        this._groundSprite2 = cc.Sprite.create("#land.png");

        this._groundWidth = this._groundSprite1.getContentSize().width;

        this._groundSprite1.attr({
            anchorX: 0,
            anchorY: 0
        });
        this._groundSprite2.attr({
            anchorX: 0,
            anchorY: 0
        });

        this._groundSprite1.setPosition(cc.p(0,0));
        this._groundSprite2.setPosition(cc.p(this._groundWidth-20, 0));

        this.addChild(this._groundSprite1);
        this.addChild(this._groundSprite2);

        this._bird = cc.Sprite.create("#bird2_0.png");
        var action = GetActionForever("bird2");
        this._bird.runAction(action);
        this._bird.setPosition(cc.p(winsize.width/2, winsize.height*4/7));
        this.addChild(this._bird);

        var title = cc.Sprite.create("#title.png");
        title.setPosition(cc.p(winsize.width/2, winsize.height*5/7));
        this.addChild(title);

        var copyright = cc.Sprite.create("#brand_copyright.png");
        copyright.setPosition(cc.p(winsize.width/2, winsize.height/6));
        this.addChild(copyright);

        var startPlay = cc.MenuItemImage.create("#button_play.png", "#button_play.png", "#button_play.png", this.play, this);
        startPlay.setPosition(cc.p(winsize.width/2, winsize.height*3/7));
        var menu = cc.Menu.create(startPlay);
        menu.setPosition(cc.p(0,0));
        this.addChild(menu);

        this.schedule(this.scrollGround, 0.01)
    },

    scrollGround: function(){
        var orgX1 = this._groundSprite1.x;
        var orgX2 = this._groundSprite2.x;

        orgX1 -= 1;
        orgX2 -= 1;

        if( orgX1 + this._groundWidth -20 <= 0){
            orgX1 = this._groundWidth - 20;
            orgX2 = 0;
        }

        if( orgX2 + this._groundWidth - 20 <= 0){
            orgX1 = 0;
            orgX2 = this._groundWidth - 20;
        }

        this._groundSprite1.setPositionX(orgX1);
        this._groundSprite2.setPositionX(orgX2);

    },
    play: function(){
        cc.log("play");
    }
});

var WelcomeScene = cc.Scene.extend({
    onEnter: function(){
        this._super();
        var layer = new WelcomeLayer();
        this.addChild(layer);
    }
});
