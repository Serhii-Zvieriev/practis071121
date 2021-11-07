import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

//============= mockapi =============
// axios.defaults.baseURL = "https://6187f42f057b9b00177f9b58.mockapi.io/api/v1";

axios.defaults.baseURL = "http://localhost:3001";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const { data } = await axios.get("/contacts");
    return data;
  }
);

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (idContact) => {
//     const {
//       data: { id },
//     } = await axios.delete(`/contacts/${idContact}`);
//     return id;
//   }
// );

//============= END mockapi =============

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (idContact) => {
    await axios.delete(`/contacts/${idContact}`);
    return idContact;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    const { data } = await axios.post("/contacts", contact);
    return data;
  }
);
