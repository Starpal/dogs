import * as constant from "../constants/constants"

export const apiCallRequest=()=>({type: constant.API_DATA_REQUEST})
export const apiCallSuccess=(payload)=>({type: constant.API_DATA_RECEIVED, payload})
export const apiCallFailed=(payload)=>({type: constant.API_DATA_FAILED, payload})
