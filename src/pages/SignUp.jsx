
import Footer from "../components/Footer";
import Trans_Navbar from "../components/Trans_Navbar";
import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        remember: false,
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            setError('Please fill all the fields');
        } else {
            setError('');
            console.log('Signup Submitted:', formData);
        }
    };

    return (
        <div className="w-full">
            <Trans_Navbar />
            <div
                className="relative h-[500px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                style={{
                    backgroundImage: 'url("/causes.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-[white]">
                        SignUp...
                    </h2>
                </div>
            </div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
                <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center text-[#1d1b4f] mb-4">
                        Create Your Account
                    </h2>

                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            value={formData.password}
                            onChange={handleChange}
                        />

                        <label className="flex items-center gap-2 text-gray-600 text-sm">
                            <input
                                type="checkbox"
                                name="remember"
                                className="accent-orange-500"
                                checked={formData.remember}
                                onChange={handleChange}
                            />
                            Keep Me Signup
                        </label>

                        <button
                            type="submit"
                            className="w-full bg-[#1d1b4f] text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition"
                        >
                            Signup Now
                        </button>
                    </form>

                    <p className="text-center text-sm mt-6 text-gray-600">
                        Already a registered user?{' '}
                        <a href="/login" className="text-orange-500 font-medium hover:underline">
                            Login!
                        </a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Signup;