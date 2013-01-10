 var BaseCharacter = cc.Sprite.extend({
     maxLife: 100,
     life: 100,
     anims: {},

     ctor: function(file){
        this.scheduleUpdate();
        this.initWithFile(file, cc.rect(0,0,38,52));

        //make animations:
        tc = cc.TextureCache.getInstance();
        tex = tc.textureForKey(file);
        if(tex == null){
            tex = tc.addImage(file);
        }
        this.anims.idle = this.createAnimation(tex,{w:38,h:52},10,{x:1,y:0},{x:1,y:0},1);
        animate = cc.Animate.create(this.anims.idle);
        this.runAction( cc.RepeatForever.create(animate));

     },

     update: function(dt){

     },

    //tex: texture from cache, fsize: frame size (w and h)
    //numFramesX: how many frames the sheet has horizontaly
    //first: first frame(x,y). last: last frame(x,y)
    createAnimation: function(tex, fsize, numFramesX, first, last, speed) {
        frames = [];
        for(j=first.y;j<=last.y;j++){
            i = j==first.y ? first.x : 0;
            end = j==last.y ? last.x : numFramesX-1;
            for(i;i<=end;i++){
                f = cc.SpriteFrame.createWithTexture(tex, cc.rect(i*fsize.w, j*fsize.h,fsize.w,fsize.h));
                frames.push(f);
            }
        }
        return cc.Animation.create(frames, speed);
    }


 });
