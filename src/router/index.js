import vue from 'vue';
import vueRouter from 'vue-router';
import btn from 'components/button';

console.log(vueRouter);
vue.use(vueRouter);

export default new vueRouter({
	routes: [{
		path: '/',
		name: 'root',
		component: btn
	}]
});
