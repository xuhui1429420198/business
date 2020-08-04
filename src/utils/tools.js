/* eslint-disable */
const isWeixin = () => {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.match(/micromessenger/i) == 'micromessenger') {
    return true;
  }
  return false;
};
const isWeixinApp = () => {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.match(/micromessenger/i) == 'micromessenger' && ua.match(/mobile/i) ==
    'mobile') {
    return true;
  }
  return false;
};
const isWeixinPC = () => {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.match(/micromessenger/i) == 'micromessenger' && ua.match(
      /windowswechat/i) == 'windowswechat') {
    return true;
  }
  return false;
};

const isAndroid = () => {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.match(/jdapp/i) == 'jdapp' && ua.match(/android/i) == 'android') {
    return true;
  }
  return false;
};

const isIOS = () => {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.match(/jdapp/i) == 'jdapp' && ua.match(/iphone/i) == 'iphone') {
    return true;
  }
  return false;
};

const debounce = (fn, ms = 0) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
const formatDate = (fmt, date) => {
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1
      .length));
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : ((
        `00${
        o[k]}`).substr((`${o[k]}`).length)));
    }
  }
  return fmt;
};

const encryptTelephone = phoneNumber => {
  if (!phoneNumber) return phoneNumber;
  if (phoneNumber.indexOf('*') === -1) {
    const telArr = phoneNumber.split('');
    telArr.splice(3, 4, '****');
    return telArr.join('');
  }
  return phoneNumber;
};

const hasClass = (elem, cls) => {
  cls = cls || '';
  if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
  return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
}

const addClass = (ele, cls) => {
  if (!hasClass(ele, cls)) {
    ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
  }
}

const removeClass = (elem, cls) => {
  if (hasClass(elem, cls)) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}

const isMobile = num => {
  if (!/^1[3456789]\d{9}$/.test(num)) {
    return false;
  }
  return true;
};
const isTel = num => {
  const tel = /^((0\d{2,3}))(\d{7,8})(-(\d{3,}))?$/;
  const fTel = /^400[0-9]{7}/;
  if (!(tel.test(num) || fTel.test(num))) {
    console.log('400:', false);
    return false;
  }
  return true;
};
const isEmail = email => {
  const emailPattern =
    /^([A-Za-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/;
  return emailPattern.test(email);
};

export default {
  isWeixin,
  isWeixinApp,
  isAndroid,
  isIOS,
  debounce,
  formatDate,
  encryptTelephone,
  hasClass,
  addClass,
  removeClass,
  isMobile,
  isTel,
  isEmail,
};
