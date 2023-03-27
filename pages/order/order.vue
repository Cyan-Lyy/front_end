<template>
	<view class="background">
		<van-dropdown-menu active-color="#87CEFA">
			<van-dropdown-item :value="range" :options="options1" />
			<van-dropdown-item :value="sort" :options="options2" />
		</van-dropdown-menu>
		<fui-empty src="/static/pictures/empty_order.jpg" title="暂无订单" width="600" height="500" isFixed="true"
			v-show="orderList === null">
			<fui-button text="返回首页" :size="28" width="336rpx" height="84rpx" radius="100rpx" background="#fff"
				:margin="['64rpx','0']" borderColor="#87CEFA" color="#87CEFA"></fui-button>
		</fui-empty>
		<!-- 订单预览 -->
		<OrderPreview v-for="item in orderList" :key="item.id" :orderDetails="item"></OrderPreview>

	</view>
</template>

<script setup>
	import OrderPreview from '@/components/order_components/order_preview.vue';
	import {
		ref,
		reactive,
		onMounted,
		computed
	} from 'vue';
	import {
		useStore
	} from "vuex";
	import orderApi from '../../api/orderApi.js'

	const store = useStore();
	const userId = computed(() => store.state.user.userInfo.id);

	const options1 = [{
			text: "全部订单",
			value: 1,
		},
		{
			text: "已完成",
			value: 2,
		},
		{
			text: "进行中",
			value: 3,
		},
	];

	const options2 = [{
			text: "默认排序",
			value: 1,
		},
		{
			text: "销量排序",
			value: 2,
		},
		{
			text: "价格排序",
			value: 3,
		},
	];

	const range = 1;
	const sort = 1;
	const pageNum = ref(1);

	const orders = computed(() => {
		return [{
			value: "33"
		}];
	});

	const orderList = ref([]);

	onMounted(() => {
		getOrderList()
	});

	const getOrderList = () => {
		orderApi.orderList({
			pageNum: pageNum.value
		}).then((res) => {
			console.log(res.data);
			orderList.value = res.orderList;
			pageNum.value++;
		});
	}
</script>

<style lang="scss">
	.background {
		background-color: #FBFBFB;
		min-height: 100vh;
	}
</style>
