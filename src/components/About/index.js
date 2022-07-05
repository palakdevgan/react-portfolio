import React from 'react';
import avatarImage from '../../assets/Photo.jpg';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={avatarImage} alt="Avatar" className="avatar" />
      <p>
      Currently I am a Full Stack Web Developer at Kinectrics NSS Inc. A proud holder of a first class MSc Degree in Computer Science from Lovely Professional University India and Certification in Full Stack Web Development from University of Toronto. I have been working in the computing sphere for the past 5 years.
      </p>
    </div>
  );
}