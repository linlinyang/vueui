<template>
	
	<div class="lists">
		<slide :max='100' :min='0' :value='50'></slide>
	</div>

</template>

<script type="text/javascript">
	import slide from 'components/form/slide';

	export default {
		name: 'home',
		components: {slide},
		data(){
			return {};
		}
	}

</script>

<style type="text/css" scoped="true">
	
	.lists{
		margin: 50px auto;
		position: relative;
		width: 80%;
		max-width: 1200px;
		padding: 10px 0;
	}

</style>