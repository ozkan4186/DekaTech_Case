import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";
import { updateUser, deleteUser } from "../services/api";

const ProfileDetail = () => {
  const { id } = useParams();
  const { users, setUsers } = useUserContext();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const user = users.find((user) => user.id === id);

  if (!user) {
    return <div>User not found</div>;
  }

  const handleUpdateUser = async () => {
    const updatedUser = await updateUser(id, { name, email });
    if (updatedUser) {
      const updatedUsers = users.map((user) =>
        user.id === id ? updatedUser : user
      );
      setUsers(updatedUsers);
      setIsEditing(false);
    }
  };

  const handleDeleteUser = async () => {
    const isDeleted = await deleteUser(id);
    if (isDeleted) {
      const filteredUsers = users.filter((user) => user.id !== id);
      setUsers(filteredUsers);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      {isEditing ? (
        <div className="mt-8">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <button
            onClick={handleUpdateUser}
            className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="mt-8">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="mt-2">{user.email}</p>
          <div className="mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Edit
            </button>
            <button
              onClick={handleDeleteUser}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDetail;
