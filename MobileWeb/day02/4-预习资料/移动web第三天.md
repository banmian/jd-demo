## 总结
1. 工具提示插件的使用
2. 新闻版块的布局
3. 合作伙伴版块布局
4. 登录模态框的使用
5. 表单的使用
6. bootstrap定制
7. 

## 1. 工具提示的使用

### 1.1 页面结构
```html
     <p class="tooltips">
          <a data-toggle="tooltip" data-placement="top" title="北京市">京</a>
          <a data-toggle="tooltip" data-placement="top" title="实名认证">实</a>
     </p>
```

### 1.2 样式
```css
    >.tooltips {
        width: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 20px;
        text-align: center;
        >a {
            display: inline-block;
            width: 20px;
            height: 20px;
            text-decoration: none;
        }
        >a:first-of-type {
            color: #e92322;
            border: 1px solid #e92322;
        }
        >a:last-of-type {
            color: #0f0;
            border: 1px solid #0f0;
            margin-left: 5px;
        }
    }
```
### 1.3 JS初始化

```js
  // 初始化工具提示
  $('[data-toggle="tooltip"]').tooltip();
```

### 1.4 使用步骤和注意事项

- 注意在使用工具提示插件的时候要注意默认是没有提示效果的需要加上JS初始化工具提示
- 如果发现提示信息没有横向展示是父元素的宽度没有设置100% 因为提示信息是定位的参照父元素的宽度 需要父元素够宽


## 2 新闻版块

### 2.1 栅格系统的列偏移

```html
  <div class="col-md-2 col-md-offset-2">
      <h4>全部新闻</h4>
  </div>
```

### 2.2 tab栏的使用

#### 2.2.1页面结构

```html
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#news01" aria-controls="news01" role="tab" data-toggle="tab"><i class="icon-news01"></i></a></li>
        <li role="presentation"><a href="#profile" aria-controls="news02" role="tab" data-toggle="tab"><i class="icon-news02"></i></a></li>
        <li role="presentation"><a href="#news03" aria-controls="news03" role="tab" data-toggle="tab"><i class="icon-news03"></i></a></li>
        <li role="presentation"><a href="#news04" aria-controls="news04" role="tab" data-toggle="tab"><i class="icon-news04"></i></a></li>
    </ul>
```

#### 2.2.2 tab的样式调整

```css
   >.nav-tabs {
      border-bottom: 0;
      >li {
          margin-bottom: 20px;
          >a {
              width: 60px;
              height: 60px;
              border-radius: 50%;
              text-align: center;
              border: 0;
              color: #ccc;
              &:hover {
                  background-color: #e92322;
              }
              >i {
                  font-size: 30px;
              }
          }
          &.active {
              >a {
                  background-color: #e92322;
              }
          }
      }
  }
```

#### 2.2.3 淡入淡出效果的添加

- 在active的元素上添加 fade in 非active的元素加上fade

```html
   <div role="tabpanel" class="tab-pane active fade in" id="news01">
   </div>
   <div role="tabpanel" class="tab-pane fade" id="news02">...</div>
```

## 3. 合作伙伴

### 3.1 页面结构

```
    <section id="partner">
        <div class="container">
            <h3>合作伙伴</h3>
            <ul>
                <li><a href="#"><i class="icon-partner1"></i></a></li>
                <li><a href="#"><i class="icon-partner2"></i></a></li>
                <li><a href="#"><i class="icon-partner3"></i></a></li>
                <li><a href="#"><i class="icon-partner4"></i></a></li>
                <li><a href="#"><i class="icon-partner5"></i></a></li>
                <li><a href="#"><i class="icon-partner6"></i></a></li>
                <li><a href="#"><i class="icon-partner7"></i></a></li>
                <li><a href="#"><i class="icon-partner8"></i></a></li>
                <li><a href="#"><i class="icon-partner9"></i></a></li>
            </ul>
        </div>
    </section>
```

### 3.2 页面样式

```css
  #partner{
      padding: 40px 0;
      >.container{
          >h3{
              text-align: center;
          }
          >ul{
              >li{
                  width:calc(100%/9);
                  float: left;
                  list-style: none;
                  >a{
                      color:#333;
                      text-decoration: none;
                      &:hover{
                          color:#e92322;
                      }
                      >i{
                          font-size: 50px;
                      }
                  }
              }
          }
      }
  }
```

### 3.3 calc函数的使用

- 可以通过calc函数动态设置百分比的宽度

```
     width:calc(100%/9);
```


## 4. 登录模态框

### 4.1 模态框的结构

```
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

```

### 4.2 在登录按钮上调用模态框

```html
   <a href="" class="btn btn-link" data-toggle="modal" data-target="#myModal">登录</a>
```


## 5. 表单的使用 全局CSS>表单

### 5.1 表单结构

```html
    <form class="form-horizontal">
        <div class="form-group">
            <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
            </div>
        </div>
        <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <div class="checkbox">
                    <label>
                        <input type="checkbox"> Remember me
                    </label>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-default">Sign in</button>
            </div>
        </div>
    </form>
```

## 6. bootstrap的定制

1. 官网右上角有一个定制按钮
2. 修改里面的一些默认值 栅格系统的列数可以改成15
3. 点击下面的编译并下载 (定制好的bootstrap)
