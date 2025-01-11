import React, { useState } from 'react';

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-xl font-semibold mb-4">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm">Email</label>
                        <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm">Password</label>
                        <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">Log In</button>
                </form>
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">X</button>
            </div>
        </div>
    );
};

export default LoginModal;
