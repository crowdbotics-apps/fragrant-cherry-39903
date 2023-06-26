import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const placesapi_get_maps_api_place_details_json_list = createAsyncThunk(
  "placesapi_response_get_GetPlaceInfos/placesapi_get_maps_api_place_details_json_list",
  async payload => {
    const response = await apiService.placesapi_get_maps_api_place_details_json_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const placesapi_response_get_GetPlaceInfosSlice = createSlice({
  name: "placesapi_response_get_GetPlaceInfos",
  initialState,
  reducers: {},
  extraReducers: {
    [placesapi_get_maps_api_place_details_json_list.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [placesapi_get_maps_api_place_details_json_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [placesapi_get_maps_api_place_details_json_list.rejected]: (
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
  placesapi_get_maps_api_place_details_json_list,
  slice: placesapi_response_get_GetPlaceInfosSlice
}
