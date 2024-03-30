import React from 'react'
import Logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
import Header from '../../shared/Header'
import Auth from '../../images/Auth/Auth.svg'


const Signup = () => {
    return (
        <div><div className="flex h-screen">
            <div className="hidden lg:flex items-center justify-center flex-1 bg-[#B8E1E2]  bg-opacity-40  text-black"><div className='flex justify-center item'>
                <img src={Auth} alt="auth" className="hidden lg:block" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
            </div></div>
            <div className="hidden absolute left-8 lg:flex  flex-1   text-black">
                <div className="max-w-2xl mt-4">
                    <Header />
                </div>

            </div>
            {/* Right Pane */}
            <div className="w-full bg-gray-100 lg:w-1/2 font-poppins flex items-center justify-center">
                <div className="max-w-md w-full px-[-4rem]">
                    <h1 className="text-4xl font-Regular mb-6 text-black text-left">
                        Create an account
                    </h1>
                    <h1 className="text-lg font-Regular mb-6 text-black text-left">
                        Already have an account? <u>Log in</u>
                    </h1>

                    <form action="#" method="POST" className="space-y-8">
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <label
                                    htmlFor="firstname"
                                    className="block text-sm font-medium text-[#666666]"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                />
                            </div>
                            <div className="w-1/2">
                                <label
                                    htmlFor="lastname"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                            />
                        </div>
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <label
                                    htmlFor="firstname"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                />
                            </div>
                            <div className="w-1/2">
                                <label
                                    htmlFor="lastname"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Confirm your password
                                </label>
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                />
                            </div>
                        </div>
                        <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>

                        <div className="flex items-center">
                            <input type="checkbox" id="showPassword" name="showPassword" className="mr-2" />
                            <label htmlFor="showPassword" className="text-sm font-medium text-gray-700">Show Password</label>
                        </div>
                        <div className='flex'>
                            <button
                                type="submit"
                                className="w-2/4 bg-[#098F8A] text-white p-4 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                            >
                                Create an account
                            </button>
                        </div>
                        <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
                            <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
                                {/* Google button */}
                            </div>
                            <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
                                {/* GitHub button */}
                            </div>
                        </div>
                    </form>


                </div>
            </div>
        </div>
        </div>
    )
}

export default Signup