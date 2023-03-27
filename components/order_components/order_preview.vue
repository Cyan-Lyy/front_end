<template>
	<view>
		<!-- 订单预览页面，显示订单类型与订单状态 -->
		<fui-card :title="orderTitle" :tag="tag" size="40" tagSize="30" :margin="['30rpx', '32rpx']">
			<!-- 预约具体时间 -->
			<view class="fui-card__content" style="height: 19vh;">
				<fui-row marginTop="12rpx" justify="center" align="middle">
					<fui-col :span="2" :offset="1">
						<view class="fui-col_item">
							<fui-icon name="wait" size="60" color="#4F4F4F"></fui-icon>
						</view>
					</fui-col>
					<fui-col :span="20" :offset="1">
						<view class="fui-col_item">
							<fui-text type="gray" text="2023-03-01(周三) 14:00 - 15:00" :padding="['7rpx', '0']">
							</fui-text>
						</view>
					</fui-col>
				</fui-row>
				<!-- 预约状态 -->
				<fui-row marginTop="12rpx">
					<fui-col :span="2" :offset="1">
						<fui-icon name="calendar" color="#78CD1A"></fui-icon>
					</fui-col>
					<fui-col :span="15" :offset="1">
						<fui-text type="gray" text="预约成功" :padding="['8rpx', '0']"></fui-text>
					</fui-col>
				</fui-row>
				<!-- 功能按钮 -->
				<fui-row>
					<fui-col :span="6" :pushLeft="10">
						<view class="fui-col_item">
							<fui-button @click="viewDetails" radius="32rpx" width="100%" height="60rpx" text="查看详情"
								color="#4D4D4D" background="#FFFFFF" borderColor="#CECECE" size="30"></fui-button>
						</view>
					</fui-col>
					<fui-col :span="6" :pushLeft="11">
						<view class="fui-col_item">
							<fui-button radius="32rpx" width="100%" height="60rpx" text="取消" color="#4D4D4D"
								background="#FFFFFF" borderColor="#CECECE" size="30"></fui-button>
						</view>
					</fui-col>
				</fui-row>
			</view>
		</fui-card>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		onMounted,
		computed
	} from 'vue';
	import {
		useRouter,
		useRoute
	} from 'vue-router'
	import {
		useStore
	} from "vuex";
	// 父组件传值
	const props = defineProps({
		orderDetails: {
			type: Object,
			required: true,
		}
	})
	const router = useRouter()
	const route = useRoute()
	// 订单的tag
	const tag = computed(() => {
		switch (props.orderDetails.status) {
			case 0:
				return "待支付"
			case 1:
				return "已预约"
			case 2:
				return "已完成"
			case 3:
				return "已取消"
			default:
				return "未知状态"
		}
	})
	// 订单标题
	const orderTitle = computed(() => {
		if (props.orderDetails.orderType === "badminton") {
			return "羽毛球场地预约"
		} else {
			return "篮球场地预约"
		}
	})
	// 查看订单详情
	
	const viewDetails = () => {
		// router.push({
		// 	path: '/orderDetail',
		// 	query: {
		// 		orderid: props.orderDetails.orderid
		// 	}
		// })
		const {orderDetails: {orderId}} = props
		uni.navigateTo({
			url: `/pages/orderDetail/orderDetail?orderId=${orderId}`
		})
	}
</script>
<style>
	.fui-col_item {
		height: 80rpx;
	}
</style>
