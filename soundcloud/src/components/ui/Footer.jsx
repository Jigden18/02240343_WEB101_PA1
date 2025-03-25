"use client";

export default function Footer({ onOpenAuth }) { // Accept onOpenAuth as a prop
  return (
    <div className="w-full flex flex-col items-center text-center py-12 px-4">
      {/* Heading */}
      <h2 className="text-3xl font-semibold">Thanks for listening. Now join in.</h2>
      <p className="text-lg text-gray-600 mt-2">
        Save tracks, follow artists and build playlists. All for free.
      </p>

      {/* Buttons Section */}
      <div className="mt-6">
        <button
          className="bg-orange-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition"
          onClick={onOpenAuth} // Open modal on click
        >
          Create account
        </button>

        {/* Sign in Option */}
        <div className="mt-3 text-gray-600 text-sm flex items-center justify-center gap-2">
          <span>Already have an account?</span>
          <button
            className="border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition"
            onClick={onOpenAuth} // Open modal on click
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
