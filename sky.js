/**
 * Created by JYee on 2016/10/31.
 */
var Sky = function (img, x, speed, ctx) {
    this.img = img;
    this.x = x;
    this.speed = speed;
    this.ctx = ctx;
}

Sky.prototype.draw = function () {
    //图源,x,y
    this.ctx.drawImage(this.img, this.x, 0)
}

Sky.prototype.setCount = function (count) {
    Sky.count = count;
}

Sky.prototype.update = function (dur) {
    this.x = this.x + this.speed * dur;
    //img.width = 800
    if (this.x < -800) {
        this.x = Sky.count * 800 + this.x;
    }
}