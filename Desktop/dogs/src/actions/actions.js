import * as constant from "../constants/constants"

export const apiCallRequest=()=>({type: constant.API_CALL_REQUEST})
export const apiCallSuccess=(payload)=>({type: constant.API_CALL_SUCCESS, payload})
export const apiCallFailed=(payload)=>({type: constant.API_CALL_FAILED, payload})
