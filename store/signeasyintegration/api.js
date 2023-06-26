import axios from "axios"
import { SIGNEASY_API_INTEGRATION_TOKEN } from "react-native-dotenv"
const signeasyintegration = axios.create({
  baseURL: "https://api.signeasy.com/v3",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${SIGNEASY_API_INTEGRATION_TOKEN}`
  }
})
function signeasyintegration_get_rs_embedded_read(payload) {
  return signeasyintegration.get(`/rs/embedded/`)
}
function signeasyintegration_get_rs_envelope_read(payload) {
  return signeasyintegration.get(`/rs/envelope/`)
}
export const apiService = {
  signeasyintegration_get_rs_embedded_read,
  signeasyintegration_get_rs_envelope_read
}
