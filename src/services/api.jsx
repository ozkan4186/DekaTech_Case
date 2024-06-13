import axios from "axios";
import { mutate } from "swr";
const baseURL = "https://666a31ba2e964a6dfed7dd1d.mockapi.io/users";

export const getUsers = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(baseURL, userData);

    mutate(
      baseURL,
      async (data) => {
        const updatedData = [...data, response.data];
        return updatedData;
      },
      false
    );

    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${baseURL}/${userId}`, userData);

    mutate(baseURL);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    return null;
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(`${baseURL}/${userId}`);

    mutate(baseURL);
    return true;
  } catch (error) {
    console.error("Error deleting user:", error);
    return false;
  }
};
