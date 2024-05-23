const Card2 = () => {
  return (
    <>
      {/* <div className="flex min-h-screen items-center justify-center bg-pink-300 "> */}
        <div className="mx-auto px-5 m-5">
          <div className="max-w-xs cursor-pointer rounded-lg bg-pink-200 p-2 shadow duration-150 hover:scale-105 hover:shadow-md ">
            <img className="w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1580477371194-4593e3c7c6cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
            <div>
              <div className="my-6 flex items-center justify-between px-4">
                <p className="font-bold text-gray-500">Product Name</p>
                <p className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">$120</p>
              </div>
              <div className="my-4 flex items-center justify-between px-4">
                <p className="text-sm font-semibold text-gray-500">First option</p>
                <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
              </div>
              <div className="my-4 flex items-center justify-between px-4">
                <p className="text-sm font-semibold text-gray-500">Second option</p>
                <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">7</p>
              </div>
            </div>
            <button
              className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Card2;
