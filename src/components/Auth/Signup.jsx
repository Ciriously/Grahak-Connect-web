import React, { useState } from 'react';
import Header from '../../shared/Header';
import Auth from '../../images/Auth/Auth.svg';
import Google from '../../images/Auth/Google.png';
import Apple from '../../images/Auth/Apple.png';
import { signup } from '../../redux/signupActions';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword ,fetchSignInMethodsForEmail} from "firebase/auth";

const Signup = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const signupData = useSelector(state => state.signup.formData);
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { firstName, lastName, email, password, confirmPassword };
    
        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
    
        const auth = getAuth();
        const signInMethods = await fetchSignInMethodsForEmail(auth, email);
    
        // If the user has already registered with this email
        if (signInMethods.length > 0) {
            alert("This email is already registered. Please use another email.");
            return;
        }
    
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);
                navigate('/Onboarding');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                if (errorCode === 'auth/email-already-in-use') {
                    alert('This email is already in use. Please use a different email.');
                }
            });
    };

    return (
        <div>
            <div className="flex h-screen">
                <div className="hidden lg:flex items-center justify-center flex-1 bg-[#B8E1E2]  bg-opacity-40  text-black">
                    <div className='flex justify-center item'>
                        <img src={Auth} alt="auth" className="hidden lg:block h-[45rem]" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
                    </div>
                </div>
                <div className="hidden absolute left-8 lg:flex  flex-1   text-black">
                    <div className="max-w-2xl mt-8">
                        <Header />
                    </div>
                </div>
                {/* Right Pane */}
                <div className="w-full bg-white lg:w-1/2 font-poppins flex items-center justify-center">
                    <div className="max-w-md w-full px-[-4rem]">
                        <h1 className="text-4xl font-Regular mb-6 text-black text-left">
                            Create an account
                        </h1>
                        <h1 className="text-lg font-Regular mb-6 text-black text-left">
                            Already have an account? <u>Log in</u>
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label htmlFor="firstname" className="block text-sm font-medium text-[#666666]">First Name</label>
                                    <input type="text" id="firstname" name="firstname" value={firstName} onChange={e => setFirstName(e.target.value)} className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" required />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="lastname" className="block text-sm font-medium text-[#666666]">Last Name</label>
                                    <input type="text" id="lastname" name="lastname" value={lastName} onChange={e => setLastName(e.target.value)} className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[#666666]">Email</label>
                                <input type="text" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" required />
                            </div>
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label htmlFor="password" className="block text-sm font-medium text-[#666666]">Password</label>
                                    <input type={showPassword ? "text" : "password"} id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" required />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#666666]">Confirm your password</label>
                                    <input type={showPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" required />
                                </div>
                            </div>
                            <p className='text-[#666666] py-1 text-sm'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                            <div className="flex items-center">
                                <input type="checkbox" id="showPassword" name="showPassword" className="mr-2" onChange={e => setShowPassword(e.target.checked)} />
                                <label htmlFor="showPassword" className="text-sm font-medium text-gray-700">Show Password</label>
                            </div>
                            <div className='flex justify-center'>
                                <button
                                    type="submit"
                                    className="w-2/4 bg-[#098F8A] text-white p-4 rounded-3xl hover:bg-gray-800 focus:outline-none focus:bg-black  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                                >
                                    Create an account
                                </button>
                            </div>
                            <div className="flex items-center justify-center my-4">
                                <hr className="flex-grow border-t border-gray-300" />
                                <span className="px-2 text-gray-500">Or</span>
                                <hr className="flex-grow border-t border-gray-300" />
                            </div>
                            <div className="flex space-x-4">
                                <button
                                    type="button"
                                    className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-3xl border-blue-500 border-2 hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
                                >
                                    <img src={Google} alt="Google logo" className="w-4" />
                                    Google
                                </button>
                                <button
                                    type="button"
                                    className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-3xl border-blue-500 border-2 hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
                                >
                                    <img src={Apple} alt="Apple logo" className="w-4" />
                                    Apple Id
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
