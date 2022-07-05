import React, { useState } from 'react';

function Project(){

const [projects] = useState([
    {
        name:'Run Buddy',
        filename:'run-buddy',
    },
    {
        name:'Jacked in the Box',
        filename:'jackedinthebox'
    },
    {
        name:'Like It? Listen to It!',
        filename:'likeit-listentoit'
    },
    {
        name:'Coding Challenge',
        filename:'coding-challenge'
    },
    {
        name:'Password Generator',
        filename:'password-generator'
    },
    {
        name:'Taskinator',
        filename:'taskinator'
    }
]);    

return(
    <div className="flex-row">
          {projects.map((project) => (
      
          <a className="work-a" href="https://palakdevgan.github.io/run-buddy/" target="_blank">
             <img
             className="work1-img"
            src={require(`../../assets/projects/${project.filename}.jpg`)}
            alt={project.name}
             key={project.name}
           />
            <div className="text">
                <h1>{project.name}</h1>
              </div>
        </a>
  
        ))}
    </div>
);

}

export default Project;