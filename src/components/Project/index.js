import React, { useState } from 'react';

function Project() {

    const [projects] = useState([
        {
            name: 'Run Buddy',
            filename: 'run-buddy',
            deployedApp: 'https://palakdevgan.github.io/run-buddy/',
            github: 'https://github.com/palakdevgan/run-buddy',
        },
        {
            name: 'Jacked in the Box',
            filename: 'jackedinthebox',
            deployedApp: 'https://immense-sea-90510.herokuapp.com/',
            github: 'https://github.com/project2bootcamp/JackedInTheBox',
        },
        {
            name: 'Like It? Listen to It!',
            filename: 'likeit-listentoit',
            deployedApp: 'https://superuser06.github.io/likeit-listentoit/',
            github: 'https://github.com/superuser06/likeit-listentoit',
        },
        {
            name: 'Coding Challenge',
            filename: 'coding-challenge',
            deployedApp: 'https://palakdevgan.github.io/CodingQuizChallenge/',
            github: 'https://github.com/palakdevgan/CodingQuizChallenge',
        },
        {
            name: 'Password Generator',
            filename: 'password-generator',
            deployedApp: 'https://palakdevgan.github.io/friendly-parakeet/',
            github: 'https://github.com/palakdevgan/friendly-parakeet',
        },
        {
            name: 'Taskinator',
            filename: 'taskinator',
            deployedApp: 'https://palakdevgan.github.io/taskinator/',
            github: 'https://github.com/palakdevgan/taskinator',
        }
    ]);

    return (
        <div className="flex-row">
            {projects.map((project) => (
                <div className="work-a" key={project.name}>
                    <img
                        className="work1-img"
                        src={require(`../../assets/projects/${project.filename}.jpg`)}
                        alt={project.name}
                    />
                    <div className="text">
                        <a href={project.deployedApp} target="_blank" rel="noopener noreferrer"><h3>{project.name}</h3></a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer"><i className="bi bi-github" style={{ fontSize: "1.5rem", padding: "10px" }}></i></a>
                    </div>
                </div>
            ))}
        </div>
    );

}

export default Project;