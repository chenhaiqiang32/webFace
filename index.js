// 一、call,apply,bind 的区别和相同点
// call,apply,bind 的区别和相同点。call和apply和bind都能改变方法的this指向。指向于传递的第一个参数,如果第一个参数是null或者underfind那就指向windows。
// 区别：
// call事例
var arr = [1, 2, 3, 89, 46];
Math.max.call(null, arr[0], arr[1], arr[2], arr[3], arr[4])
89
// call第一个参数是this指向的作用域。后面的是一系列参数列。返回的是值
var arr = [1, 2, 3, 89, 46];
Math.max.apply(null, arr)
89
// bind和call基本相同，区别返回参数不是结果，而是返回了一个改变this后的函数，原函数不回改变
var arr = [1, 2, 3, 89, 46];
Math.max.bind(null, arr[0], arr[1], arr[2], arr[3], arr[4]);
max() { [native code] }

// 二、this指向
// 一般指向默认调用者，没有默认调用者，this指向windows，使用call,apply,bind绑定，this指的是绑定的对象。在使用=>定义函数的时候，this的指向是 定义时所在的对象
// 三、讲一下let、var、const的区别
// var不是块级作用域，支持变量提升，let和const是块级作用域不支持变量提升，const申明的常量，改变就会报错
// 四、原型和原型链：
// 原型链：每个被实例对象都有__proto__对象，它指向了构造该对象的构造函数的prototype属性。同时该对象可以通过__proto__对象来寻找不属于自身的属性，
// 原型：就是实现继承过程中产生的一个概念。
// 五、继承
// 原理是：复制父类的属性和方法来重写子类的原型对象
// 六、闭包
// 闭包就是函数内部嵌套函数，函数内部访问外部函数，优点：可以定义私有的方法和变量，缺点如果没有将变量回收掉，可能导致内存泄漏，js自带特殊的垃圾回收机制，变量失去引用，js会通过算法将其回收，释放缓存
// 七、深拷贝浅拷贝
// 浅拷贝，如果对象内部只有一层可以用浅拷贝，常用的方法：object.assign和...obj
// 深拷贝，嵌套两层以上复杂对象，方法：递归或者JSON.parse(JSON.stringfy(object))或者第三方的
// 八、节流防抖
// 防抖函数，可以将多次触发，只执行最后一次 触发的  节流函数，点击很快的时候，不执行，间隔多少秒再来执行
// 九、捕获和冒泡
// 捕获：就是从根元素开始向目标元素递进，由上而下.冒泡由下而上
// 十、判断类型，常用typeof,数组判断instanceof, Array.jsArray,或者object.prototype.toString
// 十一、sessionStorage和localStorage和cookie区别
// 十二、webpack proxy跨域
// 十三、setTimeout与setInterval的区别
// setTimeout表示间隔一段时间之后执行一次调用，而setInterval是每隔一段时间循环调用，直至清除。
// 十四、react与vue的区别
// vue使用的是template模版编写。react使用的是jsx语法。
// 状态管理：react中的状态全部存入state中，通常修改的时候需要用到setState方法来更新状态。 vue中的state对象不是必须，vue是通过data属性在vue对象中进行管理
// 监听数据的变化，vue劫持一些函数，能精确的知道数据变化。react中默认是通过比较引用的方式去进行，如果不优化使用shouldComponentUpdate/PureComponent方法优化，那会导致大量的虚拟dom重新渲染
// 数据流不同：vue可以进行组件与dom之间v-modle双向绑定。react从始至终都只有单向数据流
// vue中使用的是mixins。react使用的是Hoc高阶组件
// 十五、react请求与生命周期
// reac的异步请求，放入componentDidMount中才是正确操作。
// 因为WillMount中请求发送，react的执行机制是不会等到数据返回之后才继续往下执行，而是继续向下执行并render。不会‘暂停’以等待数据到达。
// 问题：服务器渲染时，如果在WillMount中请求数据，fetch data会执行两次，一次在服务端一次在客户端。造成了多余的请求，而且在16版本之后，WillMount可能在一次渲染中多次调用。
// 十六、通信
// 父传子：父组件通过props的方式传递。
// 子传父：props+回调函数方式。
// 兄弟组件：找到这两个共同的父节点，结合props和回调函数进行通信
// 跨层级通信：context通信
// store
// 十七、React的渲染原理
// 单项数据流，只能通过数据层的变化去影响视图层变化。
// 数据驱动视图。无需关注dom，只用关注数据即可
// 渲染过程，生命周期函数
// diff算法。对照两次dom不同的部分渲染
// 十八、性能优化方法
// dns预解析
// 浏览器缓存，强缓存和协商缓存
// 预加载 将一些不影响首屏但重要的文件延后加载 preload
// 预渲染 prerender
// 懒加载
// 文件优化
// webpack优化 使用到tree shaking。各种loader等等
// 十九、提升webpack打包速度
// happypack
// dll 采用webpack的 DllPlugin 和 DllReferencePlugin 引入dll，让一些基本不会改动的代码先打包成静态资源,避免反复编译浪费时间
// 二十、es6新特性
// 1、class类，面向对象更加容易理解简单
// 2、尖头函数
// 3、函数的默认值
// 4、模版字符串
// 5、结构赋值
// 6、对象简写，对象和属性相同，可以不写属性
// 7、promise
// 8、let,const