<template>
  <div>
    <div class=" font-bold text-3xl">Q&A</div>

    <div class=" mt-5">
      <div class=" text-themeOrange font-bold">General：</div>
      <div v-for="item in itemList">
        <div @click="showAnswer(item)" :class="item.show == true ? 'QAitemClick':''" class=" QAitem font-bold text-gray-600 bg-white h-20 border-2 flex items-center pl-7 ">
          {{item.question}}
       </div>
          <div v-if="item.show" class=" text-xs font-bold text-gray-600 border-b-2 border-l-2 border-r-2 h-20 flex items-center pl-7">{{item.answer}}</div>
      </div>
    </div>

    
  </div>
</template>

<script>
  export default {
    name:'QA',
    data(){
      return{
        itemList:[
          {
          show:false,
          question:'我觉得某一门大学导师说话太快无法听清，可以申请Complaints吗？',
          answer:'这种情况是满足Complaints的条例的。但一般情况下，Complaints更指向于教职工的失职行为。因此遇到这种情况可以先与导师沟通，若其他同学也存在相同的烦恼且导师依然没有降低语速，可向学校部门提出联合申诉.'
          },
          {
          show:false,
          question:'学校宿舍问题也属于Complaints吗？',
          answer:'任何关于校园生活和学习中遇到不公平待遇和影响体验的问题都在Complaints的范围内。然而，遇到此类问题我们可以选择先向Student Help寻求帮助，若问题得不到解决，则可向学校提交Complaints申请。'
          },
          {
          show:false,
          question:'什么样的情况我该寻求帮助，什么样的情况我该提出Complaints申诉呢？',
          answer:'Complaints一般适用于个人或集体利益受到严重影响的情况。若在学习和生活中遇到困难，则可先向相关部门寻求帮助；若问题得不到解决或已经收到严重影响如欺凌，种族歧视等，则可向学校提出正式Complaints申请。'
          },
          {
          show:false,
          question:'我在哪里可以看到自己大学的Appeal规定？',
          answer:']有两种方式可以看到具体Policy的方法，第一种是在自己大学的官网上直接搜索词条Appeal，这种页面会在Student Help and Support界面。第二种方式是将自己的情况想Person Tutor或部门负责人反应，他们会直接告诉你应该联系的部门。'
          },
          {
          show:false,
          question:'我错过了Appeal的提交时间怎么办？',
          answer:'若已经错过提交时间，则需要提交Late Appeal的申请。此类申请除了需要包含上述的材料之外，可能还要提供对于为什么错过提交时间的合理理由及相关证明。'
          },
          {
          show:false,
          question:'第一次提交Appeal失败了怎么办？还有机会继续申诉吗？',
          answer:'可以的，如果第一次Appeal被驳回，学校会给出申请失败的理由。（若没有，也可以向学校要求给出不予以通过的原因）这些理由可能会包括，证据不充分，理由不满足学校政策，或是申请表部分缺失等。那么我们只需要将更有力的证据提交，或是将申请表格补全申请再次提交即可。注意：如果是理由不满足学校政策，那么再次申诉的几率会很小，因此在我们提交Appeal前，一定要研究清楚学校接受的原因。'
          },
          {
          show:false,
          question:'我挂了不止一门科目，可以Appeal吗？',
          answer:'一般情况下挂1-2门科目都是可以申请appeal的，这需要参考不同大学的条例规定。对于挂一门以上的申请，若成功，一些大学会给出两门科目重考或是重修的机会。'
          },
          {
          show:false,
          question:'Appeal的结果一般需要多久能知道？',
          answer:'一般学校会在14日内将申请提交部门审核并通知结果。当然这也取决了不同学校的政策，一般会在成功提交的回复邮件中说明。若超过该期限还没有得到结果，则需要我们发邮件并提供申请记录及时向学校反馈和询问。 '
          },
          {
          show:false,
          question:'什么样的情况满足MC的申请？',
          answer:'A：MC的申请需要在考试/作业Dealing的当天或是之前。'
          },
          {
          show:false,
          question:'在哪里可以申请MC？',
          answer:'MC的申请一般可以在课程提交页面，Student Help或是Academic Help页面可以找到。若找不到具体页面，可直接向相关负责人和部门发邮件申请。'
          },
          {
          show:false,
          question:'MC和EC有什么区别？',
          answer:'一些大学会将MC和EC的申请放在同一板块。但MC针对的是在考试当天或者之前进行提交，而EC是针对因为特殊原因无法在当天完成考试从而申请的类别。'
          },
          {
          show:false,
          question:'我的论文已经提交了，还可以申请EC吗？',
          answer:'一般情况下，只要满足在Deadline结束后的七天之内，都是可以提交EC申请的。某些特殊情况可能影响到了你在完成作业时的发挥，因此就算已经提交，仍然可以向学校申请EC要求重新提交或者延期。'
          },
          {
          show:false,
          question:'我错过了申请EC的7日期限，怎么办？',
          answer:' 如果已经错过了EC的提交时间，则需要申请正式的Appeal申请。'
          },
          {
          show:false,
          question:'怎么申请EC？',
          answer:' EC的申请一般不需要学校的正式流程，因此第一时间向课程或者院校负责人发邮件一般都可以得到处理。若不能，他们也会回复下一步骤需要做什么。 '
          },
          {
          show:false,
          question:' 如果EC失败了，该怎么做？',
          answer:'如果EC申请被驳回，可以进一步提交Appeal的正式申请。'
          }
        ]
      }
    },
    methods:{
      showAnswer(item){
        item.show = !item.show;
      }
    }
    
  }
</script>

<style lang="scss" scoped>
.QAitemClick{
  background: #E4E4E4;
  border-left:5px solid #F26A44;
  cursor: pointer;
}
.QAitem:hover{
  background: #E4E4E4;
  border-left:5px solid #F26A44;
  cursor: pointer;
}
</style>