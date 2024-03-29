import React from 'react'
import Why1 from "../images/why1.svg"
import Why2 from "../images/why2.svg"

const Why = () => {
    return (
        <div className="bg-gray-50">
            <div className="py-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
                <div className="space-y-16">
                    <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
                        <div className="w-full md:w-2/4 space-y-4">
                            <h3 className="font-lato text-[#006A66] font-extrabold text-5xl">Why Grahak Konnect?</h3>
                            <p className='text-[#006A66] font-lato text-lg'>
                                Experience seamless communication, elevate customer experience, and drive growth with Grahak Konnect. Break language barriers effortlessly, personalize support with emotion recognition, and gain valuable insights for informed decision-making. Choose Grahak Konnect for innovative multilingual customer engagement and unlock your business's full potential.
                            </p>
                        </div>
                        <div className="mx-auto w-1/2 md:w-2/3 flex justify-between">
                            <img src={Why1} alt="why1" className="w-2/3" />
                            <img src={Why2} alt="why2" className="w-2/3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why
