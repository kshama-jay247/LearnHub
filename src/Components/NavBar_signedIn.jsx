import { Link } from 'react-router-dom'
import '../Components.css'
import { ThemeToggle } from './theme_toggle'
import { UserBtn } from './userBtn'

export function Navbar_SignedIn() {
    return (
        <>
            <div className="navbar flex items-center">
                <h1 className="heading" id='learnhub'>LearnHub</h1>
                <div className="navbar-right flex items-center">
                    <div className="navbar-right-left flex items-center">
                        <Link to="/">
                            <button>Home</button>
                        </Link>
                        <Link to="/profile">
                            <button>Profile</button>
                        </Link>
                        <Link to="/profile">
                            <button>Profile</button>
                        </Link>
                        <Link to="/problems">
                            <button>Problems</button>
                        </Link>
                    </div>
                    <div className="navbar-right-right flex items-center">
                        <UserBtn />
                    </div>
                </div>
            </div>
        </>
    )
}