/**
 * Created by JYee on 2016/10/31.
 */
function load(source, callback) {
    var imgEls = {};
    var imgCount = source.length;

    for (var i = 0; i < imgCount; i++) {
        var name = source[i].name;
        var newImg = new Image();
        newImg.src = source[i].src;
        imgEls[name] = newImg;
        imgEls[name].addEventListener('load', function () {
            imgCount--;
            if (imgCount == 0) {
                callback(imgEls);
            }
        });
    }
}