import { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const columns = [
  {
    name: "Product ID",
    selector: (row) => row.id,
    sortable: true,
    wrap: true,
    style: { width: "10%", fontSize: "18px" },
  },
  {
    name: "Image",
    selector: (row) => row.product_thumbnail,
    cell: (row) => (
      <img
        src={row.product_thumbnail}
        alt={`Image of ${row.product_name}`}
        width="50"
        className="rounded-full"
      />
    ),
    wrap: true,
    style: { width: "20%" },
  },
  {
    name: "Product Name",
    selector: (row) => row.product_name,
    cell: (row) => (
      <a href={row.product_name} target="_blank" rel="noopener noreferrer">
        {row.product_name}
      </a>
    ),
    wrap: true,
    style: { width: "30%" },
  },
  {
    name: "Product Price",
    selector: (row) => row.price,
    cell: (row) => `$${row.price.toFixed(2)}`,
    wrap: true,
    style: { width: "15%" },
  },
  {
    name: "Category",
    selector: (row) => row.category,
    wrap: true,
    style: { width: "15%" },
  },
  {
    name: "Stock",
    cell: (row) => (
      <span
        className={`badge py-3 badge-sm ml-2 ${
          row.stock > 0 ? "bg-green-500" : "bg-red-500"
        } text-white`}
      >
        {row.stock > 0 ? "In Stock" : "Out Of Stock"}
      </span>
    ),
    style: { width: "15%" },
  },
  {
    name: "Actions",
    cell: (row) => (
      <div className="flex justify-end space-x-2">
        <button
          className="text-red-500 pe-3"
          onClick={(e) => {
            e.preventDefault();
            console.log("Delete button clicked for ID:", row.id);
            handleDelete(row.id);
          }}
        >
          🗑️
        </button>
        <Link to={`/edit/${row.id}`} className="text-blue-500 pe-3">
          ✏️
        </Link>
        <Link to={`/view/${row.id}`} className="text-green-500 pe-3">
          👁️
        </Link>
      </div>
    ),
    style: { width: "20%" },
  },
];
const customStyles = {
  header: {
    style: {
      textAlign: "center",
      backgroundColor: "red",
      color: "white",
      fontWeight: "bold",
      borderTop: "0px dashed black",
    },
  },
  headRow: {
    style: {
      textAlign: "center",
      fontSize: "18px",
      borderBottom: "1px dashed #ddd",
      borderTop: "1px dashed #ddd",
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
      // backgroundColor: "#f9f9f9",
      borderBottom: "0px dashed #ddd",
      borderTop: "0px dashed #ddd",
      transition: "background-color 0.3s",
    },
    hoverStyle: {
      backgroundColor: "#f1f1f1",
    },
  },
  cells: {
    style: {
      borderTop: "0px",
      borderBottom: "0px",
      padding: "5px",
    },
  },
};
const handleDelete = (id) => {
  console.log(`Delete product with ID: ${id}`);
};

const ProductList = ({ data }) => {
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData =
    data?.filter((product) => {
      return (
        product.product_name?.toLowerCase().includes(search.toLowerCase()) ||
        product.category?.toLowerCase().includes(search.toLowerCase())
      );
    }) || [];

  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
        subHeader
        subHeaderComponent={
          <div className="flex items-center justify-between w-full">
            {/* Text: Rows per page */}
            <div className="flex items-center space-x-2">
              <span>Show</span>
              {/* Rows per page dropdown */}
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

            {/* Search input on the right */}
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-1 border rounded-full ps-5 form-control form-control-sm"
            />
          </div>
        }
        highlightOnHover
        responsive
        paginationServer
        onChangePage={handlePageChange}
        customStyles={customStyles}
      />
    </div>
  );
};

export default ProductList;
