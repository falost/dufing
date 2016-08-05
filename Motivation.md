# Dufing - A folder system based Node.js webserver

----

Dufing 是一个基于文件系统的webserver。


## 动机

曾经有段时间，我和同事说，如果js也能写后端就好了，他说没有什么不可能。

后来 `Node.js` 出现了，二话不说把自己的博客从 PHP 迁移到了 Node.js , 没有 `express` 没有 `koa` , 参考了一些自认为PHP里面精华的部分，自己写了个基于文件系统的webserver，名为 `msite` ，各种细节实现（静态资源的`mime`、`流处理`,`http协议` 等等）无不亲自操刀。后来陆陆续续的改版中，使用了express，koa重构代码，这些 webserver 无论在性能还是易用性上确实都做到了很高的水准，很受启发。

终于，第5次重构代码的时候，我决定重新用回自己的框架，重构，优化了一些设计，并增加了`middleware`，更名为 `dufing`，希望能和它一起成长。
