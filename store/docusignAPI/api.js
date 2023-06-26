import axios from "axios"
import { DOCUSIGN_API_SUPPORT_TOKEN } from "react-native-dotenv"
const docusignAPI = axios.create({
  baseURL: "https://cbmodules-39279.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${DOCUSIGN_API_SUPPORT_TOKEN}`
  }
})
function docusignapi_get_modules_docusign_envelope_retrieve_read(payload) {
  return docusignAPI.get(`/modules/docusign/envelope/retrieve/`, {
    params: { envelope_id: payload.envelope_id }
  })
}
function docusignapi_get_modules_docusign_envelope_retrieveall_read(payload) {
  return docusignAPI.get(`/modules/docusign/envelope/retrieve-all/`, {
    params: { folder_value: payload.folder_value }
  })
}
export const apiService = {
  docusignapi_get_modules_docusign_envelope_retrieve_read,
  docusignapi_get_modules_docusign_envelope_retrieveall_read
}
