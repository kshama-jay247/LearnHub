import { useUser } from "@clerk/clerk-react"
import { useState } from 'react'
import { UserBtn } from '../Components/userBtn'
import '../Pages Styling/profile.css'

export function Profile() {
    const { user } = useUser();

    // If user is not loaded yet, show loading
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className='flex flex-col gap-10 justify-center items-center p-5'>
                <div className='flex flex-row gap-10'>
                    <div className="flex flex-col gap-5 container acc">
                        <p clasName=''>Account Details</p>
                        <img className="profile_pic" src={user.imageUrl} alt="Profile" />
                        <div>
                            <div className="flex flex-row gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                                <span>Name</span>
                            </div>
                            <span className="profile-main-details" id='name'>{user.fullName}</span>
                        </div>
                        <div>
                            <div className="flex flex-row gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                <span>Username</span>
                            </div>
                            <span className="profile-main-details" id="username">{user.username || user.fullName}</span>
                        </div>
                        <div>
                            <div className="flex flex-row gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                                <span>E-mail</span>
                            </div>
                            <span className="profile-main-details" id="email">{user.emailAddresses[0]?.emailAddress}</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 container about'>
                        <div>
                            Streak count
                        </div>
                        <div>
                            Activity
                        </div>
                        <div>
                            About
                        </div>
                        <div className='w-full text-center'>    
                            <UserBtn />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}