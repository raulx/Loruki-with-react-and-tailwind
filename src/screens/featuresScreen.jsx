import {
  FaServer,
  FaNetworkWired,
  FaLaptopCode,
  FaDatabase,
  FaPowerOff,
  FaUpload,
} from "react-icons/fa";

function FeatureScreen() {
  return (
    <>
      <section className="features-head bg-primary text-white">
        <div className="container  text-center md:text-start mx-auto md:grid md:grid-cols-2 flex justify-center items-center flex-col py-10">
          <div className="flex flex-col gap-8 justify-start items-start mt-4">
            <h1 className="text-6xl mx-auto md:mx-0">Features</h1>
            <p className="text-xl w-3/5 mx-auto md:w-full my-4 md:my-0 ">
              Check out the features of loruki that separate us from the
              competition
            </p>
          </div>
          <div className="flex justify-end">
            <img className="w-60" src="./images/server.png" />
          </div>
        </div>
      </section>

      <section className="features sub-head bg-tertiary">
        <div className="container  mx-auto md:grid md:grid-cols-2 flex flex-col justify-center items-center text-center px-4 gap-8 py-10 md:text-start md:gap-0 md:px-0">
          <div className="flex justify-center gap-5 flex-col">
            <h1 className="text-4xl">The Loruki Platform</h1>
            <p className="text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              cupiditate dignissimos temporibus perspiciatis quae! Suscipit qui,
              consectetur ea consequatur, doloribus repellendus quasi, aut
              corporis nam alias culpa. Nostrum, inventore accusantium!
            </p>
          </div>
          <div className="flex justify-end">
            <img src="./images/server2.png" className="w-72" />
          </div>
        </div>
      </section>

      <section className="features-main">
        <div className="container mx-auto grid md:grid-rows-3 px-2 md:px-0 md:grid-cols-3 grid-rows-1 grid-cols-1 gap-4 py-16">
          <div className="features-card md:col-span-3 col-span-1 row-span-1">
            <FaServer className="text-8xl" />
            <div className="text-l">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              nemo saepe corrupti et dolorem voluptate at, nostrum rem
              voluptatem ab alias quia molestiae ea, libero nihil deserunt.
              Molestias, eum? Necessitatibus!
            </div>
          </div>
          <div className="features-card md:col-span-2 col-span-1 row-span-1">
            <FaNetworkWired className="text-8xl" />
            <div className="text-l">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              recusandae perferendis culpa, reiciendis a itaque debitis qui vel
              dignissimos ipsum!
            </div>
          </div>
          <div className="features-card md:col-span-1 md:row-span-1">
            <FaLaptopCode className="text-8xl" />
            <div className="text-l">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              magnam.
            </div>
          </div>
          <div className="features-card col-span-1 row-span-1">
            <FaDatabase className="text-8xl" />
            <div className="text-l">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, a!
            </div>
          </div>
          <div className="features-card col-span-1 row-span-1">
            <FaPowerOff className="text-8xl" />
            <div className="text-l">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              magnam.
            </div>
          </div>
          <div className="features-card col-span-1 row-span-1">
            <FaUpload className="text-8xl" />
            <div className="text-l">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              magnam.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeatureScreen;
