import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const signeasyintegration_get_rs_embedded_read = createAsyncThunk(
  "signeasyintegration_response_get_ListPendingEnvelopes/signeasyintegration_get_rs_embedded_read",
  async payload => {
    const response = await apiService.signeasyintegration_get_rs_embedded_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const signeasyintegration_response_get_ListPendingEnvelopesSlice = createSlice({
  name: "signeasyintegration_response_get_ListPendingEnvelopes",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        signeasyintegration_get_rs_embedded_read.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        signeasyintegration_get_rs_embedded_read.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = [
              ...state.entities.filter(
                record => record.id !== action.payload.id
              ),
              action.payload
            ]
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        signeasyintegration_get_rs_embedded_read.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  signeasyintegration_get_rs_embedded_read,
  slice: signeasyintegration_response_get_ListPendingEnvelopesSlice
}
