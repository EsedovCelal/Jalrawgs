import temp_logo from "../images/temp_logo.jpg";
const Navbar = () => {
  const options = ["Games", "Movies"];
  return (
    <div className="bg-[black] w-300 text-[white] h-20 flex items-center">
      <img className="h-10 w-10" src={temp_logo} />
      <p>Salam</p>
    </div>
  );
};
export default Navbar;
