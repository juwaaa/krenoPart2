import Vue from 'vue';
import Vuex from 'vuex';


import getters from './getters';
import mutations from './mutations';
import * as actions from './actions';

import { axios } from 'vue/types/umd';
Vue.use(Vuex); //to pass Vuex

export const store = new Vuex.store({
	modules:{

	},
	state:{

	},
	mutations,
	actions,
	getters,
});