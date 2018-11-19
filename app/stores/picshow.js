export default{
	namespaced:true,
	state : {
		id: 1000099,
		carInfo :{},
		nowAlbum: "view",
		nowIdx:3
	},
	mutations : {
		changeCarInfo(state, {carInfo}){
			state.carInfo = carInfo;
		},
		changeNowAlbum(state,{nowAlbum}){
			state.nowAlbum = nowAlbum;
		},
		changeNowIdx(state,{nowIdx}){
			state.nowIdx = nowIdx;
		}
	},
	actions : {
       async loadData({commit,state}){
       	    const {result} = await fetch(`/api/car/${state.id}`).then(data=>data.json());
       	    commit("changeCarInfo",{carInfo : result});
       },
       changeNowAlbum({commit,state},{nowAlbum}){
       	     commit("changeNowAlbum",{nowAlbum});
       	     commit("changeNowIdx",{nowIdx:0});
       },
       nextTo({commit,state}){
            if(state.nowIdx < state.carInfo.images[state.nowAlbum].length-1){
            	commit("changeNowIdx",{"nowIdx":state.nowIdx+1})
            }else{
            	commit("changeNowIdx",{"nowIdx":0});
            	if(state.nowAlbum=="view"){
            		commit("changeNowAlbum",{"nowAlbum": "inner"});
            	}else if(state.nowAlbum=="inner"){
            		commit("changeNowAlbum",{"nowAlbum": "engine"});
            	}else if(state.nowAlbum=="engine"){
            		commit("changeNowAlbum",{"nowAlbum": "more"});
            	}else if(state.nowAlbum=="more"){
            		commit("changeNowAlbum",{"nowAlbum": "view"});
            	}
            }	    
        },
        lastTo({commit,state}){
            if( 0 < state.nowIdx){
            	commit("changeNowIdx",{"nowIdx":state.nowIdx-1})
            }else{
            	if(state.nowAlbum=="view"){
            		commit("changeNowAlbum",{"nowAlbum": "more"});
            		commit("changeNowIdx",{"nowIdx": state.carInfo.images[state.nowAlbum="more"].length-1});
            	}else if(state.nowAlbum=="inner"){
            		commit("changeNowAlbum",{"nowAlbum": "view"});
            		commit("changeNowIdx",{"nowIdx": state.carInfo.images[state.nowAlbum="view"].length-1});
            	}else if(state.nowAlbum=="engine"){
            		commit("changeNowAlbum",{"nowAlbum": "inner"});
            		commit("changeNowIdx",{"nowIdx": state.carInfo.images[state.nowAlbum="inner"].length-1});
            	}else if(state.nowAlbum=="more"){
            		commit("changeNowAlbum",{"nowAlbum": "engine"});
            		commit("changeNowIdx",{"nowIdx": state.carInfo.images[state.nowAlbum="engine"].length-1});
            	}
              }	    
         }
	}
}