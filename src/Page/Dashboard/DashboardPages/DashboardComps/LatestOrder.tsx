import { useEffect, useState } from "react";
import {
  getAllLatestOrders,
  LatestOrderAll,
} from "../../../../http/latestorders";
import { useOrderHandlers } from "../../../../hooks/useOrderHandlers";
import { CiSearch } from "react-icons/ci";

const LatestOrder = () => {
  const [data, setData] = useState<LatestOrderAll[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div className="col-span-12 bg-white rounded-2xl">
      <div className="card">
        <div className="card-body">
          {/* Card Header */}
          <div className="flex items-center justify-between">
            <h1 className="mb-4 text-xl font-semibold text-gray-800">
              Latest Order
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
            <div className="overflow-x-auto">
              <table className="table">
                {/* Table head */}
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Item</th>
                    <th>Product ID</th>
                    <th>Date Added</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Qty</th>
                    <th className="text-end">Delivery</th>
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
                      <td className="text-end">
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

export default LatestOrder;
