import axios from "axios"
import { SLACK_API_SERVICES_TOKEN } from "react-native-dotenv"
const slackAPI = axios.create({
  baseURL: "https://slack.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${SLACK_API_SERVICES_TOKEN}`
  }
})
function slackapi_post_api_conversationslist_create(payload) {
  return slackAPI.post(`/api/conversations.list`, payload.data)
}
function slackapi_post_api_conversationscreate_create(payload) {
  return slackAPI.post(`/api/conversations.create`, payload.data)
}
export const apiService = {
  slackapi_post_api_conversationslist_create,
  slackapi_post_api_conversationscreate_create
}
