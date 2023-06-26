import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const stripepaymentapi_get_v1_balance_list = createAsyncThunk(
  "stripepaymentapi_response_get_GetStripeBalances/stripepaymentapi_get_v1_balance_list",
  async payload => {
    const response = await apiService.stripepaymentapi_get_v1_balance_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const stripepaymentapi_response_get_GetStripeBalancesSlice = createSlice({
  name: "stripepaymentapi_response_get_GetStripeBalances",
  initialState,
  reducers: {},
  extraReducers: {
    [stripepaymentapi_get_v1_balance_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [stripepaymentapi_get_v1_balance_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [stripepaymentapi_get_v1_balance_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  stripepaymentapi_get_v1_balance_list,
  slice: stripepaymentapi_response_get_GetStripeBalancesSlice
}
