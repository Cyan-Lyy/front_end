<template>
	<view>
		<view class="" @click="bookPlace">
			羽毛球预约
		</view>
	</view>
</template>

<script setup>
	
	const bookPlace = () => {
		uni.navigateTo({
			url:"/pages/bookPlace/bookPlace"
		})
	}
</script>

<style lang="scss">

</style>
