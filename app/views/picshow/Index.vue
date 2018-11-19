<template>
	<div class="wrap">
		<div class="left_part">
			<BigImg></BigImg>
		</div>
		<div class="right_part">
			<Info></Info>
			<ChooseAlbum></ChooseAlbum>
			<SmallPics></SmallPics>
		</div>
	</div>
</template>
<script>
	import BigImg from "./BigImg.vue";
	import Info from "./Info.vue";
	import ChooseAlbum from "./ChooseAlbum.vue";
	import SmallPics from "./SmallPics.vue";
	export default{
		created(){
			this.$store.dispatch("picshow/loadData")
		},
		components: {
			BigImg,Info,ChooseAlbum,SmallPics
		}
	}
</script>
<style lang="less">
    .wrap{
    	position:absolute;
    	float:left;
    	width:100%;
    	height:100%;
    	background:#333;
    }
	.left_part{
		position:absolute;
		left:0;
		top:0;
		text-align:center;
		width:74%;
		height:100%;
		line-height:800px;		
	}
	.right_part{
		position:absolute;
		right:0;
		top:0;
		width:25%;
		height:100%;
		border-left:1px solid white;
		overflow:hidden;
	}
</style>