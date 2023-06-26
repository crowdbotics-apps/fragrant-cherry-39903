import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const stripesubscriptions_post_subscriptions_create = createAsyncThunk(
  "stripesubscriptions_response_post_Createasubscriptions/stripesubscriptions_post_subscriptions_create",
  async payload => {
    const response = await apiService.stripesubscriptions_post_subscriptions_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const stripesubscriptions_response_post_CreateasubscriptionsSlice = createSlice(
  {
    name: "stripesubscriptions_response_post_Createasubscriptions",
    initialState,
    reducers: {},
    extraReducers: {
      [stripesubscriptions_post_subscriptions_create.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [stripesubscriptions_post_subscriptions_create.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      },
      [stripesubscriptions_post_subscriptions_create.rejected]: (
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
  stripesubscriptions_post_subscriptions_create,
  slice: stripesubscriptions_response_post_CreateasubscriptionsSlice
}
