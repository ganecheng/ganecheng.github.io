![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161015093613760)

转载请注明出处：http://blog.csdn.net/Gane_Cheng/article/details/52819118 。

2014年10月29日，W3C宣布，经过接近8年的艰苦努力，HTML5标准规范终于制定完成。

HTML5将会取代1999年制定的HTML 4.01、XHTML 1.0标准，以期能在互联网应用迅速发展的时候，使网络标准达到符合当代的网络需求，为桌面和移动平台带来无缝衔接的丰富内容。

作为2010年入坑IT的程序员来说，可以说一步一步见证着HTML5的发展。这些年为了兼容IE6放弃了很多HTML5的新特性。但是今时不同以往，移动设备的流行，天然支持HTML5，以及桌面端IE最终被用户和微软唾弃，更多支持HTML5浏览器的受欢迎，我要重新研究一下HTML5带来的这些新特性。

**HTML5 的新特性**
==============

**① 语义特性（Semantic）**

HTML5赋予网页更好的意义和结构。

**② 本地存储特性（OFFLINE & STORAGE）**

基于HTML5开发的网页APP拥有更短的启动时间，更快的联网速度，这些全得益于HTML5 APP Cache，以及本地存储功能。

**③ 设备访问特性 (DEVICE ACCESS)**

从Geolocation功能的API文档公开以来，HTML5为网页应用开发者们提供了更多功能上的优化选择，带来了更多体验功能的优势。HTML5提供了前所未有的数据与应用接入开放接口。使外部应用可以直接与浏览器内部的数据直接相连，例如视频影音可直接与microphones及摄像头相联。

**④ 连接特性（CONNECTIVITY）**

更有效的连接工作效率，使得基于页面的实时聊天，更快速的网页游戏体验，更优化的在线交流得到了实现。HTML5拥有更有效的服务器推送技术，Server-Sent Event和WebSockets就是其中的两个特性，这两个特性能够帮助我们实现服务器将数据“推送”到客户端的功能。

**⑤ 网页多媒体特性(MULTIMEDIA)**

支持网页端的Audio、Video等多媒体功能， 与网站自带的APPS，摄像头，影音功能相得益彰。

**⑥ 三维、图形及特效特性（3D, Graphics & Effects）**

基于SVG、Canvas、WebGL及CSS3的3D功能，用户会惊叹于在浏览器中，所呈现的惊人视觉效果。

**⑦ 性能与集成特性（Performance & Integration）**

没有用户会永远等待你的Loading——HTML5会通过XMLHttpRequest2等技术，解决以前的跨域等问题，帮助您的Web应用和网站在多样化的环境中更快速的工作。


----------


下面分别对这七个新特性进行研究。

**① 语义特性（Semantic）**
====================

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161015093657400)

HTML5增加了新的内容标签，这些标签带有一定的语义，使搜索引擎爬取你的网站信息更高效。

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161015094026098)

HTML4中的内容标签级别相同，无法区分各部分内容。而HTML5中的内容标签互相独立，级别不同，搜索引擎以及统计软件等均可快速识别各部分内容。

这些标签在新闻类网站，博客类网站很有用。

最大的问题就是当使用这些新的语义元素时，那些不支持的浏览器如何处理这些元素。

见过的最多的解决方法是这样的。

```
<section class="section">
 	
    <!-- content --> 
	
</section>
```

```
.section 
{
     color: blue;
}
```

如果还想了解更多语义标签兼容性问题，可以参考这篇文章[http://html5.group.iteye.com/group/wiki/3293-html5](http://html5.group.iteye.com/group/wiki/3293-html5)

**② 本地存储特性（OFFLINE & STORAGE）**
===============================

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161015095332709)

HTML5提供了网页存储的API，方便Web应用的离线使用。除此之外，新的API相对于cookie也有着高安全性，高效率，更大空间等优点。

先看W3C对离线存储的介绍。

*Web Apps can start faster and work even if there is no internet connection, thanks to the HTML5 **App Cache**, as well as the **Local Storage**, **Indexed DB**, and the **File API** specifications.*

HTML5离线存储包含 `应用程序缓存`，`本地存储`，`索引数据库`，`文件接口`。

下面依次展开介绍。

**（1）应用程序缓存（Application Cache）**
--------------------------------

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161015181444798)

使用 HTML5，通过创建 cache manifest 文件，可以轻松地创建 web 应用的离线版本。

HTML5引入了应用程序缓存，这意味着 web 应用可进行缓存，并可在没有因特网连接时进行访问。

应用程序缓存为应用带来三个优势：

 - **离线浏览** – 用户可在应用离线时使用它们
 - **速度** – 已缓存资源加载得更快
 - **减少服务器负载** – 浏览器将只从服务器下载更新过或更改过的资源。

甭废话，先来感受一下Application Cache的魅力。Shut up，show me the demo！

Demo链接：[http://www.ganecheng.site/welcome_offline.html](http://www.ganecheng.site/welcome_offline.html)

1.打开这个网页，第一次等待加载完成之后，页面和普通的网页没有区别。

2.点击刷新按钮，或者强制刷新按钮，看一下第二次打开的速度。有没有快到爆。（**速度**）

3.现在我要求你拔掉网线，断开WiFi，再次点击刷新按钮，或者强制刷新按钮，看一下第三次打开的速度。有没有快到爆。注意，现在并没有联网，和服务器失去连接，依然秒开网页，还能正常操作网页。（**离线浏览，减少服务器负载**）

看完了效果，看一下App Cache的原理。

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161015144900663)

当我们第一次正确配置cache manifest后，浏览器会将清单文件中的资源缓存下来。当我们再次访问该应用时，浏览器会直接返回缓存中的资源，然后检查manifest文件是否有变动，如果有变动就会把相应的变动更新下来，同时改变浏览器里面的app cache。

**使用方法**

页面声明使用App Cache

```
 <!DOCTYPE HTML> 
 <html manifest="index.manifest"> 
```

清单文件中写明资源。

```
CACHE MANIFEST
theme.css 
logo.gif 
main.js

NETWORK:
login.asp

FALLBACK:
/html5/ /404.html
```

**manifest 文件可分为三个部分：**

**CACHE MANIFEST** - 在此标题下列出的文件将在首次下载后进行缓存
**NETWORK** - 在此标题下列出的文件需要与服务器的连接，且不会被缓存
**FALLBACK** - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）

CACHE MANIFEST，是必需的
NETWORK 规定文件 "login.asp" 永远不会被缓存，且离线时是不可用的
FALLBACK 规定如果无法建立因特网连接，则用 "404.html" 替代 /html5/ 目录中的所有文件

**一旦应用被缓存，它就会保持缓存直到发生下列情况：**

 - **用户清空浏览器缓存** ，用户怎么做，页面左右不了，说了等于没说。
 - **manifest 文件被修改**，请注意：更新清单中列出的某个文件并不意味着浏览器会重新缓存该资源。清单文件本身必须进行更改，一般是加一个注释，注释的内容是日期，想更新了，改一下日期。 
 - **由程序来更新应用缓存**，这个稍微靠谱一点。

需要注意的是，更新后的资源需要下次打开页面才能生效，本次打开的页面在更新资源之前就已经从缓存中拿到资源并加载完毕了。

由程序来更新，需要依赖manifest文件被修改这一条，因为调用的是浏览器提供的接口，检测 window.applicationCache.status 的值，如果是 UPDATEREADY，说明浏览器比较manifest文件完毕，可以更新缓存了。window.applicationCache.swapCache()。更新完了，不会立即生效，window.location.reload();重新加载一下页面。

缓存有这么多状态。

```
var appCache = window.applicationCache; 
switch (appCache.status) 
{ 
	case appCache.UNCACHED: // UNCACHED == 0 
		return 'UNCACHED'; 
		break; 
	case appCache.IDLE: // IDLE == 1 
		return 'IDLE'; 
		break; 
	case appCache.CHECKING: // CHECKING == 2 
		return 'CHECKING'; 
		break; 
	case appCache.DOWNLOADING: // DOWNLOADING == 3 
		return 'DOWNLOADING'; 
		break; 
	case appCache.UPDATEREADY: // UPDATEREADY == 4 
		return 'UPDATEREADY'; 
		break; 
	case appCache.OBSOLETE: // OBSOLETE == 5 
		return 'OBSOLETE'; 
		break; 
	default: 
		return 'UKNOWN CACHE STATUS'; 
		break; 
}; 
```
程序更新缓存的方法。

```
// Check if a new cache is available on page load. 
window.addEventListener('load', function(e) 
{ 
	window.applicationCache.addEventListener('updateready', function(e) 
	{ 
		if (window.applicationCache.status == window.applicationCache.UPDATEREADY) 
		{ 
			// Browser downloaded a new app cache. 
			// Swap it in and reload the page to get the new hotness. 
			window.applicationCache.swapCache(); 
			if (confirm('A new version of this site is available. Load it?')) 
			{ 
				window.location.reload(); 
			} 
		} 
		else 
		{ 
			// Manifest didn't changed. Nothing new to server. 
		} 																						
	}, false); 
}, false); 
```
更多更新缓存的方法，可以参考这篇文章：[http://www.jb51.net/html5/67850.html](http://www.jb51.net/html5/67850.html)



**总的来说，App Cache的三个优点非常明显。但是有几个坑，却会导致没人愿意使用这个新特性。**

1.使用了App Cache的页面在清单文件更新之后去更新页面资源，但是只在下次打开页面才能生效，这意味着，我们需要使用代码判断是不是最新版本，不是的话，刷新一次页面。这种体验很不好。

2.使用了App Cache的页面也会被缓存，这对于需要动态更新的页面来说，几乎是个噩梦。用户访问到的页面不是最新的，会导致非常多的问题。

3.App cache与browser cache混合在一起会使更新机制变得更加复杂，主要有以下几个因素: 
1) App cache在各浏览器平台实现上存在差异；
2) 各浏览器又提供了不同的页面刷新机制；
3) app cache还与传统的browser cache有着千丝万缕的联系；对于它俩如何协同工作，HTML5的相关规范没有对app cache的细节给出非常明确的规定; 浏览器官方文档有没有给出非常明确的说明。
4) browser cache的更新机制本身就已经很复杂。
5) 如果manifest文件本身就有缓存时间，或设置为永远都可用，那你的网页永远都不会被更新了。

App Cache更多的坑，可以参考这篇文章：[http://dreclo.blog.163.com/blog/static/528789512014111675023409/](http://dreclo.blog.163.com/blog/static/528789512014111675023409/) ， 然后再决定要不要使用这一新特性。

从惊叹于App Cache的强大，到填坑，W3C花了这么长时间，就弄出来这么个东西，真是令人失望。学会使用App Cache只用了不到一小时，填坑填了一下午。每个页面都要有manifest，每个页面都要加代码去判断去更新缓存，我可以骂人吗。


----------

**（2）本地存储（Local Storage）**
--------------------------

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161015181649041)

本地存储发展历史.

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161015181837409)

最早的Cookies自然是大家都知道，问题主要就是太小，大概也就4KB的样子，而且IE6只支持每个域名20个cookies，太少了。优势就是大家都支持，而且支持得还蛮好。很早以前那些禁用cookies的用户也都慢慢的不存在了，就好像以前禁用javascript的用户不存在了一样。

userData是IE的东西，垃圾。现在用的最多的是Flash吧，空间是Cookie的25倍，基本够用。再之后Google推出了Gears，虽然没有限制，但不爽的地方就是要装额外的插件（没具体研究过）。到了HTML5把这些都统一了，官方建议是每个网站5MB，非常大了，就存些字符串，足够了。比较诡异的是居然所有支持的浏览器目前都采用的5MB，尽管有一些浏览器可以让用户设置，但对于网页制作者来说，目前的形势就5MB来考虑是比较妥当的。

首先自然是检测浏览器是否支持本地存储。在HTML5中，本地存储是一个window的属性，包括localStorage和sessionStorage，从名字应该可以很清楚的辨认二者的区别，前者是一直存在本地的，后者只是伴随着session，窗口一旦关闭就没了。二者用法完全相同，这里以localStorage为例。

```
if(window.localStorage)
{
	 alert('This browser supports localStorage');
}
else
{
	 alert('This browser does NOT support localStorage');
}
```

存储数据的方法就是直接给window.localStorage添加一个属性，例如：window.localStorage.a 或者 window.localStorage["a"]。它的读取、写、删除操作方法很简单，是以键值对的方式存在的，如下：

```
localStorage.a = 3;//设置a为"3"
localStorage["a"] = "sfsf";//设置a为"sfsf"，覆盖上面的值
localStorage.setItem("b","isaac");//设置b为"isaac"
var a1 = localStorage["a"];//获取a的值
var a2 = localStorage.a;//获取a的值
var b = localStorage.getItem("b");//获取b的值
localStorage.removeItem("c");//清除c的值
```

这里最推荐使用的自然是getItem()和setItem()，清除键值对使用removeItem()。如果希望一次性清除所有的键值对，可以使用clear()。另外，HTML5还提供了一个key()方法，可以在不知道有哪些键值的时候使用，如下：

```
var storage = window.localStorage;
function showStorage()
{
	 for(var i=0;i<storage.length;i++)
	 {
		  //key(i)获得相应的键，再用getItem()方法获得对应的值
		  document.write(storage.key(i)+ " : " + storage.getItem(storage.key(i)) + "<br>");
	 }
}
```

写一个最简单的，利用本地存储的计数器：

```
	var storage = window.localStorage;
	if (!storage.getItem("pageLoadCount")) 
	{
		storage.setItem("pageLoadCount",0);
	}
	storage.pageLoadCount = parseInt(storage.getItem("pageLoadCount")) + 1;//必须格式转换
	document.getElementById("count").innerHTML = storage.pageLoadCount;
	showStorage();
```

不断刷新就能看到数字在一点点上涨，如下图所示：

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161015194747851)

需要注意的是，HTML5本地存储只能存字符串，任何格式存储的时候都会被自动转为字符串，所以读取的时候，需要自己进行类型的转换。这也就是上一段代码中parseInt必须要使用的原因。

想要对localStorage了解更多请参考这篇文章：[http://www.cnblogs.com/xiaowei0705/archive/2011/04/19/2021372.html](http://www.cnblogs.com/xiaowei0705/archive/2011/04/19/2021372.html)

**（3）索引数据库（Indexed DB）**
------------------------

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161016122948968)

从本质上说，IndexedDB允许用户在浏览器中保存大量的数据。任何需要发送大量数据的应用都可以得益于这个特性，可以把数据存储在用户的浏览器端。当前这只是IndexedDB的其中一项功能，IndexedDB也提供了强大的基于索引的搜索api功能以获得用户所需要的数据。

用户可能会问：IndexedDB是和其他以前的存储机制(如cookie,session)有什么不同？

Cookies是最常用的浏览器端保存数据的机制,但其保存数据的大小有限制并且有隐私问题。Cookies并且会在每个请求中来回发送数据，完全没办法发挥客户端数据存储的优势。

再来看下Local Storage本地存储机制的特点。Local Storage在HTML 5中有不错的支持，但就总的存储量而言依然是有所限制的。Local Storage并不提供真正的“检索API”,本地存储的数据只是通过键值对去访问。Local Storage对于一些特定的需要存储数据的场景是很适合的，例如，用户的喜好习惯，而IndexedDB则更适合存储如广告等数据（它更象一个真正的数据库）。

一般来说,有两种不同类型的数据库:关系型和文档型(也称为NoSQL或对象)。关系数据库如SQL Server,MySQL,Oracle的数据存储在表中。文档数据库如MongoDB,CouchDB,Redis将数据集作为个体对象存储。IndexedDB是一个文档数据库，它在完全内置于浏览器中的一个沙盒环境中(强制依照（浏览器）同源策略)。

对数据库的每次操作，描述为通过一个请求打开数据库,访问一个object store，再继续。

**打开数据库的请求生命周期**

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161016123326755)

**IndexedDB是否适合我的应用程序?**

现在最关键的问题:“IndexedDB是否适合我的应用程序?“像往常一样,答案是肯定的:“视情况而定。“首先当你试图在客户端保存数据时，你会考虑HTML5本地存储。本地存储得到广泛浏览器的支持，有非常易于使用的API。简单有其优势,但其劣势是无法支持复杂的搜索策略,存储大量的数据,并提供事务支持。

IndexedDB是一个数据库。所以,当你想为客户端做出决定,考虑你如何在服务端选择一个持久化介质的数据库。你可能会问自己一些问题来帮助决定客户端数据库是否适合您的应用程序，包括:

 - 你的用户通过浏览器访问您的应用程序,（浏览器）支持IndexedDB API吗 ? 
 - 你需要存储大量的数据在客户端?
 - 你需要在一个大型的数据集合中快速定位单个数据点? 
 - 你的架构在客户端需要事务支持吗?
 
 如果你对其中的任何问题回答了“是的”,很有可能,IndexedDB是你的应用程序的一个很好的候选。

**IndexedDB用法**

现在,你已经有机会熟悉了一些的整体概念,下一步是开始实现基于IndexedDB的应用程序。第一个步骤需要统一IndexedDB在不同浏览器的实现。您可以很容易地添加各种厂商特性的选项的检查，同时在window对象上把它们设置为官方对象相同的名称。下面的清单展示了window.indexedDB，window.IDBTransaction，window.IDBKeyRange的最终结果是如何都被更新，它们被设置为相应的浏览器的特定实现。

```
		window.indexedDB = window.indexedDB ||
		                   window.mozIndexedDB ||
		                   window.webkitIndexedDB ||
		                   window.msIndexedDB;
		 
		window.IDBTransaction = window.IDBTransaction ||
		                   window.webkitIDBTransaction ||
		                   window.msIDBTransaction;
		 
		window.IDBKeyRange = window.IDBKeyRange ||
		                   window.webkitIDBKeyRange ||
		                   window.msIDBKeyRange;
```

现在,每个数据库相关的全局对象持有正确的版本,应用程序可以准备使用IndexedDB开始工作。

**打开数据库**

```
// 打开我们的数据库,数据库名称,版本号
var request = indexedDB.open("MyTestDatabase", 3);
```

**indexedDB的三个事件**

```
//数据库打开成功执行
request.onsuccess = function (event) 
{
      // Better use "this" than "req" to get the result to avoid problems with
      // garbage collection.
      // db = request.result;
      db = this.result;
      console.debug("initDb DONE");
};
//数据库打开失败执行
request.onerror = function (event) 
{
      console.error("initDb:", evt.target.errorCode);
};
//在数据库第一次被打开时或者当指定的版本号高于当前被持久化的数据库的版本号时,触发此事件,可以在这个地方创建对象存储空间结构,更新结构,加索引等.
request.onupgradeneeded = function (event) 
{
      console.debug("initDb.onupgradeneeded");
      var store = event.currentTarget.result.createObjectStore(
        DB_STORE_NAME, { keyPath: 'id', autoIncrement: true });
};
```

**添加数据或更新数据**

```
// 我们的客户数据看起来像这样。
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
];

var transaction = db.transaction(["customers"], "readwrite");

// 当所有的数据都被增加到数据库时执行一些操作
transaction.oncomplete = function(event) {
  alert("All done!");
};

transaction.onerror = function(event) {
  // 不要忘记进行错误处理！
};

var objectStore = transaction.objectStore("customers");
for (var i in customerData) 
{
  var request = objectStore.add(customerData[i]);
  request.onsuccess = function(event) 
  {
    // event.target.result == customerData[i].ssn
  };
}
```

**删除数据**

```
var request = db.transaction(["customers"], "readwrite")
                .objectStore("customers")
                .delete("444-44-4444");
request.onsuccess = function(event) {
  // 删除数据成功！
};
```

**获取数据**

```
var transaction = db.transaction(["customers"]);
var objectStore = transaction.objectStore("customers");
var request = objectStore.get("444-44-4444");
request.onerror = function(event) 
{
  // 错误处理!
};
request.onsuccess = function(event) 
{
  // 对 request.result 做些操作！
  alert("Name for SSN 444-44-4444 is " + request.result.name);
};
```
对于一个“简单”的提取这里的代码有点多了。下面看我们怎么把它再缩短一点，假设你在数据库的级别上来进行的错误处理：

```
db.transaction("customers").objectStore("customers").get("444-44-4444").onsuccess = function(event) 
{
  alert("Name for SSN 444-44-4444 is " + event.target.result.name);
};
```

**使用游标获取数据**

使用 get() 要求你知道你想要检索哪一个键。如果你想要遍历对象存储空间中的所有值，那么你可以使用游标。看起来会像下面这样：

```
var customers = [];

var objectStore = db.transaction("customers").objectStore("customers");

objectStore.openCursor().onsuccess = function(event) 
{
  var cursor = event.target.result;
  if (cursor) 
  {
    customers.push(cursor.value);
    cursor.continue();
  }
  else 
  {
    alert("Got all customers: " + customers);
  }
};
```


----------
这里有一个封装好的完整的例子，简化了这些操作。

```	 
<script type="text/javascript">

		window.indexedDB = window.indexedDB ||
		                   window.mozIndexedDB ||
		                   window.webkitIndexedDB ||
		                   window.msIndexedDB;
		 
		window.IDBTransaction = window.IDBTransaction ||
		                   window.webkitIDBTransaction ||
		                   window.msIDBTransaction;
		 
		window.IDBKeyRange = window.IDBKeyRange ||
		                   window.webkitIDBKeyRange ||
		                   window.msIDBKeyRange;
		 
		(function(window){
		 
		    'use strict';
		 
		    var db = {
		 
		        version: 1, // important: only use whole numbers!
		 
		        objectStoreName: 'tasks',
		 
		        instance: {},
		 
		        upgrade: function (e) {
		 
		            var
		                _db = e.target.result,
		                names = _db.objectStoreNames,
		                name = db.objectStoreName;
		 
		            if (!names.contains(name)) {
		 
		                _db.createObjectStore(
		                    name,
		                    {
		                        keyPath: 'id',
		                        autoIncrement: true
		                    });
		            }
		        },
		 
		        errorHandler: function (error) {
		            window.alert('error: ' + error.target.code);
		            debugger;
		        },
		 
		        open: function (callback) {
		 
		            var request = window.indexedDB.open(
		                db.objectStoreName, db.version);
		 
		            request.onerror = db.errorHandler;
		 
		            request.onupgradeneeded = db.upgrade;
		 
		            request.onsuccess = function (e) {
		 
		                db.instance = request.result;
		 
		                db.instance.onerror =
		                    db.errorHandler;
		 
		                callback();
		            };
		        },
		 
		        getObjectStore: function (mode) {
		 
		            var txn, store;
		 
		            mode = mode || 'readonly';
		 
		            txn = db.instance.transaction(
		                [db.objectStoreName], mode);
		 
		            store = txn.objectStore(
		                db.objectStoreName);
		 
		            return store;
		        },
		 
		        save: function (data, callback) {
		 
		            db.open(function () {
		 
		                var store, request,
		                    mode = 'readwrite';
		 
		                store = db.getObjectStore(mode),
		 
		                request = data.id ?
		                    store.put(data) :
		                    store.add(data);
		 
		                request.onsuccess = callback;
		            });
		        },
		 
		        getAll: function (callback) {
		 
		            db.open(function () {
		 
		                var
		                    store = db.getObjectStore(),
		                    cursor = store.openCursor(),
		                    data = [];
		 
		                cursor.onsuccess = function (e) {
		 
		                    var result = e.target.result;
		 
		                    if (result &&
		                        result !== null) {
		 
		                        data.push(result.value);
		                        result.continue();
		 
		                    } else {
		 
		                        callback(data);
		                    }
		                };
		 
		            });
		        },
		 
		        get: function (id, callback) {
		 
		            id = parseInt(id);
		 
		            db.open(function () {
		 
		                var
		                    store = db.getObjectStore(),
		                    request = store.get(id);
		 
		                request.onsuccess = function (e){
		                    callback(e.target.result);
		                };
		            });
		        },
		 
		        'delete': function (id, callback) {
		 
		            id = parseInt(id);
		 
		            db.open(function () {
		 
		                var
		                    mode = 'readwrite',
		                    store, request;
		 
		                store = db.getObjectStore(mode);
		 
		                request = store.delete(id);
		 
		                request.onsuccess = callback;
		            });
		        },
		 
		        deleteAll: function (callback) {
		 
		            db.open(function () {
		 
		                var mode, store, request;
		 
		                mode = 'readwrite';
		                store = db.getObjectStore(mode);
		                request = store.clear();
		 
		                request.onsuccess = callback;
		            });
		 
		        }
		    };
		 
		    window.app = window.app || {};
		    window.app.db = db;
		 
		}(window));


		//将数据显示在页面上的方法
        var bindData = function (data) {

            $("#IndexedDB").html('');

            if(data.length === 0){
                $("#IndexedDB").html("没有数据");
                return;
            }

            data.forEach(function (note) {
            	$("#IndexedDB").append(note.id+","+note.title+","+note.text);
            });
        };

        //一个新数据
        var note = 
        {
				id:1,
                title: "数据1",
                text: "数据1的另一个字段"
        };
        //又一个新数据
        var note2 = 
        {
				id:2,
                title: "数据2",
                text: "数据2的另一个字段"
        };
		//插入或更新数据(insert or update)
		window.app.db.save(note,function()
		{
			//window.app.db.getAll(bindData);
		});
		window.app.db.save(note2);

		//获取数据
		window.app.db.get(1,function(item)
		{
			//alert("window.app.db.get:"+item.id+","+item.title+","+item.text);
		});

 		//删除数据
		window.app.db.delete(1,function()
		{
			//alert("window.app.db.get:"+item.id+","+item.title+","+item.text);
		}); 

		//删除所有
		window.app.db.deleteAll(function()
		{
			//alert("window.app.db.get:"+item.id+","+item.title+","+item.text);
		});
		
</script>
```

想对IndexedDB更多用法进行了解的可以参考这两篇文章。

[https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB)

[http://web.jobbole.com/81793/](http://web.jobbole.com/81793/)

----------
除了IndexedDB以外，还有一种已经被W3C放弃的Web SQL。

浏览器支持本地数据库并不是从IndexedDB才开始实现,它是在Web SQL实现之后的一种新方法。类似IndexedDB,Web SQL是一个客户端数据库,但它作为一个关系数据库的实现,使用结构化查询语言(SQL)与数据库通信。Web SQL的历史充满了曲折,但底线是没有主流的浏览器厂商对Web SQL继续支持。

如果Web SQL实际上是一个废弃的技术,为什么还要提它呢?有趣的是,Web SQL在浏览器里得到稳固的支持。Chrome, Safari, iOS Safari, and Android 浏览器都支持。另外,并不是这些浏览器的最新版本才提供支持,许多这些最新最好的浏览器之前的版本也可以支持。有趣的是,如果你为Web SQL添加支持来支持IndexedDB,你突然发现,许多浏览器厂商和版本成为支持浏览器内置数据库的某种化身。

因此,如果您的应用程序真正需要一个客户端数据库，你想要达到的最高级别的采用可能,当IndexedDB不可用时，也许您的应用程序可能看起来需要选择使用Web SQL来支持客户端数据架构。虽然文档数据库和关系数据库管理数据有鲜明的差别,但只要你有正确的抽象，就可以使用本地数据库构建一个应用程序。

Web SQL的用法类似于操作SQLite数据库，在这里不展开介绍了。
想对Web SQL了解更多，可以参考这篇文章：[http://www.ibm.com/developerworks/cn/web/1210_jiangjj_html5db/](http://www.ibm.com/developerworks/cn/web/1210_jiangjj_html5db/)

**（4）文件接口（File API）**
---------------------

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161016174620701)

在之前我们操作本地文件都是使用flash、silverlight或者第三方的activeX插件等技术，由于使用了这些技术后就很难进行跨平台、或者跨浏览器、跨设备等情况下实现统一的表现，从另外一个角度来说就是让我们的web应用依赖了第三方的插件，而不是很独立，不够通用。在HTML5标准中，默认提供了操作文件的API让这一切直接标准化。有了操作文件的API，让我们的Web应用可以很轻松的通过JS来控制文件的读取、写入、文件夹、文件等一系列的操作。

先看一个demo。之前我们操作一个图片文件，都是先将图片上传到服务器端，然后再使用一个img标签指向到服务器的url地址，然后再进行一个使用第三方插件进行图片处理，而现在这一切都不需要服务器端了，因为FileReader对象提供的几个读取文件的方法变得异常简单，而且全部是客户端js的操作。

[http://html5demos.com/file-api/](http://html5demos.com/file-api/)

现在我们自己来使用这些API。

先写好我们的HTML页面。

```
	<input type="file" multiple="multiple" name="fileDemo" id="fileDemo" />
	<br />
	<input type="button" value="获取文件的名字" id="btnGetFile" />
	<input type="button" value="readAsDataURL" id="readAsDataURL" onclick="showDataByURL();" />
	<input type="button" value="readAsBinaryString" id="readAsBinaryString" onclick="showDataByBinaryString();" />
	<input type="button" value="readAsText" id="readAsText" onclick="showDataByText();" />
	<div id="result"></div>
```

**获取文件名**

```
			$("#btnGetFile").click(function(e)
			{
				var fileList = document.getElementById("fileDemo").files;
				for (var i = 0; i < fileList.length; i++)
				{
					if (!(/image\/\w+/.test(fileList[i].type)))
					{
						$("#result").append("<span>type:" + fileList[i].type + "--******非图片类型*****--name:" + fileList[i].name + "--size:" + fileList[i].size + "</span><br />");
					}
					else
					{
						$("#result").append("<span>type:" + fileList[i].type + "--name:" + fileList[i].name + "--size:" + fileList[i].size + "</span><br />");
					}
				}
			});
```

**readAsDataURL()**

开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.

这个方法很有用,比如,可以实现图片的本地预览.

```
		function showDataByURL()
		{
			var resultFile = document.getElementById("fileDemo").files[0];
			if (resultFile)
			{
				var reader = new FileReader();

				reader.readAsDataURL(resultFile);
				reader.onload = function(e)
				{
					var urlData = this.result;
					document.getElementById("result").innerHTML += "<img src='" + urlData + "' alt='" + resultFile.name + "' />";
				};

			}

		}
```

**readAsBinaryString()**

开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含所读取文件的原始二进制数据.

```

		function showDataByBinaryString()
		{
			var resultFile = document.getElementById("fileDemo").files[0];
			if (resultFile)
			{
				var reader = new FileReader();
				//异步方式，不会影响主线程
				reader.readAsBinaryString(resultFile);

				reader.onload = function(e)
				{
					var urlData = this.result;
					document.getElementById("result").innerHTML += urlData;
				};
			}
		}

```

**readAsText()**

开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个字符串以表示所读取的文件内容.

```

		function showDataByText()
		{
			var resultFile = document.getElementById("fileDemo").files[0];
			if (resultFile)
			{
				var reader = new FileReader();

				reader.readAsText(resultFile, 'gb2312');
				reader.onload = function(e)
				{
					var urlData = this.result;
					document.getElementById("result").innerHTML += urlData;
				};
			}
		}
```

**事件处理程序**

**onabort**
当读取操作被中止时调用.
**onerror**
当读取操作发生错误时调用.
**onload**
当读取操作成功完成时调用.
**onloadend**
当读取操作完成时调用,不管是成功还是失败.该处理程序在onload或者onerror之后调用.
**onloadstart**
当读取操作将要开始之前调用.
**onprogress**
在读取数据过程中周期性调用.

----------
在文件上传时，HTML5还支持拖拽功能。

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161016211627717)

```
<div id="holder"></div> 

var holder = document.getElementById('holder');

holder.ondrop = function (e) 
{
  e.preventDefault();

  var file = e.dataTransfer.files[0],
      reader = new FileReader();
      
  reader.onload = function (event) 
  {
    console.log(event.target);
    holder.style.background = 'url(' + event.target.result + ') no-repeat center';
  };
  
  console.log(file);
  reader.readAsDataURL(file);

  return false;
};
```

----------

想对HTML5文件接口操作文件了解更多请参考下面的文章：

[https://developer.mozilla.org/zh-CN/docs/Using_files_from_web_applications](https://developer.mozilla.org/zh-CN/docs/Using_files_from_web_applications)

[https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)

[http://blog.csdn.net/testcs_dn/article/details/8695532](http://blog.csdn.net/testcs_dn/article/details/8695532)

[http://www.cnblogs.com/fly_dragon/archive/2012/06/02/2532035.html](http://www.cnblogs.com/fly_dragon/archive/2012/06/02/2532035.html)

**③ 设备访问特性 (DEVICE ACCESS)**
============================

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161016182417499)

来一段W3C对这个特性的介绍。

*Beginning with the **Geolocation API**, Web Applications can present rich, device-aware features and experiences. Incredible device access innovations are being developed and implemented, from **audio/video input access to microphones and cameras**, to local data such as **contacts & events**, and even **tilt orientation**.*

大致包含 `地理位置API` ，`媒体访问API` ，`访问联系人及事件`，`设备方向`。

下面分别进行研究。

**（1）地理位置API（Geolocation API）**
-------------------------------

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161016184412710)

HTML5 Geolocation API 用于获得用户的地理位置。
鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。一般网页在调用此信息时，会弹出权限申请窗口。

先上Demo：[http://www.w3school.com.cn/tiy/t.asp?f=html5_geolocation_error](http://www.w3school.com.cn/tiy/t.asp?f=html5_geolocation_error)

如果电脑获取不到位置信息的话，就在手机上试一下吧。

**getCurrentPosition()**

 getCurrentPosition() 方法来获得用户的位置。

标准用法如下：

```
<script>
	var x=document.getElementById("demo");
	function getLocation()
	{
	  if (navigator.geolocation)
	  {
		  navigator.geolocation.getCurrentPosition(showPosition);
	  }
	  else
	  {
		  x.innerHTML="Geolocation is not supported by this browser.";
	  }
	}
	function showPosition(position)
	{
		x.innerHTML="Latitude: " + position.coords.latitude + "<br />Longitude: " + position.coords.longitude;
	}
</script>
```

-检测是否支持地理定位
-如果支持，则运行 getCurrentPosition() 方法。如果不支持，则向用户显示一段消息。
-如果getCurrentPosition()运行成功，则向参数showPosition中规定的函数返回一个coordinates对象
-showPosition() 函数获得并显示经度和纬度

上面的例子是一个非常基础的地理定位脚本，不含错误处理。

完整的处理应该是这样的.

```
	<script>
		var x = document.getElementById("demo");
		function getLocation()
		{
			if (navigator.geolocation)
			{
				navigator.geolocation.getCurrentPosition(showPosition, showError);
			}
			else
			{
				x.innerHTML = "Geolocation is not supported by this browser.";
			}
		}
		function showPosition(position)
		{
			x.innerHTML = "Latitude: " + position.coords.latitude + "<br />Longitude: " + position.coords.longitude;
		}
		function showError(error)
		{
			switch (error.code)
			{
				case error.PERMISSION_DENIED:
					x.innerHTML = "User denied the request for Geolocation."
					break;
				case error.POSITION_UNAVAILABLE:
					x.innerHTML = "Location information is unavailable."
					break;
				case error.TIMEOUT:
					x.innerHTML = "The request to get user location timed out."
					break;
				case error.UNKNOWN_ERROR:
					x.innerHTML = "An unknown error occurred."
					break;
			}
		}
	</script>
```

错误代码：
-Permission denied - 用户不允许地理定位
-Position unavailable - 无法获取当前位置
-Timeout - 操作超时
-Unknown error - 未知错误

如果想对地理位置API了解更多，可以参考这个网址。[http://www.w3school.com.cn/html5/html_5_geolocation.asp](http://www.w3school.com.cn/html5/html_5_geolocation.asp)

**（2）媒体访问API（media API）**
-------------------------

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161016190622316)

先上demo。麦克风和摄像头也涉及到用户隐私，所以浏览器会向用户申请访问权限。

[https://www.ganecheng.site/html5/media.html](https://www.ganecheng.site/html5/media.html)

**getUserMedia()**

以上的效果，都是通过getUserMedia()方法实现的。

```
	<video id="video" autoplay="autoplay" style='width: 640px; height: 480px'></video>
	<button id='picture'>PICTURE</button>
	<canvas id="canvas" width="640" height="480"></canvas>
```

```
		var video = document.getElementById("video");
		var context = canvas.getContext("2d");
		var errocb = function(code)
		{
			console.log(code);
		};
		if (navigator.getUserMedia)
		{ // 标准的API
			navigator.getUserMedia(
			{
				"video" : true
			}, function(stream)
			{
				video.src = stream;
				video.play();
			}, errocb);
		}
		else if (navigator.webkitGetUserMedia)
		{ // WebKit 核心的API

			console.log(navigator.webkitGetUserMedia);
			navigator.webkitGetUserMedia(
			{
				"video" : true
			}, function(stream)
			{

				video.src = window.webkitURL.createObjectURL(stream);
				video.play();
			}, errocb);

		}
		//    将拍好的照片显示在画布上
		document.getElementById("picture").addEventListener("click", function()
		{
			context.drawImage(video, 0, 0, 640, 480);
		});
```

视频获取就是这个样子，音频获取添加`"audio" : true`即可。

想对媒体API了解更多，参考文章：[http://blog.csdn.net/u010359143/article/details/50326981](http://blog.csdn.net/u010359143/article/details/50326981)

[http://blog.csdn.net/renfufei/article/details/21168239](http://blog.csdn.net/renfufei/article/details/21168239)

[http://www.jb51.net/html5/81028.html](http://www.jb51.net/html5/81028.html)

**（3）联系人管理API（Contacts Manager API）**
-------------------------------------

这个纯属于W3C的美好设想，还没有正式纳入标准。目前没有搜到靠谱的资料。

当初的提议可以参考这里。[http://contacts-manager-api.sysapps.org/](http://contacts-manager-api.sysapps.org/)

但是有两个类似的变通实现。

**FirefoxOS**（已结束生命）示例代码。

```
var request = window.navigator.contacts.getAll();
var count = 0;
request.onsuccess = function () 
{
  if(this.result) 
  {
    count++;
    // Display the name of the contact
    console.log(this.result.givenName + ' ' + this.result.familyName);
    // Move to the next contact which will call the request.onsuccess with a new result
    this.continue();
  } else 
  {
    console.log(count + 'contacts found.');
  }
}
request.onerror = function () {}
```

想要对这个已无生命气息的web操作系统了解更多的参考这里 [https://developer.mozilla.org/en-US/docs/Mozilla/B2G_OS/API/ContactManager](https://developer.mozilla.org/en-US/docs/Mozilla/B2G_OS/API/ContactManager)

**Cordova**（Hybrid App）实现方式参考这里[https://cordova.apache.org/docs/en/3.0.0/cordova/contacts/contacts.html](https://cordova.apache.org/docs/en/3.0.0/cordova/contacts/contacts.html)


**（4）设备方向和运动API（DeviceOrientation & DeviceMotion API）**
-------------------------------------------------------

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161016203415812)

DeviceOrientation常用于检测重力感应方向，DeviceMotion常用于摇一摇功能。

**① DeviceOrientation**

重力感应也是原生APP中经常见到的一个功能，在Web App中的应用多见于判断屏幕的旋转方向，以及在此基础上实现的场景应用，如控制页面上物体的左右移动，加减速等。

在Web App中实现以上的功能，需要实时获取屏幕的旋转方向参数，这些参数可以从浏览器的利用HTML5的DeviceOrientation API获得。

当浏览器的Orientation发生变化时，触发DeviceOrientation事件，并返回一个DeviceOrientationEvent对象，其属性列表如下：

| 属性 | 释义 | 
| ------------- |:-------------|
| alpha | 设备指示的方向，根据指南针的设定情况而定 | 
| beta | 设备绕x轴旋转的角度 | 
| gamma | 设备绕y轴旋转的角度 | 

注：不同版本的手机操作系统和浏览器，以及不同的应用程序中内置的浏览器对deviceorientation事件的支持不尽相同。尤其在Android平台上，可能会出现有的设备正常工作，有的则毫无反应的情况。

**工作原理**

根据event对象的三个方向的参数来确定设备的旋转角度。其中，alpha的取值范围是0-360,这个需要根据设备的指南针设定情况而定，一般来说，设备指向正北方向时为0.beta值为设备绕x轴旋转的角度，取值范围为-180-180。gamma取值范围-90-90.

这里面alpha值的意义并不大，主要参考beta和gamma值。
当屏幕从水平沿y轴向左倾斜时gamma值变为负值，向右倾斜变为正值。
档屏幕从水平沿x轴向前倾斜时beta值变为正值，向后倾斜时变为负值。
所以，如果我们设定一个阈值，当beta和gamma的绝对值大于这个阈值时，我们就认为设备发生了旋转。另外根据beta和gamma的值来判断向左倾斜还是向右倾斜，以及倾斜的程度。

**实现方式和示例**

首先是为浏览器绑定deviceorientation事件和处理程序。

```
//add deviceorientation event listener
if(window.DeviceOrientationEvent)
{
    window.addEventListener('deviceorientation',DeviceOrientationHandler,false);
}else
{
    alert("您的浏览器不支持DeviceOrientation");
}

function DeviceOrientationHandler(event)
{
        var alpha = event.alpha,
            beta = event.beta,
            gamma = event.gamma;

        if(alpha != null || beta != null || gamma != null)
        {
            dataContainerOrientation.innerHTML = "alpha:" + alpha + "<br />beta:" + beta + "<br />gamma:" + gamma;
            //判断屏幕方向
            var html = "";
            if( Math.abs(gamma) < GAMMA_MIN && Math.abs(beta) > BETA_MAX ){
                html = "屏幕方向：Portrait";
            }

            if( Math.abs(beta) < BETA_MIN && Math.abs(gamma) > GAMMA_MAX ){
                html = "屏幕方向：Landscape";
            }

            var gamma_html = "";
            if( gamma > 0 ){
                gamma_html = "向右倾斜";
            }else{
                gamma_html = "向左倾斜";
            }
            html += "<br />"+gamma_html
            stage.innerHTML = html;
        }else
        {
            dataContainerOrientation.innerHTML = "当前浏览器不支持DeviceOrientation";
        }
}
```
这个示例中展示了如何利用beta和gamma值来展示屏幕的旋转方向和侧翻方向。要实现更精确的物体判断，还需要复杂的算法来计算。

**扩展应用**

使用DeviceOrientation API接口可以实现在web中获取手机设备的屏幕旋转方向参数，在示例的基础上进行改进，可以扩展到在屏幕上控制页面元素的移动，实现动画或游戏的目的。例如通过调整屏幕的方向控制页面上的小球走迷宫，控制小车的移动躲避障碍等。

**② DeviceMotion**

摇一摇功能是很多原生APP都可以实现的功能，如微信中的摇一摇找好友，QQ音乐中的摇一摇换歌等。它们都是利用了手机加速传感器提供的API，当监听到手机加速变化的事件时，根据获取的加速值来执行不同的动作。

在Web APP中HTML5 也提供了类似的接口，就是DeviceMotionEvent。DeviceMotion封装了运动传感器数据的事件，可以获取手机运动状态下的运动加速度等数据。

DeviceMotionEvent对象属性列表：

| 属性 | 释义 | 
| ------------- |:-------------|
| event.accelaration | x(y,z):设备在x(y,z)方向上的移动加速度值 | 
| event.accelarationIncludingGravity | x(y,z):考虑了重力加速度后设备在x(y,z)方向上的移动加速度值 | 
| event.rotationRate | 	alpha,beta,gamma:设备绕x,y,z轴旋转的角度 | 

event.accelarationIncludingGravity与event.accelaration的区别在于前者加入了重力加速度，即在z轴方向加了9.8，在x,y方向上的值两者相同。

旋转速度rotationRate：alpha、beta、gamma的概念与DeviceOrientationEvent一致。
区别在于：
DeviceOrientationEvent的值是相对于初始状态的差值，只要设备方向不变，怎么动都不会影响数值；
DeviceMotionEvent是相对于之前的某个瞬间值的差值时间比，即变化的速度，一旦设备静止则会恢复为0。

**实现摇一摇**

```
		function Shake(threshold, callback)
		{
			//定义阈值 
			this.SHAKE_THRESHOLD = threshold ? threshold : 2000;
			this.last_update = 0;
			this.x = this.y = this.z = this.last_x = this.last_y = this.last_z = 0;
			this.init = function()
			{
				if (window.DeviceMotionEvent)
				{
					window.addEventListener('devicemotion', this.deviceMotionHandler, false);
				}
				else
				{
					alert('您的浏览器不支持DeviceMotion');
				}
			};
			var that = this;
			this.deviceMotionHandler = function(eventData)
			{
				var acceleration = eventData.accelerationIncludingGravity;
				var curTime = new Date().getTime();
				if ((curTime - that.last_update) > 100)
				{
					var diffTime = curTime - that.last_update;
					that.last_update = curTime;
					that.x = acceleration.x;
					that.y = acceleration.y;
					that.z = acceleration.z;
					var speed = Math.abs(that.x + that.y + that.z - that.last_x - that.last_y - that.last_z) / diffTime * 10000;
					if (speed > that.SHAKE_THRESHOLD)
					{
						if (window.console && console.log)
						{
							console.log("shaked");
						}
						if (callback != undefined)
						{
							callback(that);
						}
					}
					that.last_x = that.x;
					that.last_y = that.y;
					that.last_z = that.z;
				}
			}
		};

		window.onload = function()
		{
			var shake1 = new Shake(2000, function(obj)
			{
				alert("shaked");
				var r = document.getElementById("result");
				r.innerHTML = "x:" + obj.x + "";
				r.innerHTML += "y:" + obj.y + "";
				r.innerHTML += "z:" + obj.z + "";
			});
			shake1.init();
		};
```

设备方向和运动API涉及到一些数学知识。想要对这一API了解更多，可以参考下面两篇文章。

[http://www.jianshu.com/p/5769075e9885](http://www.jianshu.com/p/5769075e9885)

[http://w3c.github.io/deviceorientation/spec-source-orientation.html](http://w3c.github.io/deviceorientation/spec-source-orientation.html)

**④ 连接特性（CONNECTIVITY）**
========================

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161016211225716)

先看W3C的定义。

*More efficient connectivity means more real-time chats, faster games, and better communication. **Web Sockets** and **Server-Sent Events** are pushing (pun intended) data between client and server more efficiently than ever before.*

HTTP是无连接的，一次请求，一次响应。想要实现微信网页版扫一扫登录，网页版微信聊天的功能，需要使用轮询的方式达到长连接的效果，轮询的大部分时间是在做无用功，浪费网络，浪费资源。现在HTML5为我们带来了更高效的连接方案 **Web Sockets** 和 **Server-Sent Events** 。

下面对这两种连接方式分别进行研究。

**（1）网页Sockets（Web Sockets）**
-----------------------------

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161016212609611)

**运行原理**

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161016213445237)

**浏览器端示例**

```
var wsServer = 'ws://localhost:8888/Demo'; //服务器地址
var websocket = new WebSocket(wsServer); //创建WebSocket对象
websocket.send("hello");//向服务器发送消息
alert(websocket.readyState);//查看websocket当前状态
websocket.onopen = function (evt) 
{
//已经建立连接
};
websocket.onclose = function (evt) 
{
//已经关闭连接
};
websocket.onmessage = function (evt) 
{
//收到服务器消息，使用evt.data提取
};
websocket.onerror = function (evt) 
{
//产生异常
}; 
```

**服务器端**

握手协议的客户端数据已经由浏览器代劳了，服务器端需要我们自己来实现，目前市场上开源的实现也比较多如：

    Kaazing WebSocket Gateway(一个 Java 实现的 WebSocket Server)；
    mod_pywebsocket(一个 Python 实现的 WebSocket Server)；
    Netty(一个 Java 实现的网络框架其中包括了对 WebSocket 的支持)；
    node.js(一个 Server 端的 JavaScript 框架提供了对 WebSocket 的支持)；
    WebSocket4Net(一个.net的服务器端实现)；

其实在目前的.net4.5框架中已经实现了WebSocket，不用官方实现，我们自己来写个简单的。服务器端需要根据协议来握手、接收和发送。

**握手**

```
/// <summary>
/// 生成Sec-WebSocket-Accept
/// </summary>
/// <param name="handShakeText">客户端握手信息</param>
/// <returns>Sec-WebSocket-Accept</returns>
private static string GetSecKeyAccetp(byte[] handShakeBytes,int bytesLength)
{
	string handShakeText = Encoding.UTF8.GetString(handShakeBytes, 0, bytesLength);
	string key = string.Empty;
	Regex r = new Regex(@"Sec-WebSocket-Key:(.*?)rn");
	Match m = r.Match(handShakeText);
	if (m.Groups.Count != 0)
	{
		key = Regex.Replace(m.Value, @"Sec-WebSocket-Key:(.*?)rn", "$1").Trim();
	}
	byte[] encryptionString = SHA1.Create().ComputeHash(Encoding.ASCII.GetBytes(key + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"));
	return Convert.ToBase64String(encryptionString);
}
```

如果握手成功，将会触发客户端的onopen事件。

**解析接收的客户端信息**

```
/// <summary>
/// 解析客户端数据包
/// </summary>
/// <param name="recBytes">服务器接收的数据包</param>
/// <param name="recByteLength">有效数据长度</param>
/// <returns></returns>
private static string AnalyticData(byte[] recBytes, int recByteLength)
{
	if (recByteLength < 2) { return string.Empty; }
	 
	bool fin = (recBytes[0] & 0x80) == 0x80; // 1bit，1表示最后一帧
	if (!fin){
	return string.Empty;// 超过一帧暂不处理
	}
	 
	bool mask_flag = (recBytes[1] & 0x80) == 0x80; // 是否包含掩码
	if (!mask_flag){
	return string.Empty;// 不包含掩码的暂不处理
	}
	 
	int payload_len = recBytes[1] & 0x7F; // 数据长度
	 
	byte[] masks = new byte[4];
	byte[] payload_data;
	 
	if (payload_len == 126)
	{
		Array.Copy(recBytes, 4, masks, 0, 4);
		payload_len = (UInt16)(recBytes[2] << 8 | recBytes[3]);
		payload_data = new byte[payload_len];
		Array.Copy(recBytes, 8, payload_data, 0, payload_len);
		 
	}
	else if (payload_len == 127)
	{
		Array.Copy(recBytes, 10, masks, 0, 4);
		byte[] uInt64Bytes = new byte[8];
		for (int i = 0; i < 8; i++)
		{
		uInt64Bytes[i] = recBytes[9 - i];
		}
		UInt64 len = BitConverter.ToUInt64(uInt64Bytes, 0);
		 
		payload_data = new byte[len];
		for (UInt64 i = 0; i < len; i++)
		{
		payload_data[i] = recBytes[i + 14];
		}
	}else
	{
		Array.Copy(recBytes, 2, masks, 0, 4);
		payload_data = new byte[payload_len];
		Array.Copy(recBytes, 6, payload_data, 0, payload_len);
		 
	}
	 
	for (var i = 0; i < payload_len; i++)
	{
	payload_data[i] = (byte)(payload_data[i] ^ masks[i % 4]);
	}
	return Encoding.UTF8.GetString(payload_data);
}
```
**发送数据至客户端**

```
/// <summary>
/// 打包服务器数据
/// </summary>
/// <param name="message">数据</param>
/// <returns>数据包</returns>
private static byte[] PackData(string message)
{
	byte[] contentBytes = null;
	byte[] temp = Encoding.UTF8.GetBytes(message);
	 
	if (temp.Length < 126)
	{
		contentBytes = new byte[temp.Length + 2];
		contentBytes[0] = 0x81;
		contentBytes[1] = (byte)temp.Length;
		Array.Copy(temp, 0, contentBytes, 2, temp.Length);
	}else if (temp.Length < 0xFFFF)
	{
		contentBytes = new byte[temp.Length + 4];
		contentBytes[0] = 0x81;
		contentBytes[1] = 126;
		contentBytes[2] = (byte)(temp.Length & 0xFF);
		contentBytes[3] = (byte)(temp.Length >> 8 & 0xFF);
		Array.Copy(temp, 0, contentBytes, 4, temp.Length);
	}else
	{
	// 暂不处理超长内容
	}
	 
	return contentBytes;
}
```

Web Sockets 是一个非常棒的设计，想要了解更多，参考这里。

[https://my.oschina.net/u/1266171/blog/357488](https://my.oschina.net/u/1266171/blog/357488)


**（2）服务器发送事件（Server-Sent Events）**
----------------------------------

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161016212656539)

**运行原理**

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161016215817705)

浏览器通过HTTP向服务器发送请求，服务器端拿出数据库中的最新的信息，立即返回给客户端，客户端等待三秒后再次发出下一个请求。

**客户端示例**

```
<script>
if(typeof(EventSource)!=="undefined")
{
  var source=new EventSource("/example/html5/demo_sse.php");
  source.onmessage=function(event)
    {
    document.getElementById("result").innerHTML+=event.data + "<br />";
    };
}
else
{
  document.getElementById("result").innerHTML="Sorry, your browser does not support server-sent events...";
}
</script>
```

**服务器端示例**

```
<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$time = date('r');
echo "data: The server time is: {$time}\n\n";
flush();
?>
```

想要对Server-Sent Events了解更多的，可以参考这两篇文章。

[http://www.w3school.com.cn/html5/html_5_serversentevents.asp](http://www.w3school.com.cn/html5/html_5_serversentevents.asp)

[http://www.ibm.com/developerworks/cn/web/1307_chengfu_serversentevent/](http://www.ibm.com/developerworks/cn/web/1307_chengfu_serversentevent/)


----------
**服务器负载**

-Long-polling占一小部分CPU资源，但是创建空的进程将浪费系统的内存
-Server-Sent Events工作的方式有很多，除非Server-Sent Events不必在每一次响应发出后都关闭连接。
-WebSockets，服务器只需要一个进程处理所有的请求，没有循环，不必为每个客户端都分配cpu和内存。

**客户端负载**

-Long-polling取决于实现方式，但终究是一个异步的方式
-Server-Sent Events采用浏览器的内置的实现方式，只花费很少的一部分资源。
-WebSockets跟Server-Sent Events一样，采用浏览器的内置的实现方式，只花费很少的一部分资源。

**时间线**

-Long-polling接近实时，但是发送新的请求和发送相应会有一定的时延。
-Server-Sent Events默认延时3秒，但是可以调整。
-WebSockets真正的实时

**实现方式复杂度**

-Long-polling实现起来非常简单
-Server-Sent Events甚至比Long-polling更简单
-需要一个WebSockets服务器处理事件，并开放一个端口


----------


想要对轮询，Web Sockets，Server-Sent Events三者的区别有所了解的，可以参考这篇文章。

[https://www.oschina.net/question/82993_63312](https://www.oschina.net/question/82993_63312)

**⑤ 网页多媒体特性(MULTIMEDIA)**
=========================

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161016221136054)

看一下W3C的定义。

***Audio** and **video** are first class citizens in the HTML5 web, living in harmony with your apps and sites. Lights, camera, action!*

看的出来HTML5原生支持音视频让W3C很兴奋。也是广大开发者多年的期待。终于可以将Flash踹入茅坑了。

**Audio 和 Video 标签**
--------------------

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161016221746199)

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161016221755776)

虽然支持音视频很强大，但是确实没有什么好说的，就是两个标签。

```
<audio controls="controls">
  <source src="song.ogg" type="audio/ogg">
  <source src="song.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```

```
<video width="320" height="240" controls="controls">
  <source src="movie.ogg" type="video/ogg">
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

但是由于音视频相对于其他新特性来说会被更多的使用，各个浏览器的兼容问题应该引起开发者的重视。统一各平台的播放器ckplayer值得借鉴。可以参考此网页[http://www.ckplayer.com/](http://www.ckplayer.com/)。

**Audio API**
-------------

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161016224758868)

HTML5 音频处理接口与Audio标签是不一样的。页面上的Audio标签只是HTML5更语义化的一个表现，而HTML5提供给JavaScript编程用的Audio API则让我们有能力在代码中直接操作原始的音频流数据，对其进行任意加工再造。

先上demo，[http://wayou.github.io/HTML5_Audio_Visualizer/](http://wayou.github.io/HTML5_Audio_Visualizer/)，打开页面之后，打开一首本地歌曲。然后可以显示可视化效果。

**原理**

一段音频到达扬声器进行播放之前，半路对其进行拦截，于是我们就得到了音频数据了，这个拦截工作是由window.AudioContext来做的，我们所有对音频的操作都基于这个对象。通过AudioContext可以创建不同各类的AudioNode，即音频节点，不同节点作用不同，有的对音频加上滤镜比如提高音色(比如BiquadFilterNode)，改变单调，有的音频进行分割，比如将音源中的声道分割出来得到左右声道的声音（ChannelSplitterNode），有的对音频数据进行频谱分析。

所有的操作都是基于AudioContext这个对象进行的。

得到AudioContext对象。

```
window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;

try {
    var audioContext = new window.AudioContext();
} catch (e) {
    Console.log('!Your browser does not support AudioContext');
}
```

后续的操作，都是与音频解码相关的。想要了解更多HTML5 Audio API。可以参考下面的文章。

[http://www.cnblogs.com/Wayou/p/3543577.html](http://www.cnblogs.com/Wayou/p/3543577.html)

[https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext](https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext)


搜索了一下，并没有找到与Audio API这么强大的功能同一级别的Video API。

**⑥ 三维、图形及特效特性（3D, Graphics & Effects）**
========================================

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161017101741115)

来看W3C的介绍。

*Between **SVG**, **Canvas**, **WebGL**, and **CSS3 3D** features, you're sure to amaze your users with stunning visuals natively rendered in the browser.*

大致包含**SVG**, **Canvas**, **WebGL**, 和 **CSS3 3D**，下面分别进行研究。

**（1）可缩放矢量图形（SVG）**
-------------------

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161017123124155)

SVG是用于描述二维矢量图形的一种图形格式。

先上demo，[http://www.ganecheng.site/html5/svg.html](http://www.ganecheng.site/html5/svg.html)

与其他图像格式相比，使用 SVG 的优势在于：
-SVG 可被非常多的工具读取和修改（比如记事本）
-SVG 与 JPEG 和 GIF 图像比起来，尺寸更小，且可压缩性更强。
-SVG 是可伸缩的
-SVG 图像可在任何的分辨率下被高质量地打印
-SVG 可在图像质量不下降的情况下被放大
-SVG 图像中的文本是可选的，同时也是可搜索的（很适合制作地图）
-SVG 可以与 Java 技术一起运行
-SVG 是开放的标准
-SVG 文件是纯粹的 XML

SVG有三种用法。

**① 把SVG直接当成图片放在网页上**

```
<img style="width: 250px;" alt="kiwi" src="./kiwi.svg">
```

**② SVG动画**

画一个五角星

```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
   <polygon points="100,10 40,180 190,60 10,60 160,180"
   style="fill:red;stroke:blue;stroke-width:3;fill-rule:evenodd;" />
</svg>
```

**③ SVG图片的交互和滤镜效果**

```
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="612px" height="502.174px" viewBox="0 65.326 612 502.174"
		enable-background="new 0 65.326 612 502.174" xml:space="preserve" class="logo99">
	<style>
	.kiwi {
		fill: #94d31b; //
		stroke: #909; //
		stroke-width: 10; // not sure which of these is correct //
		stroke-linejoin : butt | round | square; //
		stroke-linecap: butt| round| square; //
		stroke-dasharray: 5, 5, 10; //
		filter: url(#pictureFilter); //
		mask: url(#f1); //
		clip-path: url();
	}
	
	.kiwi:hover {
		fill: #ace63c;
	}
	
	.ground {
		fill: #787f6a;
	}
	
	.ground:hover {
		filter: url(#pictureFilter);
		fill: #896d3d;
	}
	</style>
	<ellipse class="ground" cx="283.5" cy="487.5" rx="259" ry="80"></ellipse>
	<path class="kiwi"
				d="M210.333,65.331C104.367,66.105-12.349,150.637,1.056,276.449c4.303,40.393,18.533,63.704,52.171,79.03
	  c36.307,16.544,57.022,54.556,50.406,112.954c-9.935,4.88-17.405,11.031-19.132,20.015c7.531-0.17,14.943-0.312,22.59,4.341
	  c20.333,12.375,31.296,27.363,42.979,51.72c1.714,3.572,8.192,2.849,8.312-3.078c0.17-8.467-1.856-17.454-5.226-26.933
	  c-2.955-8.313,3.059-7.985,6.917-6.106c6.399,3.115,16.334,9.43,30.39,13.098c5.392,1.407,5.995-3.877,5.224-6.991
	  c-1.864-7.522-11.009-10.862-24.519-19.229c-4.82-2.984-0.927-9.736,5.168-8.351l20.234,2.415c3.359,0.763,4.555-6.114,0.882-7.875
	  c-14.198-6.804-28.897-10.098-53.864-7.799c-11.617-29.265-29.811-61.617-15.674-81.681c12.639-17.938,31.216-20.74,39.147,43.489
	  c-5.002,3.107-11.215,5.031-11.332,13.024c7.201-2.845,11.207-1.399,14.791,0c17.912,6.998,35.462,21.826,52.982,37.309
	  c3.739,3.303,8.413-1.718,6.991-6.034c-2.138-6.494-8.053-10.659-14.791-20.016c-3.239-4.495,5.03-7.045,10.886-6.876
	  c13.849,0.396,22.886,8.268,35.177,11.218c4.483,1.076,9.741-1.964,6.917-6.917c-3.472-6.085-13.015-9.124-19.18-13.413
	  c-4.357-3.029-3.025-7.132,2.697-6.602c3.905,0.361,8.478,2.271,13.908,1.767c9.946-0.925,7.717-7.169-0.883-9.566
	  c-19.036-5.304-39.891-6.311-61.665-5.225c-43.837-8.358-31.554-84.887,0-90.363c29.571-5.132,62.966-13.339,99.928-32.156
	  c32.668-5.429,64.835-12.446,92.939-33.85c48.106-14.469,111.903,16.113,204.241,149.695c3.926,5.681,15.819,9.94,9.524-6.351
	  c-15.893-41.125-68.176-93.328-92.13-132.085c-24.581-39.774-14.34-61.243-39.957-91.247
	  c-21.326-24.978-47.502-25.803-77.339-17.365c-23.461,6.634-39.234-7.117-52.98-31.273C318.42,87.525,265.838,64.927,210.333,65.331
	  z M445.731,203.01c6.12,0,11.112,4.919,11.112,11.038c0,6.119-4.994,11.111-11.112,11.111s-11.038-4.994-11.038-11.111
	  C434.693,207.929,439.613,203.01,445.731,203.01z">
	</path>
	<filter id="pictureFilter">
	  <feGaussianBlur stdDeviation="15"></feGaussianBlur>
	</filter>
</svg>
```

**如何用SVG画出一条会动的线**

先看demo，[http://www.ganecheng.site/html5/svg_animate_line.html](http://www.ganecheng.site/html5/svg_animate_line.html)

```
<path fill="none" stroke="deeppink" stroke-width="14" stroke-miterlimit="0"

d="M11.6 269s-19.7-42.4 6.06-68.2 48.5-6.06 59.1 12.1l-3.03 28.8 209-227s45.5-21.2 60.6 1.52c15.2 22.7-3.03 47-3.03 47l-225 229s33.1-12 48.5 7.58c50 63.6-50 97-62.1 37.9"

stroke-dasharray="988.0 988.0"

stroke-dashoffset="988.0"

/>
```

```
var path = document.querySelector('.squiggle-animated path');
var length = path.getTotalLength();
// 清除之前的动作
path.style.transition = path.style.WebkitTransition =
  'none';
// 设置起始点
path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;
// 获取一个区域，获取相关的样式，让浏览器寻找一个起始点。
path.getBoundingClientRect();
// 定义动作
path.style.transition = path.style.WebkitTransition =
  'stroke-dashoffset 2s ease-in-out';
// Go!
path.style.strokeDashoffset = '0';
```

**原理**：使用d属性得到一条贝塞尔曲线，使每段线段间距值为线段的1倍长度，慢慢降低偏移值，得到正向的移动效果。

属性stroke-dasharray是让你指定画出的线段每段的长度，第二个值是各段之间空隙的长度。
属性stroke-dashoffset是让你指定每个小段的起始偏移量。

想对SVG了解更多的，可以参考下面的网址。

[http://www.w3school.com.cn/svg/svg_examples.asp](http://www.w3school.com.cn/svg/svg_examples.asp)

[http://www.w3school.com.cn/svg/svg_reference.asp](http://www.w3school.com.cn/svg/svg_reference.asp)

[http://www.webhek.com/svg](http://www.webhek.com/svg)

[http://www.webhek.com/animated-line-drawing-in-svg/](http://www.webhek.com/animated-line-drawing-in-svg/)

[http://www.webhek.com/demo/svg/](http://www.webhek.com/demo/svg/)

**（2）画布（Canvas）**
-----------------

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161017123404794)

Canvas也是前端工程师炫技的最热门的阵地。有许多demo。

[http://www.17sucai.com/pins/demoshow/9386](http://www.17sucai.com/pins/demoshow/9386)
[http://www.17sucai.com/pins/demoshow/12676](http://www.17sucai.com/pins/demoshow/12676)
[http://www.17sucai.com/pins/demoshow/5937](http://www.17sucai.com/pins/demoshow/5937)
[http://www.html5tricks.com/demo/html5-canvas-waterful/index.html](http://www.html5tricks.com/demo/html5-canvas-waterful/index.html)
[http://www.html5tricks.com/demo/html5-canvas-loader/index.html](http://www.html5tricks.com/demo/html5-canvas-loader/index.html)
[http://www.html5tricks.com/demo/html5-canvas-particle-effect/index.html](http://www.html5tricks.com/demo/html5-canvas-particle-effect/index.html)
[http://www.html5tricks.com/demo/html5-cool-fire-effect/index.html](http://www.html5tricks.com/demo/html5-cool-fire-effect/index.html)

HTML5 的 canvas 元素使用 JavaScript 在网页上绘制图像。
画布是一个矩形区域，您可以控制其每一像素。
canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

**创建 Canvas 元素**

```
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**通过 JavaScript 来绘制**

canvas 元素本身是没有绘图能力的。所有的绘制工作必须在 JavaScript 内部完成：

```
<script type="text/javascript">
	var c=document.getElementById("myCanvas");
	var cxt=c.getContext("2d");
	cxt.fillStyle="#FF0000";
	cxt.fillRect(0,0,150,75);
</script>
```

**Canvas 与 SVG 对比**

Canvas 和 SVG 都允许您在浏览器中创建图形，但是它们在根本上是不同的。

**SVG**

SVG 是一种使用 XML 描述 2D 图形的语言。
SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。
在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。

**Canvas**

Canvas 通过 JavaScript 来绘制 2D 图形。
Canvas 是逐像素进行渲染的。
在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

**Canvas 与 SVG 的比较**

Canvas
-依赖分辨率
-不支持事件处理器
-弱的文本渲染能力
-能够以 .png 或 .jpg 格式保存结果图像
-最适合图像密集型的游戏，其中的许多对象会被频繁重绘

SVG
-不依赖分辨率
-支持事件处理器
-最适合带有大型渲染区域的应用程序（比如谷歌地图）
-复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
-不适合游戏应用

想对Canvas了解更多的，可以参考下面链接。

[http://www.w3school.com.cn/html/html5_canvas.asp](http://www.w3school.com.cn/html/html5_canvas.asp)

[http://www.w3school.com.cn/tags/html_ref_canvas.asp](http://www.w3school.com.cn/tags/html_ref_canvas.asp)

[https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)

[http://blog.csdn.net/clh604/article/details/8536059](http://blog.csdn.net/clh604/article/details/8536059)

**（3）网页图形库（WebGL）**
-------------------

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161017130225259)

先上demo。

[https://www.cubeslam.com/ncokau](https://www.cubeslam.com/ncokau)

[http://labs.gooengine.com/pearl-boy/indexBelow.html](http://labs.gooengine.com/pearl-boy/indexBelow.html)

[http://www.cnblogs.com/lhb25/p/9-mind-blowing-webgl-demos.html](http://www.cnblogs.com/lhb25/p/9-mind-blowing-webgl-demos.html)

[http://www.open-open.com/news/view/9d8136/](http://www.open-open.com/news/view/9d8136/)

[http://www.oschina.net/news/26547/webgl-chrome/](http://www.oschina.net/news/26547/webgl-chrome/)

WebGL（全写Web Graphics Library）是一种3D绘图标准，这种绘图技术标准允许把JavaScript和OpenGL ES 2.0结合在一起，通过增加OpenGL ES 2.0的一个JavaScript绑定，WebGL可以为HTML5 Canvas提供硬件3D加速渲染，这样Web开发人员就可以借助系统显卡来在浏览器里更流畅地展示3D场景和模型了，还能创建复杂的导航和数据视觉化。显然，WebGL技术标准免去了开发网页专用渲染插件的麻烦，可被用于创建具有复杂3D结构的网站页面，甚至可以用来设计3D网页游戏等等。

**WebGL 基本原理**

WebGL 的出现使得在浏览器上面实时显示 3D 图像成为现实，WebGL 本质上是基于光栅化的 API ,而不是基于 3D 的 API。


**WebGL对象获取**

WebGL也是基于Canvas画布做的，下面看一下WebGL获取方法。

```
// Get A WebGL context
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("experimental-webgl");
```

WebGL 只关注两个方面，即投影矩阵的坐标和投影矩阵的颜色。使用 WebGL 程序的任务就是实现具有投影矩阵坐标和颜色的 WebGL 对象即可。可以使用“着色器”来完成上述任务。顶点着色器可以提供投影矩阵的坐标，片段着色器可以提供投影矩阵的颜色。

无论要实现的图形尺寸有多大，其投影矩阵的坐标的范围始终是从 -1 到 1 。下面是一个关于实现 WebGL 对象的一个简单例子。

```
// Get A WebGL context
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("experimental-webgl");
 
// setup a GLSL program
var program = createProgramFromScripts(gl, ["2d-vertex-shader", "2d-fragment-shader"]);
gl.useProgram(program);
 
// look up where the vertex data needs to go.
var positionLocation = gl.getAttribLocation(program, "a_position");
 
// Create a buffer and put a single clipspace rectangle in
// it (2 triangles)
var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(
gl.ARRAY_BUFFER,
new Float32Array([
-1.0, -1.0,
 1.0, -1.0,
-1.0,  1.0,
-1.0,  1.0,
 1.0, -1.0,
 1.0,  1.0]),
gl.STATIC_DRAW);
gl.enableVertexAttribArray(positionLocation);
gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
 
// draw
gl.drawArrays(gl.TRIANGLES, 0, 6);   
```

下面是两个着色器。

```
<script id="2d-vertex-shader" type="x-shader/x-vertex">
attribute vec2 a_position;

void main() {
  gl_Position = vec4(a_position, 0, 1);
}
</script>

<script id="2d-fragment-shader" type="x-shader/x-fragment">
void main() {
  gl_FragColor = vec4(0, 1, 0, 1);  // green
}
</script>    
```

它将绘出一个绿色的长方形来填充整个画板。

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161017153240247)

再往后面实在是太过专业了，需要掌握图形图像学的知识，通过demo确实能看出来非常强大，但是需要更专业的人才能搞了。

想对WebGL了解更多，参考这里。

[https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API)

[http://blog.csdn.net/column/details/webgl.html](http://blog.csdn.net/column/details/webgl.html)

[http://www.w3cschool.cn/webgl/i4gf1oh1.html](http://www.w3cschool.cn/webgl/i4gf1oh1.html)

[http://blog.163.com/hongshaoguoguo@126/blog/static/18046981201311310510380/](http://blog.163.com/hongshaoguoguo@126/blog/static/18046981201311310510380/)


**（4）CSS3 3D（CSS3 3D）**
-----------------------

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161017153900283)

先上demo。

[http://www.ganecheng.site/html5/css33d.html](http://www.ganecheng.site/html5/css33d.html)

CSS3允许元素以3D的形式显示。

下面讲解一下这个demo是怎样显示出来的。

```
<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<style type="text/css">
*{margin: 0;padding: 0;}
html,body{height: 80%;background: black;}
.wrap
{
	  height: 100%;position: relative;
	  -webkit-transform-style:preserve-3d;
	  -webkit-perspective:0px;

	  -moz-transform-style:preserve-3d;
	  -moz-perspective:0px;

	  -webkit-animation:mydhua 5s ease infinite;
	  -moz-animation:mydhua 5s ease infinite;
}
.box
{
	width: 200px;
	height: 200px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin:-100px 0 0 -100px;
	line-height: 200px;
	text-align: center;
	font-size: 48px;
	color: white;
}
.box1{
	-webkit-transform:rotatey(90deg) translatez(-100px);
	-moz-transform:rotatey(90deg) translatez(-100px);
	background: rgba(128,0,128,.5);
}
.box2{
	-webkit-transform:rotatey(90deg) translatez(100px);
	-moz-transform:rotatey(90deg) translatez(100px);
	background: rgba(255,0,255,.5);
}
.box3{
	-webkit-transform:rotatex(90deg) translatez(100px);
	-moz-transform:rotatex(90deg) translatez(100px);
	background: rgba(255,153,204,.5);
}
.box4{
	-webkit-transform:rotatex(90deg) translatez(-100px);
	-moz-transform:rotatex(90deg) translatez(-100px);
	background: rgba(0,204,255,.5);
}
.box5{
	-webkit-transform: translatez(-100px);
	-moz-transform:translatez(-100px);
	background: rgba(153,204,255,.5);
}
.box6{
	-webkit-transform: translatez(100px);
	-moz-transform:translatez(100px);
	background: rgba(0,255,255,.5);
}

@-webkit-keyframes mydhua{

	0%{-webkit-transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);-webkit-transform-origin: center center;}
	100%{-webkit-transform:rotateX(180deg) rotateY(180deg) rotateZ(180deg);-webkit-transform-origin: center center; }
}
@-moz-keyframes mydhua{

	0%{-moz-transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);-webkit-transform-origin: center center;}
	100%{-moz-transform:rotateX(180deg) rotateY(180deg) rotateZ(180deg); -webkit-transform-origin: center center;}
}
</style>
</head>
<body style="width:960px;margin:0px auto;">

<div class="wrap">
	<div class="box1 box">1</div>
	<div class="box2 box">2</div>
	<div class="box3 box">3</div>
	<div class="box4 box">4</div>
	<div class="box5 box">5</div>
	<div class="box6 box">6</div>
</div>

<script type="text/javascript">
		
</script>
</body>
</html>
```

首先是使子元素可以以3D的效果显示出来。

```
.wrap
{
	  height: 100%;position: relative;
	  -webkit-transform-style:preserve-3d;
	  -webkit-perspective:0px;

	  -moz-transform-style:preserve-3d;
	  -moz-perspective:0px;
}
```

接下来规定6个div的初始位置。
rotateX()表示沿 X 轴的 3D 旋转角度。
rotateY()表示沿 Y 轴的 3D 旋转角度。
translateZ()	表示 3D 转化，仅使用用于 Z 轴的值。表示在Z轴的移动位置，值越大，离屏幕越近，值越小，离屏幕越远。在此网址感受一下translateZ()的效果。[http://www.zhangxinxu.com/study/201209/transform-perspective-translateZ.html](http://www.zhangxinxu.com/study/201209/transform-perspective-translateZ.html)



```
	<div class="box1 box">1</div>
	<div class="box2 box">2</div>
	<div class="box3 box">3</div>
	<div class="box4 box">4</div>
	<div class="box5 box">5</div>
	<div class="box6 box">6</div>

.box
{
	width: 200px;
	height: 200px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin:-100px 0 0 -100px;
	line-height: 200px;
	text-align: center;
	font-size: 48px;
	color: white;
}
.box1{
	-webkit-transform:rotatey(90deg) translatez(-100px);
	-moz-transform:rotatey(90deg) translatez(-100px);
	background: rgba(128,0,128,.5);
}
.box2{
	-webkit-transform:rotatey(90deg) translatez(100px);
	-moz-transform:rotatey(90deg) translatez(100px);
	background: rgba(255,0,255,.5);
}
.box3{
	-webkit-transform:rotatex(90deg) translatez(100px);
	-moz-transform:rotatex(90deg) translatez(100px);
	background: rgba(255,153,204,.5);
}
.box4{
	-webkit-transform:rotatex(90deg) translatez(-100px);
	-moz-transform:rotatex(90deg) translatez(-100px);
	background: rgba(0,204,255,.5);
}
.box5{
	-webkit-transform: translatez(-100px);
	-moz-transform:translatez(-100px);
	background: rgba(153,204,255,.5);
}
.box6{
	-webkit-transform: translatez(100px);
	-moz-transform:translatez(100px);
	background: rgba(0,255,255,.5);
}
```

现在定义关键帧动画。
用@keyframes定义一个关键帧动画，0%表示起始状态，100%表示结束状态，还可以根据需要定义50%等等。动画的名称叫mydhua。

```
@-webkit-keyframes mydhua{

	0%{-webkit-transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);-webkit-transform-origin: center center;}
	100%{-webkit-transform:rotateX(180deg) rotateY(180deg) rotateZ(180deg);-webkit-transform-origin: center center; }
}
@-moz-keyframes mydhua{

	0%{-moz-transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);-webkit-transform-origin: center center;}
	100%{-moz-transform:rotateX(180deg) rotateY(180deg) rotateZ(180deg); -webkit-transform-origin: center center;}
}
```

接下来就是使用动画。

```
.wrap
{
	  -webkit-animation:mydhua 5s ease infinite;
	  -moz-animation:mydhua 5s ease infinite;
}
```
这样我们就得到了一个CSS3 3D旋转的效果。

只要涉及到3D，都和空间立体几何相关。如果想往这方面更进一步发展，桌前要常备这一类的书籍。

想要对CSS3 3D了解更多的，可以参考下面网址。

[https://segmentfault.com/a/1190000003843764](https://segmentfault.com/a/1190000003843764)

[http://www.w3school.com.cn/css3/css3_3dtransform.asp](http://www.w3school.com.cn/css3/css3_3dtransform.asp)

[http://www.cnblogs.com/duanhuajian/archive/2012/08/30/2664026.html](http://www.cnblogs.com/duanhuajian/archive/2012/08/30/2664026.html)

**⑦ 性能与集成特性（Performance & Integration）**
========================================

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161017163106303)

看看W3C的介绍。

*Make your Web Apps and dynamic web content faster with a variety of techniques and technologies such as **Web Workers** and **XMLHttpRequest 2**. No user should ever wait on your watch.*

性能与集成特性主要包括两个东西，**Web Workers** 和 **XMLHttpRequest 2**。

下面依次介绍。

**（1）网页后台任务（Web Workers）**
--------------------------

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161017192023394)

先上demo，[http://www.w3school.com.cn/tiy/t.asp?f=html5_webworker](http://www.w3school.com.cn/tiy/t.asp?f=html5_webworker)。

当在 HTML 页面中执行脚本时，页面的状态是不可响应的，直到脚本已完成。

Ajax向服务器端发送请求，是异步接收响应的。不然页面会卡住。

Web Workers 是运行在浏览器后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 Web Workers 在后台运行。

**setInterval和setTimeout是单线程执行的。**

虽然在JavaScript中有setInterval和setTimeout函数使javaScript看起来好像使多线程执行，单实际上JavaScript是单线程的，一次只能做一件事情。

看一个例子。

```
<!DOCTYPE html>
<html>
<head>
    <title>Web Workers</title>
</head>
<body>
    <h1>Web Workers</h1>

    <script type="text/javascript">
    setTimeout(function(){
        console.log('timeout function');
    },1000);
    alert('do not close');
    </script>
</body>
</html>
```

页面一运行就会弹出一个对话框，如果setTimeout是在另外一个线程运行，那么过一秒钟控制台就会打印“timeout function”，事实是只要不关闭对话框，控制台永远不会输出文字，这两句话确实是在一个线程内运行的。

这样的设计使JavaScript比较简单，但有时候也很令人烦恼，因为单线程的设计意味着JavaScript代码必须很快运行完，常见的问题就是一段复杂的JavaScript脚本会中断页面其它脚本执行，甚至会出现页面失去响应，这也就是为什么Ajax的API要设计成异步的。

**Web Workers 用法**

在html5规范中引入了web workers概念，解决客户端JavaScript无法多线程的问题，其定义的worker是指代码的并行线程，不过web worker处于一个自包含的环境中，无法访问主线程的window对象和document对象，和主线程通信只能通过异步消息传递机制。

我们需要把希望单独执行的javascript代码放到一个单独的js文件中，然后在页面中调用Worker构造函数来创建一个线程，参数是该文件路径，参数存放如果是相对地址，那么要以包含调用Worker构造函数语句所在脚本为参照，如果是绝对路径，需要保证同源（协议+主机+端口）。这个文件不需要我们在页面使用script标签显示引用

```
w=new Worker("/example/html5/demo_workers.js");
```

worker对象只有两个属性，其实是两个回调函数句柄。

**onerror**:当worker运行出现错误，并且没有在worker中被捕获，会在此捕获
**onmessage**:当worker向主线程发送消息是调用
在其prototype内有两个重要方法

**postMessage**:很熟悉的赶脚，之前我们介绍过window对象的postMessage()方法，woker的postMessage方法和window的比较类似，但参数略有不同，只需要传递消息内容就可以，而且支持所有JavaScript原生数据类型，当然不放心的话同样也可以序列化为字符串传递
**terminate**:终止worker执行，有些worker执行比较慢，主线程可以主动终止其执行


demo_workers.js
```
var i=0;

function timedCount()
{
	i=i+1;
	postMessage(i);
	setTimeout("timedCount()",500);
}

timedCount();
```

demo.html

```
<!DOCTYPE html>
<html>
<body>

<p>计数: <output id="result"></output></p>
<button onclick="startWorker()">开始 Worker</button> 
<button onclick="stopWorker()">停止 Worker</button>
<br /><br />

<script>
var w;

function startWorker()
{
	if(typeof(Worker)!=="undefined")
	{
		  if(typeof(w)=="undefined")
		  {
			  w=new Worker("/example/html5/demo_workers.js");
		  }
		  w.onmessage = function (event) 
		  {
		    document.getElementById("result").innerHTML=event.data;
		  };
	}
	else
	{
	  document.getElementById("result").innerHTML="Sorry, your browser does not support Web Workers...";
	}
}

function stopWorker()
{ 
	w.terminate();
}
</script>

</body>
</html>

```

想对 Web Workers 了解更多的，参考下面链接。

[http://www.w3school.com.cn/html5/html_5_webworkers.asp](http://www.w3school.com.cn/html5/html_5_webworkers.asp)

[http://www.cnblogs.com/dolphinX/p/3452684.html](http://www.cnblogs.com/dolphinX/p/3452684.html)

[https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)

**（2）新的Ajax（XMLHttpRequest 2）**
-------------------------------

![这里写图片描述](http://7xj7hx.com1.z0.glb.clouddn.com/csdn_img/20161017201901819)

XMLHttpRequest是一个浏览器接口，使得Javascript可以进行HTTP(S)通信。也就是Ajax。

上一代Ajax有以下缺点。

* 只支持文本数据的传送，无法用来读取和上传二进制文件。
* 传送和接收数据时，没有进度信息，只能提示有没有完成。
* 受到"同域限制"（Same Origin Policy），只能向同一域名的服务器请求数据，不能跨域。

XMLHttpRequest 2也就是新的Ajax。针对老版本的缺点，做出了大幅改进，有下面的特点。

* 可以设置HTTP请求的时限。
* 可以使用FormData对象管理表单数据。
* 可以上传文件。
* 可以请求不同域名下的数据（跨域请求）。
* 可以获取服务器端的二进制数据。
* 可以获得数据传输的进度信息。

**XMLHttpRequest 2示例**

前台代码.

```
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>第二代XmlHttpRequest异步上传</title>
		<script type="text/javascript">
			function upload(){
				if (!window.FormData){
					alert('您的浏览器不支持第二代XmlHttpRequest');
					return;
				}
				// HTML5 新增对象
				var formData = new FormData(document.getElementById('uploadForm'));
				//添加其他表单域
				formData.append('user', 'haolin');
				formData.append('pass', '111111');
				
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'upload'); //请求url
				
				//上传完成回调函数
				xhr.onload = function(event) {
					if (xhr.status === 200) {
						alert("上传成功");
					} else {
						alert('出错了');
					}
				};
				xhr.send(formData);
			}
		</script>
	</head>
	<body>
		<h1>第二代XmlHttpRequest对象实现异步上传</h1>
		<form id="uploadForm" action="" method="post" enctype="multipart/form-data">
			<input id="upfile" type="file" name="upfile"/>
			<input type="button" value="上传" onclick="upload()"/> 
		</form>
	</body>
</html>
```

后台代码

```
PrintWriter out = new PrintWriter(response.getOutputStream());
FileItemFactory factory = new DiskFileItemFactory();// 为该请求创建一个DiskFileItemFactory对象，通过它来解析请求。执行解析后，所有的表单项目都保存在一个List中。
ServletFileUpload upload = new ServletFileUpload(factory);
List<FileItem> items;
try {
    items = upload.parseRequest(request);
    Iterator<FileItem> itr = items.iterator();
    while (itr.hasNext()) {
	FileItem item = (FileItem) itr.next();
	System.out.println("是否是FormField: " + item.isFormField());
	System.out.println("接收到域: " + item.getFieldName());
	System.out.println("接收到值: " + item.getString("utf-8"));
	// 检查当前项目是普通表单项目还是上传文件。
	if (item.isFormField()) {// 如果是普通表单项目，显示表单内容。
		String fieldName = item.getFieldName();
		out.println("the field name is " + fieldName);// 显示表单域名称。
       } else {// 如果是上传文件，显示文件名。
		out.println("the upload file name is " + item.getName());
	} 
    }
    out.flush();
    out.close();
} catch (FileUploadException e) {
    e.printStackTrace();
}
```

对XMLHttpRequest 2进行封装。

```
var AjaxForm = function(cfg){
	if (!window.FormData){
		alert("Sorry, your browser doesn't supoort FormData!");
	}
	
	/**
	 * null or undefined 返回true, 否则false
	 */
	this.isNullOrUndefined = function(v, errMsg){
		if (!v){
			alert(errMsg);
			return true;
		}
		return false;
	};
	
	var cfg = cfg || {};
	if (this.isNullOrUndefined(cfg.id, "id can't be empty")) return;
	if (this.isNullOrUndefined(cfg.url, "url can't be empty")) return;
	
	this.id = cfg.id; // 表单id
	this.method = cfg.method || "POST"; //默认POST方法
	this.url = cfg.url;
	this.async = !cfg.sync; //同步否
	this.resultType = cfg.resultType || "text"; //返回结果类型 json对象或text
	this.formData = new FormData(document.getElementById(this.id)); //form数据
	this.xhr = new XMLHttpRequest(); //当前请求对象
	
	/**
	 * 超时事件
	 * 配置格式：
	 *   timeout : xxx,
	 *   onTimeout: function(event){}
	 */
	if (cfg.timeout){ 
		this.xhr.timeout = cfg.timeout;
		this.xhr.ontimeout = cfg.onTimeout;
	}
	
	/**
	 * 发送过程事件
	 * 配置格式: 
	 * onProgress: function(loaded, total){}
	 */
	if (cfg.onProgress){ //发送数据过程
		this.xhr.upload.onprogress = function(e){
			if (e.lengthComputable) {
				cfg.onProgress(e.loaded, e.total);
			}
		};
	}
	
	/**
	 * 上传完成事件
	 */
	if (cfg.onComplete){
		this.xhr.onload = function(event){
			var res = event.target.responseText;
			if (this.resultType === 'json'){
				if ((typeof JSON) === 'undefine'){
					res = eval("("+res+")");
				} else{
					res = JSON.parse(res);
				}
			}
			cfg.onComplete(res);
		};
	}
	
	/**
	 * 发出请求
	 */
	this.request = function(){
		this.xhr.open(this.method, this.url, this.async);
		this.xhr.send(this.formData);
	};
};

```

调用

```
var af = new AjaxForm({
	id: "uploadForm",
	url: 'upload',
	method: 'POST',
	timeout: 5000,
	onTimeout: function(event){
		alert('It is timeout.');
	},
	onProgress: function(loaded, total){
		var complete = (loaded / total * 100 | 0);
		var progress = document.getElementById('uploadProgress');
		progress.value = complete;
		progress.innerHTML = complete;
	},
	onComplete: function(result){
		alert(result);
	}
});
af.request();
```

可以看出，虽然是XMLHttpRequest 2，但是还是XMLHttpRequest对象。使用新的特性，需要先判断是否支持window.FormData。

如果想对XMLHttpRequest 2了解更多，可以参考下面文章。

[https://www.w3.org/TR/XMLHttpRequest2](https://www.w3.org/TR/XMLHttpRequest2)

[https://my.oschina.net/indestiny/blog/215472](https://my.oschina.net/indestiny/blog/215472)

[http://www.ruanyifeng.com/blog/2012/09/xmlhttprequest_level_2.html](http://www.ruanyifeng.com/blog/2012/09/xmlhttprequest_level_2.html)

[http://blog.csdn.net/hills/article/details/41246939](http://blog.csdn.net/hills/article/details/41246939)


----------

**后记**
======

之前一直在做web开发。但是从来没有对HTML5仔细研究过，写这篇文章，前前后后花了4天时间，从惊叹于HTML5的强大，到目睹有这么多的坑，浏览器的性能也跟不上。

但是我们不应该悲观，解决方法总比困难多，Chrome和Firefox也一直在推动浏览器性能提升。前端再也不是切个图，调调颜色，改改字体大小，放个Flash的时代了。HTML5会给我们一个更加美好的未来，前端开发者也有一个提升技术含量，迎接各种机遇的机会了。

祝愿前端越来越好。

----------


**参考文献**
========

[https://www.w3.org/html/logo/](https://www.w3.org/html/logo/)

[http://caniuse.com/](http://caniuse.com/)