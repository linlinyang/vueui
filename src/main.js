import vue from 'vue';
import router from './router';
import 'iview/dist/styles/iview.css';
import app from './app';
import './assets/default.css';

new vue({
	el: '.app',
	router,
	components: {app},
	template: '<app />'
});



