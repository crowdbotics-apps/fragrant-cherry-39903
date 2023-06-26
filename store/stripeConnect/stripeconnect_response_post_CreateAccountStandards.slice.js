import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const stripeconnect_post_accounts_create = createAsyncThunk(
  "stripeconnect_response_post_CreateAccountStandards/stripeconnect_post_accounts_create",
  async payload => {
    const response = await apiService.stripeconnect_post_accounts_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const stripeconnect_response_post_CreateAccountStandardsSlice = createSlice({
  name: "stripeconnect_response_post_CreateAccountStandards",
  initialState,
  reducers: {},
  extraReducers: {
    [stripeconnect_post_accounts_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [stripeconnect_post_accounts_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [stripeconnect_post_accounts_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  stripeconnect_post_accounts_create,
  slice: stripeconnect_response_post_CreateAccountStandardsSlice
}
