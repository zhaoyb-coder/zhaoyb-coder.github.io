(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{504:function(_,a,v){"use strict";v.r(a);var t=v(30),r=Object(t.a)({},(function(){var _=this,a=_.$createElement,v=_._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"jvm概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jvm概述"}},[_._v("#")]),_._v(" JVM概述")]),_._v(" "),v("h3",{attrs:{id:"_1、jvm运行时区"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、jvm运行时区"}},[_._v("#")]),_._v(" 1、JVM运行时区")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231225135517480.png",alt:"image-20231225135517480"}})]),_._v(" "),v("h4",{attrs:{id:"_1-1、程序计数器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、程序计数器"}},[_._v("#")]),_._v(" 1.1、程序计数器")]),_._v(" "),v("p",[_._v("程序计数器就是当前线程执行的行数指示器")]),_._v(" "),v("h4",{attrs:{id:"_1-2、虚拟机栈-本地方法栈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、虚拟机栈-本地方法栈"}},[_._v("#")]),_._v(" 1.2、虚拟机栈/本地方法栈")]),_._v(" "),v("p",[_._v("Hot-Spot 虚拟机把虚拟机栈和本地方法栈合二为一，内部主要存储局部变量表、操作数栈、动态连接、方法出口等信息")]),_._v(" "),v("p",[_._v("每一个方法从调用到执行完毕的过程，就是一个栈帧在虚拟机栈中从入栈到出栈的过程")]),_._v(" "),v("h4",{attrs:{id:"_1-4、堆"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4、堆"}},[_._v("#")]),_._v(" 1.4、堆")]),_._v(" "),v("h4",{attrs:{id:"_1-5、方法区"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-5、方法区"}},[_._v("#")]),_._v(" 1.5、方法区")]),_._v(" "),v("p",[_._v("存储的是被虚拟机加载的类型信息、常量、静态变量、即时编译后代码缓存等数据")]),_._v(" "),v("h4",{attrs:{id:"_1-6、直接内存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-6、直接内存"}},[_._v("#")]),_._v(" 1.6、直接内存")]),_._v(" "),v("p",[_._v("直接内存代表着不是JVM内存的一部分，属于操作系统内存，但是也可以被JVM使用，比如引入NIO之后可以使用Native函数库直接分配堆外内存，然后存储在Java堆中的DirectByteBuffer对象作为这块内存的引用进行操作。这样的场景可以提交效率，避免在Java堆和Native堆进行来回复制数据。")]),_._v(" "),v("p",[_._v("直接内存的大小可以根据-XX：MaxDirectMemorySize来设置，如果不进行设置，则大小与堆的最大值-Xmx一致。")]),_._v(" "),v("h3",{attrs:{id:"_2、java对象"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、java对象"}},[_._v("#")]),_._v(" 2、Java对象")]),_._v(" "),v("p",[_._v("对象实例是否全部分配到堆上？")]),_._v(" "),v("p",[_._v("不是的，随着Java的发展，逃逸分析越来越精确，比如标量替换、栈上分配等优化手段，一些Java实例也可以直接在虚拟机栈中进行分配，这些实例随着栈帧的出栈而销毁，不需要GC的处理。")]),_._v(" "),v("h4",{attrs:{id:"_2-1、如何分配对象内存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、如何分配对象内存"}},[_._v("#")]),_._v(" 2.1、如何分配对象内存")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("指针碰撞")]),_._v("\n如果堆中的内存是完全规整的，所有未被使用的内存都被放在一起，那么分配一个对象内存只需要把指针向空闲的内存方向移动一定的距离就可以了。")]),_._v(" "),v("li",[v("strong",[_._v("空闲列表")]),_._v("\n如果堆中的内存并不规整，已使用内存和空闲内存交叉在一起，那么JVM需要维护一个空闲内存的列表，在分配内存的时候从列表中取出足够大的空间划分为实例对象。")])]),_._v(" "),v("p",[_._v("具体使用哪种方式进行内存分配，需要根据内存是否规整来决定；内存是否规整，取决于JVM使用哪种垃圾收集器；当使用的是Serial、ParNew等带有压缩整理的收集器时，系统采用的是指针碰撞来分配内存；当使用CMS来当做垃圾收集器时，理论上只能使用空闲列表来分配内存")]),_._v(" "),v("p",[_._v("除了划分可用内存之外，还有一个需要考虑的问题，就是并发问题。如果对A分配内存的时候，这块内存同时被B使用了，这种问题有两种解决方案：")]),_._v(" "),v("p",[_._v("一种是进行同步处理，虚拟机使用CAS的失败重试进行内存分配，来保证更新内存的原子性")]),_._v(" "),v("p",[_._v("一种是每个线程在JVM堆中预先分配一小块内存（"),v("strong",[_._v("本地线程分配缓冲区Thread Local Allocation Buffer TLAB")]),_._v("），线程先在TLAB中分配内存，如果内存分配完了，后续在需要进行同步分配；")]),_._v(" "),v("p",[_._v("虚拟机是否使用TLAB，使用参数控制 -XX: +/-UseTLAB")]),_._v(" "),v("h4",{attrs:{id:"_2-2、对象的组成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、对象的组成"}},[_._v("#")]),_._v(" 2.2、对象的组成")]),_._v(" "),v("p",[_._v("对象在堆内的存储布局分为三个部分："),v("strong",[_._v("对象头(Header)、实例数据(Instance)和对齐填充(Padding)")])]),_._v(" "),v("h5",{attrs:{id:"_2-3-1、对象头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1、对象头"}},[_._v("#")]),_._v(" 2.3.1、对象头")]),_._v(" "),v("p",[_._v("对象头分为两类信息")]),_._v(" "),v("p",[_._v("1、存储对象自身的运行时数据 （Mark Word）")]),_._v(" "),v("ul",[v("li",[_._v("哈希码(HashCode)")]),_._v(" "),v("li",[_._v("GC分代年龄")]),_._v(" "),v("li",[_._v("锁状态标志")]),_._v(" "),v("li",[_._v("线程持有的锁")]),_._v(" "),v("li",[_._v("偏向线程ID")]),_._v(" "),v("li",[_._v("偏向时间戳")]),_._v(" "),v("li",[_._v("等")])]),_._v(" "),v("p",[_._v("2、类型指针")]),_._v(" "),v("p",[_._v("JVM通过这个指针来确定该对象是哪一个类的实例")]),_._v(" "),v("p",[_._v("此外，如果对象是一个数组，那么对象头还必须要存储数组长度。")]),_._v(" "),v("h5",{attrs:{id:"_2-3-2、对齐填充"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2、对齐填充"}},[_._v("#")]),_._v(" 2.3.2、对齐填充")]),_._v(" "),v("p",[_._v("并不是必须的，仅仅是占位符的作用。因为HotSpot 虚拟机要求对象的起始地址必须是8字节的整数倍，也就是对象的大小必须是8字节的整数倍。对象头已经被精心设计为了8字节的整数倍（1或者2），以为如果实例对象的大小不满足8字节的整数倍，那么缺少的部分将由对齐填充来补全")]),_._v(" "),v("h4",{attrs:{id:"_2-3、对象的访问"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3、对象的访问"}},[_._v("#")]),_._v(" 2.3、对象的访问")]),_._v(" "),v("p",[_._v("Java程序使用对象的方式是在栈上的reference数据来操作对堆中的具体对象。如何定位到堆中的实例化对象，一般有两种方法作为实现：句柄和指针 （HotSpot主要使用指针）")]),_._v(" "),v("p",[_._v("1、如果使用句柄的话，在java堆中需要单独划分一块内存作为句柄池，reference中存储的对象的句柄地址，而句柄中包含了对象实例数据与类型数据各自具体的地址信息；")]),_._v(" "),v("p",[v("code",[_._v("使用句柄的好处就是reference中存储的是稳定的句柄地址，在对象移动时（GC移动对象）改变的只是句柄中的实例数据指针，而reference本身不需要更改")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231225153029023.png",alt:"image-20231225153029023"}})]),_._v(" "),v("p",[_._v("2、使用指针直接访问对象，reference存储的直接就是对象地址")]),_._v(" "),v("p",[v("code",[_._v("使用指针的好处就是能直接访问对象，少了一次中间的开销")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231225153400409.png",alt:"image-20231225153400409"}})]),_._v(" "),v("h3",{attrs:{id:"_3、垃圾收集"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、垃圾收集"}},[_._v("#")]),_._v(" 3、垃圾收集")]),_._v(" "),v("blockquote",[v("p",[_._v("Java 与 C++之间有一堵由内存动态分配和垃圾收集技术所围成的高墙，墙外面的人想 进去，墙里面的人却想出来")])]),_._v(" "),v("h4",{attrs:{id:"_3-1、如何找到垃圾"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、如何找到垃圾"}},[_._v("#")]),_._v(" 3.1、如何找到垃圾")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231226142132502.png",alt:"image-20231226142132502"}})]),_._v(" "),v("p",[_._v("哪些对象是GC Roots对象：")]),_._v(" "),v("ul",[v("li",[_._v("在虚拟机栈（栈帧中的局部变量表）中引用的对象，譬如各个线程被调用的方法堆栈中使用到的参数、局部变量、临时变量等")]),_._v(" "),v("li",[_._v("在方法区中 类静态属性引用的对象，譬如Java类的引用类型静态变量")]),_._v(" "),v("li",[_._v("在方法区中常量引用的对象，譬如字符串常量池中的引用")]),_._v(" "),v("li",[_._v("在本地方法栈中引用的对象（Native方法）")]),_._v(" "),v("li",[_._v("Java虚拟机内部的引用，如基本数据类型对应的Class对象、异常对象、类加载器等")]),_._v(" "),v("li",[_._v("所有被同步锁（synchronized）持有的对象")])]),_._v(" "),v("h4",{attrs:{id:"_3-2、垃圾收集算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、垃圾收集算法"}},[_._v("#")]),_._v(" 3.2、垃圾收集算法")]),_._v(" "),v("h5",{attrs:{id:"_3-2-1、记忆集-remembered-set"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1、记忆集-remembered-set"}},[_._v("#")]),_._v(" 3.2.1、记忆集（Remembered Set）")]),_._v(" "),v("p",[_._v("为什么会存在记忆集，为了解决什么问题？")]),_._v(" "),v("p",[_._v("由于大部分的垃圾收集算法都是分代收集，把整个堆划分为了年轻代和老年代，而年轻代和老年代有着各自的垃圾收集器，在进行垃圾收集的过程中，可能存在着"),v("code",[_._v("跨代引用")]),_._v("的问题，这个问题会导致在收集年轻代的时候，为了避免跨代引用，同时需要进行扫描整个老年代，防止老年代中有对象在引用年轻代的某些对象，这种扫描代价比较大。")]),_._v(" "),v("p",[v("code",[_._v("记忆集")]),_._v("就是为了解决跨代引用问题，记忆集存储在新生代，里面的数据结构把整个老年代划分为若干区域，并标识出哪一块存在跨代引用，在发生年轻代GC的时候，只需要把存在跨代引用的哪一块内存中的对象加入GCRoots进行扫描，从而避免了对于老年代的全量扫描")]),_._v(" "),v("h5",{attrs:{id:"_3-2-2、标记清除算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2、标记清除算法"}},[_._v("#")]),_._v(" 3.2.2、标记清除算法")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231226145624640.png",alt:"image-20231226145624640"}})]),_._v(" "),v("p",[_._v("分为标记和清除两个步骤：")]),_._v(" "),v("ul",[v("li",[_._v("首先标记出需要回收的对象（即垃圾对象）")]),_._v(" "),v("li",[_._v("统一回收所有标记的对象")])]),_._v(" "),v("p",[_._v("优点：简单")]),_._v(" "),v("p",[_._v("缺点：")]),_._v(" "),v("p",[_._v("1、不稳定，存在大量需要回收的对象时，必须进行大量的标记和清除工作，执行效率会随着对象数量的增高而降低")]),_._v(" "),v("p",[_._v("2、导致内存碎片问题，碎片太多会导致无法进行大对象的存储，而触发下一次的垃圾回收")]),_._v(" "),v("h5",{attrs:{id:"_3-2-3、标记复制算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3、标记复制算法"}},[_._v("#")]),_._v(" 3.2.3、标记复制算法")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231226150237777.png",alt:"image-20231226150237777"}})]),_._v(" "),v("p",[_._v("将可用内存按照容量分为大小相等的两块，每次只使用其中的一块，当其中一块的内存使用完了，就将还存活的对象复制到另一块上面，然后把已使用的那一块内存整体进行清除")]),_._v(" "),v("p",[_._v("优点：不会产生内存碎片、效率高")]),_._v(" "),v("p",[_._v("缺点：浪费内存空间")]),_._v(" "),v("h5",{attrs:{id:"_3-2-4、标记整理算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4、标记整理算法"}},[_._v("#")]),_._v(" 3.2.4、标记整理算法")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231226152452113.png",alt:"image-20231226152452113"}})]),_._v(" "),v("p",[_._v("分为标记-整理两个阶段")]),_._v(" "),v("ul",[v("li",[_._v("首先标记出需要回收的对象（即垃圾对象）")]),_._v(" "),v("li",[_._v("让所有存活对象都向内存一侧移动，然后清理掉边界以外的内存")])]),_._v(" "),v("p",[_._v("优点是解决了内存碎片问题")]),_._v(" "),v("p",[_._v("缺点是需要更新对象的引用，并且这种移动需要停止用户线程，也就是STW（Stop The Word）")]),_._v(" "),v("h4",{attrs:{id:"_3-3、安全点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3、安全点"}},[_._v("#")]),_._v(" 3.3、安全点")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("问题1：为什么需要安全点？解决了什么问题？")]),_._v(" "),v("p",[_._v("不论是什么垃圾收集器，在GCRoots枚举期间（也就是确定具体哪些对象可以放在GCRoots中）都是需要STW的，那么如何减少这一段的STW时间就至关重要了，HotSpot 虚拟机使用了一组OopMap的数据结构来存储了哪些地方存在这些引用。一旦类加载完成，HotSpot就会把对象内偏移量上是什么类型的数据计算出来，在即时编译中，也会在特定的位置记录下栈里和寄存器里哪些位置是引用。这样的话垃圾收集器在扫描的时候就可以知道这些信息，而不用全量的扫描方法区等地方去查找GCRoots了。")])]),_._v(" "),v("li",[v("p",[_._v("问题2：有了OopMap那么还会有什么问题？")]),_._v(" "),v("p",[_._v("因为真实的代码中引起关联关系变化的地方非常多，如果每一个指令都会生成对应的OopMap，那将会占用大量的空间，那么解决方案就是只有在特定的地方才会生成OopMap，这些位置就是"),v("code",[_._v("安全点")])]),_._v(" "),v("p",[_._v("有了安全点之后，用户程序并不是在任意的代码指令行都可以停止进行垃圾收集，而是强制要求执行安全点后才会停止。")])]),_._v(" "),v("li",[v("p",[_._v("问题3：什么指令会成为安全点：")]),_._v(" "),v("p",[_._v("安全点位置的选取基本上是以“是否具有让程序长时间执行的特征”为标准进行选定的。所以，方法调用、循环跳转、异常跳转等都属于指令复用，这些功能的指令才会产生安全点")])]),_._v(" "),v("li",[v("p",[_._v("问题4：发生GC时，如何让所有线程都跑到最近的安全点停顿下来？")]),_._v(" "),v("p",[_._v("HotSpot使用的主动式中断思想，就是当垃圾收集器需要中断线程的时候，不直接对线程操作，而是简单的设置一个标志，每个线程在运行过程中需要不停的去主动轮训这个标志，一旦发现中断标志位真时，就在离自己最近的安全点主动挂起。")])])]),_._v(" "),v("h4",{attrs:{id:"_3-4、安全区域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4、安全区域"}},[_._v("#")]),_._v(" 3.4、安全区域")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("问题1：为什么引入安全区域？")]),_._v(" "),v("p",[_._v("安全点解决了大部分问题，但是如果遇到了线程“不执行”的状态怎么办？比如线程Sleep状态、Blocked状态，这时候线程无法响应虚拟机的中断请求，虚拟机也不可能等待线程这么长的时间，这种情况就必须引入安全区域的概念")]),_._v(" "),v("p",[_._v("安全区域能够确保在某一段代码片段之中，引用关系不会变化，因此，在这一区域的任意时间开始垃圾收集都是安全的")])]),_._v(" "),v("li",[v("p",[_._v("问题2：如何解决上述问题？")]),_._v(" "),v("p",[_._v("当用户线程进入安全区域的代码时，会首先标识自己已经进入了安全区域，那么当这段时间内虚拟机要发生垃圾收集时，就不必去管这些已经声明在安全区域的线程了（上述问题，因为线程Sleep状态或者锁定状态，那么这段时间内引用关系不会发生变化，那么此线程就处于安全区域了）。当线程要离开安全区域时，要检查虚拟机是否完成了根节点的枚举过程，如果完成了，那么此线程可以继续运行，如果没有完成，那么线程必须一直等待直到收到可以离开安全区域的信号为止")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);