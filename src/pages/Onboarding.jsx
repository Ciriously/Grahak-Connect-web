import React from 'react';
import OnBoardingPages from '../components/Onboarding/OnBoardingPages';
import Header from '../shared/Header';

const Onboarding = () => {
    return (
        <div className="flex flex-col items-center overflow-auto">
            <div className="w-full flex pt-8 bg-[#B8E1E2] bg-opacity-40 justify-center">
                <Header />
            </div>
            <div className="w-full">
                <OnBoardingPages />
            </div>
        </div>
    );
}

export default Onboarding;