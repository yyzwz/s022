"use strict";(self["webpackChunks022"]=self["webpackChunks022"]||[]).push([[5336],{5336:(t,e,i)=>{i.r(e),i.d(e,{default:()=>d});var n=function(){var t=this,e=t._self._c;return e("div",[e("Alert",{attrs:{type:"success","show-icon":"",banner:""}},[t._v("温馨提示：该图数据来源自教师模块，即数据展示模块下的复杂表格样例！")]),e("div",{attrs:{id:"container"}})],1)},a=[],s=i(1821),l=i(7184);const o=t=>(0,l.A_)("/teacher/getAntvVoList",t),r={name:"test-page",components:{},props:{},data(){return{depCountData:[{title:"零食类",value:27},{title:"冷冻类",value:25},{title:"烟酒类",value:18},{title:"生鲜类",value:15},{title:"散装类",value:10},{title:"水果类",value:5}],piePlot:{}}},methods:{init(){this.initAntvFx(),this.getAntvVoListFx()},getAntvVoListFx(){var t=this;o().then((e=>{e.success&&t.piePlot.changeData(e.result)}))},renderStatistic(t,e,i){const{width:n,height:a}=(0,s.measureTextWidth)(e,i),l=t/2;let o=1;t<n&&(o=Math.min(Math.sqrt(Math.abs(Math.pow(l,2)/(Math.pow(n/2,2)+Math.pow(a,2)))),1));const r=`width:${t}px;`;return`<div style="${r};font-size:${o}em;line-height:${o<1?1:"inherit"};">${e}</div>`},initAntvFx(){var t=this,e=this.depCountData;this.piePlot=new s.Pie("container",{appendPadding:10,data:e,angleField:"value",colorField:"title",radius:1,innerRadius:.64,meta:{value:{formatter:t=>`${t} `}},label:{type:"inner",offset:"-50%",style:{textAlign:"center"},autoRotate:!1,content:"{value}"},statistic:{title:{offsetY:-4,customHtml:(e,i,n)=>{const{width:a,height:s}=e.getBoundingClientRect(),l=Math.sqrt(Math.pow(a/2,2)+Math.pow(s/2,2)),o=n?n.title:"教师工资分布图";return t.renderStatistic(l,o,{fontSize:28})}},content:{offsetY:4,style:{fontSize:"32px"},customHtml:(e,i,n,a)=>{const{width:s}=e.getBoundingClientRect(),l=n?` ${n.value}元`:` ${a.reduce(((t,e)=>t+e.value),0)}元`;return t.renderStatistic(s,l,{fontSize:32})}}},interactions:[{type:"element-selected"},{type:"element-active"},{type:"pie-statistic-active"}]}),this.piePlot.render(),this.piePlot.on("element:click",(e=>{t.getPieUserItemFx(e.data.data.title)}))}},mounted(){this.init()}},c=r;var h=i(1001),u=(0,h.Z)(c,n,a,!1,null,"520b9c32",null);const d=u.exports}}]);