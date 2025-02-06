// useOrderHandlers.tsx
import { useState } from "react";
import { LatestOrderAll } from "../http/latestorders";

export const useOrderHandlers = (data: LatestOrderAll[]) => {
  const [filteredStatus, setFilteredStatus] = useState<string>('');
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Handle delivery status change
  const handleDeliveryStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilteredStatus(e.target.value);
  };

  // Handle items per page change
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPage = Number(e.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  // Handle search query change
  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter data based on delivery status
  const filteredData = filteredStatus
    ? data.filter((order) => order.deliveryStatus === filteredStatus)
    : data;

  // Filter data based on search query
  const searchedData = filteredData.filter((order) =>
    order.itemName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Paginate the data (show only a subset based on the selected items per page)
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = searchedData.slice(startIndex, startIndex + itemsPerPage);

  // Calculate total pages for pagination
  const totalPages = Math.ceil(searchedData.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return {
    filteredStatus,
    itemsPerPage,
    searchQuery,
    currentPage,
    filteredData,
    searchedData,
    paginatedData,
    totalPages,
    handleDeliveryStatusChange,
    handleItemsPerPageChange,
    handleSearchQueryChange,
    handlePageChange,
  };
};
