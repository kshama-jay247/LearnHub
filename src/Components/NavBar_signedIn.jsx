import { Link } from 'react-router-dom'
import '../Components.css'

export function Navbar_SignedIn() {
    return (
        <>
            <div className="navbar flex items-center">
                <p className='learnhub'>LearnHub</p>
                <div className="navbar-right flex items-center">
                    <div className="navbar-right-left flex items-center">
                            <Link to="/">
                                <button className='nav_btn_text px-4 py-1 mx-2'>Home</button>
                            </Link>
                            <Link to="/profile">
                                <button className='nav_btn_text px-4 py-1 mx-2'>Profile</button>
                            </Link>
                            <Link to="/skills_community">
                                <button className='nav_btn_text px-4 py-1 mx-2'>Community</button>
                            </Link>
                            <Link to="/my_skilljams">
                                <button className='nav_btn_text px-4 py-1 mx-2'>My SkillJams</button>
                            </Link>
                    </div>
                    <div className="navbar-right-right flex items-center">
                    </div>
                </div>
            </div>
        </>
    )
}