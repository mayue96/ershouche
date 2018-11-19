<template>
	<div class="info">
		<h1>{{$store.state.picshow.carInfo.brand}}·{{$store.state.picshow.carInfo.series}}</h1>
		<h3>{{$store.state.picshow.carInfo.color}}色，{{$store.state.picshow.carInfo.price}}万元，{{Math.round($store.state.picshow.carInfo.km)/10000}}万公里，{{new Date($store.state.picshow.carInfo.buydate).getFullYear()}}年</h3>
	</div>
</template>
<style lang="less">
	.info {
		text-align:center;
		color:#fefefe;
		h1{
		    margin-top:15px;
	    }
	    h3{
		    margin-top:10px;
	    }
	}
</style>