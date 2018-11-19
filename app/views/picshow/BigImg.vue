<template>
	<div class="bigimg" v-if="images">
		<img width="670" :src="dizhi" >
		<span class="right" @click="nextTo()">→</span>
		<span class="left" @click="lastTo()">←</span>
	</div>
</template>
<script>
	export default{
		computed : {
			images(){
				return this.$store.state.picshow.carInfo.images;
			},
			id(){
				return this.$store.state.picshow.id;
			},
			nowAlbum(){
				return this.$store.state.picshow.nowAlbum;
			},
			nowIdx(){
				return this.$store.state.picshow.nowIdx;
			},
			dizhi(){
				return "http://127.0.0.1:3000/images/carimages/"+this.id+"/"+this.nowAlbum+"/"+this.images[this.nowAlbum][this.nowIdx];
			}
		},
		methods : {
			nextTo(){
				this.$store.dispatch("picshow/nextTo");
			},
			lastTo(){
				this.$store.dispatch("picshow/lastTo");
			}
		}
	}
</script>

<style lang="less">
	.bigimg img{
		position:absolute;
		float:left;
		top:130px;
		left:50%;
		margin-left:-335px;
	}
	.bigimg .right{
		position:absolute;
		top:295px;
		left:50%;
		margin-left:335px;
		width:50px;
		height:100px;
		background:rgba(0,0,0,0.5);
		line-height:100px;
		font-weight:bold;
		color:white;
		font-size:36px;
		border-radius:5px;
		cursor:pointer;
	}
	.bigimg .left{
		position:absolute;
		top:295px;
		right:50%;
		margin-right:335px;
		width:50px;
		height:100px;
		background:rgba(0,0,0,0.5);
		line-height:100px;
		font-weight:bold;
		color:white;
		font-size:36px;
		border-radius:5px;
		cursor:pointer;
	}
	.right:hover{
		background:rgba(255,55,255,0.3);
	}
	.left:hover{
		background:rgba(255,55,255,0.3);
	}
</style>