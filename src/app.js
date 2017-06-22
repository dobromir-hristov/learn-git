import Vue from 'vue'
import Login from './components/login.vue'
import vuex from 'vuex'


const store = new Vuex({
	state: {},
	mutations:{}
})

new Vue({
	el:'#el',
	components:{
		Login
	},
	store
})