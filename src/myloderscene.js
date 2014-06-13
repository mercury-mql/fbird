/**
 * Created by hlh on 14-6-13.
 */
var logoData = "data:image/png;base64,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";
var MyLoaderScene = cc.Scene.extend({
    _interval : null,
    _length : 0,
    _count : 0,
    _label : null,
    _processLayer : null,
    _processLayerLength: null,
    init : function(){
        var self = this;
        var winSize = cc.director.getWinSize();


        //logo
        var logoWidth = 178;
        var logoHeight = 48;
        var centerPos = cc.p(winSize.width / 2, winSize.height / 2);

        // bg
        var bgLayer = self._bgLayer = cc.LayerColor.create(cc.color(32, 32, 32, 255));
        bgLayer.setPosition(0, 0);
        self.addChild(bgLayer, 0);

        this._processLayerLength = winSize.width - 50;
        this._processLayer = cc.LayerColor.create(cc.color(0, 135, 147, 255), 1, 50);
        this._processLayer.setPosition(cc.pAdd(centerPos, cc.p(-this._processLayerLength/2, -winSize.height/4)));
        this.addChild(this._processLayer);

        //image move to CCSceneFile.js
        var fontSize = 24, lblHeight =  -logoHeight / 2 + 100;

        //loading logo
        cc.loader.loadImg(logoData, {isCrossOrigin : false }, function(err, img){
                logoWidth = img.width;
                logoHeight = img.height;
                self._initStage(img, centerPos);
        });
        fontSize = 14;
        lblHeight = -logoHeight / 2 - 10;

        //loading percent
        var label = self._label = cc.LabelTTF.create("Loading... 0%", "Arial", fontSize);
        label.setPosition(cc.pAdd(centerPos, cc.p(0, lblHeight)));
        label.setColor(cc.color(180, 180, 180));
        bgLayer.addChild(this._label, 10);
        return true;
    },

    _initStage: function (img, centerPos) {
        var self = this;
        var texture2d = self._texture2d = new cc.Texture2D();
        texture2d.initWithElement(img);
        texture2d.handleLoadedTexture();
        var logo = self._logo = cc.Sprite.create(texture2d);
        logo.setScale(cc.contentScaleFactor());
        logo.x = centerPos.x;
        logo.y = centerPos.y;
        self._bgLayer.addChild(logo, 10);
    },

    onEnter: function () {
        var self = this;
        cc.Node.prototype.onEnter.call(self);
        self.schedule(self._startLoading, 0.3);
    },

    onExit: function () {
        cc.Node.prototype.onExit.call(this);
        var tmpStr = "Loading... 0%";
        this._label.setString(tmpStr);
    },

    /**
     * init with resources
     * @param {Array} resources
     * @param {Function|String} cb
     */
    initWithResources: function (resources, cb) {
        if(typeof resources == "string") resources = [resources];
        this.resources = resources || [];
        this.cb = cb;
    },

    _startLoading: function () {
        var self = this;
        self.unschedule(self._startLoading);
        var res = self.resources;
        self._length = res.length;
        cc.loader.load(res, function(result, count){ self._count = count; }, function(){
            self.cb();
        });
        self.schedule(self._updatePercent);
    },

    _updatePercent: function () {
        var self = this;
        var count = self._count;
        var length = self._length;
        var percent = (count / length * 100) | 0;
        percent = Math.min(percent, 100);
        self._label.setString("Loading... " + percent + "%");

        this._processLayer.changeWidth(percent * this._processLayerLength);

        if(count >= length) {
            self.unschedule(self._updatePercent);
        }

    }
});

MyLoaderScene.preload = function(resources, cb){
    var loaderScene = new MyLoaderScene();
    loaderScene.init();
    loaderScene.initWithResources(resources, cb);

    cc.director.runScene(loaderScene);
    return loaderScene;
};
