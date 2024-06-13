import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";

const ProfileList = () => {
  const { users } = useUserContext();
  const [selectedRole, setSelectedRole] = useState("all");

  const filteredUsers =
    selectedRole === "all"
      ? users
      : users.filter((user) => user.role === selectedRole);
  console.log(selectedRole);
  console.log(filteredUsers);
  console.log(users);
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Profile List</h1>
      <Link
        to="/create"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block"
      >
        Create New User
      </Link>
      <div className="mb-6">
        <label
          htmlFor="role"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Filter by Role:
        </label>
        <div className="relative w-full sm:w-auto">
          <select
            id="role"
            name="role"
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option className="border border-blue-900" value="all">
              All
            </option>
            <option className="sm:w-4" value="admin">
              Admin
            </option>
            <option className="sm:w-4" value="user">
              User
            </option>
            <option className=" sm:w-4" value="guest">
              Guest
            </option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6"
              >
                Role
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-2 py-4 whitespace-nowrap sm:px-6">
                  <Link
                    to={`/profile/${user.id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    {user.name}
                  </Link>
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-gray-500 sm:px-6">
                  {user.email}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-gray-500 sm:px-6">
                  {user.role}
                </td>
                <td className="px-2 py-4 whitespace-nowrap sm:px-6">
                  <Link
                    to={`/profile/${user.id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Profile Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileList;
