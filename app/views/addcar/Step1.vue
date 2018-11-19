<template>
	<div style="padding-top:20px;width:500px ">
		 <Form ref="myform" :model="myform" :label-width="180" :rules="myrules">
		 	<FormItem label="您的姓名" prop="name">
                <Input v-model="myform.name" placeholder="请输入您的真实姓名"></Input>
            </FormItem>
            <FormItem label="您的身份证号码" prop="idcard">
                <Input v-model="myform.idcard" placeholder="请输入您的身份证号码"></Input>
            </FormItem>
            <FormItem label="车系" prop="bAnds">
				<Cascader :data="allBAndS" v-model="myform.bAnds"></Cascader>
			</FormItem>
			<FormItem label="价格（万元）" prop="price">
				<Input v-model="myform.price" placeholder="请准确输入"></Input>
			</FormItem>
			<FormItem label="公里数" prop="km">
				<Input v-model="myform.km" placeholder="请准确输入"></Input>
			</FormItem>
			<FormItem label="排量" prop="engine">
				<Input v-model="myform.engine" placeholder="请准确输入"></Input>
			</FormItem>
			<FormItem label="">
				<Button type="success" @click="tijiao">提交</Button>
			</FormItem>
		 </Form>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				allBAndS : [
					{
						value : "A",
						label : "A",
						children : [
							{
								value : "奥迪",
								label : "奥迪",
								children : [
									{
										value : "A6L",
										label : "A6L"
									},
									{
										value : "A4",
										label : "A4"
									},
									{
										value : "Q3",
										label : "Q3"
									},
									{
										value : "Q5",
										label : "Q5"
									}
								]
							}
						]	
					}
				],
				myform :{
				    name:"",
				    idcard : "",
				    bAnds : [],
				    engine : "",
					km : "",
					price : ""
			    },
			    myrules : {
			    	 name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' },
                        {type:"string" , pattern: /^([\u4e00-\u9fa5]{2,15})$/, trigger: 'blur', message:"只能输入2~15个中文，如果您是少数民族，请不要加点"}
                    ],
                    idcard : [
                    	{required: true, message: '身份证号码不能为空', trigger: 'blur'},
                        {type:"string" , pattern: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/ , trigger: 'blur', message:"请输入正确的身份证号码"}
                    ],
                    bAnds : [
                    	 
                    ],
                     price : [
                    	{required: true, message: '必须填写', trigger: 'blur'},
                    	{type : "number" ,  trigger: 'blur' , validator : (rule,value,callback) => {
                    		if(!(value > 0 && value <= 200)){
                    			callback("请填写0到200之间的数字")
                    		}
                    		callback();
                    	}}
                    ]
			    }
			}
		},
		methods : {
			tijiao(){
				this.$refs.myform.validate((valid) => {
                    if (valid) {

                    } else {
                        this.$Message.error('表单有错误，不能提交');
                    }
                })
			}
		}
	}
</script>