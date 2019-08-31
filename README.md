## mhtml-to-word
mhtmlToWord.js是将html模板字符串通过模板引擎转换并导出word文件的js库，它支持浏览器环境和nodejs支持环境如react，vue等
### 依赖
+ FileSaver.js
+ baiduTemplatePro.js (可选)
### 安装
#### 浏览器
需下载
+ mhtmlToWord.js: [https://github.com/BetterZxx/mhtml-to-word](https://github.com/BetterZxx/mhtml-to-word)
+ baiduTemplatePro.js: [https://github.com/BetterZxx/baidu-template-pro](https://github.com/BetterZxx/baidu-template-pro)
+ FileSaver.js: [https://github.com/eligrey/FileSaver.js](https://github.com/eligrey/FileSaver.js)
#### nodejs支持环境
```
npm install mhtml-to-word
```
### 用法
+ nodejs环境
```
import { exportWord } from mhtml-to-word
```
``` 
exportWord({String mhtml, String filename, optional String style, Object data,optional String selector})
```
+ 浏览器环境直接使用 `exportWord()`


### 例子
##### 使用selector
```
exportWord({
    selector: ".box",
    style: "p{font-size: 30px; color: red;}",
    filename: "exportTest"
})
```
##### 使用模板字符串
```
var model = `
<div>
    <% for(var i = 0 ; i < 10 ; i++){ %>
    <span><%=title%></span>
</div>
`
exportWord({
    mhtml: model,
    data: {title: "exportword"},
    filename: "exportTest",
    style: "span{ font-size:30px; }"
})

```
 