import React from "react";
import '../Pages Styling/lisTofskills.css'
import { Link } from "react-router-dom";

export function Listofskills() {
    const skills = [
        'Python',
        'JavaScript',
        'React',
        'Node.js',
        'CSS',
        'HTML',
        'SQL',
        'Git'
    ];

    return (
        <>
            <div className="maincontainer">
                <h2>List of Skills</h2>
                <div className="subcontainer">
                    {skills.map((skill, index) => (
                        <Link
                            key={index}
                            to={`/${skill}`}
                            className="skill"
                        >{skill}
                            {/* <button className="skill">
                {skill}
              </button> */}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}