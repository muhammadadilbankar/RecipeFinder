export default function NewsLetter(){
    return(
        <div className="bg-pink-100 p-8 rounded-lg shadow-md mt-0 mb-0">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Let's Stay In Touch!</h2>
                <p className="text-gray-600 mb-6">
                    Join our newsletter, so that we reach out to you with our news and offers.
                </p>
            </div>
            <div className="flex justify-center">
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-60 px-4 py-2 border rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg">
                    Subscribe
                </button>
            </div>
        </div>  
    )
}