import { Link } from 'react-router-dom'
import '../Components.css'

export function Navbar_SignedIn() {
    return (
        <>
            <div className="navbar flex items-center">
                <h1 className="heading" id='learnhub'>LearnHub</h1>
                <div className="navbar-right flex items-center">
                    <div className="navbar-right-left flex items-center">
                        <Link to="/">
                            <button className='p-4 mx-2'>Home</button>
                        </Link>
                        <Link to="/profile">
                            <button className='p-4 mx-2'>Profile</button>
                        </Link>
                        <Link to="/skills_community">
                            <button className='p-4 mx-2'>Community</button>
                        </Link>
                        <Link to="/my_skilljams">
                            <button className='p-4 mx-2'>My SkillJams</button>
                        </Link>
                    </div>
                    <div className="navbar-right-right flex items-center">
                    </div>
                </div>
            </div>
        </>
    )
}