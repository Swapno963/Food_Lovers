"use client";
export default function errorPage({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-lg text-gray-800 mb-8">Something went wrong.</p>
      <p className="text-lg text-gray-800 mb-8">{error?.message}</p>
      <button
        onClick={() => () => reset()}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Go Back
      </button>
    </div>
  );
}
