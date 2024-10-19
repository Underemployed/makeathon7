import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import BottomWarning from './BottomWarning';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    try {
      const response = await fetch(`${backendUrl}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const res_data = await response.json();
        console.log("response from server : ", res_data);

        storeTokenInLS(res_data.token);
        setFormData({
          email: '',
          password: '',
        });

        navigate("/"); // Redirect to home page after successful login
      }

      console.log('Login successful:', response);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="bg-gray-200 p-8 mt-60 sm:mt-100 lg:mt-8 rounded-lg shadow-lg w-full max-w-md"> {/* Changed from max-w-1lg to max-w-md */}
      <h2 className="text-4xl font-extrabold text-black mb-6 text-center">Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-black mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 bg-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-700 text-white py-2 rounded-lg font-bold hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-400"
        >
          Login
        </button>

        <BottomWarning to={"/register"} label={"Don't have an account?"} ButtonText={"Register"} />
      </form>
    </div>
  );
}

export default LoginForm;
