export default function NavBar({ current, setCurrent }) {
  const linkClass = (name) =>
    `cursor-pointer px-3 py-2 rounded ${
      current === name ? "text-blue-600 font-semibold" : "text-gray-600"
    }`;

  return (
    <div className="bg-white shadow-sm px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">ResumeIQ</div>

      <div className="flex gap-6">
        <span onClick={() => setCurrent("home")} className={linkClass("home")}>Home</span>
        <span onClick={() => setCurrent("improve")} className={linkClass("improve")}>Improve</span>
        <span onClick={() => setCurrent("compare")} className={linkClass("compare")}>Compare</span>
        <span onClick={() => setCurrent("history")} className={linkClass("history")}>History</span>
      </div>

      {/* <div className="text-sm">Login | Sign Up</div> */}
    </div>
  );
}
