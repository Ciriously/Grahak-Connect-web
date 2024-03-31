import React from 'react'
import Stepper from './Stepper'
import Header from '../../shared/Header'


const OnBoardingPages = () => {
    return (
        <div className="flex items-center bg-[#B8E1E2] bg-opacity-40 justify-center h-screen">
            <div className="container w-3/5 bg-white border shadow-lg rounded-[59px]  mx-auto">

                <header className="p-4">
                    <Stepper />
                </header>
                <main className="flex-grow p-4">

                </main>
                <footer className="flex font-poppins justify-between mx-20 p-8">
                    <button className="bg-white text-[#098F8A] border-2  border-[#098F8A] rounded-3xl px-4 py-2">Previous step</button>
                    <button className="bg-[#098F8A] text-white border-2  border-[#098F8A] rounded-3xl px-4 py-2">Next step</button>

                </footer>
            </div>
        </div>
    )
}

export default OnBoardingPages
