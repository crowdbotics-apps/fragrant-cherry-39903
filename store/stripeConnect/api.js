import axios from "axios"
import { STRIPE_CONNECT_API_TOKEN } from "react-native-dotenv"
const stripeConnect = axios.create({
  baseURL: "https://api.stripe.com/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${STRIPE_CONNECT_API_TOKEN}`
  }
})
function stripeconnect_get_accounts_read(payload) {
  return stripeConnect.get(`/accounts`, { params: { limit: payload.limit } })
}
function stripeconnect_post_accounts_create(payload) {
  return stripeConnect.post(`/accounts`, payload)
}
export const apiService = {
  stripeconnect_get_accounts_read,
  stripeconnect_post_accounts_create
}
