<template>
	<div class="choosealbum">
		<ul v-if="images">
			<li :class="{'cur' : nowAlbum =='view'}" @click="changeNowAlbum('view')">外观({{images.view.length}})</li>
			<li :class="{'cur' : nowAlbum =='inner'}" @click="changeNowAlbum('inner')">内饰({{images.inner.length}})</li>
			<li :class="{'cur' : nowAlbum =='engine'}" @click="changeNowAlbum('engine')">结构({{images.engine.length}})</li>
			<li :class="{'cur' : nowAlbum =='more'} " @click="changeNowAlbum('more')">细节({{images.more.length}})</li>
		</ul>
	</div>
</template>

<script>
	export default{
		computed : {
			images(){
				return this.$store.state.picshow.carInfo.images;
			},
			nowAlbum(){
				return this.$store.state.picshow.nowAlbum;
			}
		},
		methods : {
			changeNowAlbum(nowAlbum){
				this.$store.dispatch("picshow/changeNowAlbum",{nowAlbum});
			}
		}
	}
</script>
<style lang="less">
    .choosealbum{
    	float:left;
    	position:relative;
    	ul{
		    float:left;
		    list-style:none;
		    font-size:24px;
		    font-weight:bold;
		    margin:20px 0 0 85px;
	    }
	    li{
	    	float:left;
	    	width:150px;
	    	height:50px;
	    	margin:5px;
	    	line-height:50px;
	    	text-align:center;
	    	border-box:box-sizing;
	    	background:#6bd093;
	    	cursor:pointer;

	    	&:hover{
	    		background:pink;
	    	}
	    	&.cur{
	    		background:skyblue;
	    	}
	    }
    }
	
</style>