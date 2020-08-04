// import { createAction } from 'redux-actions'
// import {SET_ORDERSENDINFO} from '../actionTypes'
// import {pin} from '../const';
// import Http from '../../utils/http'
// import tools from '../../utils/tools'

// export const setOrderSendInfo = createAction(SET_ORDERSENDINFO)

// export const getOrderSendInfo = (curPage)=>{
//   return dispatch =>{
//     const param = [
//       { userPin:pin,
//         entrance:"JDAPP",
//         client:2,
//         apiVersion:"1.0.0",
//         source:1,
//         productType:10,
//         ceWaybillQueryCondition:{
//           orderStatusIds:[],
//           userPin:pin,
//           startTime: tools.formatDate('yyyy-MM-dd hh:mm:ss', new Date(new Date().getTime() - (360 * 24 * 60 * 60 * 1000))),
//           endTime: tools.formatDate('yyyy-MM-dd hh:mm:ss', new Date(new Date().getTime() + (24 * 60 * 60 * 1000))),
//         },
//         cePageUtil:{
//           curPage: 1, //Math.ceil(this.sendOrders.length / this.pageSize) + 1,
//           pageSize:10
//         }
//       }
//     ];
//     Http('/search/queryECLPWaybillByConditionPage',param).then(res=>{
//       // console.log('orderPage---',res)
//       if(res.code===1){
//         dispatch(setOrderSendInfo(res.data));
//       }else{
//         console.error(res)
//       }
//     }).catch(res=>{
//       console.error(res)
//     })
//   }
// }