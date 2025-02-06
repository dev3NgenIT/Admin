import { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const CategoryList = ({ data }) => {
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    {
      name: "Category Name",
      selector: (row) => row.categoryName,
      sortable: true,
      wrap: true,
      style: {
        width: "20%",
        fontSize: "16px",
      },
    },
    {
      name: "Category Image",
      cell: (row) => (
        <img
          src={row.thumbnail}
          alt={row.categoryName}
          width="50"
          className="rounded-full"
        />
      ),
      wrap: true,
      style: {
        width: "20%",
      },
    },
    {
      name: "Category Icon",
      cell: (row) => (
        <img
          src={row.icon}
          alt={row.categoryName}
          width="50"
          className="rounded-full"
        />
      ),
      wrap: true,
      style: {
        width: "20%",
      },
    },
    {
      name: "Category Banner",
      cell: (row) => (
        <img src={row.banner} alt={row.categoryName} width="100" className="" />
      ),
      wrap: true,
      style: {
        width: "30%",
      },
    },
    // {
    //   name: "Status",
    //   selector: (row) => row.status,
    //   sortable: true,
    //   wrap: true,
    //   style: {
    //     width: "10%",
    //   },
    // },
    {
      name: "Status",
      cell: (row) => (
        <span
          className={`px-3 py-1 text-sm font-medium rounded ${
            row.status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {row.status === "active" ? "Active" : "Inactive"}
        </span>
      ),
      style: {
        width: "15%", // Adjusted width for the badge
        textAlign: "center", // Center-align the badge
      },
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex space-x-2 justify-end">
          <Link
            to={"/"}
            className="pe-3"
            onClick={() => {
              console.log("Delete button clicked for ID:", row.id);
              handleDelete(row.id);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_82963_4043"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect x="0.113281" width="23.3015" height="24" fill="#3575FC" />
              </mask>
              <g mask="url(#mask0_82963_4043)">
                <path
                  d="M11.7639 16C12.9775 16 14.0091 15.5625 14.8586 14.6875C15.7081 13.8125 16.1329 12.75 16.1329 11.5C16.1329 10.25 15.7081 9.1875 14.8586 8.3125C14.0091 7.4375 12.9775 7 11.7639 7C10.5502 7 9.51865 7.4375 8.66912 8.3125C7.81958 9.1875 7.39481 10.25 7.39481 11.5C7.39481 12.75 7.81958 13.8125 8.66912 14.6875C9.51865 15.5625 10.5502 16 11.7639 16ZM11.7639 14.2C11.0357 14.2 10.4167 13.9375 9.90701 13.4125C9.39729 12.8875 9.14243 12.25 9.14243 11.5C9.14243 10.75 9.39729 10.1125 9.90701 9.5875C10.4167 9.0625 11.0357 8.8 11.7639 8.8C12.492 8.8 13.111 9.0625 13.6207 9.5875C14.1304 10.1125 14.3853 10.75 14.3853 11.5C14.3853 12.25 14.1304 12.8875 13.6207 13.4125C13.111 13.9375 12.492 14.2 11.7639 14.2ZM11.7639 19C9.40133 19 7.24918 18.3208 5.30739 16.9625C3.36559 15.6042 1.95779 13.7833 1.08398 11.5C1.95779 9.21667 3.36559 7.39583 5.30739 6.0375C7.24918 4.67917 9.40133 4 11.7639 4C14.1264 4 16.2785 4.67917 18.2203 6.0375C20.1621 7.39583 21.5699 9.21667 22.4437 11.5C21.5699 13.7833 20.1621 15.6042 18.2203 16.9625C16.2785 18.3208 14.1264 19 11.7639 19ZM11.7639 17C13.5924 17 15.2712 16.5042 16.8004 15.5125C18.3295 14.5208 19.4987 13.1833 20.3077 11.5C19.4987 9.81667 18.3295 8.47917 16.8004 7.4875C15.2712 6.49583 13.5924 6 11.7639 6C9.93533 6 8.25649 6.49583 6.72732 7.4875C5.19816 8.47917 4.02904 9.81667 3.21996 11.5C4.02904 13.1833 5.19816 14.5208 6.72732 15.5125C8.25649 16.5042 9.93533 17 11.7639 17Z"
                  fill="#3575FC"
                />
              </g>
            </svg>
          </Link>
          {/* Edit Button */}
          <Link to={"/"} className="pe-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.9726 5.37L18.327 3.675C17.4532 2.775 16.0332 2.775 15.1594 3.675L12.3996 6.525L4.2514 14.91C3.53779 15.645 3.15186 16.6125 3.15186 17.6475V20.25C3.15186 20.6625 3.47953 21 3.88003 21H6.40679C7.41167 21 8.35101 20.595 9.06462 19.8675L17.2129 11.4825L19.9726 8.6325C20.395 8.1975 20.628 7.62 20.628 7.005C20.628 6.39 20.395 5.8125 19.9726 5.3775V5.37ZM8.03061 18.8025C7.59371 19.2525 7.01845 19.5 6.40679 19.5H4.6082V17.6475C4.6082 17.0175 4.8485 16.4175 5.2854 15.975L12.9167 8.1225L15.6691 10.9575L8.03789 18.8175L8.03061 18.8025ZM18.9459 7.5675L16.7031 9.885L13.9507 7.05L16.1934 4.7325C16.4993 4.4175 16.9944 4.4175 17.3003 4.7325L18.9459 6.4275C19.0916 6.5775 19.1717 6.78 19.1717 6.9975C19.1717 7.215 19.0916 7.41 18.9459 7.5675ZM19.1717 19.5H11.8899C11.4894 19.5 11.1618 19.8375 11.1618 20.25C11.1618 20.6625 11.4894 21 11.8899 21H19.1717C19.5722 21 19.8998 20.6625 19.8998 20.25C19.8998 19.8375 19.5722 19.5 19.1717 19.5Z"
                fill="#00AC4F"
              />
            </svg>
          </Link>
          {/* View Button */}
          <Link to={"/"} className="pe-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_82963_4051"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect x="0.425293" width="23.3015" height="24" fill="#FF7143" />
              </mask>
              <g mask="url(#mask0_82963_4051)">
                <path
                  d="M7.22177 21C6.68778 21 6.23065 20.8042 5.85038 20.4125C5.47011 20.0208 5.27998 19.55 5.27998 19V6H4.30908V4H9.16357V3H14.9889V4H19.8434V6H18.8725V19C18.8725 19.55 18.6824 20.0208 18.3021 20.4125C17.9219 20.8042 17.4647 21 16.9307 21H7.22177ZM16.9307 6H7.22177V19H16.9307V6ZM9.16357 17H11.1054V8H9.16357V17ZM13.0472 17H14.9889V8H13.0472V17Z"
                  fill="#FF7143"
                />
              </g>
            </svg>
          </Link>
        </div>
      ),
      style: {
        width: "20%",
      },
    },
  ];

  const handleStatusChange = (id, currentStatus) => {
    const updatedStatus = currentStatus === "active" ? "inactive" : "active";
    console.log(`Status for ID: ${id} changed to ${updatedStatus}`);
    // Update your backend or state management as needed
  };
  // Filter data based on search input
  const filteredData = data.filter((item) =>
    columns.some((col) =>
      col
        .selector?.(item)
        ?.toString()
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  );

  // Pagination
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (id) => {
    console.log(`Delete Category with ID: ${id}`);
  };

  // Custom styles for DataTable
  const customStyles = {
    header: {
      style: {
        textAlign: "center",
        backgroundColor: "red",
        color: "white",
        fontWeight: "bold",
      },
    },
    headRow: {
      style: {
        fontSize: "16px",
        borderTop: "1px dashed #ddd",
        borderBottom: "1px dashed #ddd",
      },
    },
    headCells: {
      style: {
        textAlign: "center",
        padding: "10px",
      },
    },
    rows: {
      style: {
        borderBottom: "0px dashed #ddd",
        transition: "background-color 0.3s",
      },
      hoverStyle: {
        backgroundColor: "#f1f1f1",
      },
    },
    cells: {
      style: {
        padding: "5px",
      },
    },
  };

  return (
    <div>
      <DataTable
        columns={columns}
        data={currentItems}
        selectableRows
        pagination
        paginationPerPage={rowsPerPage}
        paginationRowsPerPageOptions={[5, 10, 15]}
        search
        subHeader
        subHeaderComponent={
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center space-x-2">
              <span>Show</span>
              <select
                className="border rounded select-sm"
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-1 ps-5 border rounded-full form-control form-control-sm"
            />
          </div>
        }
        highlightOnHover
        responsive
        paginationServer
        paginationComponentOptions={{
          rowsPerPageText: "Show",
          rangeSeparatorText: "of",
          selectAllRowsItem: false,
        }}
        onChangePage={handlePageChange}
        customStyles={customStyles}
      />
    </div>
  );
};

export default CategoryList;
