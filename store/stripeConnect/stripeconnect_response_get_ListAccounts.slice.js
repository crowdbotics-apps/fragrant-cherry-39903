import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const stripeconnect_get_accounts_read = createAsyncThunk(
  "stripeconnect_response_get_ListAccounts/stripeconnect_get_accounts_read",
  async payload => {
    const response = await apiService.stripeconnect_get_accounts_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const stripeconnect_response_get_ListAccountsSlice = createSlice({
  name: "stripeconnect_response_get_ListAccounts",
  initialState,
  reducers: {},
  extraReducers: {
    [stripeconnect_get_accounts_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [stripeconnect_get_accounts_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [stripeconnect_get_accounts_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  stripeconnect_get_accounts_read,
  slice: stripeconnect_response_get_ListAccountsSlice
}
