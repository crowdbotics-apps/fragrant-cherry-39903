import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const mapsdirectionsapi_get_maps_api_directions_json_list = createAsyncThunk(
  "mapsdirectionsapi_response_get_GetMapsDirections/mapsdirectionsapi_get_maps_api_directions_json_list",
  async payload => {
    const response = await apiService.mapsdirectionsapi_get_maps_api_directions_json_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const mapsdirectionsapi_response_get_GetMapsDirectionsSlice = createSlice({
  name: "mapsdirectionsapi_response_get_GetMapsDirections",
  initialState,
  reducers: {},
  extraReducers: {
    [mapsdirectionsapi_get_maps_api_directions_json_list.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [mapsdirectionsapi_get_maps_api_directions_json_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [mapsdirectionsapi_get_maps_api_directions_json_list.rejected]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  mapsdirectionsapi_get_maps_api_directions_json_list,
  slice: mapsdirectionsapi_response_get_GetMapsDirectionsSlice
}
