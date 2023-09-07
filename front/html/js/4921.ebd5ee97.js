"use strict";(self["webpackChunks022"]=self["webpackChunks022"]||[]).push([[4921,8188],{4921:(a,t,e)=>{e.r(t),e.d(t,{default:()=>m});var l=function(){var a=this,t=a._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:a.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),a._v("返回 ")],1),t("div",{staticClass:"head-name"},[a._v("添加天然气项目")]),t("span"),t("a",{staticClass:"window-close",on:{click:a.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:a.form,"label-width":140,rules:a.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"建设单位",prop:"data1"}},[t("dict",{staticStyle:{width:"570px"},attrs:{dict:"constructionUnit",transfer:"",clearable:"",placeholder:"建设单位"},model:{value:a.form.data1,callback:function(t){a.$set(a.form,"data1",t)},expression:"form.data1"}})],1),t("FormItem",{attrs:{label:"委派单号",prop:"data2"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:a.form.data2,callback:function(t){a.$set(a.form,"data2",t)},expression:"form.data2"}})],1),t("FormItem",{attrs:{label:"工程编号",prop:"data3"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:a.form.data3,callback:function(t){a.$set(a.form,"data3",t)},expression:"form.data3"}})],1),t("FormItem",{attrs:{label:"工程名字",prop:"data4"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:a.form.data4,callback:function(t){a.$set(a.form,"data4",t)},expression:"form.data4"}})],1),t("FormItem",{attrs:{label:"计划主要工程量",prop:"data5"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:a.form.data5,callback:function(t){a.$set(a.form,"data5",t)},expression:"form.data5"}})],1),t("FormItem",{attrs:{label:"工程地址",prop:"data6"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:a.form.data6,callback:function(t){a.$set(a.form,"data6",t)},expression:"form.data6"}})],1),t("FormItem",{attrs:{label:"类型1",prop:"data7"}},[t("dict",{staticStyle:{width:"570px"},attrs:{dict:"projextType1",transfer:"",clearable:"",placeholder:"类型1"},model:{value:a.form.data7,callback:function(t){a.$set(a.form,"data7",t)},expression:"form.data7"}})],1),t("FormItem",{directives:[{name:"show",rawName:"v-show",value:"居民"==a.form.data7,expression:"form.data7 == '居民'"}],attrs:{label:"类型2",prop:"data8"}},[t("dict",{staticStyle:{width:"570px"},attrs:{dict:"projextType2A",transfer:"",clearable:"",placeholder:"类型2"},model:{value:a.form.data8,callback:function(t){a.$set(a.form,"data8",t)},expression:"form.data8"}})],1),t("FormItem",{directives:[{name:"show",rawName:"v-show",value:"非居民"==a.form.data7,expression:"form.data7 == '非居民'"}],attrs:{label:"类型2",prop:"data8"}},[t("dict",{staticStyle:{width:"570px"},attrs:{dict:"projextType2B",transfer:"",clearable:"",placeholder:"类型2"},model:{value:a.form.data8,callback:function(t){a.$set(a.form,"data8",t)},expression:"form.data8"}})],1),t("FormItem",{attrs:{label:"类别",prop:"data9"}},[t("dict",{staticStyle:{width:"570px"},attrs:{dict:"projextType",transfer:"",clearable:"",placeholder:"类别"},model:{value:a.form.data9,callback:function(t){a.$set(a.form,"data9",t)},expression:"form.data9"}})],1),t("FormItem",{attrs:{label:"接任务时间",prop:"data10"}},[t("DatePicker",{staticStyle:{width:"570px"},attrs:{type:"date",format:"yyyy-MM-dd",clearable:""},on:{"on-change":a.changeData10}})],1),t("FormItem",{attrs:{label:"发任务时间",prop:"data11"}},[t("DatePicker",{staticStyle:{width:"570px"},attrs:{type:"date",format:"yyyy-MM-dd",clearable:""},on:{"on-change":a.changeData11}})],1),t("FormItem",{attrs:{label:"竣工日期",prop:"data14"}},[t("DatePicker",{staticStyle:{width:"570px"},attrs:{type:"date",format:"yyyy-MM-dd",clearable:""},on:{"on-change":a.changeData14}})],1),t("FormItem",{attrs:{label:"用户部给分公司评分",prop:"data15"}},[t("dict",{staticStyle:{width:"570px"},attrs:{dict:"projectStar",transfer:"",clearable:"",placeholder:"用户部给分公司评分"},model:{value:a.form.data15,callback:function(t){a.$set(a.form,"data15",t)},expression:"form.data15"}})],1),t("FormItem",{attrs:{label:"项目状态",prop:"data16"}},[t("dict",{staticStyle:{width:"570px"},attrs:{dict:"projectStatus",transfer:"",disabled:"",placeholder:"项目状态"},model:{value:a.form.data16,callback:function(t){a.$set(a.form,"data16",t)},expression:"form.data16"}})],1),t("FormItem",{attrs:{label:"是否重点项目",prop:"data17"}},[t("dict",{staticStyle:{width:"570px"},attrs:{dict:"zhongFlag",transfer:"",clearable:"",placeholder:"是否重点项目"},model:{value:a.form.data17,callback:function(t){a.$set(a.form,"data17",t)},expression:"form.data17"}})],1),t("FormItem",{attrs:{label:"项目备注",prop:"data18"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:a.form.data18,callback:function(t){a.$set(a.form,"data18",t)},expression:"form.data18"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:a.submitLoading,type:"primary"},on:{click:a.handleSubmit}},[a._v("提交并保存")]),t("Button",{on:{click:a.handleReset}},[a._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:a.close}},[a._v("关闭")])],1)],1)],1)],1)},r=[],o=e(653),s=e(8188);const d={name:"add",components:{dict:s["default"]},data(){return{submitLoading:!1,form:{data1:"",data2:"",data3:"",data4:"",data5:"",data6:"",data7:"",data8:"",data9:"",data10:"",data11:"",data12:"",data13:"",data14:"",data15:"",data16:"待审核",data17:"否",data18:""},formValidate:{}}},methods:{init(){},changeData10(a){this.form.data10=a},changeData11(a){this.form.data11=a},changeData14(a){this.form.data14=a},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((a=>{a&&(0,o.B)(this.form).then((a=>{this.submitLoading=!1,a.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},i=d;var n=e(1001),c=(0,n.Z)(i,l,r,!1,null,null,null);const m=c.exports},8188:(a,t,e)=>{e.r(t),e.d(t,{default:()=>c});var l=function(){var a=this,t=a._self._c;return t("div",[t("Select",{attrs:{size:a.size,loading:a.loading,placeholder:a.placeholder,multiple:a.multiple,disabled:a.disabled,filterable:a.filterable,transfer:a.transfer,clearable:a.clearable,placement:a.placement,"transfer-class-name":a.transferClassName,prefix:a.prefix,"max-tag-count":a.maxTagCount,"max-tag-placeholder":a.maxTagPlaceholder},on:{"on-change":a.handleChange,"on-query-change":a.handleQueryChange,"on-clear":a.handleClear,"on-open-change":a.handleOpenChange,"on-select":a.handleSelect},model:{value:a.currentValue,callback:function(t){a.currentValue=t},expression:"currentValue"}},a._l(a.dictData,(function(e,l){return t("Option",{key:l,attrs:{value:e.value}},[a._v(a._s(e.title))])})),1)],1)},r=[],o=e(7877);const s={name:"dict",props:{value:"",dict:String,placeholder:{type:String,default:"请选择"},placement:{type:String,default:"bottom-start"},size:String,multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},transfer:{type:Boolean,default:!1},transferClassName:String,prefix:String,maxTagCount:Number,maxTagPlaceholder:Function,clearable:{type:Boolean,default:!0}},data(){return{currentValue:this.value,dictData:[],loading:!1}},methods:{getData(a){this.loading=!0,(0,o.i3)(a).then((a=>{this.loading=!1,a.success&&(this.dictData=a.result)}))},handleChange(a){this.$emit("input",a),this.$emit("on-change",a)},handleQueryChange(a){this.$emit("on-query-change",a)},handleClear(){this.$emit("on-clear","")},handleOpenChange(a){this.$emit("on-open-change",a)},handleSelect(a){this.$emit("on-select",a)},setCurrentValue(a){a!==this.currentValue&&(this.currentValue=a,this.$emit("on-change",this.currentValue))}},watch:{value(a){this.setCurrentValue(a)},dict(a){this.getData(a)}},mounted(){this.getData(this.dict)}},d=s;var i=e(1001),n=(0,i.Z)(d,l,r,!1,null,null,null);const c=n.exports},653:(a,t,e)=>{e.d(t,{B:()=>o,NV:()=>s,ku:()=>r});var l=e(7184);const r=a=>(0,l.A_)("/project/getByPage",a),o=a=>(0,l.j0)("/project/insert",a),s=a=>(0,l.j0)("/project/update",a)}}]);