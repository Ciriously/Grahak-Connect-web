import React from "react";
import { useSelector } from "react-redux";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../../firebase.js";
import Copy from "../../../images/copy.svg";

const PluginCode = () => {
  const currentUserId = useSelector((state) => state.signup.currentUserId);
  const userData = useSelector((state) => state.signup.formData[currentUserId]);

  const handleComplete = () => {
    const db = getDatabase(app);
    set(ref(db, 'users/' + currentUserId), userData);
  };



  return (
    <div className='px-16'>
      <h1 className="text-[#170F49] text-2xl mb-2 font-poppins font-bold">Your plugin code</h1>
      <p className="text-[#6F6C90] font-poppins mb-4 text-sm">To install GK chatbot, you can place this code before the <span className="font-bold text-green-600">Body </span>tag on every page of your website.</p>
      <div className="relative max-w-2xl  mx-auto mt-2">
        <div className=" text-[#6F6C90] mb-4 p-0 rounded-md ">
          <div className="overflow-x-auto h-scr">
            <pre id="code" className="text-[#6F6C90] bg-white border-2 flex justify-between items-center p-4">
              <div>
                <code>
                  {"\n"}&lt;div class="flex justify-center items-center text-white
                  p-4"&gt;{"\n"}
                  {"  "}&lt;h1 class="text-2xl"&gt;Hello, Tailwind CSS!&lt;/h1&gt;
                  {"\n"}
                  &lt;/div&gt;
                </code>
                {"\n"}
                {"\n"}
              </div>
              <div className="w-12 absolute right-3 bottom-20 h-12 ">
                <img src={Copy} alt="Copy" />
              </div>
            </pre>

          </div>

          <div className="flex justify-between items-center mt-2">

          </div>
        </div>
        <div className="flex justify-end">
          <button onClick={handleComplete} className="bg-[#098F8A] text-white border-2 border-[#098F8A] rounded-3xl px-4 py-3 font-medium font-poppins ">
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PluginCode;
