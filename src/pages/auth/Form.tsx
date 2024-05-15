import { useState } from 'react';
import { Link } from 'react-router-dom';

interface FormProps {
  formType: 'login' | 'register'; // Define the type for the formType prop
}

const Form: React.FC<FormProps> = ({ formType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formType === 'login') {
      // Handle login form submission
      console.log('Logging in with:', email, password);
    } else if (formType === 'register') {
      // Handle registration form submission
      console.log('Registering with:', email, password, confirmPassword);
    }
  };

  return (
    <>
      {/* Pages: Sign In: Boxed */}

      {/* Page Container */}
      <div
        id="page-container"
        className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
      >
        {/* Page Content */}
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="relative mx-auto flex min-h-dvh w-full max-w-10xl items-center justify-center overflow-hidden p-4 lg:p-8">
            {/* Sign In Section */}
            <section className="w-full max-w-xl py-6">
              {/* Header */}
              <header className="mb-10 text-center">
                <h1 className="mb-2 inline-flex items-center gap-2 text-2xl font-bold">
                  <svg
                    className="hi-mini hi-cube-transparent inline-block size-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    {/* SVG path here */} 
                  </svg>
                  <span>Bazar</span>
                </h1>
                <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {formType === 'login' ? 'Welcome, please sign in to your dashboard' : 'Create an account to get started'}
                </h2>
              </header>
              {/* END Header */}

              {/* Sign In Form */}
              <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
                <div className="grow p-5 md:px-16 md:py-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="password" className="text-sm font-medium">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                      />
                    </div>
                    {formType === 'register' && (
                      <div className="space-y-1">
                        <label htmlFor="confirmPassword" className="text-sm font-medium">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="Confirm your password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                        />
                      </div>
                    )}
                    <div>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-700 bg-blue-700 px-6 py-3 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90"
                      >
                        <svg
                          className="hi-mini hi-arrow-uturn-right inline-block size-5 opacity-50"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          {/* SVG path here */}
                        </svg>
                        <span>{formType === 'login' ? 'Sign In' : 'Sign Up'}</span>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="grow bg-gray-50 p-5 text-center text-sm dark:bg-gray-700/50 md:px-16">
                  {formType === 'login' ? "Don't have an account yet?" : "Already have an account?"}
                  <Link
    to={formType === 'login' ? '/register' : '/login'} // Conditionally set the destination based on formType
    className="font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
  >
    {formType === 'login' ? 'Sign up' : 'Sign in'}
  </Link>
                </div>
              </div>
              {/* END Sign In Form */}

             
             
            </section>
            {/* END Sign In Section */}
          </div>
        </main>
        {/* END Page Content */}
      </div>
      {/* END Page Container */}

      {/* END Pages: Sign In: Boxed */}
    </>
  );
};

export default Form;
