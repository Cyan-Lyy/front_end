<template>
	<view>
		<!-- 订单预览页面，显示订单类型与订单状态 -->
		<fui-card title="羽毛球场地预约" tag="已预约" size="45" tagSize="30" :margin="['30rpx', '32rpx']">
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
							<fui-text type="gray" text="2023-03-01(周三) 14:00 - 15:00" :padding="['7rpx', '0']"></fui-text>
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
							<fui-button @click="viewDetails" radius="32rpx" width="100%" height="60rpx" text="查看详情" color="#4D4D4D" background="#FFFFFF" borderColor="#CECECE" size="30"></fui-button>
						</view>
					</fui-col>
					<fui-col :span="6" :pushLeft="11">
						<view class="fui-col_item">
							<fui-button radius="32rpx" width="100%" height="60rpx" text="取消" color="#4D4D4D" background="#FFFFFF" borderColor="#CECECE" size="30"></fui-button>
						</view>
					</fui-col>
				</fui-row>
			</view>
		</fui-card>
	</view>
</template>

<script>
	export default {
		props: {
			orderDetails:{
				type: String,
				default: '甘浪'
			},
		},
		data() {
			return {
				fuck: "fuck"
			};
		},
		methods: {
			viewDetails() {
				
			},
		}
	}
</script>
<style>
	.fui-col_item {
		height: 80rpx;
	}
	
	
</style>