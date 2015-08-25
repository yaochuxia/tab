## 用纯CSS实现优雅的tab页

#### 说明

没有技术含量，html加纯css3几个不常用的特性的结合而已

### 要点

Label标签的for属性
单选框的:check伪类
CSS的加号[+]选择器


### 原理

通常tab页的交互都是点击tab头然后展示对应的一块内容，这种排他性跟HTML里面的某个原住民很类似，是啥呢？没错！就是单选框组。

单选框组有一个:checked伪类，可以设定单选框被选中后的样式，所以我们要把一组单选框当做tab页的头部么？当然不是，单选框是很固执的，用CSS去感化他是很吃力的，那怎么办呢？

这里就要用到CSS里面的+选择器了[实际上这个选择器我之前从来没用过-_-||]，简单来说+选择器就是选择紧跟在某个指定元素后面的另一个指定的元素.

Label的for属性是一个很有意思的东西，可以理解为一个遥控器：位于页面底部的一个label标签可以通过for属性来控制页面顶部的一个单选框或者复选框~，是不是很神奇？（噗→_→）

结合以上特点，可以得到一个实现tab页的基本思路：

一个单选按钮后面跟一个lable[tab头]，再后面跟上一个div[tab内容块]
用.radio:checked + .tab-header 指定当前tab头的样式
用.radio:checked + .tab-header + .tab-content 指定当前tab内容块的样式

