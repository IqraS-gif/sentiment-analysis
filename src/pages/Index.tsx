import React from "react";
import logo from "@/assets/logo.png"; // Example: relative import for an image

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="text-center text-white">
        <img src={logo} alt="Logo" className="mx-auto mb-6 w-32 h-32" />
        <h1 className="mb-4 text-5xl font-bold">Welcome to Your App</h1>
        <p className="text-2xl">
          Start building your amazing project here! Click login to continue.
        </p>
      </div>
    </div>
  );
};

export default Index;
