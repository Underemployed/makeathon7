import { Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import Header from "../components/Header";

function Login() {
  return (
    <>
      <Header />
      <div className="flex flex-col h-full bg-gray-300">
        <div className="flex flex-col md:flex-row justify-center items-center h-full lg:h-screen">
          <div className="w-full md:w-1/2 flex items-center justify-center m-2"> {/* Image container */}
            <img 
              src="/LoginImage.png" // Change this to your actual login image path
              alt="Login Image"
              className="w-150 h-150 max-w-lg rounded-lg" // Increased width and height for larger image
            />
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8"> {/* Form container */}
            <LoginForm className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
