import Vue from 'vue';

let loader = null;
function displayLoader(loadingText='loading...'){
	loader = Vue.prototype.$loading({
		lock:true,
		text: loadingText,
		spinner: 'el-icon-loading',
		background: 'rgba(255,255,255,0.85',
	})
}

function hideLoader(){
	loader.close();
}


export const saveEmployee = ({commit}, payload) => {

	displayLoader();
	
	axios.post(`/save-employee`, pauyload).then(res => {
		Vue.prototype.$notify({
			title:'Success',
			message: 'Employee added successfully',
			type: 'success',
		});

		hideLoader();

		setTimeout(()=>{
			window.location.href = '/employees';
		},1500);

	});
}