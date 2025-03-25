"use client";
import { useEffect } from "react";

export default function AuthModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling when closed
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-white bg-opacity-80 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Sliding Modal */}
      <div
        className={`bg-white w-[400px] p-6 rounded-lg shadow-lg transform transition-transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-500" onClick={onClose}>
          ✕
        </button>

        {/* Sign In Options */}
        <h2 className="text-xl font-semibold mb-4 text-center">Sign In / Create Account</h2>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md mb-2">Continue with Facebook</button>
        <button className="w-full border py-2 rounded-md mb-2">Continue with Google</button>
        <button className="w-full bg-black text-white py-2 rounded-md mb-2">Continue with Apple</button>
        <div className="text-center text-gray-600 my-2">or</div>
        <input
          type="text"
          placeholder="Your email address or profile URL"
          className="w-full border px-3 py-2 rounded-md mb-4"
        />
        <button className="w-full bg-orange-500 text-white py-2 rounded-md">Continue</button>
      </div>
    </div>
  );
}
