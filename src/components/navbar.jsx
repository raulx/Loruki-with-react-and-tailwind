import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-primary  text-white">
      <div className="container  flex md:flex-row flex-col gap-2 md:gap-0 mx-auto justify-between items-center p-1 py-3 ">
        <h1 className="text-3xl font-light">
          <Link to={"/"}>Loruki.</Link>
        </h1>
        <nav>
          <ul className="flex justify-center items-end gap-5 font-light bg-darkBlue p-4 md:p-0 rounded md:bg-primary">
            <li>
              <Link className="hover:border-b-4 border-white-900  p-1" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:border-b-4 border-white-900 p-1"
                to={"/features"}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="hover:border-b-4 border-white-900 p-1"
                to={"/docs"}
              >
                Docs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
