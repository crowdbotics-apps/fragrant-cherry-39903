import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const stripesubscriptions_get_subscriptions_sub_id_read = createAsyncThunk(
  "stripesubscriptions_response_get_GetSubscriptionDetails/stripesubscriptions_get_subscriptions_sub_id_read",
  async payload => {
    const response = await apiService.stripesubscriptions_get_subscriptions_sub_id_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const stripesubscriptions_response_get_GetSubscriptionDetailsSlice = createSlice(
  {
    name: "stripesubscriptions_response_get_GetSubscriptionDetails",
    initialState,
    reducers: {},
    extraReducers: {
      [stripesubscriptions_get_subscriptions_sub_id_read.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [stripesubscriptions_get_subscriptions_sub_id_read.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      },
      [stripesubscriptions_get_subscriptions_sub_id_read.rejected]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      }
    }
  }
)
export default {
  stripesubscriptions_get_subscriptions_sub_id_read,
  slice: stripesubscriptions_response_get_GetSubscriptionDetailsSlice
}
