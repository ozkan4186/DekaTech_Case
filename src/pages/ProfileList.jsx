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

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Profile List</h1>
      <Link
        to="/create"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
      >
        Create New User
      </Link>
      <div className="mb-4">
        <label
          htmlFor="role"
          className="block text-sm font-medium text-gray-700"
        >
          Filter by Role:
        </label>
        <select
          id="role"
          name="role"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="all">All</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="guest">Guest</option>
        </select>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Role
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredUsers.map((user) => {
            return (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`/profile/${user.id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    {user.name}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {user.role}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileList;
