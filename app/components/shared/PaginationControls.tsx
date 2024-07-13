"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationControls = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlsProps) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= 5) {
      // Show all pages if totalPages is 5 or less
      pageNumbers.push(...Array.from({ length: totalPages }, (_, i) => i + 1)); //[1,2,3,4,5]
    } else {
      // Show first 5 pages, with ellipsis if necessary
      if (currentPage <= 3) {
        pageNumbers.push(
          ...Array.from({ length: 5 }, (_, i) => i + 1),
          "...",
          totalPages
        ); //[1,2,3,4,5,...,10]
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(
          1,
          "...",
          ...Array.from({ length: 5 }, (_, i) => totalPages - 4 + i)
        );
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pageNumbers.map((pageNumber, index) =>
      typeof pageNumber === "number" ? (
        <button
          key={index}
          className={`px-3 py-2 mx-2 rounded-md ${
            pageNumber === currentPage
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-gray-200 hover:bg-gray-300"
          } transition-colors duration-300`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ) : (
        <span key={index} className="px-3 py-2 mx-2">
          {pageNumber}
        </span>
      )
    );
  };

  return (
    <div className="flex justify-center items-center my-8">
      <button
        className="px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon className="w-4 h-4" />
      </button>
      {renderPageNumbers()}
      <button
        className="px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PaginationControls;
