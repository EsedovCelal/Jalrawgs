import temp_logo from "../images/temp_logo.jpg";
const Navbar = () => {
  const options = ["Games", "Movies"];
  return (
    <div className="bg-[black] w-300 text-[white] h-20 flex items-center">
      <img className="h-10 w-10" src={temp_logo} />
      <p>Salam</p>
      <div className="flex justify-between items-center relative ">
        <div className="absolute">
          <button
            className="btn"
            popoverTarget="popover-1"
            style={{ anchorName: "--anchor-1" }}
          >
            All
          </button>
          <ul
            className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
            popover="auto"
            id="popover-1"
            style={{ positionAnchor: "--anchor-1" }}
          >
            <li>
              <a>All</a>
            </li>
            <li>
              <a>Games</a>
            </li>
            <li>
              <a>Movies</a>
            </li>
          </ul>
        </div>
        <div>
          <input type="text" className="w-100 h-10 bg-[white] rounded-box" />
        </div>
        <div className="absolute">
          <svg viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
