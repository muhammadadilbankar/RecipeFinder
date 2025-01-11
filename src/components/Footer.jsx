import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 mt-16">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand and Description */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-1 mb-4">
                            <span className="text-2xl font-bold">Perfect</span>
                            <span className="text-2xl font-bold text-red-500">Recipe</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                            The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Quick links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Recipes</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links 2 */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Quick links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Share Recipe</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Terms Of Use</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Privacy & Cookies</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section with Copyright and Social Links */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600 text-sm">
                            © 2023 RecipeLogo. All Right Reserved
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.86 6.726c.596.157 1.107.666 1.14 1.403v7.742c-.033.737-.544 1.246-1.14 1.403l-7.795 2.03c-.678.157-1.31.158-1.989 0L5.28 17.274C4.684 17.117 4 16.45 4 15.871V8.13c0-.58.684-1.246 1.28-1.403l7.796-2.03c.678-.157 1.31-.158 1.989 0z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16.5 6H13V4.5C13 3.97 13.21 3.5 14.1 3.5H16.5V0H13.5C10.5 0 9 1.57 9 4.5V6H7V9.5H9V20H13V9.5H15.9L16.5 6Z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 15.5l-2-2-2 2-2-2-2 2-2-2 2-2-2-2 2-2 2 2 2-2 2 2 2-2 2 2-2 2 2 2-2 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;