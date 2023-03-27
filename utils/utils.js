export function isEqual(arr1, arr2) {
	  if (arr1.length !== arr2.length) {
	    return false;
	  }
	  for (let i = 0; i < arr1.length; i++) {
	    if (arr1[i] !== arr2[i]) {
	      return false;
	    }
	  }
	  return true;
	}

export function isNull(obj) {
	for (let s in obj) {
		if(!obj[s]) {
			return true
		}
	}
}

export function formatDate(date, formatStr) {

  function $addZero(v, size) {
    for (let i = 0, len = size - (v + "").length; i < len; i++) {
      v = "0" + v;
    }
    return v + "";
  }
  // 格式化时间
  const arrWeek = ["日", "一", "二", "三", "四", "五", "六"];
  return formatStr
    .replace(/yyyy|YYYY/, date.getFullYear())
    .replace(/yy|YY/, $addZero(date.getFullYear() % 100, 2))
    .replace(/mm|MM/, $addZero(date.getMonth() + 1, 2))
    .replace(/m|M/g, date.getMonth() + 1)
    .replace(/dd|DD/, $addZero(date.getDate(), 2))
    .replace(/d|D/g, date.getDate())
    .replace(/hh|HH/, $addZero(date.getHours(), 2))
    .replace(/h|H/g, date.getHours())
    .replace(/ii|II/, $addZero(date.getMinutes(), 2))
    .replace(/i|I/g, date.getMinutes())
    .replace(/ss|SS/, $addZero(date.getSeconds(), 2))
    .replace(/s|S/g, date.getSeconds())
    .replace(/w/g, date.getDay())
    .replace(/W/g, arrWeek[date.getDay()]);
}