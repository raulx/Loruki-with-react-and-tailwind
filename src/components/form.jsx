function Form() {
  return (
    <div className="md:w-96 w-80 h-80 shadow-lg mt-20 mx-16 md:h-96  bg-white rounded-lg z-10 text-gray-500 p-12 animate-slideInBottom md:animate-slideInRight">
      <h1 className="text-3xl">Request a Demo</h1>
      <form className="flex flex-col  gap-6 md:gap-10 mt-2 md:mt-6 p-1 demo-form ">
        <div>
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <input type="text" placeholder="Company Name" />
        </div>
        <div>
          <input type="email" placeholder="Email" />
        </div>
        <button
          className="w-24 bg-primary text-white rounded p-2 text-sm hover:scale-95 transition-all duration-200"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
