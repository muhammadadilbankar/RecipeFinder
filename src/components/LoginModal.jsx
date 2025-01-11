import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically handle the login logic (e.g., API call)
        // If login is successful:
        navigate('/home'); // Redirect to the home page
        onClose(); // Close the modal
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white p-8 rounded-md shadow-md w-full max-w-sm relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-red-600 text-sm hover:text-red-800 font-semibold"
                    style={{ padding: '4px 8px', fontSize: '0.875rem' }} // Smaller button size
                >
                    X
                </button>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Log in</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <button onClick={handleSubmit}
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Log in
                        </button>
                        <button
                            onClick={onClose}
                            className="ml-4 px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
