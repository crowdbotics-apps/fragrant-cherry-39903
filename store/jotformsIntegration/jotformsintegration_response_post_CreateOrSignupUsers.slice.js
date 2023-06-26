import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const jotformsintegration_post_register_create = createAsyncThunk(
  "jotformsintegration_response_post_CreateOrSignupUsers/jotformsintegration_post_register_create",
  async payload => {
    const response = await apiService.jotformsintegration_post_register_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const jotformsintegration_response_post_CreateOrSignupUsersSlice = createSlice({
  name: "jotformsintegration_response_post_CreateOrSignupUsers",
  initialState,
  reducers: {},
  extraReducers: {
    [jotformsintegration_post_register_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [jotformsintegration_post_register_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [jotformsintegration_post_register_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  jotformsintegration_post_register_create,
  slice: jotformsintegration_response_post_CreateOrSignupUsersSlice
}
