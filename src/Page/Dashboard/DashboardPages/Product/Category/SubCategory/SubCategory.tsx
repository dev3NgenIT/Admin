import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCheck, FaPen, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../../../../../comps/BreadCrumbs/BreadCrumbs";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { getAllSubData, SubCategoryData } from "../../../../../../http/subCategory";
import { useSubCategoryHandlers } from "../../../../../../hooks/useSubCategoryHandlers";

const SubCategory = () => {
  const [data, setData] = useState<SubCategoryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const users = await getAllSubData(); // Fetch users
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
  } = useSubCategoryHandlers(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const breadcrumbItems = [
    { label: "Admin", link: "/" },
    { label: "Category", link: "/admin/category" },
    { label: "All Sub Categories" },
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
              Sub Category List
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center search-m-box">
                <input
                  type="text"
                  placeholder="Search by name"
                  className="w-64 rounded-full input input-bordered"
                  value={searchQuery}
                  onChange={handleSearchQueryChange}
                />
                <CiSearch className="search-box" />
              </div>
              <select
                className="w-full max-w-xs rounded-full select select-bordered"
                onChange={handleItemsPerPageChange}
                value={itemsPerPage}
              >
                <option value={10}>Show 10</option>
                <option value={25}>Show 25</option>
                <option value={30}>Show 30</option>
              </select>
              <div>
                <Link to={"create"}>
                  <button className="theme-btn-one">
                    <div className="flex items-center justify-center">
                      <FaPlus className="me-3" />
                      Add Child
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
                    <th className="text-sm" style={{ width: "5%" }}>
                      Id
                    </th>
                    <th className="text-sm" style={{ width: "5%" }}>
                      Icon
                    </th>
                    <th className="text-sm" style={{ width: "10%" }}>
                      Name
                    </th>
                    <th className="text-sm" style={{ width: "10%" }}>
                      Thumbnail
                    </th>
                    <th className="text-sm" style={{ width: "10%" }}>
                      Banner
                    </th>
                    <th className="text-sm" style={{ width: "5%" }}>
                      Category Id
                    </th>
                    <th className="text-sm" style={{ width: "25%" }}>
                      Description
                    </th>
                    <th className="text-sm" style={{ width: "10%" }}>
                      Status
                    </th>
                    <th className="text-sm text-end" style={{ width: "15%" }}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((subCategory) => (
                    <tr key={subCategory.id}>
                      <td>{subCategory.id}</td>
                      <td>
                        <img
                          src={subCategory.sub_category_icon}
                          alt="Icon"
                          className="rounded-md image-full"
                        />
                      </td>
                      <td>{subCategory.sub_category_name}</td>
                      <td>
                        <img
                          src={subCategory.sub_category_thumbnail}
                          alt="Thumbnail"
                          className="w-20 h-20 rounded-md"
                        />
                      </td>
                      <td>
                        <img
                          src={subCategory.sub_category_banner}
                          alt="Banner"
                          className="w-32 h-16 rounded-md"
                        />
                      </td>
                      <td className="text-center">
                        {subCategory.category_id}
                      </td>
                      <td>{subCategory.sub_category_description}</td>
                      <td>
                        <button
                          className={`text-gray-600 ${
                            subCategory.sub_category_status === "active"
                              ? "bg-green-300"
                              : "bg-red-300"
                          } shadow-none btn btn-xs`}
                        >
                          {subCategory.sub_category_status}
                        </button>
                      </td>
                      <td className="text-end">
                        <div>
                          <button className="bg-blue-400 border-0 btn btn-circle btn-sm me-3">
                            <FaPen className="text-white " />
                          </button>
                          <button className="bg-red-400 border-0 btn btn-circle btn-outline btn-sm me-3">
                            <FaTrash className="text-white " />
                          </button>
                          <button className="bg-green-400 border-0 btn btn-circle btn-outline btn-sm">
                            <FaCheck className="text-white " />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center mt-4">
            <button
              className="btn btn-sm btn-circle pg-btn"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <HiArrowLongLeft className="text-white" />
            </button>
            <div className="px-4">
              Page {currentPage} of {totalPages}
            </div>
            <button
              className="btn btn-sm btn-circle pg-btn"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <HiArrowLongRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
