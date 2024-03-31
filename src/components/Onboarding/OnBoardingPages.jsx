import React, { useState } from 'react'
import Stepper from './Stepper'
import Header from '../../shared/Header'
import Contactdetails from './OnBoardPages/Contactdetails'
import Companydetails from './OnBoardPages/Companydetails'
import Companytype from './OnBoardPages/Companytype'
import Companyupload from './OnBoardPages/Companyupload'

const OnBoardingPages = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        if (step < 4) {
            setStep(step + 1);
        }
    };

    const handlePrevious = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <div className="flex items-center bg-[#B8E1E2] bg-opacity-40 justify-center h-screen">
            <div className="container w-2/5 bg-white border shadow-lg rounded-[59px]  mx-auto">

                <header className="p-4">
                    <Stepper />
                </header>
                <main className="flex-grow p-4">
                    {step === 1 && <Contactdetails />}
                    {step === 2 && <Companydetails />}
                    {step === 3 && <Companytype />}
                    {step === 4 && <Companyupload />}

                </main>
                <footer className="flex font-poppins justify-between mx-14 p-8">
                    <button onClick={handlePrevious} className="bg-white text-[#098F8A] border-2  border-[#098F8A] rounded-3xl px-4 py-2">Previous step</button>
                    <button onClick={handleNext} className="bg-[#098F8A] text-white border-2  border-[#098F8A] rounded-3xl px-4 py-2">Next step</button>
                </footer>
            </div>
        </div>
    )
}

export default OnBoardingPages