<template>
	<div id="app">
		<div>{{message}}</div>
		<Index></Index>
		<div class="kuang"></div>
	</div>
</template>

<script>
	import Index from './view/index/index.vue'
	export default {
		name: 'app',
		data() {
			return {
				message: 'Hello webpack + vue'
			}
		},
		components: {
			Index
		}
	}
</script>

<style>
	.kuang{
		width: 200px;
		height:200px;
		background-image: url(static/test.1.jpg);
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
