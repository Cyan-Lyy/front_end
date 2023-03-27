<template>
	<view>
		<fui-row marginTop="20rpx">
			<fui-col :span="24" :offset="0">
				<view style="height: 60%">
					<fui-card :src="vipIcon" :title="vipText" radius="45rpx">
						<view style="width: 60%; margin-left: 20%; margin-top: 5%;">
							<!-- 进度条 -->
							<van-progress :percentage="percentage" stroke-width="3px" :show-pivot="false" color="#87CEFA"></van-progress>
							<fui-text :text="progressText" :size="20" type="gray"></fui-text>
						</view>
						<view style="width: 600rpx; height: 700rpx;">
							<!-- 成长值体系 -->
							<fui-row marginTop="5%">
								<fui-col :span="20" :offset="2">
									<fui-text text="| 会员说明:" fontWeight="700"></fui-text>
								</fui-col>
							</fui-row>
							<!-- 普通会员描述 -->
							<fui-row :gutter="10" marginTop="5%">
								<fui-col :span="6" :offset="2">
									<fui-text type="gray" size="30" text="普通会员:"></fui-text>
									<!-- <image src="/static/icons/normalVip.png" style="height: 20px; width: 20px;" ></image> -->
								</fui-col>
								<fui-col :span="14">
									<fui-text type="gray" size="28" text="在飞扬球馆平台的注册用户即为普通会员"></fui-text>
								</fui-col>
							</fui-row>
							<!-- 白银会员描述 -->
							<fui-row marginTop="5%">
								<fui-col :span="6" :offset="2">
									<fui-text type="gray" size="30" text="白银会员:"></fui-text>
									<!-- <image src="/static/icons/normalVip.png" style="height: 20px; width: 20px;" ></image> -->
								</fui-col>
								<fui-col :span="14">
									<fui-text type="gray" size="28" text="普通会员成长值累计达到5000即可成为白银会员,下单享受9.5折折扣"></fui-text>
								</fui-col>
							</fui-row>
							<!-- 黄金会员描述 -->
							<fui-row marginTop="5%">
								<fui-col :span="6" :offset="2">
									<fui-text type="gray" size="30" text="黄金会员:"></fui-text>
									<!-- <image src="/static/icons/normalVip.png" style="height: 20px; width: 20px;" ></image> -->
								</fui-col>
								<fui-col :span="14">
									<fui-text type="gray" size="28" text="会员成长值累计达到10000即可成为黄金会员,下单享受9折折扣"></fui-text>
								</fui-col>
							</fui-row>
							<!-- 成长值描述说明 -->
							<fui-row marginTop="5%">
								<fui-col :span="20" :offset="2">
									<fui-text text="| 成长值说明:" fontWeight="700"></fui-text>
								</fui-col>
							</fui-row>
							<fui-row marginTop="3%">
								<fui-col :span="2" :offset="2">
									<fui-icon name="help" size="32"></fui-icon>
								</fui-col>
								<fui-col :span="19">
									<fui-text type="gray" size="28" text="每消费实付1元，获得1个成长值。消费金额以实付金额为准，成长值将在订单完成后进行结算"></fui-text>
								</fui-col>
							</fui-row>
							
						</view>
					</fui-card>
				</view>
			</fui-col>
		</fui-row>
	</view>
</template>
	
<script setup>
	import {
		ref,
		reactive,
		onMounted,
		computed
	} from "vue";
	import {useStore} from 'vuex'
	const store = useStore()
	const vipIcon = "/static/icons/VIP.png"
	const vipText = computed(() => store.state.user.userInfo.memberType)
	const currentValue = computed(() => store.state.user.userInfo.growthValue)
	const goalValue = computed(() => store.state.user.userInfo.goalValue)
	const progressText = computed(() => "成长值" + (currentValue?.value ?? 0) + "/" + (goalValue?.value ?? 0))
	const percentage = computed(() => (currentValue.value / goalValue.value) * 100)
</script>
	

<style>
</style>