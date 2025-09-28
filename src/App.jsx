import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Profile } from './Pages/profile'
import { LandingPage } from './Pages/Landing_page'
import { Skills_Community } from './Pages/skills_community';
import { My_SkillJams } from './Pages/my_skilljams';
import { Layout_SignedIn } from '../Layout_SignedIn';
import { Home } from './Pages/Home';
import { Listofskills } from './Pages/listOfSkills';
import { ChatWithBot } from './Pages/ChatWithBot';
import './App.css'

function App() {

  return (
    <>
     <header>
          <SignedIn>
            <Router>
              <Routes>
                <Route element={<Layout_SignedIn />}>
                  <Route path='/' element={<Home />} />
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/skills_community' element={< Skills_Community />} />
                  <Route path='/my_skilljams' element={<My_SkillJams />} />
                  <Route path='/listofskills' element={<Listofskills />} /> 
                  <Route path='/ChatWithBot' element={<ChatWithBot />} /> 
                </Route>
              </Routes>
            </Router>
          </SignedIn>
          <SignedOut>
            <Router>
              <Routes>
                <Route>
                  <Route path='/' element={<LandingPage />} />
                </Route>
              </Routes>
            </Router>
          </SignedOut>       
        </header>
    </>
  )
}

export default App