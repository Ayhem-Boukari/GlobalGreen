interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center gap-2">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            currentPage === index + 1
              ? "bg-primary text-white"
              : "bg-gray-100 text-dark hover:bg-gray-200 dark:bg-dark-3 dark:text-white dark:hover:bg-dark-4"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
