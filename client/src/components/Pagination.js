import React from "react";

const Pagination = ({ data, itemsPerPage, currentPage, paginate }) => {
  // Calculate the total number of pages
  const totalPageCount = Math.ceil(data.length / itemsPerPage);

  // Create an array of page numbers from 1 to totalPageCount
  const pageNumbers = Array.from({ length: totalPageCount }, (_, i) => i + 1);

  return (
    <div className="fixed bottom-2 left-0 right-0 flex justify-center">
      <div className="bg-white rounded-lg shadow-lg px-20 py-2">
        {/* Check if there is more than one page before rendering pagination */}
        {totalPageCount > 1 && (
          <ul className="flex flex-wrap pagination-list">
            {pageNumbers.map((number) => (
              <div key={number} className="pagination-item mr-4">
                <button
                  className={`pagination-button ${
                    // Highlight the current page
                    number === currentPage ? "bg-red-500 text-white px-2" : ""
                  }`}
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Pagination;
