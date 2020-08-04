/**
 * xuhui86
 */

// const testPin = {
//   pin:'bjwangzhong511'
// }
const ENV = {
  DEVELOPMENT: 'development',
  PRE: 'prepare',
  PRODUCTION: 'production',
}
const mode = process.env.REACT_APP_ENV ;//每次改变状态即可
console.log('mode',mode)
const ROOT_PATH = {
  development: 'https://test-proxy.jd.com',
  prepare: 'https://uat-proxy.jd.com',
  production: 'https://lop-proxy.jd.com',
};
export let URL = '';
Object.keys(ENV).forEach((key)=>{
  if(ENV[key] === mode){
    URL = ROOT_PATH[ENV[key]];
    console.log(URL)
  } 
})
// h5 js会自动取cookie里面的值 上传
// export const PT_PIN = mode==='development'?testPin.pin:'$cooMrdGatewayUid$';//测试环境 wangzhong1002 ,预发和正式环境 '$cooMrdGatewayUid$'
// export const PT_KEY = localStorage.getItem('pt_key');//测试环境 wangzhong1002 ,预发和正式环境 '$cooMrdGatewayUid$' 
// console.log('PT_KEY',PT_KEY)
export default {
  URL,
  // PT_PIN,
  // PT_KEY
};