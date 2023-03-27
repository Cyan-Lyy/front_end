"use strict";
function isEqual(arr1, arr2) {
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
function formatDate(date, formatStr) {
  function $addZero(v, size) {
    for (let i = 0, len = size - (v + "").length; i < len; i++) {
      v = "0" + v;
    }
    return v + "";
  }
  const arrWeek = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"];
  return formatStr.replace(/yyyy|YYYY/, date.getFullYear()).replace(/yy|YY/, $addZero(date.getFullYear() % 100, 2)).replace(/mm|MM/, $addZero(date.getMonth() + 1, 2)).replace(/m|M/g, date.getMonth() + 1).replace(/dd|DD/, $addZero(date.getDate(), 2)).replace(/d|D/g, date.getDate()).replace(/hh|HH/, $addZero(date.getHours(), 2)).replace(/h|H/g, date.getHours()).replace(/ii|II/, $addZero(date.getMinutes(), 2)).replace(/i|I/g, date.getMinutes()).replace(/ss|SS/, $addZero(date.getSeconds(), 2)).replace(/s|S/g, date.getSeconds()).replace(/w/g, date.getDay()).replace(/W/g, arrWeek[date.getDay()]);
}
exports.formatDate = formatDate;
exports.isEqual = isEqual;
