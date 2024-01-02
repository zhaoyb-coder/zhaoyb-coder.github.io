(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{506:function(v,_,a){"use strict";a.r(_);var t=a(30),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"jmm-java内存模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmm-java内存模型"}},[v._v("#")]),v._v(" JMM（Java内存模型）")]),v._v(" "),a("h2",{attrs:{id:"_1、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、前言"}},[v._v("#")]),v._v(" 1、前言")]),v._v(" "),a("p",[v._v("对于现在处理器而言，不可能只靠CPU进行所有的任务计算处理，必须要依靠存储设置进行数据存储，那么CPU和I/O之间的效率差距就变成了一个无法跨越的话题。")]),v._v(" "),a("p",[v._v("为了解决差距过大的问题，就在CPU和存储设置之间加入了多层的读写速度尽可能和CPU一致的高速缓存(Cache),将运算需要的数据先读取到缓存中，然后CPU进行运算，运算结束后，再从缓存同步到内存之中除了告诉缓存之外，处理器还可以对输入代码进行"),a("code",[v._v("乱序执行（Out-Of-Order Execution）")]),v._v("优化，能保证结果相同，但是过程有差异。")]),v._v(" "),a("p",[v._v("但是引入了缓存，就要考虑新的问题，"),a("code",[v._v("缓存一致性")]),v._v("问题，在多路处理器中，每一个处理器都有自己的高速缓存，而所有处理器都共享一个主内存，这整体构成了一个"),a("code",[v._v("共享内存多核系统")]),v._v("。为了解决缓存一致性问题，不同的物理机器都有自己的协议或者内存模型来进行规范。Java虚拟机也有自己的内存模型JMM（Java Memory Model）")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231229143024651.png",alt:"image-20231229143024651"}})]),v._v(" "),a("h2",{attrs:{id:"_2、概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、概述"}},[v._v("#")]),v._v(" 2、概述")]),v._v(" "),a("h3",{attrs:{id:"_2-1、内存规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、内存规范"}},[v._v("#")]),v._v(" 2.1、内存规范")]),v._v(" "),a("p",[v._v("1、所有变量都存储在主内存中")]),v._v(" "),a("p",[v._v("2、每个线程都有自己的工作内存，线程的工作内存保存了该线程使用变量的主内存副本，线程对变量的所有操作（读写）都必须在工作内存中进行，而不能直接读取主内存的数据")]),v._v(" "),a("p",[v._v("3、不同的线程无法访问对方工作内存中的变量，各线程中的变量传递都必须通过主内存来完成")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231229143733343.png",alt:"image-20231229143733343"}})]),v._v(" "),a("h3",{attrs:{id:"_2-2、内存间交互操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、内存间交互操作"}},[v._v("#")]),v._v(" 2.2、内存间交互操作")]),v._v(" "),a("p",[v._v("一个变量如何从主内存拷贝到工作内存，再从工作内存同步到主内存，JMM定义了以下8种操作。")]),v._v(" "),a("ul",[a("li",[v._v("lock（锁定）：作用于主内存的变量，它把变量标识为一条线程独占的状态")]),v._v(" "),a("li",[v._v("unlock（解锁）：作用于主内存的变量，它把一个处于锁定状态的变量释放出来，释放后的变量才可以被其它线程锁定")]),v._v(" "),a("li",[v._v("read（读取）：作用于主内存的变量，它把一个变量的值从主内存传输到工作内存中，以便随后的load动作使用")]),v._v(" "),a("li",[v._v("load（载入）：作用于工作内存的变量，它把read操作从主内存中得到的变量值放到工作内存的变量副本中")]),v._v(" "),a("li",[v._v("use（使用）：作用于工作内存的变量，它把一个从执行引擎接收的值赋值给工作内存的变量，每当虚拟机遇到一个需要使用变量的值的字节码指令时将会执行这个操作")]),v._v(" "),a("li",[v._v("assign（赋值）：作用于工作内存的变量，它把一个从执行引擎接收的值赋给工作内存的变量，每当虚拟机遇到一个给变量赋值的字节码时执行这个操作")]),v._v(" "),a("li",[v._v("store（存储）：作用于工作内存的变量，它把工作内存中一个变量的值传送到主内存中，以便随后的write操作使用")]),v._v(" "),a("li",[v._v("write（写入）：作用于主内存的变量，它把store操作从工作内存中得到的变量值放入主内存的变量中")])]),v._v(" "),a("p",[v._v("Java内存模型规定了这8种基本操作必须满足如下规则：")]),v._v(" "),a("p",[v._v("1、不允许read\\load、store\\write操作之一单独出现，即不允许一个变量从主内存读取了但是工作内存不接受，或者工作内存发起回写但是主内存不接受的情况出现")]),v._v(" "),a("p",[v._v("2、不允许一个线程丢弃它最近的assign操作，即变量在工作内存中改变了，必须把该变化同步回主内存")]),v._v(" "),a("p",[v._v("3、不允许一个线程无原因的（没有发生任何assign操作）把数据从工作内存同步回主内存")]),v._v(" "),a("p",[v._v("4、一个新的变量只能从主内存中诞生，不允许在工作内存中直接使用一个未被初始化（load、assign）的变量")]),v._v(" "),a("p",[v._v("5、一个变量在同一个时刻只允许一条线程对其进行 lock 操作，但 lock 操作可以被同 一条线程重复执行多次，多次执行 lock 后，只有执行相同次数的 unlock 操作，变量才 会被解锁")]),v._v(" "),a("p",[v._v("6、如果对一个变量执行 lock 操作，那将会清空工作内存中此变量的值，在执行引擎 使用这个变量前，需要重新执行 load 或 assign 操作以初始化变量的值")]),v._v(" "),a("p",[v._v("7、如果一个变量事先没有被 lock 操作锁定，那就不允许对它执行 unlock 操作，也不 允许去 unlock 一个被其他线程锁定的变量")]),v._v(" "),a("p",[v._v("8、对一个变量执行 unlock 操作之前，必须先把此变量同步回主内存中（执行 store、 write 操作）")]),v._v(" "),a("h2",{attrs:{id:"_3、volatile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、volatile"}},[v._v("#")]),v._v(" 3、volatile")]),v._v(" "),a("p",[v._v("当一个变量被定义为volatile后，将具备两个特性：")]),v._v(" "),a("p",[v._v("1、线程可见性：一个线程修改了这个变量的值，那新值对于其余线程是立即得知的。")]),v._v(" "),a("p",[v._v("​\t\t对于修改的变量，线程修改结束后必须立刻把新值同步回主内存，对于读取的变量，线程每次必须从主内存同步新数据，这样就保证了变量的线程可见性。")]),v._v(" "),a("p",[v._v("2、禁止指令重排序优化：普通的变量仅会保证在该 方法的执行过程中所有依赖赋值结果的地方都能获取到正确的结果，而不能保证变量赋 值操作的顺序与程序代码中的执行顺序一致；"),a("code",[v._v("重排序优化是机器级的优化操作，提前执行是指这条语句对应的汇编代码被提前执行")])]),v._v(" "),a("p",[v._v("​\t\t禁止指令重排序是在字节码生成了lock前缀的指令，lock指令相当于一个内存屏障，重排序时不能把后面的指令重排序到内存屏障之前的位置。lock指令把修改同步回主内存时，意味着所有之前的操作都已经执行完成，这样便形成了“指令重排序无法越过内存屏障”的效果")]),v._v(" "),a("h2",{attrs:{id:"_4、总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、总结"}},[v._v("#")]),v._v(" 4、总结")]),v._v(" "),a("p",[v._v("Java内存模型，是围绕着并发过程中如何处理可见性、原子性、有序性这三个特性来建立的。")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("原子性：synchronized来保证原子性")])]),v._v(" "),a("li",[a("p",[v._v("可见性：volatile能保证可见性，synchronized和final也可以保证可见性\nsynchronized的可见性是执行unclock之前，必须把变量同步回主内存（执行store、write）这个规则来获取的")])]),v._v(" "),a("li",[a("p",[v._v("有序性：volatile、synchronized能保证有序性")]),v._v(" "),a("p",[v._v("synchronized 是由“一个变量 在同一个时刻只允许一条线程对其进行 lock 操作”这条规则获得的，这个规则决定了持 有同一个锁的两个同步块只能串行地进入")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);