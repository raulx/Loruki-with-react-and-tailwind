import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer bg-secondary py-16 mt-16">
      <div className="container px-10 gap-5 mx-auto grid grid-cols-1 ce:grid-cols-3 ce:gap-0 ce:px-0 text-white">
        <div>
          <h1 className="text-3xl">Loruki</h1>
          <p>Copyright &copy; 2023</p>
        </div>
        <div className="flex flex-col gap-1">
          <Link to={"/"}>Home</Link>
          <Link to={"/features"}>Features</Link>
          <Link to={"/docs"}>Docs</Link>
        </div>
        <div className="flex justify-start items-center text-3xl gap-4">
          <FaFacebook className="cursor-pointer hover:text-blue-700 transition-all duration-200" />
          <FaGithub className="cursor-pointer hover:text-black transition-all duration-200" />
          <FaInstagram className="cursor-pointer hover:text-pink-700 transition-all duration-200" />
          <FaTwitter className="cursor-pointer hover:text-blue-500 transition-all duration-200" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
