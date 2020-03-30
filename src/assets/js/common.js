// export const BASE_PATH = '/api'
// export const BASE_PATH = '/test'
export const BASE_PATH =
  process.env.VUE_APP_BASE_API || "http://10.101.72.103:9000";
export const isIOS = !!navigator.userAgent.match(
  /\(i[^;]+;( U;)? CPU.+Mac OS X/
);
export const isAndroid =
  navigator.userAgent.indexOf("Android") > -1 ||
  navigator.userAgent.indexOf("Linux") > -1;

export const getCurrentDate = () => {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  return year.toString() + "-" + month.toString();
};

export const getLastYearDate = () => {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  year--;
  month = month < 10 ? "0" + month : month;
  return year.toString() + "-" + month.toString();
};
export const getYearNow = () => {
  var date = new Date();
  var year = date.getFullYear();
  return year.toString();
};
export const getMonthNow = () => {
  var date = new Date();
  var month = date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  return month.toString();
};

export const getMonth = yearMonth => {
  if (yearMonth) {
    return yearMonth.split("-")[1];
  }
};
export const isToday = timeStamp => {
  let temp = Object.prototype.toString.call(timeStamp);
  if (temp === "[object String]") {
    timeStamp = timeStamp.replace(/-/g, "/");
  }
  if (new Date(timeStamp).toDateString() === new Date().toDateString()) {
    return true;
  }
  return false;
};
/**
 * 数组排序
 * arr要排序的数组
 * property 为数组中需要按照此条件排序的元素属性
 */
export const sortData = (arr, property) => {
  function compare(propertyName) {
    return function(object1, object2) {
      var value1 = object1[propertyName];
      var value2 = object2[propertyName];
      if (value2 < value1) {
        return -1;
      } else if (value2 > value1) {
        return 1;
      } else {
        return 0;
      }
    };
  }
  return arr.sort(compare(property));
};
/**
 * 数组排序
 * arr为要排序的数组
 * property 为数组中需要按照此条件排序的元素属性
 */
export const reverseSort = (arr, property) => {
  function compare(propertyName) {
    return function(object1, object2) {
      var value1 = object1[propertyName];
      var value2 = object2[propertyName];
      if (value2 < value1) {
        return 1;
      } else if (value2 > value1) {
        return -1;
      } else {
        return 0;
      }
    };
  }
  return arr.sort(compare(property));
};
/**
 * 是否十天内
 * ts 为时间
 */
export const isInTenDays = ts => {
  let timestamp = Date.parse(new Date());
  let dateStr = ts.replace(/-/g, "/");
  let tstimestamp = Date.parse(new Date(dateStr));
  let timeDifference = 864000000;
  if (timestamp - tstimestamp <= timeDifference) {
    return true;
  } else {
    return false;
  }
};

export const isInOneYear = ts => {
  let timestamp = Date.parse(new Date());
  let dateStr = ts.replace(/-/g, "/");
  let tstimestamp = Date.parse(new Date(dateStr));
  let timeDifference = 365 * 24 * 60 * 60 * 1000;
  if (tstimestamp - timestamp <= timeDifference) {
    return true;
  } else {
    return false;
  }
};
/* 获取车位列表的状态 */
export const getParkingPayStatus = ts => {
  if (!ts) {
    return "";
  }
  let timestamp = Date.parse(new Date());
  let dateStr = ts.replace(/-/g, "/");
  let tstimestamp = Date.parse(new Date(dateStr));
  let timeDifference = 432000000;
  if (tstimestamp - timestamp < 0) {
    return "已过期";
  } else if (tstimestamp - timestamp <= timeDifference) {
    return "即将过期";
  } else {
    return "";
  }
};

export const toDecimal = x => {
  var val = Number(x);
  if (!isNaN(parseFloat(val))) {
    val = val.toFixed(2);
  }
  return val;
};
/**
 * 保留小数精度
 * number为传入的数据
 * precision为要保留的数据位数, 类型为int
 */
export const keepPrecision = (number, precision) => {
  if (typeof number === "string") {
    number = parseFloat(number);
  }
  let numberStr = number.toFixed(precision);
  numberStr = numberStr.replace(/0*$/, "");
  numberStr = numberStr.replace(/\.$/, "");
  return parseFloat(numberStr);
};
/* 重新登录 */

export const getFirstTwoStr = str => {
  return str.substring(0, 2);
};
/* 获取cookie */
export const getCookie = cookieName => {
  let cookie = "";
  let cookieArr = document.cookie.split("; ");
  for (let i = 0; i < cookieArr.length; i++) {
    var valueArr = cookieArr[i].split("=");
    if (valueArr[0] === cookieName) {
      cookie = valueArr[1];
      break;
    }
  }
  return cookie;
};
// export let userType = getCookie('userType')
export let token = getCookie("jwt-token");

export const getToken = () => {
  return getCookie("jwt-token") || window.MOCK_TOKEN;
};

export const getUnionId = () => {
  return getCookie("unionId") || window.MOCK_UNION_ID;
};

/**
 * 格式化日期
 * date为日期格式: Date 或date字符串
 * fmt为要转化的格式,如:'yyyy-MM-dd HH:mm:ss'
 */
export const datePattern = (date, fmt) => {
  if (!date) return "";
  if (typeof date === "string") {
    let time1 = date.replace(/-/g, "/");
    date = new Date(time1);
  }
  var o = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    "H+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };
  var week = {
    "0": "/u65e5",
    "1": "/u4e00",
    "2": "/u4e8c",
    "3": "/u4e09",
    "4": "/u56db",
    "5": "/u4e94",
    "6": "/u516d"
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1
        ? RegExp.$1.length > 2
          ? "/u661f/u671f"
          : "/u5468"
        : "") + week[date.getDay() + ""]
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};
/** *计算当前月份有多少天 */
export const getCountDays = () => {
  var curDate = new Date();
  /* 获取当前月份 */
  var curMonth = curDate.getMonth();
  /* 生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
  curDate.setMonth(curMonth + 1);
  /* 将日期设置为0 */
  curDate.setDate(0);
  /* 返回当月的天数 */
  return curDate.getDate();
};
