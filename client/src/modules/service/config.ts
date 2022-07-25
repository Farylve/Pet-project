import { useSelector } from 'react-redux';

const access_token =  localStorage.getItem('access_token')


export const getClaims = `/get_claims_by_params`;
export const getClaimByIdUrl = (claimId: any) => `/get_claim/${claimId}?access_token=${access_token}`;
export const getMerchantsUrl = '/get_merchants'
export const loginURL_Success = (code: string | undefined) => code === undefined ? `/get_token` : `/get_token?code=${code}`
export const getMerchByOrderId = (orderId:string) => `/get_from_oms/${orderId}`
export const getResolutionsURL = `/get_resolutions`

export const addFileURL = (claimId: string)=> `/add_file/${claimId}?access_token=${access_token}`
export const correctClaimURL = (id:string) => `/correct_claim/${id}?access_token=${access_token}`
  export const getFromOMS_URL = (orderNumber: string) =>  `/get_from_oms/${orderNumber}`