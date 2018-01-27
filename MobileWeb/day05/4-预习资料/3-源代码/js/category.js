window.onload = function() {
    categoryScroll();
}
// 分类滑动
function categoryScroll() {
	//获取分类左侧的父容器
    var categoryLeft = document.querySelector('.category-left');
    //获取分类的ul
    var categoryUl = categoryLeft.querySelector('ul');
    var startY = 0,
        moveY = 0,
        distanceY = 0,
        currentY = 0;
    // 滑动状态下的最大值
    var maxSwipe = 0 + 150;
    //滑动状态下的最小值
    var minSwipe = categoryLeft.offsetHeight - categoryUl.offsetHeight - 150;
    //静止状态最大定位值
    var maxPosition = 0;
    //静止状态最小定位值
    var minPosition = categoryLeft.offsetHeight - categoryUl.offsetHeight;
    //添加滑动开始事件 
    categoryUl.addEventListener('touchstart', function(e) {
    	// 获取滑动开始手指在Y轴的位置
        startY = e.touches[0].clientY;
    });
    //添加滑动中事件
    categoryUl.addEventListener('touchmove', function(e) {
    		//获取滑动中手指在Y轴的位置
        moveY = e.touches[0].clientY;
        //计算滑动的距离
        distanceY = moveY - startY;
        //判断如果当前要设置的偏移是否超过了滑动状态下的最大值或者滑动状态下的最小值 如果超过了就return 不设置偏移
        if ((distanceY + currentY) > maxSwipe || (distanceY + currentY) < minSwipe) {
            return;
        }
        //清除过渡
        categoryUl.style.transition = "none";
        //设置位移
        categoryUl.style.transform = "translateY(" + (distanceY + currentY) + "px)";
    });
    //添加滑动结束事件
    categoryUl.addEventListener('touchend', function(e) {
    		//记录当前已经滑动的距离 下一次滑动基于当前的位置开始滑动
        currentY += distanceY;
        //判断当前滑动的距离有没有超过静止状态下的最大值
        if (currentY > maxPosition) {
        		//如果超过了静止状态下的最大值就设置位移为静止状态下的最大值 同时记录当前位置也是静止状态下最大值
            currentY = maxPosition;
            //添加过渡设置位移
            categoryUl.style.transition = "all 0.2s";
            categoryUl.style.transform = "translateY(" + currentY + "px)";
        } else if (currentY < minPosition) {//判断当前滑动的距离有没有超过静止状态下的最小值
        	  //如果超过了静止状态下的最小值就设置位移为静止状态下的最小值 同时记录当前位置也是静止状态下最小值
            currentY = minPosition;
            //添加过渡设置位移            
            categoryUl.style.transition = "all 0.2s";
            categoryUl.style.transform = "translateY(" + currentY + "px)";
        }
    });
    //获取所有的li给所有的li添加一个索引
    var lis = categoryUl.querySelectorAll('li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
    }
    //给ul添加一个点击事件 
    categoryUl.addEventListener('click', function(e) {
    	  //获取ul里面被点击的li元素 e.target表示获取触发事件的元素 a在最里面所以是a标签触发的事件 获取a的父元素才能得到li
        var li = e.target.parentNode;
        //获取当前被点击的Li的索引
        var index = li.index;
        //获取li元素的高度
        var liHeight = li.offsetHeight;
        //删除所有li元素的active类名
        for (var i = 0; i < lis.length; i++) {
            lis[i].classList.remove('active');
        }
        //给当前点击的li添加active类名
        li.classList.add('active');
        //判断当前要位移的值是否超过了静止状态下的最小值
        if ((-liHeight * index) < minPosition) {
        		//如果超过了静止状态下的最小值则设置位移是静止状态下的最小值
            currentY = minPosition;
            categoryUl.style.transition = "all 0.2s";
            categoryUl.style.transform = "translateY(" + currentY + "px)";
        } else {
        		//如果没有超过静止状态下的最小值就设置位移是-当前li的索引*li的高度 
            currentY = -liHeight * index;
            categoryUl.style.transition = "all 0.2s";
            categoryUl.style.transform = "translateY(" + currentY + "px)";
        }
    });
}
