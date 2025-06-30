export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="mt-4">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`mx-1 px-3 py-1 rounded ${currentPage === page ? 'font-bold bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}