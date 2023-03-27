<template>
	<view style="background-color: #FBFBFB; min-height: 100vh;">
		<!-- 头像与昵称 -->
		<fui-row marginTop="50rpx" :gutter="20" :isFlex="true" :align="middle">
			<!-- 头像 -->
			<fui-col :span="5" :offset="2">
				<fui-avatar v-if="!userId" size="large" @click="login">
					<fui-icon name="my-fill" color="#fff"></fui-icon>
				</fui-avatar>
				<fui-avatar  v-if="userId" size="large">
					<fui-icon name="my-fill" color="#fff"></fui-icon>
				</fui-avatar>
			</fui-col>
			<fui-col :span="17" style="margin-top: 50rpx;">
				<view class="fui-page__hd">
					<!-- 昵称 -->
					<fui-text @click="login" :text="userName" :size="52" :fontWeight="600" style="margin-top: 20rpx;">
					</fui-text>
					<!-- 会员标识 -->
					<view class="fui-page__desc" @click="openVip" v-show="userId">
						<fui-row :gutter="20">
							<!-- 会员标志 -->
							<fui-col :span="2">
								<image :src="vipIcon" style="height: 20px; width: 20px;"></image>
							</fui-col>
							<!-- 会员等级 -->
							<fui-col :span="14">
								<fui-text :text="vipText" type="gray" size="32"></fui-text>
							</fui-col>
						</fui-row>
					</view>
				</view>
			</fui-col>
		</fui-row>
		<!-- 我的资产 -->
		<Property></Property>
		<!-- 功能列表 -->
		<FuncList></FuncList>

		<!-- 遮罩层，用于开关会员描述界面 -->
		<fui-backdrop :show="backDropShow" closable @click="closeVip">
			<Vip v-show="backDropShow"></Vip>
		</fui-backdrop>
		<fui-row marginTop="10%" v-show="userId">
			<fui-col :span="24" :offset="1">
				<fui-button  @click="userLogout"  background="#fff" color="#F93C3C" borderColor="#64A8F2" width="90%">退 出 登 录</fui-button>
			</fui-col>
		</fui-row>


	</view>
</template>

<script setup>
	import Vip from '@/components/mine_components/vip.vue';
	import Property from '@/components/mine_components/property.vue';
	import FuncList from '@/components/mine_components/func_list.vue';
	import {
		ref,
		reactive,
		onMounted,
		computed
	} from "vue";
	import {
		useStore
	} from 'vuex';

	const store = useStore()
	const code = ref('')
	const backDropShow = ref(false)
	const token = computed(() => store.state.user.token);
	const userId = computed(() => store.state.user.userInfo.userId);
	const userName = computed(() => store.state.user.userInfo.nickname || "一键登录");
	const vipIcon = computed(() => store.state.user.userInfo.vipIcon || "/static/icons/normalVip.png");
	const vipText = computed(() => store.state.user.userInfo.memberType || "普通会员");
	
	onMounted(() => {
		// 每次加载页面获取用户信息
		if (token.value) {
			getUserInfo();
		}
		
	})
	
	const login = async () => {
		// 登录
		console.log(userId.value);
		if (!userId.value) {
			await uni.login({
				provider: 'weixin',
				success(loginRes) {
					store.dispatch('userLogin', loginRes.code);
					console.log(store.state.user.token, 'token');
				}
			});
		}
		
	};
	
	const getUserInfo = () => {
		store.dispatch('getUserInfo');
	}
	
	const userLogout = () => {
		store.dispatch('userLogout');
	}
	
	const openVip = () => {
		backDropShow.value = true
	}

	const closeVip = () => {
		backDropShow.value = false
	}
</script>

<style lang="scss">

</style>
