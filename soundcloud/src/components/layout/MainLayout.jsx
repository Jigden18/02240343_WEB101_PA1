"use client";
import { useState } from "react";
import Carousel from "../ui/Carousel";
import SearchBar from "../ui/SearchBar";
import TrendingTracks from "../ui/TrendingTracks";
import PromoSection from "../ui/PromoSection"; 
import Footer from "../ui/Footer";
import AuthModal from "../ui/AuthModal"; // Import the modal

export default function MainLayout() {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Pass down the modal toggle function */}
      <Carousel onOpenAuth={() => setAuthModalOpen(true)} />
      <SearchBar />
      <TrendingTracks />
      <PromoSection /> 
      <Footer onOpenAuth={() => setAuthModalOpen(true)} />

      {/* Authentication Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setAuthModalOpen(false)} />
    </div>
  );
}
