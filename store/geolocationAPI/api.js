import axios from "axios"
const geolocationAPI = axios.create({
  baseURL: "https://www.googleapis.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function geolocationapi_post_geolocation_v1_geolocate_create(payload) {
  return geolocationAPI.post(`/geolocation/v1/geolocate`, payload.data, {
    params: { key: payload.key }
  })
}
export const apiService = {
  geolocationapi_post_geolocation_v1_geolocate_create
}
