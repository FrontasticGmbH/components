/* This example requires Tailwind CSS v2.0+ */
export default function Newsletter(props) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0">

          </div>
          <div className="relative bg-gray-900 py-16 px-6 sm:py-20 sm:px-12 lg:px-16">
            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block sm:inline">Join our </span>
                <span className="block sm:inline">Newsletter</span>
              </h2>
              <p className="mt-3 text-xl text-white">Sign up for exclusive offers</p>
              <form className="mt-8 sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Notify me
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
