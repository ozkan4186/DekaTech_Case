import React, { createContext, useContext, useState, useEffect } from "react";
import { getUsers } from "../services/api";
import { mutate } from "swr";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userList = await getUsers();
      setUsers(userList);
    };

    fetchUsers();
  }, []);

  const addUser = async (newUser) => {
    // Assume the API call to create a new user is addUser(newUser)
    // For example: const createdUser = await addUser(newUser);
    // After successful creation, update the users list and trigger revalidation
    // setUsers([...users, createdUser]);
    mutate("https://666a31ba2e964a6dfed7dd1d.mockapi.io/users");
  };

  return (
    <UserContext.Provider value={{ users, setUsers, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
