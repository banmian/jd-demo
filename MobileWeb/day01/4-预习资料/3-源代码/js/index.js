/*
 * @Author: zhengwei
 * @Date:   2017-08-30 17:13:33
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2017-09-01 17:37:13
 */
/**
 * 1 . 需求： 当屏幕变化的时候 如果是移动端就加载移动端的a标签 如果是PC端就加载pc端a标签
 * 1. 监听屏幕变化事件 resize
 * 2. 获取当前变化后的屏幕宽度
 * 3. 拿当前屏幕宽度判断是移动端还是PC端  屏幕宽度>640就是PC 否则就是移动
 * 4. 如果是PC端插入pcImg标签
 *       1. 获取所有item项
 *       2. 遍历所有item项
 *       3. 给每一个item项插入对应的pcImg标签
 * 5. 如果是移动端插入mobileImg标签
 *       1. 获取所有item项
 *       2. 遍历所有item项
 *       3. 给每一个item项插入对应的mobileImg标签
 */
$(function() {
    var items = $('.carousel-inner .item');
    $(window).on('resize', function() {
        //获取屏幕宽度
        var windowWidth = $(window).width();
        if (windowWidth > 640) {
            //PC端 
            /*each函数就是jquery用来遍历数组的函数 函数里面穿入一个回调函数
            回调函数的参数第一个遍历的索引 第二个是遍历的值*/
            // var arr = [1,3,4,5];
            // $(arr).each(function (index,value) {
            //     console.log(index+'---'+value);
            // })
            items.each(function(index, value) {
                /*valueDOM元素不是jquery*/
                $(value).html('<a href="#" class="pcImg" style="background-image:url(img/slide_0' + (index + 1) + '_2000x410.jpg)"></a>');
            });
        } else {
            //移动端
            items.each(function(index, value) {
                /*valueDOM元素不是jquery*/
                $(value).html('<a href="#" class="mobileImg"><img src="img/slide_0' + (index + 1) + '_640x340.jpg" alt="..."></a> ');
            });
        }
    }).trigger('resize'); //事件注册完后马上触发一下事件
});
