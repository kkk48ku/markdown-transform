<template>
	<div id="app">
		<pub-header :user-info="userInfo"></pub-header>
	</div>
</template>

<script>
import * as api from './api/api';
import PubHeader from './components/Header';

export default {
	data() {
		return {
			userInfo: {}
		};
	},
	components: {
		PubHeader
	},
	beforeCreate() {
		api.getUserInfo('13811111111').then(res => {
			this.userInfo = res.data;
		});
	}
};
</script>

<style lang="stylus">
@import url("./css/reset.css");
html
	font-family: -apple-system,system-ui,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
	color #333
	font-size 12px
	line-height 1.5
</style>
