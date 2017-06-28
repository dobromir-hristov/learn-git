import Vue from 'vue'
import Login from './components/login.vue'
import Register from './components/register.vue'
import somethingElse from './components/somethingElse.vue'


new Vue({
	el:'#el',
	components:{
		Login,
		Register,
		somethingElse
	}
})