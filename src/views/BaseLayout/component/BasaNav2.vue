<template>
  <div class="">
    <div class=" fixed z-10 ">
      <div class="shortcut">
		<div class="topbar">
			<!-- <div class="location">
				<div class="dropdown_btn">
					<a href="javascript:;" class="dropdown_btn_link">
						<i class="fa fa-map-marker"></i>
						<span class="this_location_name">广东</span>
					</a>
 
					<div class="dropdown-layer">
 
						<div class="area-content-wrap">
							<div class="area-content">
								<div class="area-content-list">
									<div class="item">
										<a href="javascript:;">北京</a>
									</div>
									<div class="item">
										<a href="javascript:;">上海</a>
									</div>
									<div class="item">
										<a href="javascript:;">天津</a>
									</div>
									<div class="item">
										<a href="javascript:;">重庆</a>
									</div>
									<div class="item">
										<a href="javascript:;">河北</a>
									</div>
									<div class="item">
										<a href="javascript:;">山西</a>
									</div>
									<div class="item">
										<a href="javascript:;">河南</a>
									</div>
									<div class="item">
										<a href="javascript:;">辽宁</a>
									</div>
									<div class="item">
										<a href="javascript:;">吉林</a>
									</div>
									<div class="item">
										<a href="javascript:;">黑龙江</a>
									</div>
									<div class="item">
										<a href="javascript:;">内蒙古</a>
									</div>
									<div class="item">
										<a href="javascript:;">江苏</a>
									</div>
									<div class="item">
										<a href="javascript:;">山东</a>
									</div>
									<div class="item">
										<a href="javascript:;">安徽</a>
									</div>
									<div class="item">
										<a href="javascript:;">浙江</a>
									</div>
									<div class="item">
										<a href="javascript:;">福建</a>
									</div>
									<div class="item">
										<a href="javascript:;">湖北</a>
									</div>
									<div class="item">
										<a href="javascript:;">湖南</a>
									</div>
									<div class="item">
										<a class="selected" href="javascript:;">广东</a>
									</div>
									<div class="item">
										<a href="javascript:;">广西</a>
									</div>
									<div class="item">
										<a href="javascript:;">江西</a>
									</div>
									<div class="item">
										<a href="javascript:;">四川</a>
									</div>
									<div class="item">
										<a href="javascript:;">海南</a>
									</div>
									<div class="item">
										<a href="javascript:;">贵州</a>
									</div>
									<div class="item">
										<a href="javascript:;">云南</a>
									</div>
									<div class="item">
										<a href="javascript:;">陕西</a>
									</div>
									<div class="item">
										<a href="javascript:;">甘肃</a>
									</div>
									<div class="item">
										<a href="javascript:;">贵州</a>
									</div>
									<div class="item">
										<a href="javascript:;">宁夏</a>
									</div>
									<div class="item">
										<a href="javascript:;">哈尔滨</a>
									</div>
									<div class="item">
										<a href="javascript:;">昆明</a>
									</div>
									<div class="item">
										<a href="javascript:;">南宁</a>
									</div>
									<div class="item">
										<a href="javascript:;">澳门</a>
									</div>
									<div class="item">
										<a href="javascript:;">桂林</a>
									</div>
									<div class="item">
										<a href="javascript:;">衡阳</a>
									</div>
								</div>
							</div>
						</div>
 
						<div class="area_inter">
							<div class="area_spliter"></div>
							<p class="area_dis">地区专享版</p>
							<ul class="area_list">
								<li class="area_item">
									<a href="javascript:;" class="area_item_lk">中国港澳</a>
								</li>
								<li class="area_item">
									<a href="javascript:;" class="area_item_lk">东南亚</a>
								</li>
								<li class="area_item">
									<a href="javascript:;" class="area_item_lk">京东全球</a>
								</li>
							</ul>
						</div>
 
						<div class="area_inter">
							<div class="area_spliter"></div>
							<p class="area_dis">Available Sites</p>
							<ul class="area_list">
								<li class="area_item">
									<a href="javascript:;" class="area_item_lk">Global Site</a>
								</li>
								<li class="area_item">
									<a href="javascript:;" class="area_item_lk">เว็บไซต์ประเทศไทย</a>
								</li>
								<li class="area_item">
									<a href="javascript:;" class="area_item_lk">Сайт России</a>
								</li>
								<li class="area_item">
									<a href="javascript:;" class="area_item_lk">Situs Indonesia</a>
								</li>
								<li class="area_item">
									<a href="javascript:;" class="area_item_lk">Sitio de España</a>
								</li>
							</ul>
						</div>
 
					</div>
				</div>
			</div> -->
 
			<ul class="fr">
				<li class="topbar_btn sp1">
					&nbsp;&nbsp;&nbsp;&nbsp;
					<router-link to="/" class="link_login mainnav">首页</router-link>
					&nbsp;&nbsp;&nbsp;&nbsp;
				</li>
				<li class="spacer"></li>
				<li class="topbar_btn_nav">
					<div class="link_nav">
						&nbsp;&nbsp;&nbsp;&nbsp;<span class="mainnav">学生权益</span>&nbsp;&nbsp;&nbsp;&nbsp;
						<i class="fas fa-angle-down"></i>
					</div>
					<div class="dropdown-layer-nav">
						<div class="col1">
							<h3>紧急申诉</h3>
							<ul class="nav-list">
								<li class="nav-item">
									<router-link to="/urgentAppeal" class="nav-link">紧急申诉</router-link>
								</li>
							</ul>
						</div>

						<div class="col2">
							<h3>申诉种类</h3>
							<ul class="nav-list">
								<li class="nav-item">
									<router-link to="/reasonAnalysis" class="nav-link">原因分析</router-link>
								</li>
								<li class="nav-item">
									<router-link to="/punishmentWay" class="nav-link">惩处方式</router-link>
								</li>
								<li class="nav-item">
									<router-link to="/QA2" class="nav-link">Q&A</router-link>
								</li>
							</ul>
						</div>
 
						<div class="col3">
							<h3>申诉方式</h3>
							<ul class="nav-list">
								<li class="nav-item">
									<router-link to="/MethodsVary" class="nav-link">方式差异</router-link>
								</li>
								<li class="nav-item">
									<router-link to="/Complain" class="nav-link">Complgin</router-link>
								</li>
								<li class="nav-item">
									<router-link to="/Ec" class="nav-link">Ec</router-link>
								</li>
								<li class="nav-item">
									<router-link to="/Mc" class="nav-link">Mc</router-link>
								</li>
								<li class="nav-item">
									<router-link to="/Appeals" class="nav-link">Appeals</router-link>
								</li>
								<li class="nav-item">
									<router-link to="/AcademicIntegrity" class="nav-link">AcademicIntegrity</router-link>
								</li>
								<li class="nav-item">
									<router-link to="/QA" class="nav-link">Q&A</router-link>
								</li>
							</ul>
						</div>
 
						<div class="col4">
							<h3>申诉流程</h3>
							<ul class="nav-list">
								<li class="nav-item">
									<a href="javascript:;" class="nav-link">流程解释</a>
								</li>
								<li class="nav-item">
									<a href="javascript:;" class="nav-link">听证会</a>
								</li>
							</ul>
						</div>

						<div class="col5">
							<h3>案例</h3>
							<ul class="nav-list">
								<li class="nav-item">
									<router-link to="/allCase" class="nav-link">常见案例</router-link>
								</li>
								<li class="nav-item">
									<a href="javascript:;" class="nav-link">历年案例</a>
								</li>
							</ul>
						</div>

					</div>
				</li>
				<li class="spacer"></li>
				<li class="topbar_btn sp">
					&nbsp;&nbsp;&nbsp;&nbsp;
					<router-link to="/backgroundAscension" class="link_order mainnav">背景提升</router-link>
					&nbsp;&nbsp;&nbsp;&nbsp;
				</li>
				<li class="spacer"></li>
				<!-- <li class="dropdown_btn">
					<a href="javascript:;" class="dropdown_btn_link">
						<span>我的京东</span>
						<i class="fas fa-angle-down"></i>
					</a>
 
					<div class="dropdown-layer-info">
						<ul class="info-list">
							<li class="info-item">
								<a href="javascript:;" class="link-info">待处理订单</a>
							</li>
							<li class="info-item">
								<a href="javascript:;" class="link-info">消息</a>
							</li>
							<li class="info-item">
								<a href="javascript:;" class="link-info">返修退换货</a>
							</li>
							<li class="info-item">
								<a href="javascript:;" class="link-info">我的问答</a>
							</li>
							<li class="info-item">
								<a href="javascript:;" class="link-info">降价商品</a>
							</li>
							<li class="info-item">
								<a href="javascript:;" class="link-info">我的关注</a>
							</li>
						</ul>
 
						<div class="area_spliter"></div>
 
						<ul class="info-list">
							<li class="info-item">
								<a href="javascript:;" class="link-info">我的京豆</a>
							</li>
							<li class="info-item">
								<a href="javascript:;" class="link-info">我的优惠券</a>
							</li>
							<li class="info-item">
								<a href="javascript:;" class="link-info">我的白条</a>
							</li>
							<li class="info-item">
								<a href="javascript:;" class="link-info">我的理财</a>
							</li>
						</ul>
 
					</div>
					
				</li> -->
				<li class="spacer"></li>
				<li class="topbar_btn_nav">
					<div class="link_nav">
						&nbsp;&nbsp;&nbsp;&nbsp;<span class="mainnav">学术指导</span>&nbsp;&nbsp;&nbsp;&nbsp;
						<i class="fas fa-angle-down"></i>
					</div>
					<div class="dropdown-layer-nav">
						<div class="col1">
							<h3>学术道德</h3>
							<ul class="nav-list">
								<li class="nav-item">
									<router-link to="/literature" class="nav-link">学术道德</router-link>
								</li>
							</ul>
						</div>

						<div class="col2">
							<h3>英文润色</h3>
							<ul class="nav-list">
								<li class="nav-item">
									<router-link to="/EnglishPolished" class="nav-link">英文润色</router-link>
								</li>
							</ul>
						</div>
 
						<div class="col3">
							<h3>英文翻译</h3>
							<ul class="nav-list">
								<li class="nav-item">
									<a href="javascript:;" class="nav-link">英文翻译</a>
								</li>
							</ul>
						</div>
 
						
					</div>
				</li>
				<li class="spacer"></li>
				<!-- <li class="dropdown_btn">
					<a href="javascript:;" class="dropdown_btn_link">
						<span>企业采购</span>
						<i class="fas fa-angle-down"></i>
					</a>
					<div class="dropdown-layer-corder">
						<ul class="corder-list">
							<li class="corder-item">
								<a href="javascript:;" class="corder-link">企业购</a>
							</li>
							<li class="corder-item">
								<a href="javascript:;" class="corder-link">商用场景观</a>
							</li>
							<li class="corder-item">
								<a href="javascript:;" class="corder-link">工业品</a>
							</li>
							<li class="corder-item">
								<a href="javascript:;" class="corder-link">丰客多商城</a>
							</li>
							<li class="corder-item">
								<a href="javascript:;" class="corder-link">礼品卡</a>
							</li>
							<li class="corder-item">
								<a href="javascript:;" class="corder-link">微信企业购</a>
							</li>
							<li class="corder-item">
								<a href="javascript:;" class="corder-link">大中型企业采购</a>
							</li>
						</ul>
					</div>
				</li> -->
				<li class="spacer"></li>
				<!-- <li class="topbar_btn dropdown_btnc">
					<div class="link_service">
						<span>客户服务</span>
						<i class="fas fa-angle-down"></i>
					</div>
					<div class="dropdown-layer-service">
						<h3>客户</h3>
						<ul class="service-list">
							<li class="service-item">
								<a href="javascript:;" class="service-link">帮助中心</a>
							</li>
							<li class="service-item">
								<a href="javascript:;" class="service-link">售后服务</a>
							</li>
							<li class="service-item">
								<a href="javascript:;" class="service-link">在线客服</a>
							</li>
							<li class="service-item">
								<a href="javascript:;" class="service-link">意见建议</a>
							</li>
							<li class="service-item">
								<a href="javascript:;" class="service-link">电话客服</a>
							</li>
							<li class="service-item">
								<a href="javascript:;" class="service-link">客服邮箱</a>
							</li>
							<li class="service-item">
								<a href="javascript:;" class="service-link">金融咨询</a>
							</li>
							<li class="service-item">
								<a href="javascript:;" class="service-link">全球售客服</a>
							</li>
							<li class="service-item">
								<a href="javascript:;" class="service-link">企业客服</a>
							</li>
						</ul>
 
						<h3>商户</h3>
						<ul class="service-list">
							<li class="service-item">
								<a href="javascript:;" class="service-link">合作招商</a>
							</li>
							<li class="service-item">
								<a href="javascript:;" class="service-link">成长中心</a>
							</li>
							<li class="service-item">
								<a href="javascript:;" class="service-link">商家后台</a>
							</li>
							<li class="service-item">
								<a href="javascript:;" class="service-link">京麦工作台</a>
							</li>
							<li class="service-item">
								<a href="javascript:;" class="service-link">商家帮助</a>
							</li>
							<li class="service-item">
								<a href="javascript:;" class="service-link">规则平台</a>
							</li>
						</ul>
 
					</div>
				</li> -->
				
				<li class="spacer"></li>
				<li class="topbar_btn sp">
					<li class="topbar_btn sp">
					&nbsp;&nbsp;&nbsp;&nbsp;<router-link to="/consult" class="link_jdvip mainnav">资讯</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
				  </li>
				</li>

				<li class="spacer"></li>
				<li class="topbar_btn sp">
					<li class="topbar_btn sp">
					&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:;" class="link_jdvip mainnav">联系我们</a>&nbsp;&nbsp;&nbsp;&nbsp;
				  </li>
				</li>
			</ul>
 
		</div>
	</div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

*{
	margin: 0;
	padding: 0;
}
body{
	font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
	color: #333333;
}
ul{
	list-style-type: none;
}
a{
	text-decoration: none;
}
 
.shortcut{
	background-color: #1D2A3A;
  border-bottom: 1px solid #1D2A3A;
  width: full;
}
.shortcut router-link{
	color: white;
}
.shortcut a:hover{
	color: #246ADD;
}
.shortcut .topbar{
	height: 80px;
	line-height: 80px;
	color: #fff;
  width: 100vw;
  padding-right: 25vw;
  margin: auto;
  font-weight: 500;
}
 
.shortcut .dropdown_btn_link{
	float: left;
}
.mainnav{
	font-weight: 700;
}
.dropdown_btn_link{
	height: 28px;
	line-height: 28px;
	padding-left: 7px;
	padding-right: 7px;
	border: 1px solid #E3E4E5;
	position: relative;
	z-index: 1;
}
.fa-map-marker{
	font-size: 14px;
	margin-right: 2px;
	color: #E10215;
}
.dropdown_btn:hover .dropdown_btn_link{
	padding-bottom: 2px;
	border-color: #fff;
	border-bottom: none;
	background-color: #FFF;
}
.dropdown_btn{
	position: relative;
}
.dropdown-layer{
	display: none;
	position: absolute;
	left: 0;
	top: 30px;
	width: 300px;
	padding: 10px;
	line-height: 24px;
	border: 1px solid #CCC;
	box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
}
.dropdown_btn:hover .dropdown-layer,
.dropdown_btn:hover .dropdown-layer-info,
.dropdown_btn:hover .dropdown-layer-corder{
	display: block;
}
 
.area-content-list{
	overflow: hidden;
}
 
.item{
	float: left;
	width: 60px;
	padding: 2px 0;
}
.item a{
	float: left;
	padding: 0 8px;
}
.item a:hover{
	background-color: blue;
}
a.selected{
	background-color: #246ADD;
	color: #FFF;
}
a.selected:hover{
	background-color: #246ADD;
	color: #FFF;
}
 
.area_inter::before,
.area_inter::after{
	content: '';
	display: table;
	clear: both;
}
.area_inter{
	margin: 10px 0 10px 10px;
}
.area_spliter{
	width: 262px;
	height: 0;
	border-bottom: 1px dotted #CCC;
}
.area_dis{
	margin: 9px 0;
	color: #8F8F8F;
}
.area_item{
	width: 145px;
	height: 26px;
	line-height: 26px;
	float: left;
}
 
.fr{
	float: right;
}
.fr li{
	float: left;
}
.sp1{
	margin-right: 8px;
}
li.spacer{
	width: 1px;
	height: 10px;
	margin: 11px 5px 0;
	// background-color: #CCC;
}
// a.link_regist, a.link_corder{
	// color: #F10215;
// }
.sp{
	padding-left: 7px;
	padding-right: 7px;
}
a.dropdown_btn_link .fa-angle-down,
a.dropdown_btn_link .fas,
a.link_corder .fa-angle-down,
a.link_corder .fas,
a.fa-angle-down:hover{
	color: #999;
}
 
.dropdown-layer-info{
	display: none;
	position: absolute;
	left: 0;
	top: 30px;
	width: 260px;
	padding: 10px;
	line-height: 24px;
	border: 1px solid #CCC;
	box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
}
 
.info-list{
	margin: 5px 0 8px 8px;
	overflow: hidden;
}
.info-item{
	width: 126px;
	float: left;
}
 
.dropdown-layer-corder{
	display: none;
	position: absolute;
	left: 0;
	top: 30px;
	width: 130px;
	padding: 10px;
	line-height: 24px;
	border: 1px solid #CCC;
	box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
}
.corder-list{
	margin: 5px 0;
}
.corder-item{
	float: left;
}
.corder-item .corder-link{
	padding: 0 5px;
	float: left;
}
 
 
.dropdown_btnc{
	float: left;
	position: relative;
}
.link_service{
	padding-left: 7px;
	padding-right: 7px;
	border: 1px solid #E3E4E5;
	float: left;
	position: relative;
	height: 28px;
	line-height: 28px;
	z-index: 1;
}
.dropdown_btnc:hover .link_service{
	border: 1px solid #CCC;
	padding-bottom: 2px;
	border-bottom: none;
	background-color: #FFF;
}
.dropdown-layer-service{
	display: none;
	padding: 5px 8px;
	position: absolute;
	top: 30px;
	right: 0;
	border: 1px solid #CCC;
	box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
	width: 150px;
}
 
.dropdown_btnc:hover .dropdown-layer-service{
	display: block;
}
 
h3::before,
h3::after{
	content: '';
	display: table;
	clear: both;
}
.h3{
	font-size: 14px;
	font-weight: bold;
}
 
.service-item{
	float: left;
	width: 70px;
}
 
a.service-link{
	margin-left: 5px;
}
 
.topbar_btn_nav{
	float: left;
	position: relative;
}
// 大框正确导航
.link_nav{
	float:left;
	height: 80px;
	line-height: 80px;
	// border: 1px solid #E3E4E5;
	position: relative;
	padding-left: 7px;
	padding-right: 7px;
	z-index: 1;
}
.topbar_btn_nav:hover .link_nav{
	border-bottom: none;
	padding-bottom: 2px;
  background-color: #FFF;
  color: #246ADD;
}
.dropdown-layer-nav{
	display: none;
	position: absolute;
	top: 80px;
	width: 1000px;
	right: -400px;
	line-height: 24px;
	padding: 30px 0;
  background: white;
  color: #333333;
	box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
}
.topbar_btn_nav:hover .dropdown-layer-nav{
	display: block;
}
.col1{
	float: left;
	width: 150px;
	padding-left: 50px;
	margin-right: 50px;
	font-size: 14px;
}
.dropdown-layer-nav h3{
	font-size: 18px;
	font-weight: bold;
	line-height: 2em;
}
.nav-item{
	float: left;
	width: 85px;
}
.nav-link{
	float: left;
}
 
.col2, .col3, .col4, .col5{
	float: left;
	width: 150px;
	padding-left: 50px;
	margin-right: 50px;
	border-left: 1px solid #EEE;
	font-size: 14px;
}
 
.dropdown-phone-jd{
	position: relative;
	padding-left: 7px;
	padding-right: 7px;
}
// .link_phonejd{
// 	position: relative
// }
.dropdown-phone-jd:hover .dropdown-layer-phone{
	display: block;
}
.dropdown-layer-phone{
	display: none;
	position: absolute;
	right: 0;
	width: 140px;
	padding: 15px 10px;
	border: 1px solid #CCC;
	box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1)
}
</style>