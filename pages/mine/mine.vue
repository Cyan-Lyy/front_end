<template>
	<view style="background-color: #FBFBFB; min-height: 100vh;">
		<!-- 头像与昵称 -->
		<fui-row marginTop="50rpx" :gutter="20" :isFlex="true" :align="middle">
			<!-- 头像 -->
			<fui-col :span="5" :offset="2">
				<fui-avatar size="large" @click="login">
					<fui-icon name="my-fill" color="#fff"></fui-icon>
				</fui-avatar>
			</fui-col>
			<fui-col :span="17" style="margin-top: 50rpx;">
				<view class="fui-page__hd">
					<!-- 昵称 -->
					<fui-text @click="login" :text="userName" :size="52" :fontWeight="600" style="margin-top: 20rpx;">
					</fui-text>
					<!-- 会员标识 -->
					<view class="fui-page__desc" @click="openVip">
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
		<fui-row marginTop="10%">
			<fui-col :span="24" :offset="1">
				<fui-button background="#fff" color="#F93C3C" borderColor="#64A8F2" width="90%">退 出 登 录</fui-button>
			</fui-col>
		</fui-row>


	</view>
</template>

<script>
	// import {inject} from 'vue';
	import Vip from '@/components/mine_components/vip.vue';
	import Property from '@/components/mine_components/property.vue';
	import FuncList from '@/components/mine_components/func_list.vue';
	import {useStore} from "vuex";
	// import {
	// 	mapState,
	// 	mapActions,
	// 	useStore
	// } from 'vuex';
	export default {
		setup() {
			const {state, commit} = useStore();
			// const store = inject('store')
			const fuck = "gnla"
			return {
				fuck,
				state,
				commit
			}
		},
		components: {
			Vip,
			Property,
			FuncList
		},
		data() {
			return {
				// userid: this.$store.state.user.userInfo.id,
				code: '12345',
				userName: "一键登录",
				vipIcon: "/static/icons/normalVip.png",
				vipText: "普通会员",
				progressText: "成长值0/100",
				backDropShow: false
			};
		},
		created() {
		},
		computed: {
			// ...mapState({
			// 	token: state => state.user.token,
			// 	userId: state => state.user.userInfo.id,
			// 	userName: state => state.user.userInfo.name || "一键登录",
			// 	vipIcon: state => state.user.userInfo.vipIcon || "/static/icons/normalVip.png",
			// 	vipText: state => state.user.userInfo.vipText || "普通会员",
			// }),
		},
		methods: {
			// ...mapActions(['userLogin']),
			// 登录方法
			async login() {
				const that = this
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						that.code = loginRes.code
						that.commit("SET_TOKEN",that.code)
						console.log(that.state.user.token, "token")
					}
				})
				// try {
				// 	await this.$store.dispatch('userLogin', this.code);
				// 	console.log("success")
				// } catch (error) {
				// 	console.log("error")
				// }

			},
			// openVip() {
			// 	this.backDropShow = true
			// },
			// closeVip() {
			// 	this.backDropShow = false
			// }
		}
	}
</script>

<style lang="scss">

</style>
