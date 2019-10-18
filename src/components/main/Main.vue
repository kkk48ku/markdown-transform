<template>
	<div class="main">
		<editor></editor>
		<preview></preview>
	</div>
</template>

<script>
import Editor from './components/Editor';
import Preview from './components/Preview';

export default {
	name: 'Main',
	components: {
		Editor,
		Preview
	}
};
</script>

<style lang="stylus" scoped>
.main
    position fixed
    top 5.334rem
    left 0
    right 0
    bottom 0
    display flex
    .editor
    .preview
        flex 1
</style>
