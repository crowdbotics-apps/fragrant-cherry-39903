import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const docusignapi_get_modules_docusign_envelope_retrieve_read = createAsyncThunk(
  "docusignapi_response_get_RetrieveEnvelopes/docusignapi_get_modules_docusign_envelope_retrieve_read",
  async payload => {
    const response = await apiService.docusignapi_get_modules_docusign_envelope_retrieve_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const docusignapi_response_get_RetrieveEnvelopesSlice = createSlice({
  name: "docusignapi_response_get_RetrieveEnvelopes",
  initialState,
  reducers: {},
  extraReducers: {
    [docusignapi_get_modules_docusign_envelope_retrieve_read.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [docusignapi_get_modules_docusign_envelope_retrieve_read.fulfilled]: (
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
    [docusignapi_get_modules_docusign_envelope_retrieve_read.rejected]: (
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
  docusignapi_get_modules_docusign_envelope_retrieve_read,
  slice: docusignapi_response_get_RetrieveEnvelopesSlice
}
