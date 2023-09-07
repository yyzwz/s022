"use strict";(self["webpackChunks022"]=self["webpackChunks022"]||[]).push([[8633,8188],{8633:(t,a,e)=>{e.r(a),e.d(a,{default:()=>m});var r=function(){var t=this,a=t._self._c;return a("div",[a("Card",[a("div",{attrs:{slot:"title"},slot:"title"},[a("div",{staticClass:"edit-head"},[a("a",{staticClass:"back-title",on:{click:t.close}},[a("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),a("div",{staticClass:"head-name"},[t._v("添加天然气项目")]),a("span"),a("a",{staticClass:"window-close",on:{click:t.close}},[a("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),a("Form",{ref:"form",attrs:{model:t.form,"label-width":140,rules:t.formValidate,"label-position":"left"}},[a("FormItem",{attrs:{label:"建设单位",prop:"data1"}},[a("dict",{staticStyle:{width:"570px"},attrs:{dict:"constructionUnit",transfer:"",clearable:"",placeholder:"建设单位"},model:{value:t.form.data1,callback:function(a){t.$set(t.form,"data1",a)},expression:"form.data1"}})],1),a("FormItem",{attrs:{label:"委派单号",prop:"data2"}},[a("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:t.form.data2,callback:function(a){t.$set(t.form,"data2",a)},expression:"form.data2"}})],1),a("FormItem",{attrs:{label:"工程编号",prop:"data3"}},[a("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:t.form.data3,callback:function(a){t.$set(t.form,"data3",a)},expression:"form.data3"}})],1),a("FormItem",{attrs:{label:"工程名字",prop:"data4"}},[a("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:t.form.data4,callback:function(a){t.$set(t.form,"data4",a)},expression:"form.data4"}})],1),a("FormItem",{attrs:{label:"计划主要工程量",prop:"data5"}},[a("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:t.form.data5,callback:function(a){t.$set(t.form,"data5",a)},expression:"form.data5"}})],1),a("FormItem",{attrs:{label:"工程地址",prop:"data6"}},[a("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:t.form.data6,callback:function(a){t.$set(t.form,"data6",a)},expression:"form.data6"}})],1),a("FormItem",{attrs:{label:"类型1",prop:"data7"}},[a("dict",{staticStyle:{width:"570px"},attrs:{dict:"projextType1",transfer:"",clearable:"",placeholder:"类型1"},model:{value:t.form.data7,callback:function(a){t.$set(t.form,"data7",a)},expression:"form.data7"}})],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:"居民"==t.form.data7,expression:"form.data7 == '居民'"}],attrs:{label:"类型2",prop:"data8"}},[a("dict",{staticStyle:{width:"570px"},attrs:{dict:"projextType2A",transfer:"",clearable:"",placeholder:"类型2"},model:{value:t.form.data8,callback:function(a){t.$set(t.form,"data8",a)},expression:"form.data8"}})],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:"非居民"==t.form.data7,expression:"form.data7 == '非居民'"}],attrs:{label:"类型2",prop:"data8"}},[a("dict",{staticStyle:{width:"570px"},attrs:{dict:"projextType2B",transfer:"",clearable:"",placeholder:"类型2"},model:{value:t.form.data8,callback:function(a){t.$set(t.form,"data8",a)},expression:"form.data8"}})],1),a("FormItem",{attrs:{label:"类别",prop:"data9"}},[a("dict",{staticStyle:{width:"570px"},attrs:{dict:"projextType",transfer:"",clearable:"",placeholder:"类别"},model:{value:t.form.data9,callback:function(a){t.$set(t.form,"data9",a)},expression:"form.data9"}})],1),a("FormItem",{attrs:{label:"接任务时间",prop:"data10"}},[a("DatePicker",{staticStyle:{width:"570px"},attrs:{type:"date",format:"yyyy-MM-dd",clearable:""},on:{"on-change":t.changeData10}})],1),a("FormItem",{attrs:{label:"发任务时间",prop:"data11"}},[a("DatePicker",{staticStyle:{width:"570px"},attrs:{type:"date",format:"yyyy-MM-dd",clearable:""},on:{"on-change":t.changeData11}})],1),a("FormItem",{attrs:{label:"施工公司",prop:"data12"}},[a("Select",{staticStyle:{width:"570px"},attrs:{clearable:""},on:{"on-change":t.getUserListFx},model:{value:t.form.data12,callback:function(a){t.$set(t.form,"data12",a)},expression:"form.data12"}},t._l(t.departmentList,(function(e,r){return a("Option",{key:r,attrs:{value:e.title}},[t._v(t._s(e.title))])})),1)],1),a("FormItem",{attrs:{label:"施工公司技术人",prop:"data13"}},[a("Select",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:t.form.data13,callback:function(a){t.$set(t.form,"data13",a)},expression:"form.data13"}},t._l(t.userList,(function(e,r){return a("Option",{key:r,attrs:{value:e.nickname}},[t._v(t._s(e.nickname)+" - "+t._s(e.mobile))])})),1)],1),a("FormItem",{attrs:{label:"竣工日期",prop:"data14"}},[a("DatePicker",{staticStyle:{width:"570px"},attrs:{type:"date",format:"yyyy-MM-dd",clearable:""},on:{"on-change":t.changeData14}})],1),a("FormItem",{attrs:{label:"用户部给分公司评分",prop:"data15"}},[a("dict",{staticStyle:{width:"570px"},attrs:{dict:"projectStar",transfer:"",clearable:"",placeholder:"用户部给分公司评分"},model:{value:t.form.data15,callback:function(a){t.$set(t.form,"data15",a)},expression:"form.data15"}})],1),a("FormItem",{attrs:{label:"项目状态",prop:"data16"}},[a("dict",{staticStyle:{width:"570px"},attrs:{dict:"projectStatus",transfer:"",clearable:"",placeholder:"项目状态"},model:{value:t.form.data16,callback:function(a){t.$set(t.form,"data16",a)},expression:"form.data16"}})],1),a("FormItem",{attrs:{label:"是否重点项目",prop:"data17"}},[a("dict",{staticStyle:{width:"570px"},attrs:{dict:"zhongFlag",transfer:"",clearable:"",placeholder:"是否重点项目"},model:{value:t.form.data17,callback:function(a){t.$set(t.form,"data17",a)},expression:"form.data17"}})],1),a("FormItem",{attrs:{label:"项目备注",prop:"data18"}},[a("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:t.form.data18,callback:function(a){t.$set(t.form,"data18",a)},expression:"form.data18"}})],1),a("Form-item",{staticClass:"br"},[a("Button",{attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleSubmit}},[t._v("提交并保存")]),a("Button",{on:{click:t.handleReset}},[t._v("重置")]),a("Button",{attrs:{type:"dashed"},on:{click:t.close}},[t._v("关闭")])],1)],1)],1)],1)},l=[],s=e(2062),o=e(8188);const i={name:"add",components:{dict:o["default"]},data(){return{submitLoading:!1,form:{data1:"",data2:"",data3:"",data4:"",data5:"",data6:"",data7:"",data8:"",data9:"",data10:"",data11:"",data12:"",data13:"",data14:"",data15:"",data16:"正常",data17:"否",data18:""},formValidate:{},departmentList:[],userList:[]}},methods:{init(){this.getDepartmentListFx()},getDepartmentListFx(){var t=this;t.departmentList=[],(0,s.E$)().then((a=>{a.success&&(t.departmentList=a.result)}))},getUserListFx(){var t=this;t.userList=[],(0,s.lE)({title:t.form.data12}).then((a=>{a.success&&(t.userList=a.result)}))},changeData10(t){this.form.data10=t},changeData11(t){this.form.data11=t},changeData14(t){this.form.data14=t},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((t=>{t&&(0,s.B)(this.form).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},d=i;var n=e(1001),c=(0,n.Z)(d,r,l,!1,null,null,null);const m=c.exports},8188:(t,a,e)=>{e.r(a),e.d(a,{default:()=>c});var r=function(){var t=this,a=t._self._c;return a("div",[a("Select",{attrs:{size:t.size,loading:t.loading,placeholder:t.placeholder,multiple:t.multiple,disabled:t.disabled,filterable:t.filterable,transfer:t.transfer,clearable:t.clearable,placement:t.placement,"transfer-class-name":t.transferClassName,prefix:t.prefix,"max-tag-count":t.maxTagCount,"max-tag-placeholder":t.maxTagPlaceholder},on:{"on-change":t.handleChange,"on-query-change":t.handleQueryChange,"on-clear":t.handleClear,"on-open-change":t.handleOpenChange,"on-select":t.handleSelect},model:{value:t.currentValue,callback:function(a){t.currentValue=a},expression:"currentValue"}},t._l(t.dictData,(function(e,r){return a("Option",{key:r,attrs:{value:e.value}},[t._v(t._s(e.title))])})),1)],1)},l=[],s=e(7877);const o={name:"dict",props:{value:"",dict:String,placeholder:{type:String,default:"请选择"},placement:{type:String,default:"bottom-start"},size:String,multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},transfer:{type:Boolean,default:!1},transferClassName:String,prefix:String,maxTagCount:Number,maxTagPlaceholder:Function,clearable:{type:Boolean,default:!0}},data(){return{currentValue:this.value,dictData:[],loading:!1}},methods:{getData(t){this.loading=!0,(0,s.i3)(t).then((t=>{this.loading=!1,t.success&&(this.dictData=t.result)}))},handleChange(t){this.$emit("input",t),this.$emit("on-change",t)},handleQueryChange(t){this.$emit("on-query-change",t)},handleClear(){this.$emit("on-clear","")},handleOpenChange(t){this.$emit("on-open-change",t)},handleSelect(t){this.$emit("on-select",t)},setCurrentValue(t){t!==this.currentValue&&(this.currentValue=t,this.$emit("on-change",this.currentValue))}},watch:{value(t){this.setCurrentValue(t)},dict(t){this.getData(t)}},mounted(){this.getData(this.dict)}},i=o;var d=e(1001),n=(0,d.Z)(i,r,l,!1,null,null,null);const c=n.exports},2062:(t,a,e)=>{e.d(a,{AL:()=>c,B:()=>s,E$:()=>d,NV:()=>o,ku:()=>l,lE:()=>n,th:()=>i});var r=e(7184);const l=t=>(0,r.A_)("/project/getByPage",t),s=t=>(0,r.j0)("/project/insert",t),o=t=>(0,r.j0)("/project/update",t),i=t=>(0,r.j0)("/project/delByIds",t),d=t=>(0,r.A_)("/superUser/getAllSon",t),n=t=>(0,r.A_)("/superUser/getAllSonUser",t),c=t=>(0,r.j0)("/project/audit",t)}}]);