<template>
	<div class="smallpics">
		<ul v-if="images">
			<li v-for="(item,index) in images[nowAlbum]" @click="changeNowIdx(index)" :class="{'cur' : nowIdx == index}">
				<img :src="`http://127.0.0.1:3000/images/carimages_small/${id}/${nowAlbum}/${images[nowAlbum][index]}`">
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		computed:{
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
			}
		},
		methods : {
			changeNowIdx(index){
				this.$store.commit("picshow/changeNowIdx",{"nowIdx" : index});
			}
		}
	}
</script>

<style lang="less">
	.smallpics{
		float:left;
		width:100%;
		ul{
			float:left;
			list-style:none;
			margin:20px 0 0 40px;
			height:430px;
		}
		li{
			float:left;
			margin:0 10px 10px 0;
			position:relative;
			img{
				width:200px;
			}
			&::before{
				content:"";
				position:absolute;
				width:100%;
				height:100%;
				background-color:rgba(0,0,0,0.5);
				transition:all 0.5s ease 0s;
			}
			&.cur::before{
				opacity:0;
			}
		}
	}
</style>