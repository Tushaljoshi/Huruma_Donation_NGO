
import Footer from "../components/Footer";
import Trans_Navbar from "../components/Trans_Navbar";
import React, { useState } from 'react';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleReset = (e) => {
        e.preventDefault();
        if (!email) {
            setMessage('Please enter your email address.');
        } else {
            setMessage('');
            console.log('Reset link sent to:', email);
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
                        Reset Your Password...
                    </h2>
                </div>
            </div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
                <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-lg">
                    <h2 className="text-3xl font-extrabold text-[#1d1b4f] text-center mb-4">
                        Reset Password!
                    </h2>
                    <p className="text-center text-gray-500 text-sm mb-6">
                        Enter the email of your account to reset the password. Then you will receive a link to email to reset the password. If you have any issue about reset password <span className="text-orange-500 font-medium">contact us.</span>
                    </p>

                    {message && <p className="text-red-500 text-sm text-center mb-3">{message}</p>}

                    <form onSubmit={handleReset} className="space-y-5">
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <div className="flex justify-between text-sm text-gray-600">
                            <a href="/login" className="text-orange-500 hover:underline">
                                Login
                            </a>
                            <p>
                                Not a member?{' '}
                                <a href="/signup" className="text-orange-500 hover:underline">
                                    Register
                                </a>
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#1d1b4f] text-white py-3 rounded-full font-semibold hover:bg-orange-500 transition"
                        >
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default ResetPassword;