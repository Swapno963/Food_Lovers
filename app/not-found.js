export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-lg text-gray-800 mb-8">Page Not Found</p>
      {/* <button
        onClick={() => window.history.back()}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Go Back
      </button> */}
    </div>
  );
}
