<template>
  <div>
    <div class=" font-bold text-3xl">原因分析</div>

    <div class=" mt-5">
      <div class=" text-themeOrange font-bold">General：</div>
      <div v-for="item in item1List">
        <div @click="showAnswer(item)" :class="item.show == true ? 'QAitemClick':''" class=" QAitem font-bold text-gray-600 bg-white h-20 border-2 flex items-center pl-7 ">
          {{item.question}}
       </div>
          <div v-if="item.show" class=" text-xs font-bold text-gray-600 border-b-2 border-l-2 border-r-2 h-20 flex items-center pl-7">{{item.answer}}</div>
      </div>
    </div>

    <div class=" mt-8">
      <div class=" text-themeOrange font-bold">生活问题：</div>
      <div v-for="item in item2List">
        <div @click="showAnswer(item)" :class="item.show == true ? 'QAitemClick':''" class=" QAitem font-bold text-gray-600 bg-white h-20 border-2 flex items-center pl-7 ">
          {{item.question}}
       </div>
          <div v-if="item.show" class=" text-xs text-gray-600 font-bold border-b-2 border-l-2 border-r-2 h-20 flex items-center pl-7">{{item.answer}}</div>
      </div>
    </div>

    <div class=" mt-8">
      <div class=" text-themeOrange font-bold">学术问题：</div>
      <div v-for="item in item3List">
        <div @click="showAnswer(item)" :class="item.show == true ? 'QAitemClick':''" class=" QAitem font-bold text-gray-600 bg-white h-20 border-2 flex items-center pl-7 ">
          {{item.question}}
       </div>
          <div v-if="item.show" class=" text-xs font-bold text-gray-600 border-b-2 border-l-2 border-r-2 h-20 flex items-center pl-7">{{item.answer}}</div>
      </div>
    </div>

    <div class=" mt-8">
      <div class=" text-themeOrange font-bold">纪律问题：</div>
      <div v-for="item in item4List">
        <div @click="showAnswer(item)" :class="item.show == true ? 'QAitemClick':''" class=" QAitem font-bold text-gray-600 bg-white h-20 border-2 flex items-center pl-7 ">
          {{item.question}}
       </div>
          <div v-if="item.show" class=" text-xs text-gray-600 border-b-2 font-bold border-l-2 border-r-2 h-20 flex items-center pl-7">{{item.answer}}</div>
      </div>
    </div>

    <div class=" mt-8">
      <div class=" text-themeOrange font-bold">身体原因：（心理，生理）</div>
      <div v-for="item in item5List">
        <div @click="showAnswer(item)" :class="item.show == true ? 'QAitemClick':''" class=" QAitem font-bold text-gray-600 bg-white h-20 border-2 flex items-center pl-7 ">
          {{item.question}}
       </div>
          <div v-if="item.show" class=" text-xs text-gray-600 border-b-2 font-bold border-l-2 border-r-2 h-20 flex items-center pl-7">{{item.answer}}</div>
      </div>
    </div>

    <div class=" mt-8">
      <div class=" text-themeOrange font-bold">刑事公诉问题：</div>
      <div v-for="item in item6List">
        <div @click="showAnswer(item)" :class="item.show == true ? 'QAitemClick':''" class=" QAitem font-bold text-gray-600 bg-white h-20 border-2 flex items-center pl-7 ">
          {{item.question}}
       </div>
          <div v-if="item.show" class=" text-xs text-gray-600 border-b-2 font-bold border-l-2 border-r-2 h-20 flex items-center pl-7">{{item.answer}}</div>
      </div>
    </div>

    <div class=" mt-8">
      <div class=" text-themeOrange font-bold">新冠疫情：</div>
      <div v-for="item in item7List">
        <div @click="showAnswer(item)" :class="item.show == true ? 'QAitemClick':''" class=" QAitem font-bold text-gray-600 bg-white h-20 border-2 flex items-center pl-7 ">
          {{item.question}}
       </div>
          <div v-if="item.show" class=" text-xs text-gray-600 border-b-2 font-bold border-l-2 border-r-2 h-20 flex items-center pl-7">{{item.answer}}</div>
      </div>
    </div>

    <div class=" mt-8">
      <div class=" text-themeOrange font-bold">歧视问题：</div>
      <div v-for="item in item8List">
        <div @click="showAnswer(item)" :class="item.show == true ? 'QAitemClick':''" class=" QAitem font-bold text-gray-600 bg-white h-20 border-2 flex items-center pl-7 ">
          {{item.question}}
       </div>
          <div v-if="item.show" class=" text-xs text-gray-600 border-b-2 font-bold border-l-2 border-r-2 h-20 flex items-center pl-7">{{item.answer}}</div>
      </div>
    </div>

    <div class=" mt-8">
      <div class=" text-themeOrange font-bold">费用问题：</div>
      <div v-for="item in item9List">
        <div @click="showAnswer(item)" :class="item.show == true ? 'QAitemClick':''" class=" QAitem font-bold text-gray-600 bg-white h-20 border-2 flex items-center pl-7 ">
          {{item.question}}
       </div>
          <div v-if="item.show" class=" text-xs text-gray-600 border-b-2 font-bold border-l-2 border-r-2 h-20 flex items-center pl-7">{{item.answer}}</div>
      </div>
    </div>

    <div class=" mt-8">
      <div class=" text-themeOrange font-bold">不可抗拒因素：</div>
      <div v-for="item in item10List">
        <div @click="showAnswer(item)" :class="item.show == true ? 'QAitemClick':''" class=" QAitem font-bold text-gray-600 bg-white h-20 border-2 flex items-center pl-7 ">
          {{item.question}}
       </div>
          <div v-if="item.show" class=" text-xs text-gray-600 border-b-2 font-bold border-l-2 border-r-2 h-20 flex items-center pl-7">{{item.answer}}</div>
      </div>
    </div>
 
  </div>
</template>

<script>
  export default {
    name:'QA2',
    data:function(){
    return {
      
      item1List:[
        {
          show:false,
          question:'什么情况下需要提交正式appeal？',
          answer:'若错过了EC/MC的申请时间，则需要提交正式的appeal。正式的appeal时间一般需要在成绩发布后的28天内（具体以学校要求为准）。'
        },
        {
          show:false,
          question:'当我有问题需要提交申诉时，应该按什么步骤？',
          answer:'首先联系个人导师或相关的部门解释你的情况，学校会根据具体事件为你匹配相应的处理部门，然后只需要按照指示去做接下来的步骤即可。'
        },
        {
          show:false,
          question:'没有留下相关医疗证明或者原因无法提供证据怎么办？',
          answer:'当遇到家庭原因，或是突发性状况无法提供实际性质的证据时，需要向学校详细的说明你的状况，并且给出不能提供证据的理由。注意任何申诉都要包含该因素对你产生了什么样的影响的具体说明。'
        },
        {
          show:false,
          question:'申诉被拒绝了还可以继续申诉吗？',
          answer:'如果对自己的申诉判决结果有异议，可以继续向学校申请申诉并提供投诉或对判决结果考虑不周的理由和证据。'
        },
        {
          show:false,
          question:'申诉被拒绝了还可以继续申诉吗？',
          answer:'只要满足自身学习和生活的状态受到影响，都可以提出申诉。但不可以替他人进行申诉。'
        }
      ],
      item2List:[
        {
          show:false,
          question:'在宿舍受到了他人的生活习惯的影响，怎么办？（如噪声，抽烟，聚会等）',
          answer:' 首先向宿舍管理部门反映你的情况，若情况未被解决，可适当留下证据给学校complaints部门请求调查并提交申诉。'
        },
        {
          show:false,
          question:'收到学校的处分但并不是实情怎么办？',
          answer:'如果遇到被处分但并不是自己的行为或者并未参与，可向学校部门提出申诉，解释自己的情况，要求解除处罚。可依据情况提供相应证据。'
        },
        {
          show:false,
          question:'投诉后，问题并没有得到解决怎么办？',
          answer:'如果进行投诉后，问题仍然没有得到解决或者遭受恶意报复，可以向学校提出更换宿舍，课程等相关安排的请求，或是保留证据向学校要求相应的处置。'
        }
      ],
      item3List:[
        {
          show:false,
          question:'我被同学匿名举报抄袭，怎么办？',
          answer:'因为出勤率不够被退学可依据情况向学校进行申诉。注意，涉及出勤率的问题一般都需要提供具体到某一天的未出勤的原因证据。若是因为时间段内的特殊情况影响到自己的身体状态，可向学校进行解释并提交申诉。（如生病，家庭原因等）可能出现的判决结果是被取消退学，处分，或是重修等。'
        },
        {
          show:false,
          question:'我觉得我的分数误判了，怎么办？',
          answer:' 如果出现了分数和自己预计差太大，或者觉得评分过程中出现了个人情感，偏见等影响了分数评判的原因，可以向学校申请重新评分。若是觉得成绩不符合评分标准，可提供自己的作业和评分标准的具体分析；若是因为对判定过程有疑问，可以提供自己的情况说明以及相关证据。'
        },
        {
          show:false,
          question:'我忘记考试或者提交作业了，怎么办？',
          answer:'任何考场违规行为，抄袭，聘用他人考试，或者帮助他人作弊等以不公平的方式企图获得学术优势的行为都将会被定义为学术不端。在学术不端的处理过程中，学生将会接受学校调查小组的检查，这个过程可能包括了个人会议，学校听证会和正式上诉。注意在被怀疑学术不端时，情有可原的原因不会被考虑在内，更多的是判定是否有该行为。若学术不端被学校判定为实，则可能出现退学，重修等结果，并在学生记录上留下记录，甚至影响签证。'
        }
      ],
      item4List:[
        {
          show:false,
          question:'违反学校规定会导致什么？',
          answer:' 任何违反学校规章制度或影响到他人学习和校园生活被做实的行为，都将会被做违规处理。违反纪律会根据情节严重性作出相应的处罚，轻则警告并督促改正，重则可能会被取消科目成绩，退学等。所有的违规记录也会被保存记录在学生个人档案里。注意违纪同样将不会考虑情有可原的原因，除非可以提供客观因素而导致的误判。'
        },
        {
          show:false,
          question:'我已经有违规行为记录，再次违规会被退学吗？',
          answer:'所有的违规行为都将会被记录在学生档案内，如果出现再次违规，学校可能会参考之前已存在的记录根据情况作出裁决。若情况严重且多次违规的，可能会被做退学处理。'
        }
      ],
       item5List:[
        {
          show:false,
          question:'我因为长时间心理疾病，导致一整年的成绩都不是很理想，有什么解决方法吗？',
          answer:'若长期经受精神问题，需要及时通知学校以了解你的病情。所有大学院校都会给残疾，心理问题等特殊人群成立帮助小组，在学校的help and advice的界面，你可以找到对特殊人群的政策以及求助方法。学校针对学习有困难的人群会提供相应的帮助。若是因为心理原因影响了学业，可以向学校提出申诉，提供自己的相关医疗证明以争取重修，重考的机会。但注意长期的疾病最好要在成绩出来之前告知学校，否则被考虑的机会将会变小。'
        },
        {
          show:false,
          question:'我家人突然生病了需要照顾，但我还没有毕业，怎么办？',
          answer:'遇到自己或者亲人因为身体原因，影响学习进度或无法正常完成学习的情况，需要向学校提出申请请求特殊处理。可以阐述自己的个人情况以及辅助性证据向学校申请暂停学业，下学期入学或者是线上上课的机会。'
        },
        {
          show:false,
          question:'我因为生病而无法进行网课学习或者考试，从而导致挂科，怎么办？',
          answer:'一般情况下，我们需要提前告知学校和学院部门你的具体情况，申请EC/MC的机会。若因为生病无法告知学校或是错过了EC的申请时间，则需要提供详细的个人说明及医疗证明向学校提出正式appeal的申请。'
        }
      ],
      item6List:[
        {
          show:false,
          question:'我在学业期间遇到了需要刑事公诉的问题，能向学校申请延期交作业吗？',
          answer:'首先要分析刑事公诉问题是出于什么原因，若因为是他人或不可避免的意外发生，可向学校提出申诉，解释个人情况附以证明，申请延期课业或者补考。如果因为违法犯纪受到被刑事公诉，学校有权利了解事件的原因并根据情况给出处置。这种情况同样需要向学校提出正式申请，收集对自己有利的理由申请重修或暂停学业等方式。注意，学校有权知情且根据诉讼详情对学生进行处理。'
        }
      ],
      item7List:[
        {
          show:false,
          question:'我在国内被隔离了，因此无法上网课被记了缺勤，怎么办？',
          answer:'该情况满足 “不可避免且情有可原的原因’，可向学校提交申诉，解释自己的情况并请求取消记录。 '
        },
        {
          show:false,
          question:'我得了新冠，怎么办？',
          answer:'首选，应该向学校及时的反应自己的情况提出特殊申请，请求暂停学业或其他不会造成学业影响的处理。也可以跟学校进行讨论根据自己的情况作出特殊处理的方案，并在有能力的范围内及时向学校更新自己的状态。'
        },
        {
          show:false,
          question:'我害怕疫情不想线下上课，怎么办？',
          answer:' 因为部分大学已经重新恢复了线下授课的方式，如果不想线下上课，可联合其他学生尝试着向学校申请网课或者网上考试。但学校有权要求学生根据规定上课。'
        }
      ],
      item8List:[
        {
          show:false,
          question:'我觉得我在学校受到了歧视，该怎么办？',
          answer:' 如果在校园期间遇到了教师，同学或者是部门的歧视问题，可向学校提出申诉。阐述自己的个人情况及辅佐型证据，请求学校调查小组的参与并给出相应处理办法。'
        },
        {
          show:false,
          question:'我被举报歧视他人而被处分了，怎么办？',
          answer:'  学校会安排调查小组审查事件的经过，如事实存在，则会给出相应的惩罚处置；若并没有发生，则需要向学校申诉请求调查，从而撤销处置且对恶意举报的人员作出相关处理。'
        }
      ],
      item9List:[
        {
          show:false,
          question:'我无法一次性付清学费，怎么办？',
          answer:'一般大学对住宿费，学费都可以申请分期付款。付款方式一般有按学期，按月或者分次数支付。'
        },
        {
          show:false,
          question:'我的学费算错了/重复收费了，怎么办？',
          answer:' 遇到学费错收，误收等情况，可向学校相关部门反映，提供相应证据后请求追回扣款和错收的部分，也可以向学校申请补偿。'
        },
        {
          show:false,
          question:'我在支付学费时遇到困难，怎么办？',
          answer:'一般大学都开放对学生贷款的政策帮助，可在具体页面了解可以申请的条件，还款方案以及利息等信息。注意，学生贷款需要的申请材料和过程较为复杂，一般需要详细的家庭，个人和其他资料的提交，同时，在中途退学或者转学也必须偿还这些贷款。'
        }
      ],
       item10List:[
        {
          show:false,
          question:'我遇到了教师集体罢工，可以向学校索要补偿吗？',
          answer:'所有由于学校方面的不可抗拒的因素造成了个人学习和生活上的影响的，都可以向学校申请补偿。补偿方式可能会以增加课程或者补偿学费等方式。 '
        },
        {
          show:false,
          question:'我的学费算错了/我遇到了自然灾害而影响了学业，怎么办？',
          answer:' 如果遇到自然灾害而导致无法进行学习或完成作业，可以向学校申请EC/MC的机会。如果错过了EC事件，则需要向学校说明情况并提交正式的appeal。'
        }
      ],

    }
  },
   methods: {
     showAnswer(item) {
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
.left{
    width:200px;
    position: fixed;
    background: #f5f5f5;
    top:60px;
    left:0;
    height:calc(100% - 60px);
    z-index: 99;
    overflow-y: auto;
  }
  .left ul > li{
    padding:10px;
    border-bottom:dotted 1px #dedede;
    font-size:15px;
    color:#999;
  }
  .left ul > li i{
    margin-left:5px;
  }
  .left ul > li ul li{
    border-bottom:0;
    font-size:14px;
    color:#333;
  }
</style>