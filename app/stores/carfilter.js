export default{
	namespaced:true,
	state : {
		carList : [],
		color : [],
		brand : [],
		engine : [],
		exhaust : [],
		price:[0,101],
		km:[0,200]
	},
	mutations : {
		changeCarList(state,{carList}){
			state.carList=carList;
		},
		changeColor(state,{values}){
			state.color = values;
		},
		changeBrand(state,{values}){
			state.brand = values;
		},
		changeEngine(state,{values}){
			state.engine = values;
		},
		changeExhaust(state,{values}){
			state.exhaust = values;
		},
		changePrice(state,{values}){
			state.price = values;
		},
		changeKm(state,{values}){
			state.km = values;
		}
	},
	actions : {
		async baseData({commit,state}){
			chaxun(commit,state);
		},
		async changeColor({commit,state},{values}){
			commit("changeColor",{values});
			chaxun(commit,state);
		},
		async changeBrand({commit,state},{values}){
			commit("changeBrand",{values});
			chaxun(commit,state);
		},
		async changeEngine({commit,state},{values}){
			commit("changeEngine",{values});
			chaxun(commit,state);
		},
		async changeExhaust({commit,state},{values}){
			commit("changeExhaust",{values});
			chaxun(commit,state);
		},
		async changePrice({commit,state},{values}){
 			commit("changePrice",{values});
			chaxun(commit,state);
		},
		async changeKm({commit,state},{values}){
 			commit("changeKm",{values});
			chaxun(commit,state);

		}
	}
}
        async function chaxun(commit,state){
			const {results} = await fetch(`/api/findcar?
color=${state.color.join("v")}
&brand=${state.brand.join("v")}
&engine=${state.engine.join("v")}
&exhaust=${state.exhaust.join("v")}
&price=${state.price.join("to")}
&km=${state.km.map(item => item*10000).join("to")}`
).then(data=>data.json());
			commit("changeCarList",{"carList":results});
		}