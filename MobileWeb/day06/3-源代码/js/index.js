/*
 * @Author: zhengwei
 * @Date:   2017-12-20 17:08:41
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2017-12-23 09:23:08
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
    // 1. 求到10点钟的未来时间
    var futureTime = new Date('2017-12-22 10:00:00').getTime() / 1000;
    // var futureTime = new Date(2017,11,22,15,00,00).getTime() / 1000;
    // 2. 获取当前的时间
    var nowTime = new Date().getTime() / 1000;
    /*3. 求到当前需要倒计时的秒杀 = 未来时间的秒杀 - 当前时间的秒杀*/
    var time = Math.floor(futureTime - nowTime);
    /*每隔一秒获取一次当前时间 或者 每隔1秒总时间--*/
    // 5. 获取倒计时的span
    var spans = document.querySelectorAll('.seckill-count-down span');
    // 4. 设置一个定时器 （1000毫秒执行一次）
    var timeId = setInterval(function() {
        time--;
        if (time <= 0) {
            time = 0;
            // 清除定时器
            clearInterval(timeId);
        }
        // 5. 求当前时间的对应的时分秒  时 = 总秒数 / 60 / 60     = 总时间 / 3600
        var hour = Math.floor(time / 3600);
        /*比如7300秒 先去掉小时的部分   7300 % 3600 == 100 / 60 == 1
        3800 * 3600 == 200 / 60  = 3  分  = 总秒数 % 3600 / 60*/
        var min = Math.floor(time % 3600 / 60);
        /*10 % 60  = 10
        100 % 60  = 40
        3700 % 60 == 40
        time % 60  秒 = 总秒数 % 60*/
        var second = Math.floor(time % 60);
        /*6. 分别把时分秒的十位和个位放到对应的span里面*/
        spans[0].innerHTML = Math.floor(hour / 10);
        spans[1].innerHTML = Math.floor(hour % 10);
        spans[3].innerHTML = Math.floor(min / 10);
        spans[4].innerHTML = Math.floor(min % 10);
        spans[6].innerHTML = Math.floor(second / 10);
        spans[7].innerHTML = Math.floor(second % 10);
    }, 1000);
}
// 轮播图JS函数
function slide() {
    /*1. 实现轮播图的自动无缝轮播*/
    // 2. 定义一个当前显示的轮播图的索引 轮播图默认显示是第一张(第二个li 索引是1)
    var index = 1;
    // 5. 获取当前要位移的容器 轮播图的容器ul
    var slideUl = document.querySelector('#slide ul');
    // 6. 获取一张轮播图的宽度
    var slideWidth = document.querySelector('#slide').offsetWidth;
    var timeId = null;
    startTime();
    // 4.13 封装一个开始定时器的函数
    function startTime() {
        // 1. 设置一个定时器 每2秒执行一次
        timeId = setInterval(function() {
            // 3. 索引在时钟里面++
            index++;
            // 4. 计算当前轮播图索引需要设置的位移 给容器设置位移
            slideUl.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
            // 7. 添加一个过渡效果 让轮播图切换慢慢过去
            slideUl.style.transition = 'all 200ms ease';
            // 这个if判断要等过渡完成了之后才能回去 让if判断延迟300ms执行（等过渡执行完）
            // if (index >= 9) {
            //     setTimeout(function() {
            //         //回到真实的1的位置
            //         index = 1;
            //         //清除过渡
            //         slideUl.style.transition = 'none';
            //         // 设置位移
            //         slideUl.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
            //     }, 200)
            // }
        }, 1000);
    }
    // 2.1 获取轮播图的所有小圆点标签
    var lis = document.querySelectorAll('#slide ol li');
    // 8. 添加过渡完成事件  transitionend
    slideUl.addEventListener('transitionend', function() {
        // console.log(index + "过渡完成了");
        // 9. 在过渡完成事件里面判断当前的索引是从第8张到第1张已经过渡完成了
        if (index >= 9) {
            //10. 回到真实的1的位置
            index = 1;
            //11. 清除过渡
            slideUl.style.transition = 'none';
            //12.设置位移
            slideUl.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
        }
        // 4.8 在过渡完成事件里面判断如果是第1张往左切换到第8张切换完毕后要迅速调回第8张的真实位置
        if (index <= 0) {
            //4.9 回到第8张图的真实位置
            index = 8;
            //4.10. 清除过渡
            slideUl.style.transition = 'none';
            //4.11 .设置位移
            slideUl.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
        }
        // 2.2 小圆点要在图片切换完成后才执行切换 也要在过渡完成事件里面执行
        // 2.3 删除所有li的active类名
        for (var i = 0; i < lis.length; i++) {
            lis[i].classList.remove('active');
        }
        // 2.4 给当前的图片对应的小圆点添加active index-1是因为图片的从1开始 小圆点0开始
        lis[index - 1].classList.add('active');
    });

    // 3.1 定义位置距离的变量  开始的X  滑动中的X 滑动距离X
    var startX = moveX = distanceX = 0;
    // 3.2 添加滑动开始事件记录滑动开始的X
    slideUl.addEventListener('touchstart', function(e) {
        /*3.6滑动开始前还要清除定时器*/
        clearInterval(timeId);
        startX = e.touches[0].clientX;
    });
    // 3.3 添加滑动中事件记录滑动中的X
    slideUl.addEventListener('touchmove', function(e) {
        moveX = e.touches[0].clientX;
        // 3.4计算滑动的距离X
        distanceX = moveX - startX;
        //3.5 设置slideUl的位置 (-index * slideWidth+distanceX)
        // 因为轮播图已经有了位移 要在当前图片的位移的基础上再加上滑动的距离
        slideUl.style.transform = 'translateX(' + (-index * slideWidth + distanceX) + 'px)';
        // 3.7 滑动的时候要清除过渡（滑动的距离已经很小了不需要过渡）
        slideUl.style.transition = 'none';
    });

    /*4.1 滑动结束后的处理 需要判断当前滑动的距离如果不超过1张图的1/3就回弹 如果超过了1/3就切换图片*/
    slideUl.addEventListener('touchend', function() {
        // 4.2 判断当前的距离是否超过1张图的1/3 注意要用绝对值因为距离有可能是负值Math.abs(distanceX)
        if (Math.abs(distanceX) > (slideWidth / 3)) {
            // 4.3 判断当前的distanceX 是正还是负值 
            if (distanceX > 0) {
                //4.4正值 从左往右滑 切换到上一张 index--
                index--;
            } else {
                //4.5负值 从右往左滑 切换到下一张 index++
                index++;
            }
            // 4.6 要设置位移
            slideUl.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
            // 4.7 设置过渡
            slideUl.style.transition = 'all 200ms ease';
        } else {
            // 4.6 要设置位移
            slideUl.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
            // 4.7 设置过渡
            slideUl.style.transition = 'all 200ms ease';
        }
        // 4.12 滑动结束的时候重新开启定时器 调用开启定时器的函数
        startTime();
    });
}
