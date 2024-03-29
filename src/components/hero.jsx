import React from 'react'
import Heroimg from "../images/hero.svg"

const Hero = () => {
    return (
        <div><section className="pt-20 md:pt-40">
            <div className="container mx-auto px-6 lg:flex">
                <div className="text-center lg:text-left lg:py-44  lg:w-1/2">
                    <h1 className="text-4xl text-[#098F8A] lg:text-5xl xl:text-6xl font-bold  font-lato leading-none">
                        Break Language Barriers,
                        Build Stronger Connections
                        with customers
                    </h1>
                    <p className="text-xl lg:text-2xl mt-6 py-0 text-[#098F8A] font-lato">
                        Multilingual, efficient query management, data driven insights for growth
                    </p>
                    <p className="mt-8 font-bold font-lato  md:mt-12">
                        <button
                            type="button"
                            className="  py-4  rounded-xl px-12
    
                            bg-[#098F8A]
                            hover:bg-teal-600
                            
                            text-white"

                        >
                            Try now
                        </button>
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <img src={Heroimg} alt="hero" />
                </div>
            </div>
        </section>
        </div>
    )
}

export default Hero