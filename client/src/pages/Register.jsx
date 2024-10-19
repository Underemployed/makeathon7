import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm";
import Header from "../components/Header";

function Register() {
  return (
    <>
      <Header />
      <div className="flex flex-col h-screen bg-gray-300">
        <div className="flex flex-col md:flex-row justify-center items-center h-full">
          <div className="w-full md:w-1/2 flex items-center justify-center p-4">
            {/* Image container */}
            <img 
              src="/LoginImage.png" // Change this to your actual login image path
              alt="Login Image"
              className="w-150 h-150 max-w-lg rounded-lg" // Increased width and height for larger image
            />
          </div>
          
          <div className="w-full md:w-1/2 flex items-center justify-center p-4">
            {/* Form container */}
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-bold text-black mb-6 text-center">Create an Account</h2>
              <RegisterForm /> 
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
