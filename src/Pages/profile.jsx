import { useUser } from "@clerk/clerk-react"
import { useState } from 'react'
import { UserBtn } from '../Components/userBtn'

export function Profile() {
    return (
        <>
            <h1 className='text-3xl font-bold underline'>
                Profile Page
            </h1>
            <UserBtn />
        </>
    )
}