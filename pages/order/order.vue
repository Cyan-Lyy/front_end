<template>
	<view  class="background">
		<van-dropdown-menu active-color="#87CEFA">
		  <van-dropdown-item :value="range" :options="options1" />
		  <van-dropdown-item :value="sort" :options="options2" />
		</van-dropdown-menu>
		<fui-empty src="/static/pictures/empty_order.jpg" title="暂无订单" width="600" height="500" isFixed="true" v-show="orders===null">
			<fui-button text="返回首页" :size="28" width="336rpx" height="84rpx" radius="100rpx" background="#fff"
					:margin="['64rpx','0']" borderColor="#87CEFA" color="#87CEFA"></fui-button>
		</fui-empty>
		<!-- 订单预览 -->
		<OrderPreview v-for="item in orderList" :key="item.id" :orderDetails="item.name"></OrderPreview>
		
	</view>
</template>

<script>
	import OrderPreview from '@/components/order_components/order_preview.vue'
	export default {
		components: {
			OrderPreview
		},
		data() {
			return {
				options1: [{
					text: '全部订单',
					value: 1,
				}, {
					text: '已完成',
					value: 2
				}, {
					text: '进行中',
					value: 3
				}],
				options2: [{
					text: '默认排序',
					value: 1,
				}, {
					text: '销量排序',
					value: 2
				}, {
					text: '价格排序',
					value: 3
				}],
				range: 1,
				sort: 1,
				orders: [{
					value: '33'
				}],
				orderList: [{id:1,name:"1"},{id:2,name:"2"},{id:3,name:"3"}]
			};
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.background {
		background-color: #FBFBFB;
		min-height: 100vh;
	}
</style>
