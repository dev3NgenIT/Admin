import { useEffect, useState } from "react";
import { getAllUsers, Users } from "../../../../http/users";
import { useUsersHandlers } from "../../../../hooks/useUsersHandlers";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../../../comps/BreadCrumbs/BreadCrumbs";

const UserLists = () => {
  const [data, setData] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const users = await getAllUsers(); // Fetch users
        if (!users) {
          setError("Users missing");
          return;
        }
        setData(users);
      } catch (err) {
        setError("Failed to fetch users");
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  const {
    itemsPerPage,
    searchQuery,
    currentPage,
    paginatedData,
    totalPages,
    handleItemsPerPageChange,
    handleSearchQueryChange,
    handlePageChange,
  } = useUsersHandlers(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const breadcrumbItems = [
    { label: "Admin", link: "/" },
    { label: "Users", link: "/admin/users" },
    { label: "All Users" },
  ];
  return (
    <div className="px-5 my-5 container-full">
      <div className="py-3 pt-0">
        <BreadCrumbs items={breadcrumbItems} />
      </div>
      <div className="bg-white card">
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h1 className="mb-4 text-xl font-semibold text-gray-800">
              User List
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search by name"
                  className="w-64 input input-bordered"
                  value={searchQuery}
                  onChange={handleSearchQueryChange}
                />
                <CiSearch className="search-box" />
              </div>
              <select
                className="w-full max-w-xs select select-bordered"
                onChange={handleItemsPerPageChange}
                value={itemsPerPage}
              >
                <option value={10}>Show 10</option>
                <option value={25}>Show 25</option>
                <option value={30}>Show 30</option>
              </select>
              <div>
                <Link to={"user-create"}>
                  <button className="theme-btn-one">
                    <div className="flex items-center justify-center">
                      <FaPlus className="me-3" />
                      Add User
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-4 overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th className="text-sm">Id</th>
                    <th className="text-sm">Name</th>
                    <th className="text-sm">Email</th>
                    <th className="text-sm">Username</th>
                    <th className="text-sm">Phone</th>
                    <th className="text-sm">Address</th>
                    <th className="text-sm">Status</th>
                    <th className="text-sm">Visibility</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="w-12 h-12 mask mask-squircle">
                              <img src={user.profileImg} alt="User" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">
                              {user.firstName} {user.lastName}
                            </div>
                            <div className="text-sm opacity-50">{user.bio}</div>
                          </div>
                        </div>
                      </td>
                      <td>{user.email}</td>
                      <td>{user.username}</td>
                      <td>{user.phone}</td>
                      <td>
                        {user.address.street}, {user.address.city},{" "}
                        {user.address.state}, {user.address.zip},{" "}
                        {user.address.country}
                      </td>
                      <td>
                        <button
                          className={`text-gray-600 ${
                            user.isActive ? "bg-green-300" : "bg-red-300"
                          } shadow-none btn btn-xs`}
                        >
                          {user.isActive ? "Active" : "Inactive"}
                        </button>
                      </td>
                      <td>{user.isVisible ? "Visible" : "Hidden"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center mt-4">
            <button
              className="btn btn-sm"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </button>
            <div className="px-4">
              Page {currentPage} of {totalPages}
            </div>
            <button
              className="btn btn-sm"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLists;
