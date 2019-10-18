import Vue from 'vue';
import App from './App.vue';
import mavonEditor from 'mavon-editor';

import './css/reset.css';
import 'mavon-editor/dist/css/index.css';

Vue.config.productionTip = false;
Vue.use(mavonEditor);

const app = new Vue({
	render: h => h(App)
}).$mount('#app');

// 自定义改变标题指令
Vue.directive('title', {
	inserted: (el, binding) => {
		document.title = el.dataset.title;
	}
});
