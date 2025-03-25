"use client";

export default function SearchBar() {
  return (
    <div className="flex flex-wrap justify-center items-center my-8 gap-4">
      <div className="flex w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search for artists, bands, tracks, podcasts"
          aria-label="Search music content"
          className="w-full sm:w-[500px] px-4 py-3 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button 
          aria-label="Search"
          className="bg-orange-500 text-white px-5 py-3 rounded-r-md hover:bg-orange-600 transition"
        >
          Search
        </button>
      </div>

      <span className="text-gray-600 hidden sm:inline">or</span>

      <button 
        aria-label="Upload your own music"
        className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
      >
        Upload Your Own
      </button>
    </div>
  );
}
