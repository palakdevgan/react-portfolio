import React from 'react';
import avatarImage from '../../assets/Photo.jpg';

export default function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <img src={avatarImage} alt="Avatar" className="avatar" />
      <p>
      I am a Full Stack Developer from Toronto, Ontario, Canada. I am a passionate🥇, creative🎨 and perceptive🔭 engineer 
      with a hands-on approach to problem-solving and an unending thirst for knowledge🎓. 
      Anything and everything that can be classified as technology💻 fascinates me. I am working as a Software Engineer and contributing to frontend and backend for building web apps.
      I currently live in Toronto 🌉 and have recently completed Certification in Full Stack Web Development📈 from University of Toronto.
      I follow a number of Tech Blogs🖱️. Other than that, I love solving puzzles🧩 and listening to music🎶.
      </p>
    </div>
  );
}