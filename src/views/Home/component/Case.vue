<template>
  <div>
    <div>
      <div class=" bg-blue-500 h-16 flex items-center justify-center text-white font-bold px-4 rounded-md">
        <div class=" w-2/12">学校名称</div>
        <div class=" w-2/12">申诉原因</div>
        <div class=" w-5/12">求真帮助过程</div>
        <div class=" w-4/12">申诉结果</div>
        <div class=" w-2/12">图片</div>
      </div>

        <div
        class=" bg-white h-28 mt-5 flex items-center justify-center px-4 rounded-md"
         v-for="(item,index) in showNewsList"
         :key=" index +'case'"
        >
          <div class=" w-2/12 flex flex-col text-xs">
            <div class=" font-bold">{{item.school}}</div>
            <div>{{item.enschool}}</div>
          </div>
          <div class=" w-2/12 text-xs font-bold">{{item.reasons}}</div>
          <div class=" w-5/12 text-xs ">{{item.process}}</div>
          <div class=" w-4/12 flex flex-col px-4">
            <div class=" text-xs font-bold">{{item.result}}</div>
            <div class=" text-xs">{{item.resultde}}</div>
          </div>
          <div class=" w-2/12 text-xs font-bold">点击查看大图</div>
        </div>
      
      <Pagination
      class="mt-10"
      :total="caseList.length"
      :current-page="currentPage"
      @current-change="handleCurrentChange"
    />
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
  export default {
    components:{
      Pagination
    },
    data(){
      return{
        currentPage: 0,
        pageSize: 8,
        caseList:[
          {
            school:'雪城大学',
            enschool:'Syracuse University',
            reasons:'GAP低被开除',
            process:'来美国—年后电GPA低被学校开除。求真团队在与F同学耐心沟通后，发现她来美之后心理落差巨大，无心学习，导致GPA持续走低。求真团队边为她做心理辅导，边指导她完成申诉。',
            result:'开除处分撤销',
            resultde:'申诉成功后，求真团队从学习和生活上开导F同学，帮助她在美留学路上走得'
          },
          {
            school:'费蒙特大学',
            enschool:'University of Vermont',
            reasons:'论文代写被停学',
            process:'因未安排好学韦时间，无暇完成选修课论文找代写帮忙，交上去后被老师查出论文抄袭比例太高，自己去找老师后无果，被判停学。求真团队积极地引导和帮助她完成向学校申诉。',
            result:'停学处分撤销',
            resultde:'申诉成功后，求真团队提供更合理的学业规划，避免此类事件再次发生。'
          },
          {
            school:'水牛城大学',
            enschool:'University at Buffalo',
            reasons:'GAP低被开除',
            process:'因连续两学期GPA过低被学校开除。收到求助的求真团队与T同学沟通后发现,他目前GPA低的主要原因是不喜欢当前专业，无心学习，但家人执意要求，不敢换专业。求真团队帮助他申诉后处分撤销。',
            result:'2开除处分撤消',
            resultde:'申诉成功后，求真顾问与他家人耐心沟通,T同学也成功转入自己真正康兴趣的专业。'
          },
          {
            school:'迈阿密大学',
            enschool:'University of Miami',
            reasons:'违反校纪被开除',
            process:'因找助教理论考试成绩，助教不予理会，于是在语言上侮辱了助教，并发邮件给教授表示对教授和助教的不满，之后在与教授的面谈时再次顶撞教授，被学校开除。收到求助的求真团队了解详情后,指导他完成申诉。',
            result:'开除处分改为留校察看',
            resultde:''
          },
          {
            school:'福特汉姆大学',
            enschool:'Fordham University',
            reasons:'考试作弊被停学',
            process:'Y同学考试作弊被助教抓到，教授上报到学校，收到停学处分。求真团队指导她如何向学校申诉，鉴于她认错态度良好且是初犯，学校撤销了对她的停学处分，只记当场考试为F。',
            result:'停学处分撤销',
            resultde:''
          },
          {
            school:'伊利诺伊大学香槟分校',
            enschool:'UIUC: University ofllinoisat Urbana一Champaign',
            reasons:'GAP低被开除',
            process:'因GPA低于本科要求2.0被开除，学生被开除时在中国并未查看学校邮件，入境时因I20失效被海关拦下。我们指导他与学校多次沟通争取机会提交申诉信，最终改为停学1学期。',
            result:'开除处分改为停学1学期',
            resultde:'申诉成功后，求真教育帮他规划好在中国的学习计划，帮助J同学签证辅导,目前他已顺利取得签证转回UIUC继续学业'
          },
          {
            school:'伊利诺伊大学香槟分校',
            enschool:'UIUC: University ofllinoisat Urbana一Champaign',
            reasons:'GAP低被开除',
            process:'因GPA低于本科要求2.0被开除，学生被开除时在中国并未查看学校邮件，入境时因I20失效被海关拦下。我们指导他与学校多次沟通争取机会提交申诉信，最终改为停学1学期。',
            result:'开除处分改为停学1学期',
            resultde:'申诉成功后，求真教育帮他规划好在中国的学习计划，帮助J同学签证辅导,目前他已顺利取得签证转回UIUC继续学业'
          },
          {
            school:'伊利诺伊大学香槟分校',
            enschool:'UIUC: University ofllinoisat Urbana一Champaign',
            reasons:'GAP低被开除',
            process:'因GPA低于本科要求2.0被开除，学生被开除时在中国并未查看学校邮件，入境时因I20失效被海关拦下。我们指导他与学校多次沟通争取机会提交申诉信，最终改为停学1学期。',
            result:'开除处分改为停学1学期',
            resultde:'申诉成功后，求真教育帮他规划好在中国的学习计划，帮助J同学签证辅导,目前他已顺利取得签证转回UIUC继续学业'
          },
          {
            school:'伊利诺伊大学香槟分校',
            enschool:'UIUC: University ofllinoisat Urbana一Champaign',
            reasons:'GAP低被开除',
            process:'因GPA低于本科要求2.0被开除，学生被开除时在中国并未查看学校邮件，入境时因I20失效被海关拦下。我们指导他与学校多次沟通争取机会提交申诉信，最终改为停学1学期。',
            result:'开除处分改为停学1学期',
            resultde:'申诉成功后，求真教育帮他规划好在中国的学习计划，帮助J同学签证辅导,目前他已顺利取得签证转回UIUC继续学业'
          }
        ]
      }
    },
     computed: {
    showNewsList() {
      const skipNum = (this.currentPage - 1) * this.pageSize
      const showcaseList = (skipNum + this.pageSize >= this.caseList.length) ? this.caseList.slice(skipNum, this.caseList.length) : this.caseList.slice(skipNum, skipNum + this.pageSize)
      return showcaseList
    }
  },
  mounted() {
    this.caseList
    this.currentPage = 1
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val
    }
  }
  }
</script>

<style lang="scss" scoped>

</style>