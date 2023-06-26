import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const jotformsintegration_get_reports_read = createAsyncThunk(
  "jotformsintegration_response_get_GetUserReports/jotformsintegration_get_reports_read",
  async payload => {
    const response = await apiService.jotformsintegration_get_reports_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const jotformsintegration_response_get_GetUserReportsSlice = createSlice({
  name: "jotformsintegration_response_get_GetUserReports",
  initialState,
  reducers: {},
  extraReducers: {
    [jotformsintegration_get_reports_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [jotformsintegration_get_reports_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [jotformsintegration_get_reports_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  jotformsintegration_get_reports_read,
  slice: jotformsintegration_response_get_GetUserReportsSlice
}
