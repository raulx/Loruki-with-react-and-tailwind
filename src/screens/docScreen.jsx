import { FaInfo } from "react-icons/fa";

function DocScreen() {
  return (
    <>
      <section className="doc-head bg-primary text-white">
        <div className="container mx-auto  md:grid md:grid-cols-2 flex flex-col justify-center items-center text-center gap-6 md:gap-0 md:text-start py-10">
          <div className="flex justify-center flex-col gap-4">
            <h1 className="text-6xl">Docs</h1>
            <p className="text-xl">Learn how to work with Loruki platform</p>
          </div>
          <div className="flex justify-end">
            <img src="./images/docs.png" className="w-60" />
          </div>
        </div>
      </section>

      <section className="doc-main mt-10">
        <div className="container mx-auto  md:grid md:grid-cols-3  py-4 px-10 gap-8">
          <div className="doc-nav doc-card mb-6 md:mb-0 col-span-1 bg-tertiary py-10 px-6 rounded-lg h-3/5">
            <h1>Essentials</h1>
            <ul>
              <li>Introduction</li>
              <li>About Loruki</li>
              <li>Installation</li>
            </ul>
            <h1>Deployment</h1>
            <ul>
              <li>Setting Up container</li>
              <li>Using the cli</li>
              <li>Managing resources</li>
              <li>Upgrade & Downgrade</li>
            </ul>
          </div>
          <div className="doc-card col-span-2 rounded-lg p-4 flex flex-col gap-3 py-6">
            <h1 className="text-xl">Introduction</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio illo facere perferendis laborum? Similique recusandae
              incidunt eos dolorum aliquam ipsam unde perspiciatis laudantium
              totam quam laborum velit, at maxime minus?
            </p>
            <div className="flex justify-start items-center font-bold text-white p-3 gap-2 bg-green">
              <FaInfo />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                animi?
              </p>
            </div>
            <p className="my-4 text-xl">Lorem, ipsum dolor.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              totam magni eius vitae velit id, atque veritatis! At, vero porro.
            </p>
            <button className="py-3 px-2 bg-primary w-36 text-white rounded hover:scale-95 hover:font-bold transition-all duration-200">
              Install CLI
            </button>
            <h1 className="my-4 text-xl">Requirements</h1>
            <div>
              <p>Windows 10, Mac OSX, Linux</p>
              <p>Node.js v12 or higher</p>
            </div>
            <h1 className="my-4 text-xl">Install</h1>
            <p>Mac(Homebrew)</p>
            <pre className="bg-black text-white p-2">
              <code>$ brew install loruki-cli</code>
            </pre>
            <p>NPM</p>
            <pre className="bg-black text-white p-2">
              <code>$ npm install loruki-cli</code>
            </pre>
            <p>Yarn</p>
            <pre className="bg-black text-white p-2">
              <code>$ yarn install loruki-cli</code>
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}

export default DocScreen;
