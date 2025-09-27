import { UserButton } from "@clerk/clerk-react";

export function UserBtn() {
    return(
        <>
            <UserButton userProfileMode="navigation" />
        </>
    )
}