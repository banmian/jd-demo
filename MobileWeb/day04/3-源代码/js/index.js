/*
 * @Author: zhengwei
 * @Date:   2017-12-20 17:08:41
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2017-12-22 09:34:49
 */

// 移动端推荐使用addEventListener 添加事件
/*这种事件可以添加多个
能够添加一些移动端新增的事件 滑动事件 过渡完成事件 动画完成事件*/
// 这种方式也比较符合框架里面添加事件的方式
window.addEventListener('load', function() {
    searchFade();
    countDown();
    slide();
});
/*搜索框渐变的特效*/
function searchFade() {
    //搜索框渐变的JS代码放到这个函数里面写
    // 1. 添加一个滚动条滚动的事件
    window.addEventListener('scroll', searchOpacity);
    searchOpacity();

    function searchOpacity() {
        // 2. 获取滚动条滚动的距离
        var scrollTop = getScrollTop();
        var slideHeight = document.querySelector('#slide').offsetHeight;
        if (scrollTop < slideHeight) {
            var opacity = (scrollTop / slideHeight) * 0.8;
            document.querySelector('#topbar').style.backgroundColor = 'rgba(255,0,0,' + opacity + ')';
        } else {
            document.querySelector('#topbar').style.backgroundColor = 'rgba(255,0,0,0.8)';
        }
    }
}

function getScrollTop() {
    var scrollPos;
    if (window.pageYOffset) {
        scrollPos = window.pageYOffset;
    } else if (document.compatMode && document.compatMode != 'BackCompat') {
        scrollPos = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollPos = document.body.scrollTop;
    }
    return scrollPos;
}
// 倒计时JS函数
function countDown() {
    // 1.   2017年12.22 10:00:00   - 2017.12.22 8:00:00 (是会变化的是当前的时间)

    var nowDate = new Date();
    console.log(nowDate);
}
// 轮播图JS函数
function slide() {

}
