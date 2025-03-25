"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const carouselData = [
  {
    title: "Discover.\nGet Discovered.",
    text: "Discover your next obsession, or become someone else’s. SoundCloud is the only community where fans and artists come together to discover and connect through music.",
    buttonText: "Get Started",
    image: "/image1.jpeg",
  },
  {
    title: "Connect with Artists.\nStay Inspired.",
    text: "Join millions of listeners and interact with your favorite artists. Discover exclusive content, connect through music, and support emerging talent.",
    buttonText: "Join Now",
    image: "/image2.jpeg",
  },
  {
    title: "Share Your Sound.\nBe Heard.",
    text: "Upload your own music, reach millions of listeners, and grow your audience. SoundCloud gives artists a platform to shine.",
    buttonText: "Upload Now",
    image: "/image3.jpeg",
  },
];

export default function Carousel({ onOpenAuth }) { // Accept onOpenAuth as a prop
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      {/* Top Right Buttons */}
      <div className="absolute top-5 right-10 flex space-x-4 z-10">
        <button
          className="bg-white text-black border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-200 transition"
          onClick={onOpenAuth} // Open modal on click
        >
          Sign In
        </button>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
          onClick={onOpenAuth} // Open modal on click
        >
          Create Account
        </button>
      </div>

      {/* Carousel Slides */}
      <div className="relative w-full h-[500px]">
        {carouselData.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.image}
              alt="carousel"
              width={1400}
              height={600}
              className="w-full h-[500px] object-cover rounded-lg"
            />
            
            {/* Text Overlay */}
            <div className="absolute top-10 left-10 w-[500px] max-w-md text-white">
              <h2 className="text-3xl md:text-5xl font-bold whitespace-pre-line mb-6">
                {item.title}
              </h2>
              <p className="mt-5 text-lg md:text-xl text-gray-200">{item.text}</p>
              
              <button className="mt-10 bg-orange-500 text-white px-5 py-3 rounded-lg hover:bg-orange-600 transition">
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
