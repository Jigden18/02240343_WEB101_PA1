"use client";

export default function PromoSection() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-16">
      {/* Upper Section */}
      <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-t-lg w-full min-h-[400px] md:gap-12 lg:gap-24">
        {/* Left - Image */}
        <div className="w-full md:w-3/5 flex justify-center flex-1">
          <img src="/device.jpg" alt="SoundCloud App" className="w-full max-w-md md:max-w-lg" />
        </div>
        {/* Right - Text & Buttons */}
        <div className="w-full md:w-2/5 flex flex-col justify-center px-6 md:ml-auto">
          <h2 className="text-3xl font-bold leading-tight">
            Never stop <br /> listening
          </h2>
          {/* Gradient Line */}
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mt-2 mb-4"></div>
          <p className="text-gray-600 text-lg">
            SoundCloud is available on <br /> Web, iOS, Android, Sonos, <br />
            Chromecast, and Xbox One.
          </p>
          {/* App Store & Google Play Buttons */}
          <div className="flex gap-2 md:gap-3 mt-4 md:mt-6">
            <a href="https://apps.apple.com/app/soundcloud/id336353151" target="_blank" rel="noopener noreferrer">
              <img src="/appstore.png" alt="App Store" className="w-36 cursor-pointer" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.soundcloud.android" target="_blank" rel="noopener noreferrer">
              <img src="/playstore.png" alt="Google Play" className="w-36 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div
        className="relative w-full min-h-[400px] bg-cover bg-center rounded-b-lg text-white p-8 flex items-center"
        style={{ backgroundImage: "url('/join.jpg')" }} // Update with the correct path
      >
        {/* Text & Button Section */}
        <div className="w-full md:w-1/2 px-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold leading-tight">
            Calling all <br /> creators
          </h2>
          <p className="mt-3 text-lg">
            Get on SoundCloud to connect with <br />fans, share your sounds, and 
            grow<br /> your audience. What are you waiting for?
          </p>
          <div className="mt-5">
            <button className="border border-white px-6 py-3 text-white hover:bg-white hover:text-black transition">
              Find out more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
