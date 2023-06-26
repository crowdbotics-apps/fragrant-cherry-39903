import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const geolocationapi_post_geolocation_v1_geolocate_create = createAsyncThunk(
  "geolocationapi_response_post_Newdatacalls/geolocationapi_post_geolocation_v1_geolocate_create",
  async payload => {
    const response = await apiService.geolocationapi_post_geolocation_v1_geolocate_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const geolocationapi_response_post_NewdatacallsSlice = createSlice({
  name: "geolocationapi_response_post_Newdatacalls",
  initialState,
  reducers: {},
  extraReducers: {
    [geolocationapi_post_geolocation_v1_geolocate_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [geolocationapi_post_geolocation_v1_geolocate_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [geolocationapi_post_geolocation_v1_geolocate_create.rejected]: (
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
  geolocationapi_post_geolocation_v1_geolocate_create,
  slice: geolocationapi_response_post_NewdatacallsSlice
}
