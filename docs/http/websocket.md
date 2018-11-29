# websocket
- 1. websocket是啥？

WebSocket 是一种网络通信协议。RFC6455 定义了它的通信标准。
WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。


- 2. 为什么需要websocket？
- 解决的问题？

前端的websocket
服务端的websocket

http与websocket

webSocket知识点
1.webSocket是一个持久化的协议；建立在TCP协议之上；协议标识符是 ws,如果加密，则为 wss(ws://example.com:80/some/path)
2.websocket握手请求比http握手请求多了（浏览器 -> 服务器）：
Upgrade: websocket, Connection: Upgrade 这两个字段（主要是告诉服务器，此请求为websocket请求）；
Sec-webSocket-key 是用于握手协议的密钥，是base64编码的16字节随机字符串。
3.服务端的webSocket回应（服务端 -> 浏览器）：
Upgrade: websocket, Connection: Upgrade 这两个字段（告诉浏览器，开始使用webSocket协议）；
Sec-webSocket-Accept 是服务在在浏览器提供的Sec-webSocket-key字符串后面，添加“258EAFA5-E914-47DA-95CA-C5AB0DC85B11”字符串，然后再取sha-1的hash值。浏览器将对这个值进行验证，以证明确实是目标服务器回应了webSocket请求。
4.使用方式：
var ws = new WebSocket("ws://localhost:9998/echo");
ws.onopen = function() { ws.send("发送数据"); };
ws.onmessage = function (evt) {var received_msg = evt.data; };
ws.onclose = function() { // 关闭 websocket };
ws.onerror = function() { // websocket 连接发生错误 };
iOS应用程序生命周期(前后台切换,应用的各种状态)详解
1.Not running 未运行
程序没启动
2.Inactive 未激活
程序在前台运行，不过没有接收到事件。在没有事件处理情况下程序通常停留在这个状态
3.Active 激活
程序在前台运行而且接收到了事件。这也是前台的一个正常的模式
4.Backgroud 后台
5.Suspended 挂起
 image


socketjs
1. 是一个浏览器Javascript库，提供了一个类似webSocket的对象。
2. 提供了一个连续跨浏览器的JavascriptAPI，在浏览器和web服务起之间创建了一个低延迟、全双工、跨域的通讯通道。
3. 在底层sockjs首先尝试使用本地websocket，如果失败了，他可以使用各种浏览器特定的传输协议，并通过类似websocket的抽象方式呈现
4. sockjs在适用所有现代浏览器和不支持websocket协议环境



websocket是什么？
webSocket是HTML5开始提供的一种在单个TCP连接上进行去全双工通讯的协议。旨在浏览器与服务器之间建立一种长期、双向的通讯。
最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。
- TCP 传输控制协议。
- 全双工: 全双工指可以同时（瞬时）进行信号的双向传输（A→B且B→A）。指A→B的同时B→A，是瞬时同步的。 



解决的什么问题？
HTTP协议的一个缺陷：通讯只能由客户端发起。在websocket出现，都是通过轮询机制（或者 HTTP 连接始终打开）实现客户端和浏览器的数据同步。
- 缺点
    - 频繁的请求（或者 HTTP 连接始终打开）来保证客户端与服务端的同步。`低效浪费资源`
    - HTTP 协议无法实现服务器主动向客户端发起消息。
        - 通讯只能由客户端发起
        - 服务端对请求作出应答
        - 协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。
只能由客户端发起服务


好处
    性能开销小，双向通讯。
    没有同源限制，客户端可以与任意的服务器。
    协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。
怎样运作的？
怎样使用？
API
WebSocket`只读属性`
- Socket.readyState
    - CONNECTING`0` 尚未建立连接。
    - OPEN`1` 连接已建立，可以进行通信。
    - CLOSING`2` 连接正在进行关闭。
    - CLOSED`3` 了解已关闭或连接不能打开。
- Socket.bufferedAmount`只读属性`
    - 当客户端向服务端发送大量数据时，浏览器会先将数据缓存到浏览器的发送队列里，然后逐段地向服务器发送，bufferedAmount这个特性就是告诉客户端现在队列里还有多少已经缓存了但没发送的数据。
    - 
方法 

WebSocket.send()


事件
onopen // 连接成功的回调

onmessage // 用于指定收到服务器数据后的回调函数。


onclose // 了解关闭的回调

onerror // 报错时的回调函数

webSocket.send() // 客户端发数据
兼容性？

案例
SOCKET.IO node
SockJS java 服务端也要设置


https://www.jianshu.com/p/4ef5004a1c81

https://blog.csdn.net/dadiyang/article/details/83715569

https://blog.csdn.net/ligang2585116/article/details/47277917

https://segmentfault.com/a/1190000013588737

http://www.ruanyifeng.com/blog/2017/05/websocket.html
websocketd一款非常特别的 [WebSocket](http://websocketd.com/) 服务器
控制台
var ws = new WebSocket('ws://localhost:8080/');

ws.onmessage = function(event) {
	ws.send('hello word!')
  console.log(event.data);
};




常量	值	状态
WebSocket.CONNECTION	0	正在握手请求中，还未完成连接
WebSocket.OPEN	1	连接已打开
WebSocket.CLOSING	2	连接正在关闭
WebSocket.CLOSED	3	连接已关闭




SockJS的一大好处在于提供了浏览器兼容性。优先使用原生WebSocket，如果在不支持websocket的浏览器中，会自动降为轮询的方式。

服务器与客户端 数据可能是文本，也可能是二进制数据（blob对象或Arraybuffer对象）


https://blog.csdn.net/maomaolaoshi/article/details/82593106 // 请求头中添加参数的几种方式

https://segmentfault.com/q/1010000012939637
https://www.jb51.net/article/146452.html

https://www.cnblogs.com/Vince-blogs/p/8087233.html

https://blog.csdn.net/qq_32331073/article/details/82665419


es5 实现 es6 this控制 三大框架 create-react-app

class 反射 代理  元编程 node - 加分项

微服务

https://blog.csdn.net/dadiyang/article/details/83715569 sockJS

# WebSocket
## 1. WebSocket是什么？
webSocket是一种网络通信协议，很多高级功能都需要它。
最大特点就是，`服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。`
webSocket是HTML5开始提供的一种在单个TCP连接上进行去全双工通讯的协议。在浏览器与服务器之间建立一种长期、双向的通讯。
- TCP 传输控制协议。
- 全双工: 全双工指可以同时（瞬时）进行信号的双向传输（A→B且B→A）。指A→B的同时B→A，是瞬时同步的。 
- 特点
    - 没有同源限制，客户端可以与任意服务器通信。
    - 可以发送文本，也可以发送二进制数据。
    - 与HTTP协议有着良好的兼容性，默认端口也是80和443，并且握手阶段采用HTTP协议，因此握手时不容易屏蔽，能通过各种HTTP代理服务器。

## 为什么会出现WebSocket？
是因为在http协议做不到服务器主动向客户端发送数据。
在这
HTTP协议的一个缺陷：通讯只能由客户端发起。在websocket出现，都是通过轮询机制（或者 HTTP 连接始终打开）实现客户端和浏览器的数据同步。
这种单向请求的特点，注定了如果服务器有连续的状态变化，客户端要获知就非常麻烦。我们只能使用"轮询"：每隔一段时候，就发出一个询问，了解服务器有没有新的信息。最典型的场景就是聊天室。

轮询的效率低，非常浪费资源（因为必须不停连接，或者HTTP连接始终打开）。因此，工程师们一直在思考，有没有更好的方法。WebSocket就是这样发明的


## 2. WebSocket解决了什么问题？
但是Websocket只需要一次HTTP握手，所以说整个通讯过程是建立在一次连接/状态中，也就避免了HTTP的非状态性，服务端会一直知道你的信息，直到你关闭请求，这样就解决了接线员要反复解析HTTP协议，还要查看identity info的信息。

同时由客户主动询问，转换为服务器（推送）有信息的时候就发送（当然客户端还是等主动发送信息过来的。。），没有信息的时候就交给接线员（Nginx），不需要占用本身速度就慢的客服（Handler）了



## 3. WebSocket怎样使用？
API
WebSocket
- Socket.readyState`只读属性`
    - CONNECTING`0` 尚未建立连接。
    - OPEN`1` 连接已建立，可以进行通信。
    - CLOSING`2` 连接正在进行关闭。
    - CLOSED`3` 了解已关闭或连接不能打开。
- Socket.bufferedAmount`只读属性`
    - 当客户端向服务端发送大量数据时，浏览器会先将数据缓存到浏览器的发送队列里，然后逐段地向服务器发送，bufferedAmount这个特性就是告诉客户端现在队列里还有多少已经缓存了但没发送的数据。
    
方法 
// 客户端向服务端发送数据
WebSocket.send()


事件
onopen // 连接成功的回调。

onmessage // 用于指定收到服务器数据后的回调函数。


onclose // 了解关闭的回调。

onerror // 报错时的回调函数。

webSocket.send() // 客户端发数据。

## 4. WebSocket兼容性？
使用轮询或长连接的方式实现伪websocket的通信

使用flash或其他方法实现一个websocket客户端 ：https://segmentfault.com/q/1010000005000671/a-1020000005003936

https://blog.csdn.net/u011925826/article/details/17532465
## 1. 