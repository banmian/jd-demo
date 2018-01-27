/*
 * @Author: zhengwei
 * @Date:   2017-01-15 08:55:35
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2017-01-15 23:11:36
 */

'use strict';
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    /**
     * 1. 判断屏幕宽度小于640px 就显示小图 如果屏幕宽大大于640px就显示大图
     *  a.监听屏幕变化事件
     *  b.获取屏幕宽度
     *  c.和640进行判断
     *  d.如果小于就显示小图 获取item身上的小图路径插入到图片标签里面
     *  e.如果是大图就显示大图 获取item身上的大图路径当背景图插入item上
     */
    $(window).on('resize', function() {
        var windowWidth = $(window).width();
        var items = $('#slide .item');
        if (windowWidth > 640) {
            //显示大图 获取item身上的大图路径当背景图插入item上
            items.each(function(key, value) {
                var imgUrl = $(value).data('large-image');
                $(value).css('background-image', 'url(' + imgUrl + ')');
                $(value).html("");
            });
        } else {
            items.each(function(key, value) {
                var imgUrl = $(value).data('small-image');
                $(value).html('<img src="' + imgUrl + '" alt="" />');
            });
            //显示小图 获取item身上的小图路径插入到图片标签里面
        }
    }).trigger('resize');
    var startX = 0,
        endX = 0;
    $('#slide').on('touchstart', function(e) {
        startX = e.originalEvent.touches[0].clientX;
    });
    $('#slide').on('touchend', function(e) {
        endX = e.originalEvent.changedTouches[0].clientX;
        if (endX - startX > 0) {
            $('.carousel').carousel('prev')
        } else if (endX - startX < 0) {
            $('.carousel').carousel('next');
        }
    });
})
