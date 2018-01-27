## 总结

1. 分类全屏页面的制作
2. 分类左右两侧的布局
3. 分类左侧的滑动
4. 移动端点击事件的延迟
5. 封装移动端tap事件
6. 使用tap事件完成移动端左侧点击操作
7. 使用fastclick解决tap事件点透和click移动端延迟问题
8. 使用iScroll完成右侧滑动
9. swiper轮播图插件的使用
10. rem屏幕适配和rem工具使用

## 1. 分类页面全屏页面的制作

1. 给html 和 body加上高度100% 
2. 头部加上50px的高度 加上定位
3. 身体加上padding-top:50px （盒模型一定要是border-box）
4. 左右两边的自适应 左边浮动 给width:100px 右边加上margin-left:100px（右边的元素不能加width:100%）
5. 头部的图标是制作 左右两边的图标宽高固定 定位在左右两边 中间的表单width:100%加上左右的padding
6. 图标的实现
      1. 设置背景图
      2. 设置背景大小200px 200px
      3. 设置背景图的定位
      4. 设置背景图的定位原点 background-origin
      5. 设置背景图的裁切 裁切掉内容以外的背景部分 background-clip:content-box


## 2. 分类页面左右两侧的内容

1. 左侧页面的布局和样式 调整a的高度行高转块文本居中边框 给左侧的盒子ct_Left加上overflow:hidden; 因为ul里面的内容会超出整个屏幕 出滚动条 要给父元素加overflow:hidden; 
2. 右侧页面  上面一个图片 中间一个标题 下面一些商品信息  百分比布局33.33%  右侧商品信息的内容也是会超出页面的高度出垂直滚动条 ct_Category 加上overflow:hidden; 但是保证ct_Category有一个具体的高度  
      1. 使用JS动态计算设置 ct_Category 高度
      2. 给ct_Right加上伸缩盒子 自动计算高度  display:flex;   flex-direction: column;


## 3. 分类左侧的滑动 

1. 实现连续滑动
      1. 注册滑动开始滑动中 滑动结束事件
      2. 在滑动开始记录startY
      3. 在滑动中距离MoveY
      4. 用distanceY = moveY-startY
      5. 设置位移 给ul设置 top = distanceY （但是这样只能滑动一次）
      6. 在滑动结束事件里面每一次记录上一次滑动的距离  currentY+=distanceY
      7. 在滑动中设置位移 top=currentY+distanceY

2. 滑动距离的判断和滑动结束后弹簧效果
      1. 静止状态下的最大值 0
      2. 静止状态下的最小值 父元素-子元素的高度
      3. 滑动状态下的最大值 0+100
      4. 滑动状态下的最小值  父元素-子元素的高度-100
      5. 在滑动中的时候判断 currentY+distanceY在 最大和最小滑动距离的区间
            if(currentY+distanceY < 100 && currentY+distanceY > 父元素-子元素的高度-100) 条件成立说明在这个区间 才设置滑动
      6. 滑动结束的时候弹簧效果
            1. 判断滑动距离 currentY+distanceY  > 静止状态下的最大值 如果大于静止状态下的最大值  设置位移静止状态下的最大值 同时记录currentY=静止状态下的最大值
            2. 判断滑动的距离 currentY+distanceY  < 静止状态下的最小值设置位移 静止状态下的最小值 同时 记录currentY = 静止状态下的最小值

## 4. 移动端点击事件的延迟

1. 移动端click事件有大概300ms的延迟 原因就是要兼容双击操作
2. 在移动端就不直接使用click事件而使用移动优先的touch事件模拟一个click事件
      1. 判断手指只有一个
      2. 判断触摸开始到触摸结束耗费的时间小于150ms
      3. 判断滑动的距离小于6
      4. 分别注册滑动开始 和 滑动结束事件  
      5. 在滑动开始的时候判断手指的个数 记录滑动开始的位移 记录滑动开始的时间
      6. 在滑动结束的时候判断手指的个数  记录滑动结束的位置 记录滑动结束的时间
      7. 用滑动结束时间-滑动开始的时间<150ms 
      8. 滑动结束的位置-滑动开始的位置<6


## 5. 移动端tap事件的封装

1. 封装到common.js 里面的itcast对象上的属性
2. 参数需要传入一个dom元素和callback回调函数 tap(dom,callback)  callback在最后判断里面调用callback(e);

## 6. 使用tap事件完成左侧点击

1. 点击要切换active类名 
      1. 清空所有li的active
      2. 给当前点击的li添加active类名 e.target.parentNode
2. 设置偏移 
      1. 偏移的距离是当前li的索引(一开始给所有的li添加一个index索引)*li的高度
      2. li.index*li.height
      3. 设置位移设置过渡判断如果超过了最小静止状态的值就设置位移成minTop
      4. 注意不管是设置 li.index*li.height 还是minTop 都要同步currentY的值


## 7. 移动tap和zeptotap事件

1. 问题就是在移动有点透的问题 并且不能兼容PC端

## 8. 使用fastclick解决点透和PC移动兼容的click事件

1. 引入fastclick的包 
2. 初始化页面的所有元素都绑定fastclick  FastClick.attach(document.body);
3. 直接添加click事件 tap.addEventListener("click", function() {
     })  既没有延迟 又没有点透 PC移动都兼容


## 9. iScroll.js插件的使用(做滑动和轮播图的插件)

1. 引入iScroll.js文件
2. 写页面的结构
    ```
        <div class="wrapper" id="wrapper">
            <div>
                <p>它只是需要这样的结构，而不是需要这样的标签</p>
                <p>它只是需要这样的结构，而不是需要这样的标签</p>
                <p>它只是需要这样的结构，而不是需要这样的标签</p>
            </div>
        </div>
    ```
3. 创建iScroll对象
    var myScroll = new IScroll('#wrapper',{
        mouseWheel: true,//支持鼠标滚轮
        scrollbars: true//有滚动条
    }); 传入最外层盒子的选择器

## 10. swiper.js插件的使用

1. 引入swiper.css swiper.js （要引入他的css文件）
2. 去官网复制想要的结构
      ```
        <div class="swiper-container" id="swiper0">
            <!--图片-->
            <ul class="swiper-wrapper">
                <li class="swiper-slide">
                    <a href="javascript:;">
                        <img src="./uploads/l1.jpg" alt="">
                    </a>
                </li>
            </ul>
        </div>
      ```
3. 创建swiper对象
     ```
      var mySwiper1 = new Swiper('#swiper0',{
          effect : 'cube',
          cube: {
              slideShadows: true,
              shadow: true,
              shadowOffset: 100,
              shadowScale: 0.6
          }
      }) 如果有多个轮播图 传入选择器推荐使用id
      参数 autoplay:1000定时器时间 loop:true;循环
     ```

## 11. 使用iScroll.js完成右侧分类

1. 注意 ul里面的li浮动了ul没有高度 只能使用overflow:hidden的方式清除浮动 不能用clearfix
2. 给父元素加上相对定位

## 12. rem移动端适配

###  12.1 em和rem的关系

1. em : element（元素） 表示相对于自身的font-size大小1em=1倍的font-size
2. rem :root  element（根元素） 表示相对于根元素(html)的font-size大小1em=1倍的html的font-size

### 12.2 使用rem进行适配

1. 把640的设计稿分成20份 每份占32px 媒体查询判断屏幕宽度是640根元素的字体大小32
2. 推算出 320px  16  360px 18 375 18.75 414 20.7

###  12.3 使用rem实现优惠活动

1. 按照640的设计稿去写页面 量了多少像素就写多少像素
2. 通过rem的工具把写好的px的css或less代码 转成rem的形式 填写设计稿的宽度(设计稿宽度一样) 基础字体值 写成 在640设计稿下1rem的字体大小的值 20份(32px 就写32px)会自动帮你生成对应的媒体查询
