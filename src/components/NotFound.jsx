const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
    <h2 className="text-4xl font-bold text-blue-700 mb-4">404 - Page Not Found</h2>
    <p className="text-lg text-gray-600 mb-6 text-center">
      Sorry, the page you are looking for does not exist.
    </p>
    <a
      href="/"
      className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium"
    >
      Go Home
    </a>
  </div>
);

export default NotFound;
