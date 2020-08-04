import { createAction } from 'redux-actions'
import { SET_RECEIVEADDRESS, SET_SENDADDRESS} from '../actionTypes'
import Http from '../../utils/http'

export const setReceiveAddress = createAction(SET_RECEIVEADDRESS);
export const setSendAddress = createAction(SET_SENDADDRESS);

// export const setReceiveAddress = (data) => {
//   return {
//     type: SET_RECEIVEADDRESS,
//     data
//   }
// }
