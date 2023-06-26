import axios from "axios"
const jotformsIntegration = axios.create({
  baseURL: "https://api.jotform.com/user",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function jotformsintegration_get_reports_read(payload) {
  return jotformsIntegration.get(`/reports`, {
    params: { apiKey: payload.apiKey }
  })
}
function jotformsintegration_post_register_create(payload) {
  return jotformsIntegration.post(`/register`, payload.data)
}
export const apiService = {
  jotformsintegration_get_reports_read,
  jotformsintegration_post_register_create
}
