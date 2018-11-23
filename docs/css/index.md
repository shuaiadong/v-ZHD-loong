# css选择器
## ID选择器
- `#` 权重相当高 (行内style最高)，不能重复唯一的，就像身份证
```css
  #app {
            width: 20px;
            height: 20px;
            background-color: #f40;
        }    
```   
## class选择器
-  `.`类 
```css
        .app {
            width: 20px;
            height: 20px;
            background-color: #f40;
            margin-bottom: 10px;
        }    

```
## 属性选择器
- `[]` 
- 简单用法
```css

/* 第一种 选取有属性`title`的element */
[title] {
            background-color: #f40;

}

/* 第二种 选取属性`title`值为`"do."`的element */
/* 值必须是do.只有这个值*/
[title="do."] {
            background-color: #f40;
        }

 /* 第三种 选取 有title和href 的属性 */
 [title][href] {
            background-color: #f40;s
        }

 /* 第四种   */
[title="do."][href="./"] {
            background-color: #f40;s
        }
  <h2 title="Hello world">Hello world</h2>
    <a title="do." href="./">do。</a>
```


- 子串匹配属性选择器
```css
/*  p标签中选择class 包含app的 */
[abc~="def"]    选择 abc 属性值包含 "def" 的属性
[abc^="def"]	选择 abc 属性值以 "def" 开头的所有元素
[abc$="def"]	选择 abc 属性值以 "def" 结尾的所有元素
[abc*="def"]	选择 abc 属性值中包含子串 "def" 的所有元素
```

## 伪类选择器
```css
a:link {color: #FF0000}		/* 未访问的链接 */
a:visited {color: #00FF00}	/* 已访问的链接 */
a:hover {color: #FF00FF}	/* 鼠标移动到链接上 */
a:active {color: #0000FF}	/* 选定的链接 */
li:first-child              /*  第一个li元素*/
li:last-child               /*  最后一个元素 */
:nth-child(2n) { }
```

## 伪元素选择器
```css
:first-letter	向文本的第一个字母添加特殊样式。
:first-line	向文本的首行添加特殊样式。	
:before	在元素之前添加内容。	
:after	在元素之后添加内容。
```
:::warning 提醒，如果你的网站只需要兼容webkit、firefox、opera等浏览器，建议对于伪元素采用双冒号的写法，如果不得不兼容IE浏览器，还是用CSS2的单冒号写法比较安全

:::
## 后代选择器
- div span a {}
- 中间可以插入无数个元素
## 子代选择权
- div > span > a

## 相邻兄弟选择器

- `~`
- 语法格式：A~B{...}（A、B为HTML元素/标签，表示A标签匹配selector的A，B标签匹配selector的B时，B标签匹配样式）
```css
p ~ li {font-weight:bold;}
```
- `+` 
- 可选择紧接在另一个元素后的元素，且二者具有相同的父亲元素。
p + li {font-weight:bold;}

## 有意思的
- http://justcoding.iteye.com/blog/2032627
- http://www.w3school.com.cn/cssref/css_selectors.asp 最全的

<!-- 
选择器	描述
[attribute]	用于选取带有指定属性的元素。
[attribute=value]	用于选取带有指定属性和值的元素。
[attribute~=value]	用于选取属性值中包含指定词汇的元素。
[attribute|=value]	用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。
[attribute^=value]	匹配属性值以指定值开头的每个元素。
[attribute$=value]	匹配属性值以指定值结尾的每个元素。
[attribute*=value]	匹配属性值中包含指定值的每个元素。 -->
