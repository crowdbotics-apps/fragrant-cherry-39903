import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const slackapi_post_api_conversationslist_create = createAsyncThunk(
  "slackapi_response_post_SendMessages/slackapi_post_api_conversationslist_create",
  async payload => {
    const response = await apiService.slackapi_post_api_conversationslist_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const slackapi_response_post_SendMessagesSlice = createSlice({
  name: "slackapi_response_post_SendMessages",
  initialState,
  reducers: {},
  extraReducers: {
    [slackapi_post_api_conversationslist_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [slackapi_post_api_conversationslist_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [slackapi_post_api_conversationslist_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  slackapi_post_api_conversationslist_create,
  slice: slackapi_response_post_SendMessagesSlice
}
