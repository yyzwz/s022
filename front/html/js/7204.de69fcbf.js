"use strict";(self["webpackChunks022"]=self["webpackChunks022"]||[]).push([[7204],{7204:(t,e,s)=>{s.r(e),s.d(e,{default:()=>u});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"set-password"},[e("Poptip",{attrs:{transfer:"",trigger:"focus",placement:"right",width:"250"}},[e("Input",{attrs:{type:"password",password:"",maxlength:t.maxlength,size:t.size,placeholder:t.placeholder,disabled:t.disabled,readonly:t.readonly},on:{"on-change":t.handleChange},model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}}),e("div",{class:t.tipStyle,attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"words"},[t._v("强度 : "+t._s(t.strength))]),e("Progress",{staticStyle:{margin:"13px 0"},attrs:{percent:t.strengthValue,status:t.progressStatus,"hide-info":""}})],1)],1)],1)},a=[];const n={name:"setPassword",props:{value:String,size:String,placeholder:{type:String,default:"请输入密码，长度为6-20个字符"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},maxlength:{type:Number,default:20}},data(){return{currentValue:this.value,tipStyle:"password-tip-none",strengthValue:0,progressStatus:"normal",strength:"无",grade:0}},methods:{checkStrengthValue(t){let e=0;return/\d/.test(t)&&e++,/[a-z]/.test(t)&&e++,/[A-Z]/.test(t)&&e++,/\W/.test(t)&&e++,t.length>=10&&e++,this.grade=e,e},strengthChange(){if(!this.currentValue)return this.tipStyle="password-tip-none",this.strength="无",void(this.strengthValue=0);let t=this.checkStrengthValue(this.currentValue);t<=1?(this.progressStatus="wrong",this.tipStyle="password-tip-weak",this.strength="弱",this.strengthValue=33):t>=2&&t<=4?(this.progressStatus="normal",this.tipStyle="password-tip-middle",this.strength="中",this.strengthValue=66):(this.progressStatus="success",this.tipStyle="password-tip-strong",this.strength="强",this.strengthValue=100)},handleChange(t){this.strengthChange(),this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue,this.grade,this.strength)},setCurrentValue(t){t!==this.currentValue&&(this.currentValue=t,this.strengthChange(),this.$emit("on-change",this.currentValue,this.grade,this.strength))}},watch:{value(t){this.setCurrentValue(t)}}},h=n;var i=s(1001),l=(0,i.Z)(h,r,a,!1,null,null,null);const u=l.exports}}]);