import { Navbar_SignedIn } from './Components/NavBar_signedIn'
import {Outlet} from 'react-router-dom'

export function Layout_SignedIn() {
    return(
        <>
            <Navbar_SignedIn/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}