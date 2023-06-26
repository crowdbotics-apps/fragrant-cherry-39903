import axios from "axios"
const placesAPI = axios.create({
  baseURL: "https://maps.googleapis.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function placesapi_get_maps_api_place_details_json_list(payload) {
  return placesAPI.get(`/maps/api/place/details/json`, {
    params: { place_id: payload.place_id, key: payload.key }
  })
}
export const apiService = { placesapi_get_maps_api_place_details_json_list }
