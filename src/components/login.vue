<template>
	<div>
		<form @submit.prevent="submitForm">
			<label>Name</label>
			<input type="text" name="name" v-model='query.name'>
			<label>Password</label>
			<input type="password" name="password" v-model='query.password'>
			<button>Submit</button>
		</form>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				user: {},
				data:'some data',
				query: {
					name: '',
					password: ''
				}
			}
		},
		methods: {
			submitForm (e) {
				this.$http.post('some-url', this.query).then((r) => {
					this.$notify(r.body.message)
					location.href = r.body.redirectTo
				}, r => {
					this.$notify(r.body.message, 'error')
				})
			}
		},
		computed: {
			isAuthenticated () {
				return !!this.user.id
			}
		}
	}
</script>