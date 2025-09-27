import { dark } from "@clerk/themes";
import { UserButton } from "@clerk/clerk-react";

export function UserBtn() {
    return(
        <>
            <UserButton appearance={{ baseTheme: dark }} userProfileMode="navigation"/>
        </>
    )
}