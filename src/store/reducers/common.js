// import {handleActions} from 'redux-actions'
// import * as Actions from '../actions/common'
import { SET_NOTICE, SET_FOOTERSELECTED } from '../actionTypes'

const INITIAL_STATE = {
  notice: '',
  footerSelected:'home',
  timeArr: [],
}

export const common = (state = INITIAL_STATE, action) => {
  // console.log(action.type)
  switch(action.type){
    case SET_NOTICE:
      return {...state, ...{notice:action.data}};
    case SET_FOOTERSELECTED:
      return {...state, ...{footerSelected:action.data}};
    default:
      return state;
      
  }
}
