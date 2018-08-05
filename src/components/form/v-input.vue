<template>
	
	<input type="type" name="name">

</template>

<script type="text/javascript">
	
	export default {
		props: {
			type: {
				validater(value){
					return oneOf(value,['text']);
				},
				default: 'text'
			}
		}
	}

</script>