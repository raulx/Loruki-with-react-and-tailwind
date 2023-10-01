import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import "../src/App.css";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
