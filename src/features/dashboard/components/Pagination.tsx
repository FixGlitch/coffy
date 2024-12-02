type PaginationProps = {
  pageIndex: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  pageIndex,
  pageCount,
  onPageChange,
}: PaginationProps) => {
  const goToNextPage = () => {
    if (pageIndex < pageCount - 1) onPageChange(pageIndex + 1);
  };

  const goToPreviousPage = () => {
    if (pageIndex > 0) onPageChange(pageIndex - 1);
  };

  return (
    <div className="flex justify-between items-center py-2 px-4">
      <button
        onClick={goToPreviousPage}
        disabled={pageIndex === 0}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        Previous
      </button>
      <span>
        Page {pageIndex + 1} of {pageCount}
      </span>
      <button
        onClick={goToNextPage}
        disabled={pageIndex === pageCount - 1}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
