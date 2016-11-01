/**
 * Created by JYee on 2016/11/1.
 */
var Pipe = function (upImg, downImg, x, speed, ctx) {
    this.upImg = upImg;
    this.downImg = downImg;
    this.x = x;
    this.speed = speed;
    this.ctx = ctx;
    this.randomH = Math.random() * 200 + 100;//固定100基础上添加随机高度
}

Pipe.prototype.draw = function () {
    this.ctx.drawImage(
        this.upImg, this.x, this.randomH - 420
    );
    this.ctx.drawImage(
        this.downImg, this.x, this.randomH + 150
    );
}

Pipe.prototype.setCount = function (count, gap) {
    Pipe.count = count;
    Pipe.gap = gap;
}

Pipe.prototype.hitPipe = function (bird_x, bird_y) {
    return (bird_x > this.x && bird_x < this.x + 52) && (!(bird_y > this.randomH && bird_y < this.randomH + 150));
}

Pipe.prototype.update = function (dur) {
    this.x = this.x + this.speed * dur;
    if (this.x < -52) {
        this.x = this.x + Pipe.count * Pipe.gap;
        this.randomH = Math.random() * 200 + 150;//切换新高度
    }
}

