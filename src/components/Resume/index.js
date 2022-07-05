import React from 'react'
import MovingText from 'react-moving-text'

function Resume(){
    return (
        <div className="about">
        <h2>
        <MovingText
        type="typewriter"
        iteration={1}
          dataText={[
            'Resume'
          ]}>
        </MovingText>
        </h2>
       
          <h5>Download my <a href="./assets/resume/Palak Devgan Resume.pdf" target="_blank">resume</a></h5>
          <h5>Front-end Proficiencies</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <h5>Back-end Proficiencies</h5>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL,Sequelize</li>
            <li>MongoDB,Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
       
      </div>
        
      )
}

export default Resume;