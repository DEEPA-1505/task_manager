export default function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      className="w-full p-2 mb-4 border border-gray-600 rounded"
    />
  );
}