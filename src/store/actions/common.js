// import { createAction } from 'redux-actions'
import { SET_NOTICE, SET_FOOTERSELECTED } from '../actionTypes'
import Http from '../../utils/http'

/***
 * 首页
 */
// export const setNotice = createAction(SET_NOTICE)

export const setNotice = (data) => {//action
  return {
    type: SET_NOTICE,
    data,
  }
}
// 异步的action.异步dispatch action 里处理异步,要用 redux-thunk
export const getNotice = () => {//获取公告
  return dispatch => {
    const param = {
      packageName: 'cmail-miniprogram',
      confKey: 'xiangqinggonggao',
    };
    return Http("/index/getConfList", [param]).then(res => {
      if (res.code === 0 && res.data.length > 0) {
        dispatch(setNotice(res.data[0].confValue));// 改变内部 state 唯一方法是 dispatch 一个 action。
      }
    });
  }
}

// export const setFooterSelected = (data) => {
//   console.log('setFooterSelected',data)
//   return (dispatch, gerState) => {
//   console.log('gerState', gerState())
//     dispatch({
//       type:SET_FOOTERSELECTED,
//       data,
//     })
//   }
// }
