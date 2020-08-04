import { createAction } from 'redux-actions'
import {SET_USERINFO} from '../actionTypes'
import {pin} from '../const';
import Http from '../../utils/http'

export const setUserInfo = createAction(SET_USERINFO)

export const getUserInfo = ()=>{
  return dispatch => {
    const param = [pin,'',2];
      return Http('/order/getCustomerByUserPin', param).then(res => {
        if (res.resultCode === 0) {
          dispatch(setUserInfo(res.data));//存全局sendAddress
        } else {
          console.error(res)
        }
      }).catch(res => {
        console.error(res)
      })
  }
  // return async dispatch => { // async
  //   const param = [pin, '', 2];
  //   const result = await Http('/order/getCustomerByUserPin', param);
  //   console.log(result)
  //   dispatch(setUserInfo(result.data))
  // }
}
