/**
 * Created by JYee on 2016/10/31.
 */
var cvs = document.getElementById('cvs');
var ctx = cvs.getContext('2d');

var dataInt = {
    'imgList': [
        {'name': 'birds', 'src': 'img/bird.png'},
        {'name': 'land', 'src': 'img/land.png'},
        {'name': 'pipe_up', 'src': 'img/pipe_up.png'},
        {'name': 'pipe_down', 'src': 'img/pipe_down.png'},
    ]
};



load(dataInt.imgList, function (imgEls) {
    var bird = new Bird(imgEls["birds"], 150, 100, 0.0003, 0.0006, ctx);
    var preTime = Date.now();

    function run() {
        var now = Date.now();
        dt = now - preTime;
        preTime = now;
        ctx.clearRect(0, 0, 800, 600);
        //
        bird.update(dt);
        bird.draw();
        //
        requestAnimationFrame(run);
    }

    requestAnimationFrame(run);

})


