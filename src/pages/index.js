import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/component/Header";
import Card from "@/component/Card";
import GameCarousel from "@/component/GameCarousel";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-cover bg-fixed  bg-center " style={{ backgroundImage: "url('/images/bg1.jpg')" }}>

      <Header />
      {/* Animated Gradient Overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 animate-gradientBlur opacity-70 "></div>
      <div className="fixed inset-0 z-0 bg-black opacity-50"></div>


      {/* Hero Section */}



      <div className="z-10 relative">
        <GameCarousel />
      </div>

      {/* Footer */}
      <footer className="relative z-20 bg-black bg-opacity-70 text-center py-6 text-gray-300">
        <p>&copy; 2025 GameZone. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <span className="cursor-pointer hover:text-blue-400">Privacy Policy</span>
          <span className="cursor-pointer hover:text-blue-400">Terms of Service</span>
        </div>
      </footer>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes gradientBlur {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientBlur {
          background-size: 200% 200%;
          animation: gradientBlur 8s ease infinite;
        }
      `}</style>
    </div>
  );
}
