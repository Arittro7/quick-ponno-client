import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("access-token");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/users", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [token]);

  const promoteToSeller = async (email) => {
    try {
      const response = await axios.patch(
        "http://localhost:5000/user/promote",
        { email },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.modifiedCount > 0) {
        Swal.fire("Success", "User promoted to seller", "success");
        setUsers((prev) =>
          prev.map((user) =>
            user.email === email ? { ...user, role: "seller" } : user
          )
        );
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteSeller = async (email) => {
    try {
      const response = await axios.delete("http://localhost:5000/user/delete", {
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: { email },
      });
      if (response.data.deletedCount > 0) {
        Swal.fire("Deleted!", "Seller has been removed", "success");
        setUsers((prev) => prev.filter((user) => user.email !== email));
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Admin Panel</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200 mt-5">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Role</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="border border-gray-300 p-2">{user.email}</td>
                <td className="border border-gray-300 p-2">{user.role}</td>
                <td className="border border-gray-300 p-2">
                  {user.role === "buyer" && (
                    <button
                      onClick={() => promoteToSeller(user.email)}
                      className="btn btn-primary btn-sm mr-2"
                    >
                      Promote to Seller
                    </button>
                  )}
                  {user.role === "seller" && (
                    <button
                      onClick={() => deleteSeller(user.email)}
                      className="btn btn-error btn-sm"
                    >
                      Delete Seller
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;