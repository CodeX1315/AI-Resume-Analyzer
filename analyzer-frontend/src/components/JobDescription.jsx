export default function JobDescription({ value, onChange }) {
  return (
    <textarea
      className="border rounded p-3 w-full mt-4 h-40"
      placeholder="Paste Job Description here..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
