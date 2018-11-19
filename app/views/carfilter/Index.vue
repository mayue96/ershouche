<template>
    <div>
    	<Row>
    		<Col span="4">
    			&nbsp;
    		</Col>
            <Col span="8">
            	<CheckboxGroup v-model="color">
                    <Checkbox  label="黑"></Checkbox>
                    <Checkbox  label="白"></Checkbox>
                    <Checkbox  label="红"></Checkbox>
                    <Checkbox  label="蓝"></Checkbox>
                    <Checkbox  label="黄"></Checkbox>
                    <Checkbox  label="绿"></Checkbox>
                    <Checkbox  label="银灰"></Checkbox>
                </CheckboxGroup>
            </Col>
            <Col span="1">
    			&nbsp;
    		</Col>
            <Col span="11">
            	<CheckboxGroup v-model="brand">
                    <Checkbox  label="大众"></Checkbox>
                    <Checkbox  label="奥迪"></Checkbox>
                    <Checkbox  label="本田"></Checkbox>
                    <Checkbox  label="丰田"></Checkbox>
                    <Checkbox  label="奔驰"></Checkbox>
                    <Checkbox  label="宝马"></Checkbox>
                    <Checkbox  label="路虎"></Checkbox>
                </CheckboxGroup>
            </Col>
            <Col span="4">
    			&nbsp;
    		</Col>
            <Col span="8">
            	<CheckboxGroup v-model="engine">
                    <Checkbox  label="1.0L"></Checkbox>
                    <Checkbox  label="1.2L"></Checkbox>
                    <Checkbox  label="1.4L"></Checkbox>
                    <Checkbox  label="1.6L"></Checkbox>
                    <Checkbox  label="1.8L"></Checkbox>
                    <Checkbox  label="3.0L"></Checkbox>
                    <Checkbox  label="5.0L"></Checkbox>
                </CheckboxGroup>
            </Col>
            <Col span="1">
    			&nbsp;
    		</Col>
            <Col span="11">
            	<CheckboxGroup v-model="exhaust">
                    <Checkbox  label="国一"></Checkbox>
                    <Checkbox  label="国二"></Checkbox>
                    <Checkbox  label="国三"></Checkbox>
                    <Checkbox  label="国四"></Checkbox>
                    <Checkbox  label="国五"></Checkbox>
                    <Checkbox  label="国六"></Checkbox>
                </CheckboxGroup>
            </Col>
            <Col span="4">
    			&nbsp;
    		</Col>
            <Col span="7">
            	价格：
                <Slider range :value="$store.state.carfilter.price"  :min="0" :max="101" @on-change="changePrice"></Slider>
             </Col>
             <Col span="2">
                &nbsp;
            </Col>
             <Col span="7">
                公里数：
                <Slider range :value="$store.state.carfilter.km"  :min="0" :max="200" @on-change="changeKm"></Slider>
             </Col>
        </Row>
    	 <Table stripe :columns="columns1" :data="carList"></Table>
    </div>
</template>

<script>
	export default{
		created(){
			this.$store.dispatch("carfilter/baseData");
		},
		computed: {
			carList(){
				return this.$store.state.carfilter.carList;
			},
			color:{
        	    get(){
        	    	return this.$store.state.carfilter.color;
        	    },
        	    set(values){
        	    	this.$store.dispatch("carfilter/changeColor",{values});
        	    }
            },
            brand:{
        	    get(){
        	    	return this.$store.state.carfilter.brand;
        	    },
        	    set(values){
        	    	this.$store.dispatch("carfilter/changeBrand",{values});
        	    }
            },
            engine:{
        	    get(){
        	    	return this.$store.state.carfilter.engine;
        	    },
        	    set(values){
        	    	this.$store.dispatch("carfilter/changeEngine",{values});
        	    }
            },
            exhaust:{
        	    get(){
        	    	return this.$store.state.carfilter.exhaust;
        	    },
        	    set(values){
        	    	this.$store.dispatch("carfilter/changeExhaust",{values});
        	    }
            }
		},
        methods:{
            changePrice(values){
                this.$store.dispatch("carfilter/changePrice",{values});
            },
            changeKm(values){
                this.$store.dispatch("carfilter/changeKm",{values});
                console.log(values)
            }
        },
		data () {
            return {
                columns1: [
                    {
                        title: 'Image',
                        key: 'avatar',
                        render(h,{row}){
                        	return h({
                        		template: `<div><img src="http://127.0.0.1:8080/api/images/carimages_small/${row.id}/view/${row.avatar}"/></div>`
                        	})
                        }
                    },
                    {
                        title: 'Brand',
                        key: 'brand'
                    },
                    {
                        title: 'Series',
                        key: 'series'
                    },
                    {
                        title: 'Color',
                        key: 'color'
                    },
                    {
                        title: 'Engine',
                        key: 'engine'
                    },
                    {
                        title: 'Exhaust',
                        key: 'exhaust'
                    },
                    {
                        title: 'Fuel',
                        key: 'fuel'
                    },
                    {
                        title: 'Km',
                        key: 'km',
                        sortable:true,
                        render(h,{row}){
                        	var k=Math.round(row.km/10000);
                        	return h({
                        		template : "<div>"+k+"</div>"
                        	})
                        }
                    },
                    {
                        title: 'Price',
                        key: 'price',
                        sortable:true
                    }
                ]
            }
        }
	}
</script>

<style lang="less" scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.ivu-checkbox-group{
	margin-bottom:10px;
}
</style>