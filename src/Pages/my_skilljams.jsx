import { useUser } from "@clerk/clerk-react"
import '../Pages Styling/my_skilljams.css'

export function My_SkillJams() {
    return (
        <>
            <div className="flex flex-row gap-9 justify-center">
                <div className="flex flex-col container p-2 items-center gap-5 no-scrollbar">
                    My Mentors
                    <div className="flex flex-row flex-wrap px-auto gap-4 h-[100%] max-w-[95%] no-scrollbar">
                        <div className="my_skilljams_card"></div>
                        <div className="my_skilljams_card"></div>
                        <div className="my_skilljams_card"></div>
                        <div className="my_skilljams_card"></div>
                        <div className="my_skilljams_card"></div>
                    </div>
                </div>
                <div className="flex flex-col container p-2 items-center gap-5 no-scrollbar">
                    My Mentees
                    <div className="flex flex-row flex-wrap px-auto gap-4 h-[100%] max-w-[95%] no-scrollbar">
                        <div className="my_skilljams_card"></div>
                        <div className="my_skilljams_card"></div>
                        <div className="my_skilljams_card"></div>
                        <div className="my_skilljams_card"></div>
                        <div className="my_skilljams_card"></div>
                    </div>
                </div>
            </div>
        </>
    )
}