import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  getAllLatestOrders,
  LatestOrderAll,
} from "../../../../../http/latestorders";
import { useOrderHandlers } from "../../../../../hooks/useOrderHandlers";
import { FaPen, FaPrint, FaTrash } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import BreadCrumbs from "../../../../../comps/BreadCrumbs/BreadCrumbs";

const OrdersReports = () => {
  const [data, setData] = useState<LatestOrderAll[]>([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const orders = await getAllLatestOrders();
      if (!orders) return console.log("orders missing");
      setData(orders);
    })();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  // Use the custom hook for handlers and pagination logic (unconditionally at the top)
  const {
    filteredStatus,
    itemsPerPage,
    searchQuery,
    currentPage,
    paginatedData,
    totalPages,
    handleDeliveryStatusChange,
    handleItemsPerPageChange,
    handleSearchQueryChange,
    handlePageChange,
  } = useOrderHandlers(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Extract unique delivery statuses
  const deliveryStatuses = [
    ...new Set(data.map((order) => order.deliveryStatus)),
  ];
  const breadcrumbItems = [
    { label: "Admin", link: "/" },
    { label: "Orders", link: "/admin/orders" },
    { label: "Orders Reports" },
  ];

  return (
    <div className="px-4 mt-4 container-full rounded-2xl">
      <div className="py-3 pt-0">
        <BreadCrumbs items={breadcrumbItems} />
      </div>
      <div className="bg-white card">
        <div className="card-body">
          {/* Card Header */}
          <div className="flex items-center justify-between">
            <h1 className="mb-4 text-xl font-semibold text-gray-800">
              All Order Report
            </h1>
            <div className="flex items-center gap-2">
              {/* Search Box */}
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search by item name"
                  className="w-64 input input-bordered"
                  value={searchQuery}
                  onChange={handleSearchQueryChange}
                />
                <CiSearch className="search-box" />
              </div>
              {/* Dynamic Delivery Status */}
              <select
                className="w-full max-w-xs select select-bordered me-3"
                onChange={handleDeliveryStatusChange}
                value={filteredStatus}
              >
                <option value="">Delivery Status</option>
                {deliveryStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              {/* Dynamic Items per page */}
              <select
                className="w-full max-w-xs select select-bordered"
                onChange={handleItemsPerPageChange}
                value={itemsPerPage}
              >
                <option value={10}>Show 10</option>
                <option value={25}>Show 25</option>
                <option value={30}>Show 30</option>
              </select>
            </div>
          </div>
          {/* Card Header End */}
          <div>
            <div className="mt-4 overflow-x-auto">
              <table className="table">
                {/* Table head */}
                <thead>
                  <tr className="text-sm">
                    <th>Id</th>
                    <th>Item</th>
                    <th>Product ID</th>
                    <th>Date Added</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Qty</th>
                    <th className="text-center">Delivery</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map through filtered and paginated orders */}
                  {paginatedData.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="w-12 h-12 mask mask-squircle">
                              <img src={order.itemImage} alt="Order Item" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{order.itemName}</div>
                            <div className="text-sm opacity-50">
                              {order.brand}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{order.productId}</td>
                      <td>{order.dateAdded}</td>
                      <td>{order.price}</td>
                      <td>
                        <button
                          className={`text-gray-600 ${
                            order.status === "In Stock"
                              ? "bg-green-300"
                              : "bg-red-300"
                          } shadow-none btn btn-xs`}
                        >
                          {order.status}
                        </button>
                      </td>
                      <td>{order.quantity} PCS</td>
                      <td className="text-center">
                        <button
                          className={`text-gray-600 ${
                            order.deliveryStatus === "Done"
                              ? "bg-[#E8FFEF]"
                              : "bg-[#FFEDE5]"
                          } shadow-none btn btn-xs px-4`}
                        >
                          {order.deliveryStatus}
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
                          <button className="bg-indigo-600 border-0 btn btn-circle btn-outline btn-sm me-3">
                            <BsArrowsFullscreen className="text-white " />
                          </button>
                          <button className="bg-green-400 border-0 btn btn-circle btn-outline btn-sm">
                            <FaPrint className="text-white " />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {/* Table foot */}
              </table>
            </div>
          </div>

          {/* Pagination Controls */}
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

export default OrdersReports;
