/**
 * Created by JYee on 2016/10/31.
 */
var Bird = function (img, x, y, speed, a, ctx) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.a = a;
    this.ctx = ctx;
    this.index = 0;
}

Bird.prototype.draw = function () {
    //图片，原图的裁切起点，原图的宽高，贴到画布上的位置，贴到画布上的宽高
    this.ctx.drawImage(
        this.img, 52 * this.index, 0, 52, 45, this.x, this.y, 52, 45
    )
}
var Bird = function (img, x, y, speed, a, ctx) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.a = a;
    this.ctx = ctx;
    this.index = 0;
}



Bird.prototype.draw = function () {
    this.ctx.save();
    this.ctx.translate(this.x, this.y);//移动坐标中心
    this.ctx.rotate((Math.PI/6) * this.speed /0.3);
    //图片，原图的裁切起点，原图的宽高，贴到画布上的位置，贴到画布上的宽高
    this.ctx.drawImage(
        //this.img, 52 * this.index, 0, 52, 45, this.x, this.y, 52, 45
        this.img, 52 * this.index, 0, 52, 45, -52/2, -45/2, 52, 45
        //更改贴图位置  使整个新坐标系移动
        //此处存疑
    )
    this.ctx.restore();
}

var durgather = 0;
Bird.prototype.update = function (dur) {
    durgather += dur;
    if (durgather > 100) {
        this.index++;
        if (this.index === 2) {
            this.index = 0;
        }
        durgather -= 100;
    }
    this.speed = this.speed + this.a * dur;
    this.y = this.y + this.speed * dur;
}

