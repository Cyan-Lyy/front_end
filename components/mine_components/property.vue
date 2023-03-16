<template>
	<view style="margin-top: 5%;">
		<fui-card src="/static/icons/propertyIcon.png" title="我的资产">
			<view class="fui-card__content" style="width: 600rpx; height: 150rpx;">
				<fui-row marginTop="5%">
					<fui-col :span="4" :offset="4">
						<!-- <fui-icon name="coupon" size="75"></fui-icon> -->
						<image src="/static/icons/coupon_icon.png" style="width: 11vw; height: 5vh;"></image>
					</fui-col>
					<fui-col :span="4" :offset="4">
						<!-- <fui-icon name="coupon" size="75"></fui-icon> -->
						<image src="/static/icons/integral_icon.png" style="width: 10vw; height: 5vh;"></image>
					</fui-col>
					<fui-col :span="4" :offset="4">
						<!-- <fui-icon name="bankcard" size="75"></fui-icon> -->
						<image src="/static/icons/card_icon.png" style="width: 11vw; height: 5vh;"></image>
					</fui-col>
				</fui-row>
				<fui-row>
					<fui-col :span="4" :offset="4">
						<fui-text text="优惠券" size="28" fontWeight="600" color="#6C6C6C"></fui-text>
					</fui-col>
					<fui-col :span="4" :offset="4">
						<fui-text text="消费分" size="28" fontWeight="600" color="#6C6C6C" align="right"></fui-text>
					</fui-col>
					<fui-col :span="4" :offset="4">
						<fui-text text="充值卡" size="28" fontWeight="600" color="#6C6C6C"></fui-text>
					</fui-col>
				</fui-row>
			</view>
		</fui-card>
	</view>
</template>

<script>
export default{
	name: "property",
	data() {
		return {
			propertyIcon: "/static/icons/propertyIcon"
		}
	}
}
</script>

<style>
	
</style>