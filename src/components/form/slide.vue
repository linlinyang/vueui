<template>
	
	<div class="line" @click='sliderClick' ref="slider">
		<div class="slide-bar" ref="slider-bar" :style='barWidth'></div>
		<transition>
			<div 
				class="slide-thumb"
				ref='slide-button'
				:style='thumbLeft'
				:title='tips'
				@mousedown='dragStart'
				@dblclick='slideDbl'></div>
		</transition>
	</div>

</template>
<script type="text/javascript">
	
	export default {
		name: 'slide',
		props:{
			min: {
				type: Number,
				default: 0
			},
			max: {
				type: Number,
				default: 100
			},
			value: {
				type: Number,
				default: 0
			}
		},
		data(){
			let max = this.max,
					min = this.min,
					value = this.value,
					val = value < min 
							? min
							: value > max 
								? max
								: value;
			return {	
				rangeValue: Math.abs(this.max - this.min),
				curValue: val,
				isDrag: false
			};
		},
		computed: {
			sliderWidth(){
				return parseInt(this.getStyle(this.$refs['slider'],'width'));
			},
			offsetLeft(){
				return this.curValue / this.rangeValue;
			},
			barWidth(){
				return {
					width: this.offsetLeft * 100 + '%'
				};
			},
			thumbLeft(){
				return {
					left: this.offsetLeft * 100 + '%'
				}
			},
			tips(){
				let val = this.curValue.toFixed(2);
				return `Cur Value is ${val}`;
			}
		},
		methods: {
			getStyle(el,attr){
				return document.defaultView.getComputedStyle(el)[attr];
			},
			sliderClick(e){
				if(e.target === this.$refs['slide-button']){
					this.curValue = this.min;
				}else{
					this.curValue = (e.offsetX / this.sliderWidth) * this.rangeValue;
				}
			},
			slideDbl(e){
				this.curValue = this.max;
			},
			dragStart(e){
				this.isDrag = true;
			},
			dragMove(e){
				if(this.isDrag){
					this.curValue = (e.offsetX / this.sliderWidth) * this.rangeValue;
				}
			},
			dragEnd(e){
				this.isDrag = false;
			}
		},
		mounted(){

			window.addEventListener('mousemove',this.dragMove);
			window.addEventListener('mouseup',this.dragEnd)

		}
	}

</script>

<style type="text/css" scoped="true">
	
	.line{
		width: 100%;
		height: 4px;
		position: relative;
		border-radius: 2px;
		background: #e3e8ee;
		cursor: pointer;
	}
	.slide-bar{
		position: absolute;
		top: 0;
		left: 0;
		height: 4px;
		border-radius: 2px;
		cursor: pointer;
		background: #5cadff;
		transition: width 0.2s linear;
		-webkit-transition: width 0.2s linear;
	}
	.slide-thumb{
		position: absolute;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		margin-top: -4px;
		cursor: grab;
		cursor: -webkit-grab;
		border: 2px solid #5cadff;
		background: #fff;
		transition: all 0.2s linear;
		-webkit-transition: all 0.2s linear;
	}
	.slide-thumb:hover{
		border-color: #39f;
		transform: scale(1.5,1.5);
		-webkit-transform: scale(1.5,1.5);
	}
	

</style>