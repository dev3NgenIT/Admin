import { useState } from "react";
import { SubCategoryData } from "../http/subCategory";

// useUsersHandlers.tsx
export const useSubCategoryHandlers = (data: SubCategoryData[]) => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>(""); // Initialize with an empty string
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Handle items per page change
  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = Number(e.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  // Handle search query change
  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when search query changes
  };

  // Ensure user.firstName and user.lastName are used for search
  const searchedData = data.filter(
    (user) =>
      (user.sub_category_name
        ? user.sub_category_name.toLowerCase()
        : "" + " " + user.sub_category_name?.toLowerCase()
      ).includes((searchQuery || "").toLowerCase()) // Search for first and last name combined
  );

  // Paginate the data (show only a subset based on the selected items per page)
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = searchedData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Calculate total pages for pagination
  const totalPages = Math.ceil(searchedData.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return {
    itemsPerPage,
    searchQuery,
    currentPage,
    searchedData,
    paginatedData,
    totalPages,
    handleItemsPerPageChange,
    handleSearchQueryChange,
    handlePageChange,
  };
};
