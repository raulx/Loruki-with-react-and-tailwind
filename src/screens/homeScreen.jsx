import { Link } from "react-router-dom";
import Form from "../components/form";
import { FaServer, FaUpload, FaProjectDiagram } from "react-icons/fa";
function HomeScreen() {
  return (
    <>
      <section className="showcase bg-primary text-white md:h-96 h-100 overflow-visible">
        <div className="container mx-auto md:grid-cols-2 md:grid flex flex-col justify-center items-center h-full overflow-visible md:gap-8">
          <div className="flex flex-col items-center text-center gap-4 mt-10 animate-slideInTop justify-center md:animate-slideInLeft md:items-start md:mt-0 md:grid-cols-2 md:gap-8 md:text-start">
            <h1 className="text-3xl md:text-5xl font-light capitalize">
              Easier deployment.
            </h1>
            <p>
              Deploy web apps of all kinds,from large scale enterprise APIs to
              static websites for individuals.Fill out form to try out the demo
              of our platform.
            </p>
            <Link
              className="p-2 py-3 hover:scale-95 transition duration-200 rounded border border-white w-36 flex justify-center items-center"
              to={"/features"}
            >
              Read More
            </Link>
          </div>
          <Form />
        </div>
      </section>
      <section className="stats mt-32 animate-slideInBottom delay-75">
        <div className="container mx-auto ">
          <h2 className="md:w-3/5 w-4/5 text-xl mx-auto text-center  ">
            Welcome to the best platform for building applications if all types
            with modern architecture and scaling.
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 w-full mt-16">
            <div className="flex justify-center items-center gap-5 flex-col">
              <FaServer className="stats-icons" />
              <p className="text-3xl ">10,349,405</p>
              <p className="text-lg text-blue-900">Deployments</p>
            </div>
            <div className="flex justify-center items-center gap-5 flex-col">
              <FaUpload className="stats-icons" />
              <p className="text-3xl">987TB</p>
              <p className="text-lg text-blue-900">Published</p>
            </div>
            <div className="flex justify-center  items-center gap-5 flex-col">
              <FaProjectDiagram className="stats-icons" />
              <p className="text-3xl">2,343,265</p>
              <p className="text-lg text-blue-900">Projects</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cli mt-10 animate-slideInLeft delay-100">
        <div className="container  mx-auto grid md:grid-cols-3 grid-cols-1">
          <img src="./images/cli.png" alt="#" className="col-span-2" />
          <div className="flex justify-center items-center flex-col gap-10">
            <div className="py-6 flex justify-center items-center w-72 px-6 rounded-xl border shadow-xl text-lg">
              Easy to use cross platform cli
            </div>
            <div className="py-4 w-72 justify-center items-center px-6 rounded-xl border shadow-xl text-lg">
              Deployed in seconds
            </div>
          </div>
        </div>
      </section>

      <section className="cloud bg-primary mt-10">
        <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 p-10">
          <div className="p-10 col-span-2 flex flex-col text-white justify-center text-center items-center gap-6">
            <h1 className="text-5xl">Extreme Cloud Hosting</h1>
            <p className="text-xl">
              Cloud hosting like you have never seen.Fast efficient and
              scalable.
            </p>
            <button className="py-3 px-10 rounded-md hover:scale-95 transition-all duration-200 bg-black text-white">
              Read More
            </button>
          </div>
          <div className="col-span-1">
            <img src="./images/cloud.png" />
          </div>
        </div>
      </section>
      <h1 className="mt-10 text-3xl text-black text-center">
        Supported Languages
      </h1>
      <section className="languages">
        <div className="flex justify-between mx-auto px-4 container mt-10 flex-wrap gap-5 ">
          <div className="language-card">
            <h1 className="text-xl">Node.js</h1>
            <img src="./images/logos/node.png" />
          </div>
          <div className="language-card">
            <h1 className="text-xl">C#</h1>
            <img src="./images/logos/csharp.png" />
          </div>
          <div className="language-card">
            <h1 className="text-xl">Go</h1>
            <img src="./images/logos/go.png" />
          </div>
          <div className="language-card">
            <h1 className="text-xl">Php</h1>
            <img src="./images/logos/php.png" />
          </div>

          <div className="language-card">
            <h1 className="text-xl">Python</h1>
            <img src="./images/logos/python.png" />
          </div>

          <div className="language-card">
            <h1>Ruby</h1>
            <img src="./images/logos/ruby.png" />
          </div>

          <div className="language-card">
            <h1>Scala</h1>
            <img src="./images/logos/scala.png" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeScreen;
