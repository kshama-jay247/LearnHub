import { useUser } from "@clerk/clerk-react"
import { useState } from 'react'
import { UserBtn } from '../Components/userBtn'
import '../Pages Styling/profile.css'
import { SignOutButton } from "@clerk/clerk-react"

export function Profile() {
    const { user } = useUser();

    // If user is not loaded yet, show loading
    if (!user) {
        return <div>Loading...</div>;
    }

    const [aboutInput, setAboutInput] = useState("");
    const [aboutBlocks, setAboutBlocks] = useState([]);

    const handleEdit = () => {
        if (aboutInput.trim() !== "") {
            if (aboutBlocks.length === 0) {
                // If no blocks exist, add the first input
                setAboutBlocks([aboutInput]);
            } else {
                // Otherwise replace last block with new input
                setAboutBlocks([
                    ...aboutBlocks.slice(0, aboutBlocks.length - 1),
                    aboutInput,
                ]);
            }
            setAboutInput("");
        }
    };


    return (
        <>
            <div className='flex flex-col gap-10 justify-center items-center p-5'>
                <div className='flex flex-row gap-10'>
                    <div className="flex flex-col items-center gap-5 profile_container acc">
                        <p className='acc_details'>Account Details</p>
                        <img className="profile_pic" src={user.imageUrl} alt="Profile" />
                        <div>
                            <div className="flex flex-row gap-2 justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                                <span>Name</span>
                            </div>
                            <span className="profile-main-details" id='name'>{user.fullName}</span>
                        </div>
                        <div>
                            <div className="flex flex-row gap-2 justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                <span>Username</span>
                            </div>
                            <span className="profile-main-details" id="username">{user.username || user.fullName}</span>
                        </div>
                        <div>
                            <div className="flex flex-row gap-2 justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                                <span>E-mail</span>
                            </div>
                            <span className="profile-main-details" id="email">{user.emailAddresses[0]?.emailAddress}</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-5 profile_container about'>
                        <div className="about_heading flex flex-col gap-5">
                            About
                        </div>
                        <div className="flex flex-row gap-2 justify-around">
                            <input
                                type="text"
                                placeholder="Your About"
                                value={aboutInput}
                                onChange={(e) => setAboutInput(e.target.value)}
                                className="about_input w-full px-4 py-2 rounded-lg border border-gray-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-300 bg-gray-800 text-white placeholder-gray-400 transition duration-200 outline-none shadow-md"
                            />
                            <button className="about_btn flex justify-center items-center" onClick={handleEdit}>Edit</button>
                        </div>
                        <div className="w-full max-w-lg flex flex-col gap-2">
                            {aboutBlocks.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="about_block no-scrollbar"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className="signout_btn">
                            <SignOutButton></SignOutButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}