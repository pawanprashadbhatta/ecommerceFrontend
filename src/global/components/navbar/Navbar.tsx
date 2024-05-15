import { Link } from "react-router-dom";
interface authProps{
  isLoggedIn:"logOut"|"logIn"|"register"
}
const Navbar:React.FC<authProps> = ({ isLoggedIn }) => {
  return (
    <>
      <header
        id="page-header"
        className="relative flex flex-none items-center py-8"
      >
        {/* Main Header Content */}
        <div className="container mx-auto flex flex-col gap-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-0 lg:px-8 xl:max-w-7xl">
          <div>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
            >
              <svg
                className="hi-mini hi-cube-transparent inline-block size-5 text-blue-600 transition group-hover:scale-110 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                {/* SVG path here */}
              </svg>
              <span>Bazar</span>
            </Link>
          </div>
          <nav className="space-x-3 md:space-x-6">
            {/* Conditionally render links based on user authentication */}
            {isLoggedIn ? (
              <>
                <Link
                  to="/logout"
                  className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                >
                  <span>Logout</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                >
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                >
                  <span>Register</span>
                </Link>
              </>
            )}
          </nav>
        </div>
        {/* END Main Header Content */}
      </header>
    </>
  );
};

export default Navbar;
