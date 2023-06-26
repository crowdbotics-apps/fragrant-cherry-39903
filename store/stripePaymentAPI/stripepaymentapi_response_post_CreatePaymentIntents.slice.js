import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const stripepaymentapi_post_v1_payment_intents_create = createAsyncThunk(
  "stripepaymentapi_response_post_CreatePaymentIntents/stripepaymentapi_post_v1_payment_intents_create",
  async payload => {
    const response = await apiService.stripepaymentapi_post_v1_payment_intents_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const stripepaymentapi_response_post_CreatePaymentIntentsSlice = createSlice({
  name: "stripepaymentapi_response_post_CreatePaymentIntents",
  initialState,
  reducers: {},
  extraReducers: {
    [stripepaymentapi_post_v1_payment_intents_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [stripepaymentapi_post_v1_payment_intents_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [stripepaymentapi_post_v1_payment_intents_create.rejected]: (
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
  stripepaymentapi_post_v1_payment_intents_create,
  slice: stripepaymentapi_response_post_CreatePaymentIntentsSlice
}
