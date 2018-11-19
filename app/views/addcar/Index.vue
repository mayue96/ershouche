<template>
	<div>
		<Steps :current="$store.state.addcar.step-1">
            <Step :title="showWord(1)" content="添加车辆基本信息"></Step>
            <Step :title="showWord(2)" content="上传车辆图片"></Step>
            <Step :title="showWord(3)" content="上传车辆文件"></Step>
            <Step title="成功" content=""></Step>
        </Steps>

        <div :is="'step'+$store.state.addcar.step"></div>
	</div>
</template>

<script>
    import Step1 from "./Step1.vue";
    import Step2 from "./Step2.vue";
    import Step3 from "./Step3.vue";
    import Step4 from "./Step4.vue";
	export default{
		methods : {
			showWord(idx){
				if(idx == this.$store.state.addcar.step){
					return "进行中"
				}else if(idx < this.$store.state.addcar.step){
					return "已完成"
				}else if(idx > this.$store.state.addcar.step){
					return "待完成"
				}
			}
		},
		components : {
			Step1,
			Step2,
			Step3,
			Step4
		}
	}
</script>