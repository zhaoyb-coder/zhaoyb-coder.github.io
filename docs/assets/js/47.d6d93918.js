(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{360:function(a,t,s){"use strict";s.r(t);var r=s(8),n=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"jar启动和ide里启动sprintboot的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jar启动和ide里启动sprintboot的区别"}},[a._v("#")]),a._v(" Jar启动和IDE里启动Sprintboot的区别")]),a._v(" "),t("p",[a._v("想聊明白这个问题，需要补充一些前提条件，比如Fat jar、类加载机制等")]),a._v(" "),t("hr"),a._v(" "),t("h3",{attrs:{id:"_1、fat-jar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、fat-jar"}},[a._v("#")]),a._v(" 1、Fat jar")]),a._v(" "),t("p",[a._v("我们在开发业务程序的时候，经常需要引用第三方的jar包，最终程序开发完成之后，通过打包程序，会把自己的代码和三方jar包一起打成同一个jar包，这种jar就称之为Fat jar")]),a._v(" "),t("p",[a._v("SpringBoot的maven插件，打包方式就是把整体项目打包成一个Fat jar,其中把应用程序代码打包到BOOT-INF/classes中，把三方jar包打包到BOOT-INF/lib中，把jar包的详细信息（启动入口等）放置在META-INF/MANIFEST.MF文件中。")]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("plugins")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("plugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.springframework.boot"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("spring-boot-maven-plugin"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("configuration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("mainClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("xxxxApplication"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("mainClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("configuration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("plugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("plugins")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br")])]),t("p",[a._v("整体Fat jar如图所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20240125150625708.png",alt:"image-20240125150625708"}})]),a._v(" "),t("h3",{attrs:{id:"_2、jar启动入口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、jar启动入口"}},[a._v("#")]),a._v(" 2、jar启动入口")]),a._v(" "),t("p",[a._v("如果一个jar内部有多个类都有main方法，那么java -jar启动的话会调用哪个main方法呢，换句话说就是一个jar启动的入口main方法是怎么定义的？")]),a._v(" "),t("p",[a._v("两种方式：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("命令行直接指定，java -jar xxx.jar com.xx.xxxClass（不常用）")])]),a._v(" "),t("li",[t("p",[a._v("maven打包的时候插件生成META-INF/MANIFEST.MF文件，文件中的Main-Class:后面定义了当前jar的启动入口")])])]),a._v(" "),t("p",[a._v("那么SpringBoot启动的入口是我们应用程序里面写得加了@SpringBootApplication的main方法吗？ 显然不是，打开jar查看MANIFEST.MF文件，里面赫然写着Main-Class: org.springframework.boot.loader.JarLauncher")]),a._v(" "),t("p",[a._v("所以说，通过java -jar 启动一个Springboot项目，启动的入口是 org.springframework.boot.loader.JarLauncher类里面的main方法。")]),a._v(" "),t("h3",{attrs:{id:"_3、类加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、类加载"}},[a._v("#")]),a._v(" 3、类加载")]),a._v(" "),t("p",[a._v("根据刚才看到的jar内部的目录结构，应用程序依赖的三方jar包都不在classpath目录下，按照已有的类加载器的职能来看，这些jar都不能被加载到JVM中，SpringBoot需要自定义类加载器来加载这些包，具体是怎么做的，还是那句话，源码之下无秘密。打开JarLauncher类，如图所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20240125151725411.png",alt:"image-20240125151725411"}})]),a._v(" "),t("p",[a._v("main方法很简单，就一行代码， (new JarLauncher()).launch(args); 跟代码进入launch方法。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20240125151854376.png",alt:"image-20240125151854376"}})]),a._v(" "),t("p",[a._v("由代码得知，"),t("code",[a._v("SpringBoot是自定义了一个LaunchedURLClassLoader来加载SpringBoot应用的所有类")])]),a._v(" "),t("p",[a._v("这个结论也可以程序实现得知：IDEA启动输出类加载和jar启动输出类加载器 ，结果一目了然")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20240125152121765.png",alt:"image-20240125152121765"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20240125152215185.png",alt:"image-20240125152215185"}})]),a._v(" "),t("h3",{attrs:{id:"_4、结论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、结论"}},[a._v("#")]),a._v(" 4、结论")]),a._v(" "),t("p",[a._v("Java -Jar是以FAT JAR的方式用LaunchedURLClassLoader来load class。而在IDE中则是直接以ApplicationClassLoader来load的。这种差别会导致调用classloader.getResourceAsStream()得到不一样的结果，这是因为FAT JAR启动时，LaunchedURLClassLoader的load的urls并没有FAT JAR本身，如abc-0.0.1-SNAPSHOT.jar, 但是应用中的src/main/resources/META-INF/resources目录被打包到了FAT JAR里，也就是abc-0.0.1-SNAPSHOT.jar!/META-INF/resources，这样这些resource也就不会被访问到了。")]),a._v(" "),t("p",[a._v("这也就是为什么有时候在IDE里能读到的resource在Run FAT JAR的情况下读不到了")])])}),[],!1,null,null,null);t.default=n.exports}}]);