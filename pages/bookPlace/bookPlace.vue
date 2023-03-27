<template>
	<view class="container">
		<!-- 时间 -->
		<van-icon name="clock-o" /><text>选择时间</text>
		<view class="time flex flex-between">
			<view :class="dateIndex === index ? 'activeItem': '' "
				class="time__item flex flex-column flex-center flex-middle" v-for="(item, index) in reserveDate"
				:key="index" @click="chooseDate(item, index)">
				<view class="time__item--day">{{item[1]}}</view>
				<view class="time__item--date">{{item[0]}}</view>
			</view>
		</view>
		<!-- 场地 -->
		<view class="placeList" v-for="item in place" :key="item.courtId">
			<view class="placeList__placeName">
				{{item.courtName}}
			</view>
			<view class="placeList__placeTimeList">
				<view v-for="(timeItem, index) in allTime" @click="chooseTime(timeItem,item)" :key="timeItem.id"
					:class="filterActived(item.courtId, timeItem.id)? 'actived':''"
					class="placeList__placeTimeList--card flex flex-center flex-middle">
					{{timeItem.time}}
				</view>
			</view>
		</view>
		<view>
			<van-submit-bar :price=totalAmount button-text="确认" tip="选择连续的时段价格更低" tip-icon="info-o" placeholder=true
				@submit="onSubmit"></van-submit-bar>
		</view>

		<!-- 支付 -->
		<view class="submit" @click="submit">
			提交
		</view>
	</view>
</template>

<script setup>
	// import { Badge } from 'vant';
	// import {showToast} from "/wxcomponents/vant/dist/toast//index.js";
	import {
		ref,
		reactive,
		onMounted,
		computed
	} from "vue";
	import bookingApi from "../../api/bookingApi.js";

	import {
		isEqual,
		formatDate
	} from "../../utils/utils.js";

	onMounted(() => {
		reserveTime.value = formatDate(new Date(), "yyyy-MM-DD")
		getData();
	})
	let reserveTime = ref("")
	let dateIndex = ref(0)
	const reserveDate = ref([]);
	const place = ref([]);
	const price = ref([]);
	// 总价格
	const totalAmount = ref(0);
	const getData = () => {
		const date = reserveTime.value
		bookingApi.getList({
			date
		}).then(res => {
			// if(res.data.code === 0) {
			reserveDate.value = res.time.map(v => formatTime(v.slice(5)))
			console.log(formatDate(new Date(), "MM-DD"));
			reserveDate.value.forEach(item => {
				item[0] = item[0].replace(/月/, "/")
			})
			place.value = res.courts
			price.value = res.price
			console.log(price.value);
			// }
		})
	}
	const formatTime = (str) => {
		// 使用正则表达式提取日期和星期信息
		let match = str.match(/(\d{2})月(\d{2})日(.+)/);
		if (match) {
			let month = match[1];
			let day = match[2];
			let week = match[3];
			// 将日期和星期信息格式化为目标数组中的格式
			let date = `${month}/${day}`;
			let result = [date, week];
			return result
		}
	}
	const chooseDate = (e, i) => {
		reserveTime.value = dateParma(e[0])
		dateIndex.value = i
		console.log(submitForm.value, "before");
		getData();
		// 切换日期时重置
		submitForm.value = []
		chooseForm.value = []
		totalAmount.value = 0
		console.log(submitForm.value, "after");
		calcMoney(...Object.values(submitData[i]))
	}
	const dateParma = (str) => {
		const year = reserveTime.value.slice(0, 4)
		let match = str.match(/(\d{2})\/(\d{2})/);
		if (match) {
			let month = match[1];
			let day = match[2];
			// 将月份和日期信息格式化为目标格式
			let result = `${year}-${month}-${day}`;
			return result
		}
	}
	const allTime = ref([{
			id: 1,
			value: ["08:00"],
			time: "08:00 - 09:00"
		},
		{
			id: 2,
			value: ["09:00"],
			time: "09:00 - 10:00"
		},
		{
			id: 3,
			value: ["10:00"],
			time: "10:00 - 11:00"
		},
		{
			id: 4,
			value: ["11:00"],
			time: "11:00 - 12:00"
		},
		{
			id: 5,
			value: ["14:00"],
			time: "14:00 - 15:00"
		},
		{
			id: 6,
			value: ["15:00"],
			time: "15:00 - 16:00"
		},
		{
			id: 7,
			value: ["16:00"],
			time: "16:00 - 17:00"
		},
		{
			id: 8,
			value: ["17:00"],
			time: "17:00 - 18:00"
		},
		{
			id: 9,
			value: ["18:00"],
			time: "18:00 - 19:00"
		},
		{
			id: 10,
			value: ["19:00"],
			time: "19:00 - 20:00"
		},
		{
			id: 11,
			value: ["20:00"],
			time: "20:00 - 21:00"
		},
		{
			id: 12,
			value: ["21:00"],
			time: "21:00 - 22:00"
		},
		{
			id: 13,
			value: ["22:00"],
			time: "22:00 - 23:00"
		},
		{
			id: 14,
			value: ["23:00"],
			time: "23:00 - 24:00"
		}
	]);
	const chooseTime = (e, v) => {
		// 视图选项显示隐藏
		const arr = [v.courtId, e.id]
		if (!chooseForm.value.some(s => isEqual(arr, s))) {
			chooseForm.value.push(arr)
		} else {
			chooseForm.value.splice(chooseForm.value.findIndex(f => isEqual(arr, f)), 1)
		}

		//操作提交的数据
		const obj = {};
		obj[v.courtId] = [e.value]
		let placeList = []
		placeList = submitForm.map(v => Object.keys(v)).flat().map(item => Number(item))
		console.log(placeList, "placeList");
		// 取消选择（这里有问题）
		if(placeList.includes(v.courtId)) {
			submitForm.forEach(item => {
				if(item[v.courtId]) {
					if(item[v.courtId].some(s => isEqual(e.value,s))){
						item[v.courtId].splice(item[v.courtId].findIndex(f => isEqual(f,e.value)),1)
					} else {
						item[v.courtId] = [...item[v.courtId], e.value]
					}
				} 
			})
		// 选择
		} else{
			submitForm.push(obj)
		}
		console.log('submitForm:', JSON.stringify(submitForm));
		//操作提交的数据
		submit();
	}


	const chooseForm = ref([])
	const submitForm = reactive([])
	const filterActived = (courtId, id) => {
		const arr = [courtId, id]
		return chooseForm.value.some(s => isEqual(arr, s))
	}

	const submit = () => {
		let submitData = [...submitForm]
		for (var i = 0; i < submitData.length; i++) {
			submitData[i] = fuck(submitData[i])
		}
		submitData = submitData.filter(f => filterData(f))
		// console.log(Object.values(submitData[0]));
		totalAmount.value = 0
		for (var i = 0; i < submitData.length; i++) {
			totalAmount.value += calcMoney(...Object.values(submitData[i]))
		}
	}
	const calcMoney = (chooseArr) => {
		let arr = []
		for (var i = 1; i <= 24; i++) {
			arr.push(0)
		}
		// let chooseArr = ["08:00","09:00","18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
		chooseArr = chooseArr.map(v => Number(v.split(":")[0]))
		for (var i = 0; i < chooseArr.length; i++) {
			arr[chooseArr[i]] = 1
		}
		// const price = ["25,40,45,55", "25,40,45,55", "35,70,90,110,130,150"]
		return calculateOneDayPrice(arr, price.value)
	}
	const calculateOneDayPrice = (timeSlot, priceList) => {
		let oneDayPrice = 0;
		// 早上价格
		let morningPrice = priceList[0].split(",");
		let morningCount = 0;
		let morning = [];
		for (let i = 8; i < 12; i++) {
			if (timeSlot[i] === 1) {
				morningCount++;
			} else {
				if (morningCount > 0) {
					morning.push(morningCount);
					morningCount = 0;
				}
			}
		}
		if (morningCount > 0) {
			morning.push(morningCount);
		}
		morning.forEach(count => {
			oneDayPrice += Math.round(parseFloat(morningPrice[count - 1]) * 100);
		});

		// 下午价格
		let afternoonPrice = priceList[1].split(",");
		let afternoonCount = 0;
		let afternoon = [];
		for (let i = 14; i < 18; i++) {
			if (timeSlot[i] === 1) {
				afternoonCount++;
			} else {
				if (afternoonCount > 0) {
					afternoon.push(afternoonCount);
					afternoonCount = 0;
				}
			}
		}
		if (afternoonCount > 0) {
			afternoon.push(afternoonCount);
		}
		afternoon.forEach(count => {
			oneDayPrice += Math.round(parseFloat(afternoonPrice[count - 1]) * 100);
		});

		// 晚上价格
		let nightPrice = priceList[2].split(",");
		let nightCount = 0;
		let night = [];
		for (let i = 18; i < 24; i++) {
			if (timeSlot[i] === 1) {
				nightCount++;
			} else {
				if (nightCount > 0) {
					night.push(nightCount);
					nightCount = 0;
				}
			}
		}
		if (nightCount > 0) {
			night.push(nightCount);
		}
		night.forEach(count => {
			oneDayPrice += Math.round(parseFloat(nightPrice[count - 1]) * 100);
		});

		return oneDayPrice;
	}
	const filterData = (obj) => {
		const values = Object.values(obj);
		if (!values.length) {
			return false;
		} else {
			return true
		}
	}
	// 合并&&去重
	const fuck = (obj) => {
		const newObj = {};
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				newObj[key] = Array.from(new Set(obj[key].flat()));
			}
			if (!obj[key].length) {
				delete newObj[key]
			}
		}
		return newObj
	}

	const onSubmit = () => {

	}
</script>

<style lang="less">
	.container {
		padding-bottom: 300upx;

		.time {
			overflow-x: auto;
			margin-top: 40upx;
			padding: 0 40upx;

			// margin-left: 50upx;
			&__item {
				border: 1upx solid #ccc;
				border-radius: 15%;
				box-shadow: 2upx 1upx 2upx rgba(0, 0, 0, 0.2);
				width: 120upx;
				height: 140upx;
				margin-right: 20upx;
				margin-bottom: 5upx;

				&--day {}

				&--date {
					margin-top: 20upx;
				}
			}

			&__item:last-child {
				margin-right: 0;
			}

			.activeItem {
				background: #87CEFA;
				color: #fff;
			}
		}

		.placeList {
			margin-top: 40upx;
			padding: 0 40upx;

			&__placeName {}

			&__placeTimeList {
				width: 100%;
				display: grid;
				// grid-template-columns: 33.33% 33.33% 33.33%;
				grid-template-columns: 25% 25% 25% 25%;

				// grid-template-rows: 150px 150px 150px
				&--card {
					font-size: 20upx;
					border-radius: 8%;
					// box-sizing: border-box;
					height: 60upx;
					border: 1px solid #ccc;
					// width: 33.33%;
					margin-right: 20upx;
					/* 每个元素右间距设置为20px */
					margin-top: 20upx;

					// width: calc((100% - 40upx - 20upx) / 3);
					&:nth-child(4n) {
						margin-right: 0;
					}
				}

				.actived {
					border: 1px solid #87CEFA;
				background: #ff0000;
				}
			}
		}
	}
</style>
