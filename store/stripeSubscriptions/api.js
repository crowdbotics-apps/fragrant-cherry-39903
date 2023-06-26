import axios from "axios"
import { STRIPE_SUBSCRIPTIONS_API_TOKEN } from "react-native-dotenv"
const stripeSubscriptions = axios.create({
  baseURL: "https://api.stripe.com/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${STRIPE_SUBSCRIPTIONS_API_TOKEN}`
  }
})
function stripesubscriptions_post_subscriptions_create(payload) {
  return stripeSubscriptions.post(`/subscriptions`, payload.data)
}
function stripesubscriptions_get_subscriptions_sub_id_read(payload) {
  return stripeSubscriptions.get(`/subscriptions/sub_id`)
}
export const apiService = {
  stripesubscriptions_post_subscriptions_create,
  stripesubscriptions_get_subscriptions_sub_id_read
}
