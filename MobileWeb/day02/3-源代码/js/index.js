/*
* @Author: zhengwei
* @Date:   2017-12-17 17:23:05
* @Last Modified by:   zhengwei
* @Last Modified time: 2017-12-17 17:23:10
*/
 /*1. 需求
            1. 当屏幕是小 中 大屏幕的时候就加载 大图
            2. 当屏幕是超小屏幕到时候就加载小图*/
    $(function() {

        $(window).on('resize', function() {
            // 1. 获取屏幕宽度
            var windowWidth = $(window).width();
            //3. 获取所有的item
            var items = $('.carousel-inner .item');
            console.log(windowWidth);
            //2. 如果屏幕宽度大于640就显示大图
            if (windowWidth > 640) {
                //显示大图
                items.each(function(index, value) { //index表示循环的索引  value循环的每个DOM对象（DOM不是jquery） $(value)
                    // 在JS里面获取当前item的图片 大图就获取大图属性的图片
                    // 原生DOM获取自定义属性
                    // var largeImage = value.dataset['largeImage'];
                    // jquery的获取自定义属性的函数
                    var largeImage = $(value).data('large-image');
                    // console.log(largeImage);
                    $(value).html('<a href="#" class="large-image" style="background-image:url(' + largeImage + ')"></a>');
                });
            } else {
                //显示大图
                items.each(function(index, value) { //index表示循环的索引  value循环的每个DOM对象（DOM不是jquery） $(value)
                    var smallImage = $(value).data('small-image');
                    // console.log(largeImage);
                    $(value).html('<a href="#" class="small-image"><img src="' + smallImage + '" alt=""></a>');
                });
            }
        }).trigger('resize'); //可以在事件注册完毕手动触发一次事件
    });