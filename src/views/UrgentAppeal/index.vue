<template>
  <div class=" pt-20 ">
    <div class="banner relative flex items-center justify-center">
      <el-image
        :src="require('@/assets/img/home/banner.png')"
        fit="cover"
        class=" relative"
      />
      <div class=" absolute top-10 max-w-screen-lg container mx-auto flex ">
        <div class=" flex flex-col w-1/2 ">
          <div class="font-bold text-2xl">
            <div class=" pb-1">这一次，彷徨的留学生不再孤单</div>
            <div class=" pb-1 text-themeBlue ">就差一个靠谱沟通</div>
            <div class=" pb-1">黄金处理期正在分秒流逝</div>
            <div class=" pb-1">(做一个倒计时器)</div>
            <div class=" text-themeBlue">要申诉！找伸树！</div>
            
          </div>
          <div class=" flex mt-7">
            <div class=" mr-5">
              <el-image
                :src="require('@/assets/img/home/code.png')"
                fit="cover"
                class=" relative"
              />
            </div>
            <div class=" flex flex-col">
              <div class=" mb-5 font-bold text-gray-500">微信：Han80888Y（已有1843人+微信咨询）</div>
              <div class=" bg-gray-800 flex items-center justify-center text-white h-11">扫描左侧二维码，获取解决方案</div>
            </div>
          </div>
        </div>
        <div class=" flex flex-wrap w-1/2 pt-6">
          <div
            v-for="(item,index) in bannerList"
            :key="index"
            class=" border border-gray-800 text-gray-800 font-bold w-32 h-10 mr-7 mb-5 flex items-center justify-center "
          >{{item.tag}}</div>
          </div>
      </div>
    </div>
    
    <!-- 了解处分类型&原因 -->
    <div class=" max-w-screen-lg container mx-auto mt-20">
      <div class=" relative flex flex-col justify-center items-center pb-16">
        <div class=" absolute text-gray-900 text-8xl text-opacity-10 font-bold">LEARN</div>
        <div class=" font-bold text-3xl">留学生处分Penalty类型＆轻重</div>
        <div class=" font-bold text-gray-400 text-sm">处分的严重程度以及原因都影响申述是否成功</div>
      </div>
      <div class=" flex mt-9 ">
        <div class="left w-1/3 flex flex-col">
          <div>
            <div class=" text-lg font-bold">1.开除退学</div>
            <div class=" text-sm text-gray-500">学生违纪行为非常严重，学校通常会直接开除学生（Dismiss）。学校的开除决定通常视为永久性的，申述几率小，除非有非常适当的原因及理由进行合理的解释 </div>
            <div class=" border-b-2 border-blue-500 w-6 rounded-full mt-1"></div>
            <div class=" border-b-2 border-blue-500 w-10 rounded-full mt-1"></div>
          </div>
          <div>
            <div class=" text-lg font-bold mt-20">04.警告处分</div>
            <div class=" text-sm text-gray-500">对于初次犯错的学生，如情节较轻，大部分大学会提出一次警告。警告信意味着若再犯错就必定要被开除，而此后学校会对学生的言行进行更严密的观察。</div>
            <div class=" border-b-2 border-blue-500 w-6 rounded-full mt-1"></div>
            <div class=" border-b-2 border-blue-500 w-10 rounded-full mt-1"></div>
          </div>
        </div>
        <div class=" relative center w-1/3">
            <el-image
              :src="require('@/assets/img/home/typebig.png')"
              fit="cover"
              class=" relative"
            />
          <div class=" absolute left-28 top-12 w-28 flex flex-col justify-center items-center ">
            <div>
              <el-image
              :src="require('@/assets/img/home/type1.png')"
              fit="cover"
              />
            </div>
            <div class=" text-white font-bold">01.开除退学</div>
          </div>
          <div class=" absolute left-8 top-32 w-28 flex flex-col justify-center items-center ">
            <div>
              <el-image
              :src="require('@/assets/img/home/type4.png')"
              fit="cover"
              />
            </div>
            <div class=" font-bold">04.警告处分</div>
          </div>
          <div class=" absolute right-8 top-32 w-28 flex flex-col justify-center items-center ">
            <div>
              <el-image
              :src="require('@/assets/img/home/type2.png')"
              fit="cover"
              />
            </div>
            <div class=" text-white font-bold">02.停课休学</div>
          </div>
          <div class=" absolute left-28 bottom-16 w-28 flex flex-col justify-center items-center ">
            <div>
              <el-image
              :src="require('@/assets/img/home/type3.png')"
              fit="cover"
              />
            </div>
            <div class="  font-bold">03.留校察看</div>
          </div>
        </div>
        <div class="right w-1/3 flex flex-col">
          <div>
            <div class=" text-lg font-bold">2.停课休学</div>
            <div class=" text-sm text-gray-500">学生违纪行为比较严重，将会受到更高一级的学术处罚，那就是停学处分（Suspension）。此时学生的有效留学身份被终止，学生在短时间内被要求离境。</div>
            <div class=" border-b-2 border-blue-500 w-6 rounded-full mt-1"></div>
            <div class=" border-b-2 border-blue-500 w-10 rounded-full mt-1"></div>
           </div>
           <div>
            <div class=" text-lg font-bold mt-20">03.留校察看</div>
            <div class=" text-sm text-gray-500">学校通常会针对学生个案情况来决定是否给出留校察看（Probation）的处罚，并且将计入学生学术档案。通常只要学生不再犯类似错误，都不会导致更严重的后果。</div>
            <div class=" border-b-2 border-blue-500 w-6 rounded-full mt-1"></div>
            <div class=" border-b-2 border-blue-500 w-10 rounded-full mt-1"></div>
          </div>
        </div>
      </div>

      <div class=" mt-8">
        <div class="font-bold text-lg">学术原因</div>
        <div class=" flex mt-3">
          <div
            class=" w-1/4 mx-6 "
            v-for="(item,index) in acadmicList"
            :key="index + 'acadmic'"
          >
            <div class=" bg-gray-100 w-full px-6 h-44 flex flex-col items-center pt-8">
              <div class=" flex">
                <div>
                  <el-image
                    :src="item.icon"
                    fit="cover"
                  />
                </div>
                <div class=" font-bold pb-4 ml-2">{{item.title}}</div>
              </div>
              <div class=" text-sm text-gray-500 ">{{item.info}}</div>
            </div>
            <div class=" bg-blue-200 py-2 w-full text-sm flex justify-center items-center">{{item.contact}}</div>
          </div>
        </div>
      </div>
       <div class=" mt-5">
        <div class="font-bold text-lg">个人原因</div>
        <div class=" flex mt-3">
          <div
            class=" w-1/4 mx-6 "
            v-for="(item,index) in personalList"
            :key="index + 'personal'"
          >
            <div class=" bg-gray-100 w-full px-6 h-44 flex flex-col items-center pt-8">
              <div class=" flex">
                <div>
                  <el-image
                    :src="item.icon"
                    fit="cover"
                  />
                </div>
                <div class=" font-bold pb-4 ml-2">{{item.title}}</div>
              </div>
              <div class=" text-sm text-gray-500 ">{{item.info}}</div>
            </div>
            <div class=" bg-blue-200 py-2 w-full text-sm  flex justify-center items-center">{{item.contact}}</div>
          </div>
        </div>
      </div>
       <div class=" bg-themeOrange h-5 w-5 mt-16 "></div>
    </div>

    <!-- 把握申诉期、实现反转 -->
    <div class=" relative max-w-screen-lg container mx-auto mt-10">
     
      <div class=" relative flex flex-col items-center justify-center">
        <div class=" absolute text-gray-900 text-8xl text-opacity-10 font-bold">APPEAL PERIOD</div>
        <div class=" text-3xl font-bold">把握申诉期、实现反转</div>
        <div class=" text-sm font-bold text-gray-500">诉是将主动权掌握在自己手里，将形势逆转</div>
      </div>
      <div class="center  flex items-center justify-center mt-24">
          <div>
            <el-image
            :src="require('@/assets/img/home/rever1.png')"
            fit="cover"
          />
          </div>
          <div class=" relative">
              <el-image
              :src="require('@/assets/img/home/rever2.png')"
              fit="cover"
            />
            <div class=" absolute text-white font-bold flex left-9 top-32">
              <div class=" flex flex-col px-10 ">
                <div class=" text-3xl">接收结果</div>
                <div class=" text-xs">RECEIVE THE RESULT</div>
              </div>
              <div class=" flex text-3xl font-bold">
                <div>V</div>
                <div class=" pt-2">S</div>
              </div>
              <div class=" px-10">
                <div class=" text-3xl">选择申诉</div>
                <div class=" text-xs">CHOOSE APPEAL</div>
              </div>
            </div>
          </div>
          <div>
            <el-image
            :src="require('@/assets/img/home/rever3.png')"
            fit="cover"
          />
          </div>
      </div>
          <div class=" absolute top-40 left-20 mb-12 text-lg font-bold">被迫接受处分</div>
          <div class=" absolute top-60 left-10 mb-12 text-lg font-bold">无法顺利毕业</div>
          <div class=" absolute top-80 left-5  mb-12 text-lg font-bold">被开除/停学</div>
          <div class=" absolute bottom-36 left-0 mb-12 text-lg font-bold">无法拿到学位</div>
          <div class=" absolute bottom-16 left-5 mb-12 text-lg font-bold">学业上有污点</div>
          <div class=" absolute bottom-5 left-20 text-lg font-bold">被遣返/拒签</div>

          <div class=" absolute top-40 right-20 mb-12 text-lg font-bold">降低处分几率</div>
          <div class=" absolute top-60 right-10 mb-12 text-lg font-bold">消除自身误会</div>
          <div class=" absolute top-80 right-5 mb-12 text-lg font-bold">直升top名校</div>
          <div class=" absolute bottom-36 right-0 mb-12 text-lg font-bold">保录名校硕士</div>
          <div class=" absolute bottom-16 right-5 mb-12 text-lg font-bold">消除“黑历史”</div>
          <div class=" absolute bottom-5 right-20 text-lg font-bold">恢复合法身份</div>
        
    </div>

     <!-- 1V1专业辅导、模拟申诉流程 -->
    <div class=" bg-gray-100 mt-24">
      <!-- 1V1专业辅导、模拟申诉流程 -->
      <div class=" h-20"></div>
      <div class=" relative max-w-screen-lg container mx-auto">
        <div class=" relative flex flex-col items-center justify-center">
          <div class=" absolute text-gray-900 text-8xl text-opacity-10 font-bold">APPEAL PRIOD</div>
          <div class=" text-3xl font-bold">1V1专业辅导、模拟申诉流程</div>
          <div class=" text-sm font-bold text-gray-500">诉是将主动权掌握在自己手里，将形势逆转</div>
        </div>
        <div class=" flex items-center justify-center mt-20">
          <div class="flex items-center justify-center rounded-full border-2 border-dashed border-purple-300 h-96 w-96 ">
            <div class=" flex items-center justify-center rounded-full border-2 border-purple-300 h-80 w-80 ">
              <el-image
                :src="require('@/assets/img/home/processc.png')"
                fit="cover"
                class=" relative"
              />
              <div class=" absolute text-white text-2xl font-bold">专业辅导</div>
            </div>
          </div>
        </div>
        <!-- 小图标 -->
        <div>
          <div class=" flex absolute top-36 left-14">
            <div class=" text-right pr-4">
              <div class=" text-sm font-bold">充分了解事件情况</div>
              <div class=" text-sm">与学生沟通，通过多方材料了解学校处分细节</div>
            </div>
            <div>
              <el-image
                :src="require('@/assets/img/home/process1.png')"
                fit="cover"
              />
            </div>
          </div>
          <div class=" flex absolute top-72 left-0 ">
            <div class=" text-right pr-4">
              <div class=" text-sm font-bold">充分了解事件情况</div>
              <div class=" text-sm">与学生沟通，通过多方材料了解学校处分细节</div>
            </div>
            <div>
              <el-image
                :src="require('@/assets/img/home/process2.png')"
                fit="cover"
              />
            </div>
          </div>
          <div class=" flex absolute bottom-5 left-10">
            <div class=" text-right pr-4">
              <div class=" text-sm font-bold">充分了解事件情况</div>
              <div class=" text-sm">与学生沟通，通过多方材料了解学校处分细节</div>
            </div>
            <div>
              <el-image
                :src="require('@/assets/img/home/process3.png')"
                fit="cover"
              />
            </div>
          </div>

          <div class=" flex absolute top-36 right-14">
            <div>
              <el-image
                :src="require('@/assets/img/home/process6.png')"
                fit="cover"
              />
            </div>
            <div class=" text-left pl-4">
              <div class=" text-sm font-bold">充分了解事件情况</div>
              <div class=" text-sm">与学生沟通，通过多方材料了解学校处分细节</div>
            </div>
          </div>
          <div class=" flex absolute top-72 right-0">
            <div>
              <el-image
                :src="require('@/assets/img/home/process5.png')"
                fit="cover"
              />
            </div>
            <div class=" text-left pl-4">
              <div class=" text-sm font-bold">充分了解事件情况</div>
              <div class=" text-sm">与学生沟通，通过多方材料了解学校处分细节</div>
            </div>
          </div>
          <div class=" flex absolute bottom-5 right-10">
            <div>
              <el-image
                :src="require('@/assets/img/home/process1.png')"
                fit="cover"
              />
            </div>
            <div class=" text-left pl-4">
              <div class=" text-sm font-bold">充分了解事件情况</div>
              <div class=" text-sm">与学生沟通，通过多方材料了解学校处分细节</div>
            </div>
          </div>
        </div>
      </div>
      <div class=" h-10"></div>
      <!-- 你需要了解 -->
      <div class="max-w-screen-lg container mx-auto pt-5 pb-7 bg-white">
        <div class=" flex flex-col items-center justify-center pb-7">
          <div class=" flex text-2xl font-bold"><div>你</div><div class=" text-themeBlue font-bold">需要</div><div>了解</div></div>
          <div class=" font-bold text-gray-500">You need to understand</div>
        </div>
        <div class=" flex px-28">
          <div class=" w-1/4 h-56 bg-white shadow-md mx-3 pt-5 flex flex-col items-center"
            v-for="(item,index) in needsList"
            :key="index+'need'"
          >
            <div>
              <el-image
                :src="item.icon"
                fit="cover"
              />
            </div>
            <div class=" px-5 text-center">
            <div class=" font-bold py-2">{{item.title}}</div>
            <div class=" text-xs text-gray-500">{{item.info}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  <!-- 紫色长框 -->
    <!-- <div class=" bg-gray-100 pt-20">
      <div class="  ml-60">
        <div class=" relative flex py-5 border-themePurple border-2">
          <div class=" flex items-center">
            <div class="font-bold text-themePurple pl-20 pr-5">
              <div>扫码帮你</div>
              <div>解决问题</div>
            </div>
            <div>
              <el-image
                  :src="require('@/assets/img/home/code.png')"
                  fit="cover"
                />
            </div>
          </div>
          <div class=" mask absolute right-0 top-0 w-2/3 h-48"></div>
            <div class=" absolute right-0 top-0 w-2/3 pl-24 pt-5 text-white font-bold flex ">
              <div class=" w-1 pr-10">紧急应对</div>
              <div class="">
                <div>留学被：开除 I 劝退 I 遣返 I 停课 I 签证被拒 无法毕业如何应对？</div>
                <div class=" pt-2 pb-3 flex text-sm">
                  <div class=" flex items-center">
                    <div class=" mr-2 w-1 h-1 rounded-full bg-themeOrange"></div>
                    <div>挂科/GPA低</div>
                  </div>
                  <div class=" flex items-center ml-5">
                    <div class=" mr-2 w-1 h-1 rounded-full bg-themeOrange"></div>
                    <div>学术不诚信</div>
                  </div>
                  <div class=" flex items-center ml-5">
                    <div class=" mr-2 w-1 h-1 rounded-full bg-themeOrange"></div>
                    <div>学分问题</div>
                  </div>
                  <div class=" flex items-center ml-5">
                    <div class=" mr-2 w-1 h-1 rounded-full bg-themeOrange"></div>
                    <div>出勤率低</div>
                  </div>
                  <div class=" flex items-center ml-5">
                    <div class=" mr-2 w-1 h-1 rounded-full bg-themeOrange"></div>
                    <div>论文被挂科</div>
                  </div>
                </div>
                <div>100%解决—获取应对方案+微信：Han80888Y</div>
              </div>
            </div>
        </div>
       
      </div>
    </div> -->

<!-- 申诉预判：情节严重、另寻他路 -->
<div class=" relative flex flex-col items-center justify-center ">
      <el-image
        :src="require('@/assets/img/home/bigwave.png')"
        fit="cover"
        class=" relative"
      />
      <div class="tab-box absolute max-w-screen-lg container mx-auto pt-24">
        <div class=" flex flex-col justify-center items-center">
          <div class=" absolute text-gray-900 text-7xl text-opacity-10 font-bold">APPEAL PRE-JUDGMENT</div>
          <div class=" text-2xl font-bold">如果学生已经自主申诉多次失败</div>
          <div class=" text-sm text-gray-500 py-2 font-bold">伸树先生还能提供Plan B让焦虑的留学生雨过天晴</div>
          <div class=" text-xs text-themeOrange font-bold">TIPS：一下方法适合情节严重、自行申诉失败的学生</div>
        </div>
        <div class=" flex justify-between mt-10">
          <div
          class=" flex items-center justify-center bg-gray-100 px-5 py-3 cursor-pointer"
            v-for="(itemt,index) in wayTab" :key="index+'tab'"
            @click="curTabClick(index)" :class="num == index ? 'curtab':''"
          >
            <div>
              <el-image
                :src="itemt.icon"
                fit="cover"
              />
            </div>
            <div class=" pl-2 font-bold">{{itemt.title}}</div>
          </div>
        </div>
        <div class=" mt-10 relative flex items-center justify-center">
            <el-image
              :src="require('@/assets/img/home/waybg.png')"
              fit="cover"
              class=" relative"
            />
            <div class=" absolute bg-black bg-opacity-30 w-11/12 h-5/6"></div>
            <div class=" absolute px-24"
              v-for="(itemb,index) in wayBox" :key="index"
              v-show="num==index"
            >
              <div class=" text-2xl text-themeOrange font-bold">{{itemb.name1}}</div>
              <div class=" text-sm font-bold text-white py-2">{{itemb.info1}}</div>
              <div class=" text-xl font-bold text-white pt-3">{{itemb.name2}}</div>
              <div class=" text-sm font-bold text-white pt-2">{{itemb.info2}}</div>
              <div class=" flex items-center justify-center mt-10">
                <div class=" h-10 w-1/3 rounded-l-full border-2 text-white flex items-center justify-center border-themeOrange">
                  立即应对+微信：Han80888Y
                </div>
                <div class=" h-10 w-1/5 rounded-r-full bg-themeOrange flex items-center">
                  <el-image
                    :src="require('@/assets/img/home/smallcode.png')"
                    fit="cover"
                    class=" pl-2"
                  />
                  <div class=" text-white pl-3">查看二维码</div>
                </div>
              </div>
            </div>
        </div>
      </div> 
</div>

<!-- 近期案例展示、真实可靠 -->
<div class=" bg-gray-100">
<div class=" max-w-screen-lg container mx-auto pt-16 pb-20">
  <div class=" relative flex flex-col justify-center items-center mb-12">
    <div class=" absolute text-gray-600 text-8xl text-opacity-10 font-bold">CASE SHOW</div>
    <div class=" text-3xl font-bold">近期案例展示、真实可靠</div>
    <div class=" text-sm py-2 text-gray-600 font-bold">SY已经帮助5700+留学生解决申诉问题</div>
  </div>
  <case/>
</div>
</div>
  <!-- 选择数玺、高效专业 -->
  <div class=" bg-gray-50 pt-20 pb-12 ">
    <div class=" max-w-screen-lg container mx-auto">
      <div class=" relative flex flex-col items-center justify-center">
        <div class=" absolute text-gray-600 text-8xl text-opacity-10 font-bold">SHU XI</div>
        <div class=" text-3xl font-bold">选择数玺、高效专业</div>
        <div class=" text-sm font-bold text-gray-500">Efficient and professional</div>
      </div>
      <div class=" mt-10">
         <div class=" flex">
          <div class=" w-1/4 h-72 bg-white  mx-3 pt-10 flex flex-col items-center"
            v-for="(item,index) in efficientList"
            :key="index+'need'"
          >
            <div>
              <el-image
                :src="item.icon"
                fit="cover"
              />
            </div>
            <div class=" px-10 text-center">
            <div class=" font-bold py-4">{{item.title}}</div>
            <div class=" text-sm">{{item.info}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 相关页面 -->
  <div class=" max-w-screen-lg container mx-auto">
    <div class=" py-16">
     <div class="BIGbox4 max-w-screen-lg container mx-auto ">
        <div class=" font-bold text-2xl pb-6 text-center">相关页面</div>
        <div class=" flex space-x-10">
          <div class=" w-1/4 bg-white">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home1.png')"
                fit="cover"
              />
            </div>
            <div class=" px-5">
              <div class=" font-bold py-1">回应1752集团公开信的涉及不当性行为的投诉的声明</div>
              <div class=" text-sm pb-7 text-gray-500">我们针对涉及不当性行为的投诉发表声明，以回应 The1752 Group最近的公开信。</div>
            </div>
          </div>
          <div class=" w-1/4 bg-white">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home2.png')"
                fit="cover"
              />
            </div>
            <div class=" px-5">
              <div class=" font-bold py-1">随着新学年的临近</div>
              <div class=" text-sm pb-7 text-gray-500">2021/22学年与冠状病毒相关的一些注意事项。</div>
            </div>
          </div>
          <div class=" w-1/4 bg-white">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home3.png')"
                fit="cover"
              />
            </div>
            <div class=" px-5">
              <div class=" font-bold py-1">OIA发布了Covid-19影响引起的投诉的进一步案例摘要</div>
              <div class=" text-sm pb-7 text-gray-500">我们发布了第三组因冠状病毒影响而引起的投诉案例摘要。</div>
            </div>
          </div>
          <div class=" w-1/4 bg-white">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home2.png')"
                fit="cover"
              />
            </div>
            <div class=" px-5">
              <div class=" font-bold py-1">OIA发布了Covid-19影响引起的投诉的进一步案例摘要</div>
              <div class=" text-sm pb-7 text-gray-500">我们发布了第三组因冠状病毒影响而引起的投诉案例摘要。</div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Case from './component/Case.vue'
  export default {
    name:'Home',
    components:{
      Case
    },
    data(){
     return{
        bannerList:[
        {tag:'被开除'},
        {tag:'不能毕业'},
        {tag:'没有学位'},
        {tag:'被挂科'},
        {tag:'论文被挂'},
        {tag:'出勤率'},
        {tag:'GPA低'},
        {tag:'作弊被抓'},
        {tag:'Suspension'},
        {tag:'被遣返'},
        {tag:'身份失败'},
        {tag:'签证被拒'}
      ],
      acadmicList:[
        {
          icon:require('@/assets/img/home/acadmic1.png'),
          title:'挂科/GPA低',
          info:'单科、多科fail，毕业论文、设计被挂，或被恶意挂科，GPA低导致的停课/休学/延毕等',
          contact:'立即应对+微信：Han80888Y'
        },
        {
          icon:require('@/assets/img/home/acadmic2.png'),
          title:'出勤率低',
          info:'因为缺席旷课等，导致出勤率低于学校要求',
          contact:'立即应对+微信：Han80888Y'
        },
        {
          icon:require('@/assets/img/home/acadmic3.png'),
          title:'学术诚信',
          info:'论文非原创，查重较高，作弊被抓',
          contact:'立即应对+微信：Han80888Y'
        },
        {
          icon:require('@/assets/img/home/acadmic4.png'),
          title:'学术诚信',
          info:'因出勤率低、挂科、GPA低等导致学分没达到学校要求',
          contact:'立即应对+微信：Han80888Y'
        },
      ],
      personalList:[
        {
          icon:require('@/assets/img/home/personal1.png'),
          title:'个人能力',
          info:'语言不过关，无法进入下一阶段学习；或专业不对口，学习吃力经常挂科',
          contact:'立即应对+微信：Han80888Y'
        },
        {
          icon:require('@/assets/img/home/personal2.png'),
          title:'身体问题',
          info:'不适应国外的气候或因突发事件，身体出现问题，不能按时完成学业',
          contact:'立即应对+微信：Han80888Y'
        },
        {
          icon:require('@/assets/img/home/personal3.png'),
          title:'心理原因',
          info:'留学生承受的学习和生活压力大，无法自我调节致抑郁无法完成学业',
          contact:'立即应对+微信：Han80888Y'
        },
        {
          icon:require('@/assets/img/home/personal4.png'),
          title:'个人行为',
          info:'酒驾、打架或非法打工等会被学校处分',
          contact:'立即应对+微信：Han80888Y'
        }
      ],
      needsList:[
        {
          icon:require('@/assets/img/home/need1.png'),
          title:'第一阶段',
          info:'非正式上诉，一般来说就是教学组重新考核。这个阶段是成功率最高也是耗时最短的一种解决方法。'
        },
        {
          icon:require('@/assets/img/home/need2.png'),
          title:'第二阶段',
          info:'正式上诉，一般是由院系进行审查。'
        },
        {
          icon:require('@/assets/img/home/need3.png'),
          title:'第三阶段',
          info:'即通过校外的非盈利组织进行申诉，但该阶段不能接受其他的证据只在你现有的证据基础上来进行申诉。'
        },
        {
          icon:require('@/assets/img/home/need4.png'),
          title:'Tips',
          info:'三个阶段中一二阶段成功率较高，第三阶段一般为第一第二阶段的辅助工具。'
        }
      ],
      wayTab:[
        {
          icon:require('@/assets/img/home/way1.png'),
          title:'紧急转学'
        },
        {
          icon:require('@/assets/img/home/way2.png'),
          title:'名校直升录取'
        },
        {
          icon:require('@/assets/img/home/way3.png'),
          title:'重新申请/重修硕士'
        },
        {
          icon:require('@/assets/img/home/way4.png'),
          title:'回国认证/证明'
        }
      ],
      num:"0",
      wayBox:[
        {
          name1:'紧急转学',
          info1:'学校态度非常强硬，申诉失败，那么学生的合法身份将很快被终止，学生身份面临失效。SY教育会帮助学生在最短的时间内转入中美教育部认证的合作院校或社区大学，及时止损，减少不必要的麻烦。',
          name2:'适用场景',
          info2:'本科被开除/退学/遣返，严重舞弊，GPA低，多门挂科等。'
        },
        {
          name1:'名校直升录取',
          info1:'有些同学在本科花了3-4年，因学业问题被学校初要求延毕，签证就要到期了，同时又不想再继续读本科，我们可以为你直升英美加澳的名校硕士，保录取入读，直接攻读硕士学位，实现人生逆转！',
          name2:'适用场景',
          info2:'本科被开除/退学/遣返，严重舞弊，GPA低，多门挂科等。'
        },
        {
          name1:'重新申请/重修硕士',
          info1:'当预科学校申诉失败的情况下，SY可以尽快为留学生重新申请一所大学，攻读本科/硕士课程。如果原硕士就读学校申诉失败，可重新申请英美加澳名校硕士，继续完成学业。',
          name2:'适用场景',
          info2:'学术诚信问题（作弊/抄袭），出勤率过低等导致的处分。'
        },
        {
          name1:'回国认证/证明',
          info1:'部分同学在读了大一，大二后，被开除无法继续完成学业，也不想再呆在国外，只想回国，但是又担心没有文凭导致发展受限。针对此类同学，我们可以为你办理《学历认证》和《回国证明》，全面解决你的学历问题',
          name2:'适用场景',
          info2:'因学校严厉处分无法逆转，不想再继续读书，或只想回国，同时又担心没有文凭的同学。'
        }
      ],
      efficientList:[
        {
          icon:require('@/assets/img/home/efficient1.png'),
          title:'100%',
          info:'5700＋申诉案例，保证100%成功率'
        },
        {
          icon:require('@/assets/img/home/efficient2.png'),
          title:'资深专业',
          info:'资深海归专业辅导、全程知道申诉'
        },
        {
          icon:require('@/assets/img/home/efficient3.png'),
          title:'方案多样',
          info:'合理评估申诉成功几率，依据推荐不同方案'
        },
        {
          icon:require('@/assets/img/home/efficient4.png'),
          title:'360+',
          info:'英美加澳360+所合作院校熟知各校规定及解决方式'
        }
      ],
      // relateList:[
      //   {
      //     image:require('@/assets/img/home/efficient1.png'),
      //     title:'',
      //     info:''
      //   }
      // ]
     }
    },
    mounted(){
      
    },
    methods:{
      curTabClick(index){
        this.num = index
      }
    }
    
  }
</script>

<style lang="scss" scoped>
.curtab{
  background: #1D2A3A;
  color: white;
}
.mask{
            border-top:188px solid #7F87FF;
            border-left:37px solid transparent;
}
</style>