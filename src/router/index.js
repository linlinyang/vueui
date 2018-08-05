import vue from 'vue';
import vueRouter from 'vue-router';
import home from '@/views/home';

vue.use(vueRouter);

export default new vueRouter({
	mode: 'history',
	routes: [{
		path: '/',
		name: 'root',
		component: home
	}]
});
