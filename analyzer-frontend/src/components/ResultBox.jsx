export default function ResultBox({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-white rounded p-4 shadow">
      <button
        onClick={() => window.location.reload()}
        className="mb-4 text-sm text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((k, i) => (
          <span
            key={i}
            className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded"
          >
            {k}
          </span>
        ))}
      </div>
    </div>
  );
}
