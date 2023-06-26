import axios from "axios"
const mapsDirectionsAPI = axios.create({
  baseURL: "https://maps.googleapis.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function mapsdirectionsapi_get_maps_api_directions_json_list(payload) {
  return mapsDirectionsAPI.get(`/maps/api/directions/json`, {
    params: {
      destination: payload.destination,
      origin: payload.origin,
      key: payload.key
    }
  })
}
export const apiService = {
  mapsdirectionsapi_get_maps_api_directions_json_list
}
