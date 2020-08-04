/**
 * xuhui86 
 * .jd.com 做映射
 */
import { URL } from './config.js'


let myHeaders = new Headers({
  'Accept': 'application/json, text/plain, */*',
  'X-Requested-With': 'XMLHttpRequest',
  // 'Cookie': `pt_key=${PT_KEY}; pin=${encodeURI(PT_PIN)};`
});

const ClientInfo = {
  appName: 'c2c',
  client: 'm'
}

const AppParams = {
  appid: '158',
  ticket_type: 'm',
}

myHeaders.append("Content-Type", "application/json;charset=utf-8");
myHeaders.append("ClientInfo", JSON.stringify(ClientInfo));
myHeaders.append("AppParams", JSON.stringify(AppParams));
myHeaders.append("LOP-DN", 'logistics-mrd.jd.com');





function Http(url, data) {
  return fetch(`${URL}${url}`, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, same-origin, *omit
    headers: myHeaders,
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
    .then((response) => {
      // console.log(response);
      if (response.status === 401) {
        window.location.href =
          `https://plogin.m.jd.com/user/login.action?appid=158&returnurl=${encodeURIComponent(window.location.href)}`;
      }
      if (response.status === 200) {
        const res = response.json();
        // console.log(res)
        return res;
      }
      const res = response.json();
      // console.log(res)
      return res;
    })

}
export default Http