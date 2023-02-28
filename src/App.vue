<template>
	<div>
		<router-view
			class="router-view"
			v-slot="{ Component }"
		>
			<transition :name="state.transitionName">
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<script setup lang="ts">
	const router = useRouter();
	const state = reactive({
		transitionName: 'slide-left',
	});
	router.beforeEach((to: any, from: any) => {
		if (to.meta.index > from.meta.index) {
			state.transitionName = 'slide-left';
		} else if (to.meta.index < from.meta.index) {
			state.transitionName = 'slide-right';
		} else {
			state.transitionName = '';
		}
	});
</script>

<style scoped>
	#app {
		position: relative;
		height: 100%;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	.router-view {
		width: calc(100% - 40px);
		height: auto;
		position: absolute;
		top: 0;
		bottom: 0;
		margin: 0 auto;
		-webkit-overflow-scrolling: touch;
    padding: 20px;
	}
	.slide-right-enter-active,
	.slide-right-leave-active,
	.slide-left-enter-active,
	.slide-left-leave-active {
		height: 100%;
		will-change: transform;
		transition: all 500ms;
		position: absolute;
		backface-visibility: hidden;
	}
	.slide-right-enter {
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}
	.slide-right-leave-active {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}
	.slide-left-enter {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}
	.slide-left-leave-active {
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}
</style>
