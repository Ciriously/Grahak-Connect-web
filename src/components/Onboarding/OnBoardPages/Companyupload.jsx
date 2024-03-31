import React from 'react';
import upload from "../../../images/Onboarding/upload.svg";

const Companyupload = () => {
    return (
        <div className='px-16'>
            <h1 className="text-[#170F49] text-2xl mb-2 font-poppins font-bold">Product details</h1>
            <p className="text-[#6F6C90] font-poppins text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac metus id velit</p>
            <div className='mt-4 font-poppins'>
                <label className="block  text-[#170F49] text-md font-medium mb-2">Website Links </label>
                <textarea placeholder="Enter description" className="w-full border-2 border-[#EFF0F6] rounded-2xl h-16 px-4 py-4" />
            </div>
            <h1 className="text-[#170F49] text-md mb-6 mt-4 font-poppins font-medium">Company Logo</h1>

            <div className="flex justify-center items-center ">
                <div className="w-3/4 py-8 relative border-2 border-[#098F8A] border-dashed rounded-lg p-6" id="dropzone">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 z-50" />
                    <div className="text-center">
                        <img className="mx-auto h-12 w-12" src={upload} alt="" />
                        <h3 className="mt-2 text-sm font-medium text-gray-900">
                            <label htmlFor="file-upload" className="relative cursor-pointer">
                                <span> Choose a file or drag & drop it here</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                        </h3>
                        <button className="mt-1 bg-white border border-gray-300  text-[#54575C] px-4 py-2 rounded-lg ">
                            Browse
                        </button>
                    </div>
                    <img src="" className="mt-4 mx-auto max-h-40 hidden" id="preview" />
                </div>
            </div>
        </div>
    );
};

export default Companyupload;
