import { useUser } from "@clerk/clerk-react"
import '../Pages Styling/skills_community.css'

export function Skills_Community() {
    return (
        <>
            <div className="flex flex-row justify-around">
                <div className="flex flex-col sidebar comm_container items-center gap-3">
                    <button className="options">Explore communities</button>
                    <button className="options">My communities</button>
                    <button className="options">Suggested communities</button>
                </div>
                <div className='flex flex-col main comm_container gap-5'>
                    <p className="text-3xl bold">Find your learning tribe</p>
                    <div className="flex flex-row gap-4">
                        <button className="p-2 px-4 trends">Trending</button>
                        <button className="p-2 px-4 trends">Coding</button>
                        <button className="p-2 px-4 trends">Music</button>
                        <button className="p-2 px-4 trends">Python</button>
                        <button className="p-2 px-4 trends">AI</button>
                    </div>
                    <div className="flex flex-row flex-wrap gap-4 border-white comms_cont no-scrollbar">
                        <div className="comms"></div>
                        <div className="comms"></div>
                        <div className="comms"></div>
                        <div className="comms"></div>
                        <div className="comms"></div>
                        <div className="comms"></div>
                        <div className="comms"></div>
                        <div className="comms"></div>
                        <div className="comms"></div>
                        <div className="comms"></div>
                    </div>
                </div>
            </div>
        </>
    )
}