cc.game.onStart = function(){
    cc.view.setDesignResolutionSize(288, 512, cc.ResolutionPolicy.SHOW_ALL);
	cc.view.resizeWithBrowserSize(true);
    //load resources
    MyLoaderScene.preload(g_resources, function () {
        cc.spriteFrameCache.addSpriteFrames(res.atlas_plist);
        InitBirdAnimation();
        cc.director.runScene(new WelcomeScene());
    }, this);
};
cc.game.run();