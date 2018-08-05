<template>
	<div class="moor-switch" :style="{ 
		width: width + 'px',
		height: height + 'px',
		'border-radius': height + 'px',
		background: backColor
	}" @click='change'>
		<transition>
			<div class="thumb" :style="{
				background: thumbColor,
				width: 0.8 * height + 'px',
				height: 0.8 * height + 'px',
				top: 0.1 * height + 'px',
				left: thumbLeft + 'px'
			}">
			</div>
		</transition>
		<input type="hidden" :name='name' :value='value' >
	</div>
</template>

<script type="text/javascript">
	
export default{
	name: 'moorSwitch',
	props: {
		name: {
			type: [String],
			default: 'switch'
		},
		defaultValue: {
			type: [Boolean,String,Number],
			default: false
		},
		onColor: {
			type: [String],
			default: 'rgb(19,207,103)'
		},
		offColor: {
			type: [String],
			default: 'rgb(252,73,74)'
		},
		thumbColor: {
			type: [String],
			default: '#fff'
		}
	},
	computed: {
		backColor(){
			let me = this;
			return me.innerValue ? me.onColor : me.offColor;
		},
		thumbLeft(){
			let me = this;
			return me.innerValue ? 0.1*me.height : (me.width - 0.9*me.height);
		},
		value(){
			return this.innerValue ? 1 : 0;
		},
		width(){
			let attrs = this.$attrs,
				width = parseInt(attrs.width),
				height = parseInt(attrs.height);
			return width
					? width
					: height
						? height * 2
						: 60;
		},
		height(){
			let attrs = this.$attrs,
				width = parseInt(attrs.width),
				height = parseInt(attrs.height);
			return height
					? height
					: width
						? width / 2
						: 30;
		}
	},
	methods: {
		change(){
			this.innerValue = !this.innerValue;
			this.$emit('switch',this.innerValue);
		}
	},
	data(){
		return {
			innerValue: this.defaultValue ? 1 : 0
		}
	}
}

</script>

<style type="text/css">
	
	.moor-switch{
		position: relative;
		overflow: hidden;
		cursor: pointer;
	}
	.thumb{
		position: absolute;
		border-radius: 50%;
	}

</style>