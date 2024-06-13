import axios from "axios";

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
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${baseURL}/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    return null;
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(`${baseURL}/${userId}`);
    return true;
  } catch (error) {
    console.error("Error deleting user:", error);
    return false;
  }
};
