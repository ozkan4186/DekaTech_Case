import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";
import { updateUser, deleteUser } from "../services/api";

const ProfileDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, setUsers } = useUserContext();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const user = users.find((user) => user.id === id);

  useEffect(() => {
    if (user && isEditing) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user, isEditing]);

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
      navigate("/"); // Navigate to the home page or user list page after deletion
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Back
      </button>
      {isEditing ? (
        <div className="border rounded-lg p-4 shadow-md mt-8">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-2"
          />
          <label className="block text-sm font-medium text-gray-700 mt-3">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-2"
          />
          <button
            onClick={handleUpdateUser}
            className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="border rounded-lg p-4 shadow-md mt-8">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="mt-2">{user.email}</p>
          <div className="mt-4 flex justify-between">
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
