export default function ActionButtons({ onImprove, onCompare, type, loading }) {
  return (
    <div className="mt-4">
      {type === "compare" ? (
        <button
          onClick={onCompare}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Compare Resume"}
        </button>
      ) : (
        <button
          onClick={onImprove}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer disabled:opacity-50"
        >
          {loading ? "Improving..." : "Improve Resume"}
        </button>
      )}
    </div>
  );
}
