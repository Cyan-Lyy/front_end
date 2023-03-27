<template>
	<view>
		<uni-section title="基本用法" type="line" padding>
			<uni-steps :options="list1" :active="active" />
		</uni-section>
	</view>
</template>

<script setup>
	import orderApi from '../../api/orderApi.js';
	import {
		onLoad
	} from '@dcloudio/uni-app';

	import {
		ref,
		reactive,
		onMounted,
		computed,
		getCurrentInstance
	} from 'vue';
	import {
		useRouter,
		useRoute
	} from 'vue-router';
	import {
		useStore
	} from "vuex";

	// const props = defineProps({
	// 	orderid: {
	// 		type: Number
	// 	}
	// })
	onLoad((options) => {
		
		orderId.value = options.orderId
		console.log(orderId.value, 999);
	});



	// 加载时获取订单详情
	onMounted(() => {
		// orderid.value = props.orderid
		getDetail()
	})
	const currentInstance = getCurrentInstance()
	const router = useRouter()
	const route = useRoute()
	// 路由跳转获取订单id
	const orderId = ref(null)
	const orderDetail = ref({})
	// 获取订单详情
	const getDetail = () => {
		orderApi.orderDetail({
			orderid: orderId.value
		}).then((res) => {
			console.log(res.data);
			orderDetail.value = res.orderDetail
		});
	}
	// 步骤条
	const list1 = [{
		title: '事件1'
	}, {
		title: '事件2'
	}, {
		title: '事件3'
	}]
	const active = ref(1)
	// const change = () => {
	// 	if (active.value < list1.length - 1) {
	// 		active.value += 1
	// 	} else {
	// 		active.value = 0
	// 	}
	// }
</script>

<style>

</style>
